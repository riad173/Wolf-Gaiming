const dropdowns = document.querySelectorAll('.games-opt');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', (event) => {
        event.stopPropagation();
        closeAllDropdowns();
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            selected.innerText = option.innerText;
            closeAllDropdowns();
        });
    });
});

// Close all dropdowns if a click occurs outside of the dropdowns
document.addEventListener('click', (event) => {
    if (!event.target.closest('.games-opt')) {
        closeAllDropdowns();
    }
});

// Function to close all dropdowns
function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
    });
}


