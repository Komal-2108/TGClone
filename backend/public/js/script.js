document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  
  const videoPlaceholder = document.getElementById('video-placeholder');
  const videoIframe = document.getElementById('video-iframe');
  const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; 

  if (videoPlaceholder && videoIframe) {
    videoPlaceholder.addEventListener('click', () => {
      videoPlaceholder.style.display = 'none';
      videoIframe.src = videoUrl;
      videoIframe.style.display = 'block';
    });
  }

 
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active');
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }
});