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
}

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null, // use the viewport
    rootMargin: '0px 0px -80% 0px', // trigger when header is in top 20% of screen
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.toc-entry[href="#${id}"]`);
      
      if (entry.isIntersecting) {
        // Remove active class from all and add to current
        document.querySelectorAll('.toc-entry').forEach(link => link.classList.remove('active'));
        navLink?.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Track all headers that have IDs (common in Jekyll's kramdown)
  document.querySelectorAll('h1[id], h2[id], h3[id]').forEach(header => {
    observer.observe(header);
  });
});