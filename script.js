(function(){

    const hamburger = document.getElementById('hamburger');
    const primaryNav = document.getElementById('primary-nav');

    hamburger.addEventListener('click', ()=> {
        primaryNav.classList.toggle('open');

        if(primaryNav.classList.contains('open')) {
            hamburger.setAttribute('aria-expanded', true);
            hamburger.style.background = 'url(close.svg)';
        } else {
            hamburger.setAttribute('aria-expanded', false);
            hamburger.style.background = 'url(menu.svg)';
        }

    })

})();