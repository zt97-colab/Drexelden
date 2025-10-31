// --- Constants for Location Filters ---
const allStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const allCounties = [
  "Los Angeles County", "Orange County", "Wake County", "Travis County", "Multnomah County",
  "Baltimore County", "King County", "New York County", "Fairfax County", "Clark County",
  "Miami-Dade County", "Honolulu County", "Fulton County", "Cook County"
];

const allCities = [
  "Los Angeles", "Orlando", "Charlotte", "Austin", "Portland", "Baltimore", "Seattle",
  "New York City", "Richmond", "Las Vegas", "Miami", "Honolulu", "Atlanta", "Chicago"
];

let currentTab = 'state';
let selected = null;
let scholarships = [];

const options = {
  state: allStates,
  county: allCounties,
  city: allCities
};

window.onload = function () {
  fetchScholarships();

  document.querySelectorAll('.filter-section').forEach(section => {
    section.style.display = 'none';
    const icon = section.previousElementSibling?.querySelector('.toggle-icon');
    if (icon) icon.innerText = '+';
  });

  const initialPlaceholder = document.getElementById('placeholder-text');
  if (initialPlaceholder) {
    initialPlaceholder.innerText = `Search by ${capitalize(currentTab)} Name`;
  }

  document.querySelectorAll('#academic-section input[type="checkbox"], #type-section input[type="checkbox"]')
    .forEach(checkbox => {
      checkbox.addEventListener('change', filterScholarships);
    });
};

function fetchScholarships() {
  fetch('/static/data/scholarships.json')
    .then(response => response.json())
    .then(data => {
      scholarships = data;
      renderScholarships();
    })
    .catch(error => {
      console.error('Error loading scholarships:', error);
      const resultsSection = document.querySelector('.results');
      if (resultsSection) {
        resultsSection.innerHTML = `<p style="color: red;">Error loading scholarships. ${error.message}</p>`;
      }
    });
}

function renderScholarships(filteredList = scholarships) {
  const resultsSection = document.querySelector('.results');
  if (!resultsSection) return;

  resultsSection.innerHTML = '';

  if (filteredList.length === 0) {
    resultsSection.innerHTML = '<p style="text-align: center;">No scholarships match your filters.</p>';
    return;
  }

  filteredList.forEach((s, index) => {
    const name = s.name || 'Unnamed Scholarship';
    const amount = s.amount || 'Varies';
    const deadline = s.deadline || 'No Deadline';
    const description = s.description || 'No Description Available.';
    const academic = (s.academic_levels || s.academic_stage || []).join(', ') || 'Not Specified';
    const typesHtml = Array.isArray(s.type) ? s.type.map(t => `<div class="tag">${t}</div>`).join('') : '<div class="tag">N/A</div>';
    const link = s.link || '#';

    const card = document.createElement('div');
    card.className = 'scholarship-card';
    card.innerHTML = `
      <div class="card-banner">
        <span>Deadline: ${deadline}</span>
        <button class="save-btn" title="Save scholarship">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="card-prize">
        <p>Amount: <strong>${amount}</strong></p>
      </div>
      <div class="card-body">
        <h3>${name}</h3>
        <p class="description">${description}</p>
        <div class="card-tags">${typesHtml}</div>
        <p><strong>Academic Levels:</strong> ${academic}</p>
        <hr>
        <p><strong>Apply:</strong> <a href="${link}" target="_blank">CLICK HERE</a></p>
      </div>
    `;

    const saveBtn = card.querySelector('.save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', (event) => {
        const icon = event.currentTarget.querySelector('i');
        if (icon) {
          if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = 'red';
            event.currentTarget.title = 'Unsave scholarship';
          } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
            event.currentTarget.title = 'Save scholarship';
          }
        }
      });
    }

    resultsSection.appendChild(card);
  });
}

function switchTab(button, tabName) {
  currentTab = tabName;
  document.querySelectorAll('.location-tabs .tab').forEach(t => t.classList.remove('active'));
  button.classList.add('active');
  const placeholder = `Search by ${capitalize(tabName)} Name`;
  document.getElementById('placeholder-text').innerText = placeholder;
  document.getElementById('searchInput').placeholder = placeholder;
  selected = null;
  document.getElementById("selectedBadge").innerHTML = "";
  updateSelectedCount();
  renderOptions();
  filterScholarships();
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderOptions() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("optionList");
  if (!list) return;
  list.innerHTML = "";

  const currentOptions = options[currentTab] || [];
  const filtered = currentOptions.filter(item =>
    item.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    list.innerHTML = '<li style="text-align: center; color: gray;">No matches found.</li>';
  } else {
    filtered.forEach(item => {
      const li = document.createElement("li");
      const isSelected = selected === item;

      li.style.cursor = 'pointer';
      li.style.padding = '8px 12px';
      li.style.borderBottom = '1px solid #eee';
      li.style.color = selected && !isSelected ? '#aaa' : '#333';
      li.style.pointerEvents = selected && !isSelected ? 'none' : 'auto';
      li.style.backgroundColor = isSelected ? '#eaf6ff' : 'transparent';

      const iconClass = isSelected ? 'fas fa-check-circle' : 'fas fa-map-marker-alt';
      const iconColor = isSelected ? '#007bff' : '#6c757d';

      li.innerHTML = `<i class="${iconClass}" style="margin-right: 10px; color: ${iconColor};"></i> ${item}`;

      li.onclick = () => {
        selected = isSelected ? null : item;
        renderOptions();
        updateSelectedDisplay();
      };

      list.appendChild(li);
    });
  }
  updateSelectedDisplay();
}

function updateSelectedDisplay() {
  const badge = document.getElementById("selectedBadge");
  if (!badge) return;
  badge.innerHTML = "";
  if (selected) {
    const badgeSpan = document.createElement('span');
    badgeSpan.className = 'selected-location-badge';
    badgeSpan.textContent = selected + ' ';
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '×';
    removeButton.className = 'remove-selection-btn';
    removeButton.title = 'Clear selection';
    removeButton.onclick = (event) => {
      event.stopPropagation();
      clearSelection(true);
    };
    badgeSpan.appendChild(removeButton);
    badge.appendChild(badgeSpan);
  }
  updateSelectedCount();
}

function updateSelectedCount() {
  const countElement = document.getElementById("selectedCount");
  if (!countElement) return;
  const countNum = selected ? 1 : 0;
  countElement.innerText = `${countNum}/1 ${capitalize(currentTab)}s chosen`;
}

function clearSelection(fromModal = false) {
  selected = null;
  if (fromModal) {
    renderOptions();
    updateSelectedDisplay();
  } else {
    const placeholderTextElement = document.getElementById('placeholder-text');
    if (placeholderTextElement) {
      placeholderTextElement.innerText = `Search by ${capitalize(currentTab)} Name`;
    }
  }
  filterScholarships();
}

function applySelection() {
  filterScholarships();
  closeModal();
  const placeholderTextElement = document.getElementById('placeholder-text');
  if (placeholderTextElement) {
    placeholderTextElement.innerText = selected ? selected : `Search by ${capitalize(currentTab)} Name`;
  }
}

function filterScholarships() {
  const academicChecks = [...document.querySelectorAll('#academic-section input[type="checkbox"]:checked')].map(cb => cb.value);
  const typeChecks = [...document.querySelectorAll('#type-section input[type="checkbox"]:checked')].map(cb => cb.value);

  const filtered = scholarships.filter(s => {
    if (!s || typeof s !== 'object') return false;

    let matchLocation = true;
    if (selected) {
      const key = currentTab;
      matchLocation = s[key] && typeof s[key] === 'string' && s[key].toLowerCase() === selected.toLowerCase();
    }

    let matchAcademic = true;
    const academicList = (s.academic_levels || s.academic_stage || []);
    if (academicChecks.length > 0) {
      matchAcademic = academicList.some(level => academicChecks.includes(level));
    }

    let matchType = true;
    if (typeChecks.length > 0) {
      matchType = Array.isArray(s.type) && s.type.some(t => typeChecks.includes(t));
    }

    return matchLocation && matchAcademic && matchType;
  });

  renderScholarships(filtered);
}

function toggleSection(id) {
  const section = document.getElementById(id);
  const icon = section.previousElementSibling.querySelector('.toggle-icon');

  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
    icon.innerText = '−';
  } else {
    section.style.display = 'none';
    icon.innerText = '+';
  }
}


function openModal() {
  document.getElementById("modal").style.display = "flex";
  renderOptions();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
