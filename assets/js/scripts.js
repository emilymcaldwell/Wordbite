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

function initScrollSpy() {
  const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
  const tocLinks = document.querySelectorAll('.toc-entry');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(
            `.toc-entry[href="#${entry.target.id}"]`
          );
          activeLink?.classList.add('active');
        }
      });
    },
    { rootMargin: '-20% 0% -70% 0%' }
  );
  
  headings.forEach((heading) => observer.observe(heading));
}