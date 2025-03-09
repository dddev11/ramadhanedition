// Get all product items and modals
const productItems = document.querySelectorAll('.product-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open modal when product item is clicked
productItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Prevent triggering modal if clicking the button
        if (e.target.tagName === 'BUTTON' || e.target.closest('a')) return;

        const modalId = item.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});