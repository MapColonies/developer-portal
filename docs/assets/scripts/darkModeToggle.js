let title = "dark";
function toggle() {
  if (title === "dark") {
    title = "light";
  } else {
    title = "dark";
  }
  const themes = Docsify.dom.findAll('[rel="stylesheet"]');
  themes.forEach(function(theme) {
    if(theme.title){
      theme.disabled = theme.title !== title;
    }
  });

  document.body.setAttribute("theme", title);

}
window.addEventListener('load', function() {
  toggle();
});
