// THEME SWITCH
let elem = document.querySelector('html');
elem.style.colorScheme = (localStorage.getItem('theme'))

function changeTheme() {
  if(elem.style.colorScheme === 'light') {
    localStorage.setItem('theme', 'dark');
      elem.style.colorScheme = localStorage.getItem('theme');
  } 
  else if(elem.style.colorScheme === 'dark') {
    localStorage.setItem('theme', 'light');
      elem.style.colorScheme = localStorage.getItem('theme');
  }
  else if(window.matchMedia("(prefers-color-scheme: light)").matches) {
    localStorage.setItem('theme', 'dark');
      elem.style.colorScheme = localStorage.getItem('theme');
  }
  else {
    localStorage.setItem('theme', 'light');
      elem.style.colorScheme = localStorage.getItem('theme');
  }
  console.log(elem.style.colorScheme)
}