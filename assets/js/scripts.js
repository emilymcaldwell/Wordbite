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
  const headings = document.querySelectorAll('.toc-h2, .toc-h3, .toc-h4');
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