const themeSelector = document.querySelector('#theme-select');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'BYUI-logo-white.png'; 
    } else {
        body.classList.remove('dark');
        logo.src = 'BYUI-logo-blue.png';
    }
}

themeSelector.addEventListener('change', changeTheme);
