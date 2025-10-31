// Array to store job postings
let jobPostings = [];

// Function to render job postings
function renderJobPostings(filter = 'all') {
    const jobListings = document.getElementById('job-listings');
    const allJobListings = document.getElementById('all-job-listings');
    jobListings.innerHTML = ''; // Clear current listings
    allJobListings.innerHTML = ''; // Clear all job listings

    jobPostings.forEach((job, index) => {
        if (filter === 'all' || job.type === filter) {
            const jobPost = document.createElement('div');
            jobPost.className = 'job-post';
            jobPost.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.description}</p>
                ${job.link ? `<p><a href="${job.link}" target="_blank">Job Link</a></p>` : ''}
                <div class="comments" id="comments-${index}">
                    <h4>Comments:</h4>
                    ${job.comments.map(comment => `
                        <div class="comment">
                            <strong>${comment.name}:</strong> ${comment.text}
                            ${comment.resume ? `<p>Resume: ${comment.resume.name}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
                <form class="comment-form" data-job-index="${index}">
                    <label for="comment-name-${index}">Your Name:</label>
                    <input type="text" id="comment-name-${index}" required>
                    <label for="comment-text-${index}">Add your information:</label>
                    <textarea id="comment-text-${index}" required></textarea>
                    <label for="comment-resume-${index}">Upload Resume (optional):</label>
                    <input type="file" id="comment-resume-${index}" accept=".pdf,.doc,.docx">
                    <button type="submit">Post Comment</button>
                </form>
            `;
            jobListings.appendChild(jobPost);
        }
    });

    // Add event listeners to comment forms
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const jobIndex = form.getAttribute('data-job-index');
            const name = form.querySelector('input[type="text"]').value;
            const text = form.querySelector('textarea').value;
            const resume = form.querySelector('input[type="file"]').files[0];

            // Add the comment to the job posting
            jobPostings[jobIndex].comments.push({ name, text, resume });

            // Re-render job postings to show the new comment
            renderJobPostings(filter);
        });
    });
}

// Function to filter job postings
function filterPosts(filter) {
    renderJobPostings(filter);
}

// Handle form submission for posting a job
document.getElementById('post-job-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const jobTitle = document.getElementById('job-title').value;
    const jobDescription = document.getElementById('job-description').value;
    const jobLink = document.getElementById('job-link').value;
    const jobType = document.getElementById('job-type').value;
    const jobDeadline = document.getElementById('job-deadline').value;

    // Create a new job posting element
    const jobPosting = document.createElement('div');
    jobPosting.classList.add('job-posting');
    jobPosting.setAttribute('data-deadline', jobDeadline); // Store the deadline as a data attribute
    jobPosting.innerHTML = `
        <h3>${jobTitle}</h3>
        <p><strong>Type:</strong> ${jobType}</p>
        <p><strong>Description:</strong> ${jobDescription}</p>
        ${jobLink ? `<p><a href="${jobLink}" target="_blank">Apply Here</a></p>` : ''}
        <p><strong>Deadline:</strong> ${jobDeadline}</p>
    `;

    // Add the new job posting to the job listings section
    const jobListings = document.getElementById('job-listings');
    jobListings.appendChild(jobPosting);

    // Clear the form fields
    document.getElementById('post-job-form').reset();

    // Optionally, display a success message
    alert('Job posted successfully!');
});

// Function to check and remove expired job postings
function removeExpiredJobs() {
    const jobListings = document.getElementById('job-listings');
    const jobPostings = jobListings.querySelectorAll('.job-posting');
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    jobPostings.forEach((jobPosting) => {
        const deadline = jobPosting.getAttribute('data-deadline');
        if (deadline && deadline < currentDate) {
            jobPosting.remove(); // Remove the job posting if the deadline has passed
        }
    });
}

// Check for expired jobs every minute
setInterval(removeExpiredJobs, 60000); // 60000ms = 1 minute

// Initial render of all job postings
renderJobPostings();