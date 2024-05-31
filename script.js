// Selected Elements

const navHeader = document.getElementById('logo');
const navbar = document.getElementById('navbar');


// Skeleton Screen

setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
}, 2000);




// Function 
function checkScroll(){
    let scrollPosition = window.scrollY;


    // Add/remove scroll class based on position
    if(scrollPosition > 20){
        navbar.classList.add('scrolled');
    }else {
        navbar.classList.remove('scrolled');

    }

    // Calculate new font size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03);

    // Clamping font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min( 3, newSize);

    navHeader.style.fontSize = newSize + "rem";
}

// Event Listener 

window.addEventListener('scroll', checkScroll);


// Dark Mode----------------------------------------------------
const themeSwitcher = document.getElementById('theme-switcher');

function updateThemeIcon(isDarkMode) {
  themeSwitcher.children[0].classList.replace(isDarkMode ? 'fa-sun' : 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun');
}

// Determine if dark mode is preferred
function prefersDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Set the theme based on the preference
function setThemeBasedOnPreference() {
  const isDarkMode = prefersDarkMode();
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  updateThemeIcon(isDarkMode);
}

// Switch Theme manually
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme === 'dark');
}

// Event Listener
themeSwitcher.addEventListener('click', switchTheme);

// Initialize Theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme === 'dark');
  } else {
      setThemeBasedOnPreference();
  }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeBasedOnPreference);

// Initialize theme when the script loads
initializeTheme();