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

if (darkModeToggle) {
    var darkModeToggleIcon = darkModeToggle.querySelector('img');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        var isDark = document.body.classList.contains('dark-mode');

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

const music = new Audio("/assets/music/PaperAirplane.mp3");

music.loop = true;
music.volume = 0.15;

function playAudio() {
    music.play().then(() => {
        localStorage.setItem("musicPlaying", "true");
    }).catch(err => {
        // Handle browser autoplay policy restrictions
        console.warn("Autoplay blocked. Waiting for user interaction.", err);
    });
}

if (localStorage.getItem("musicPlaying") === "true") {
    playAudio();
} else {
    document.addEventListener("click", playAudio, { once: true });
}

// Save playback time right before the page unloads
window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", music.currentTime);
});

// On load, restore the time position
const savedTime = localStorage.getItem("musicTime");
if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}

if (localStorage.getItem("musicPlaying") === "true") {
    playAudio();
} else {
    document.addEventListener("click", playAudio, { once: true });
}