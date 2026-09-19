var overviewLink = document.getElementById('overviewLink');
var heroSection = document.getElementById('hero');

var worksLink = document.getElementById('worksLink');
var workSection = document.getElementById('work');

var aboutSection = document.getElementById('about');

if (overviewLink && aboutSection) {
    window.addEventListener('scroll', function () {
        var aboutRect = aboutSection.getBoundingClientRect();

        if (
            aboutRect.top <= window.innerHeight / 2 &&
            aboutRect.bottom >= window.innerHeight / 2
        ) {
            overviewLink.classList.add('active');
        } else {
            overviewLink.classList.remove('active');
        }
    });
}

if (worksLink && workSection) {
    window.addEventListener('scroll', function() {
        var workRect = workSection.getBoundingClientRect();
        if (workRect.top <= window.innerHeight / 2 && workRect.bottom >= window.innerHeight / 2) {
            worksLink.classList.add('active');
        } else {
            worksLink.classList.remove('active');
        }
    });
}

var darazCard = document.querySelector('.workCard--daraz');
var ecomartCard = document.querySelector('.workCard--ecomart');

if (darazCard) {
    darazCard.addEventListener('mouseenter', function() {
        document.body.classList.add('theme-daraz');
    });
    darazCard.addEventListener('mouseleave', function() {
        document.body.classList.remove('theme-daraz');
    });
}

if (ecomartCard) {
    ecomartCard.addEventListener('mouseenter', function() {
        document.body.classList.add('theme-ecomart');
    });
    ecomartCard.addEventListener('mouseleave', function() {
        document.body.classList.remove('theme-ecomart');
    });
}

var darkModeToggle = document.getElementById('darkModeToggle');

(function () {
    if (sessionStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode');
    }
})();

if (darkModeToggle) {
    var darkModeToggleIcon = darkModeToggle.querySelector('img');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggleIcon.src = darkModeToggleIcon.dataset.light;
        darkModeToggleIcon.alt = 'Switch to light mode';
    }

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        var isDark = document.body.classList.contains('dark-mode');

        if (isDark) {
            sessionStorage.setItem('darkMode', 'on');
        } else {
            sessionStorage.removeItem('darkMode');
        }

        darkModeToggleIcon.src = isDark ? darkModeToggleIcon.dataset.light : darkModeToggleIcon.dataset.dark;
        darkModeToggleIcon.alt = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    });
}

var scrollButtons = document.querySelectorAll('.scrollDown');

for (var i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener('click', function() {
        var targetSection = document.querySelector(this.getAttribute('data-target'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
