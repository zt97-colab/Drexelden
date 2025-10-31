// ------------------------------

// Load books from local storage or use default books if none are saved
const savedBooks = JSON.parse(localStorage.getItem("books"));
const books = savedBooks || [
    { title: "Computer Networking", author: "James Kurose", price: 85, available: true },
    { title: "Web Development Essentials", author: "Jane Smith", price: 40, available: false },
    { title: "Data Structures & Algorithms", author: "Alice Brown", price: 60, available: true }
];

let showAvailableOnly = false;           // Toggle for available‑only filter
let cart = [];                           // Array holding selected book objects


// Render every book card (initial load / reset)
function displayBooks () {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear list first

    books.forEach(book => {
        if (showAvailableOnly && !book.available) return; // Respect availability filter

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>By ${book.author}</p>
            <p><strong>Price: $${book.price}</strong></p>
            <p class="${book.available ? "available" : "unavailable"}">
                ${book.available ? "Available" : "Out of Stock"}
            </p>
            <button data-book='${JSON.stringify(book)}' onclick="addToCart(this)">Add to Cart</button>
        `;

        bookList.appendChild(bookCard);
    });
}

// Filter books based on search query (title/author) and availability toggle
function filterBooks () {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(book => {
        const matchesSearch      = book.title.toLowerCase().includes(query) ||
                                   book.author.toLowerCase().includes(query);
        const matchesAvailability = !showAvailableOnly || book.available;

        if (matchesSearch && matchesAvailability) {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <h2>${book.title}</h2>
                <p>By ${book.author}</p>
                <p><strong>Price: $${book.price}</strong></p>
                <p class="${book.available ? "available" : "unavailable"}">
                    ${book.available ? "Available" : "Out of Stock"}
                </p>
                <button data-book='${JSON.stringify(book)}' onclick="addToCart(this)">Add to Cart</button>
            `;
            bookList.appendChild(bookCard);
        }
    });
}

// Toggle "available only" filter and re‑render list
function toggleAvailable () {
    showAvailableOnly = !showAvailableOnly;
    filterBooks();
}

/* ----------------------------------------------------------------------------
 *  CART HANDLING
 * --------------------------------------------------------------------------*/

// Add selected book (passed via button dataset) to cart
function addToCart (button) {
    const book = JSON.parse(button.getAttribute("data-book"));
    cart.push(book);
    displayCart();
    alert(`${book.title} has been added to your cart!`);
}

// Render cart sidebar contents + running total
function displayCart () {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;
    cart.forEach((book, index) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <span class="book-title">${book.title}</span>
            <span class="book-price">$${book.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);
        total += book.price;
    });

    const totalElement = document.createElement("p");
    totalElement.id = "cartTotal";
    totalElement.innerHTML = `Total: $${total}`;
    cartList.appendChild(totalElement);
}

// Remove cart item by array index
function removeFromCart (index) {
    cart.splice(index, 1);
    displayCart();
}

// Slide‑out cart open/close helpers
function openCart () {
    document.getElementById("cartPopup").classList.add("open");
}

function closeCart () {
    document.getElementById("cartPopup").classList.remove("open");
}

/* ----------------------------------------------------------------------------
 *  CHECKOUT MODAL
 * --------------------------------------------------------------------------*/

// Show checkout modal with order summary & total
function openCheckout () {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out.");
        return;
    }

    const checkoutPopup  = document.getElementById("checkoutPopup");
    const checkoutItems  = document.getElementById("checkoutItems");
    const checkoutTotal  = document.getElementById("checkoutTotal");

    // Populate list
    checkoutItems.innerHTML = "";
    let total = 0;
    cart.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} - $${book.price}`;
        checkoutItems.appendChild(li);
        total += book.price;
    });

    checkoutTotal.textContent = `Total: $${total}`;

    checkoutPopup.classList.add("open");
}

// Hide checkout modal
function closeCheckout () {
    document.getElementById("checkoutPopup").classList.remove("open");
}

// Simulate purchase confirmation & clear state
function confirmPurchase () {
    const name       = document.getElementById("name").value.trim();
    const address    = document.getElementById("address").value.trim();
    const creditCard = document.getElementById("creditCard").value.trim();

    if (!name || !address || !creditCard) {
        alert("Please complete all checkout fields.");
        return;
    }

    // Basic confirmation (could hook to real backend/payment gateway)
    alert(`Thank you for your purchase, ${name}! A confirmation email will be sent shortly.`);

    // Reset cart & UI
    cart = [];
    displayCart();
    closeCheckout();
    closeCart();

    // Optionally, clear form inputs
    document.getElementById("checkoutForm").reset();
}

/* ----------------------------------------------------------------------------
 *  ADD NEW BOOK FORM
 * --------------------------------------------------------------------------*/

function addBook () {
    const title        = document.getElementById("titleInput").value;
    const author       = document.getElementById("authorInput").value;
    const price        = parseFloat(document.getElementById("priceInput").value);
    const availability = document.getElementById("availabilityInput").value === "true";

    // Basic validation
    if (!title || !author || isNaN(price)) {
        alert("Please provide valid book details.");
        return;
    }

    const newBook = { title, author, price, available: availability };
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));

    // Clear form fields
    document.getElementById("addBookForm").reset();

    filterBooks();
    alert(`${newBook.title} has been added successfully!`);
}

/* ----------------------------------------------------------------------------
 *  INITIALISE PAGE
 * --------------------------------------------------------------------------*/

displayBooks();
