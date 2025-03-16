function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function changeLanguage(lang) {
    if (lang === 'ru') {
        window.location.href = window.location.pathname.replace('/en/', '/ru/');
    } else {
        window.location.href = window.location.pathname.replace('/ru/', '/en/');
    }
}
