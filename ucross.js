document.addEventListener("DOMContentLoaded", function () {
    const termSelect = document.getElementById("termSelect");
    const priceFilter = document.getElementById("priceFilter");
    const priceValue = document.getElementById("priceValue");
    const priceDisplay = document.getElementById("priceDisplay");
    const apartmentCards = document.querySelectorAll(".apartment-card");

    function updateDisplay() {
        const selectedTerm = termSelect.value;
        const maxPrice = parseInt(priceFilter.value);

        priceValue.textContent = maxPrice;
        priceDisplay.textContent = maxPrice;

        apartmentCards.forEach(card => {
            const terms = card.getAttribute("data-terms").split(",");
            const price = parseInt(card.getAttribute("data-price"));
            const status = card.querySelector(".availability-status");
            const applyBtn = card.querySelector(".apply-button");

            // Check term availability and price
            const isAvailable = selectedTerm === "all" || terms.includes(selectedTerm);
            const withinPrice = price <= maxPrice;

            // Show/hide by price
            card.style.display = withinPrice ? "block" : "none";

            // Availability logic
            if (!isAvailable && selectedTerm !== "all") {
                status.textContent = "Waitlist";
                status.style.color = "red";
                applyBtn.disabled = true;
                applyBtn.style.backgroundColor = "#ccc";
            } else {
                status.textContent = "Available";
                status.style.color = "green";
                applyBtn.disabled = false;
                applyBtn.style.backgroundColor = "";
            }
        });
    }

    termSelect.addEventListener("change", updateDisplay);
    priceFilter.addEventListener("input", updateDisplay);

    updateDisplay(); // Initial
});
