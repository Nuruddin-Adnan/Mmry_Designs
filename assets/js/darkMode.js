// ########################  Dark mode   ########################
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('dark-mode'); 

const darkModeToggle = document.querySelectorAll('.dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark-mode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-mode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('dark-mode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
};

// When someone clicks the button
[...darkModeToggle].forEach(darkModeToggleSingle=>{
  darkModeToggleSingle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('dark-mode'); 
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });
})