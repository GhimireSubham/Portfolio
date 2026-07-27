// ===================================
// OVERVIEW NAV STATE
//
// "Overview" only reads as active once the hero has scrolled
// past and the About section is just coming into view.
// ===================================

(function(){

    const overviewLink = document.getElementById('overviewLink');
    const hero = document.querySelector('.pageHeader');

    if(!overviewLink || !hero) return;

    function updateOverviewState(){

        const heroBottom = hero.getBoundingClientRect().bottom;

        if(heroBottom <= window.innerHeight * 0.5){
            overviewLink.classList.add('active');
        } else {
            overviewLink.classList.remove('active');
        }

    }

    window.addEventListener('scroll', updateOverviewState, {passive:true});
    window.addEventListener('resize', updateOverviewState);
    updateOverviewState();

})();

// ===================================
// SELECTED WORK — HOVER THEMING
//
// Hovering a project card swaps the site's --color-bg /
// --color-surface / --color-text / --color-accent tokens
// (defined in style.css) to that project's 60/30/10 palette,
// re-theming the whole page for as long as the card is hovered.
// ===================================

(function(){

    const body = document.body;
    const daraz = document.querySelector('.workCard--daraz');
    const ecomart = document.querySelector('.workCard--ecomart');

    if(!daraz || !ecomart) return;

    daraz.addEventListener('mouseenter', () => body.classList.add('theme-daraz'));
    daraz.addEventListener('mouseleave', () => body.classList.remove('theme-daraz'));

    ecomart.addEventListener('mouseenter', () => body.classList.add('theme-ecomart'));
    ecomart.addEventListener('mouseleave', () => body.classList.remove('theme-ecomart'));

})();