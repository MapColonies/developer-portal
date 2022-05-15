window.addEventListener('load', function() {  
    const resizeBtn = document.createElement('div');
    const sidebar = document.querySelector('.sidebar');
    const rootElem = document.querySelector(':root');

    resizeBtn.id='resizeHandler';
    document.querySelector('main').appendChild(resizeBtn);

    resizeBtn.addEventListener("mousedown", (event) => {
      document.addEventListener("mousemove", resize, false);
      document.addEventListener("mouseup", () => {
        rootElem.style.setProperty('--sidebar-transition-duration', 'var(--duration-fast)');
        document.removeEventListener("mousemove", resize, false);
      }, false);
    });

    function resize(e) {
      const size = e.x;
      e.preventDefault();
      e.stopPropagation();
      if(size >= 300){
        rootElem.style.setProperty('--sidebar-transition-duration', 0);
        rootElem.style.setProperty('--sidebar-width', `${size}px`);
      }
    }
});