const languageSwitcher = (() => {
    const existing = document.querySelector('.floating-language-switcher');
    if (existing) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'floating-language-switcher';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', 'Language switcher');
    wrapper.innerHTML = `
        <span class="lang-switcher-label">Language</span>
        <div class="lang-switcher-options">
            <button type="button" class="lang-option is-active" data-lang="en" aria-pressed="true">EN</button>
            <button type="button" class="lang-option" data-lang="id" aria-pressed="false">ID</button>
        </div>
    `;

    document.body.appendChild(wrapper);

    const updateLanguage = (lang) => {
        const label = wrapper.querySelector('.lang-switcher-label');
        document.documentElement.lang = lang;
        document.body.dataset.lang = lang;

        wrapper.querySelectorAll('.lang-option').forEach((button) => {
            const active = button.dataset.lang === lang;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
        });

        if (label) {
            label.textContent = lang === 'id' ? 'Bahasa' : 'Language';
        }
    };

    wrapper.addEventListener('click', (event) => {
        const button = event.target.closest('.lang-option');
        if (!button) return;
        updateLanguage(button.dataset.lang);
    });

    updateLanguage('en');
})();
