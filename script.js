function mostrarMenu() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  var expanded = dropdown.classList.contains("show");
  document.querySelector(".dropbtn").setAttribute("aria-expanded", expanded);
  dropdown.setAttribute("aria-hidden", !expanded);
}

window.onclick = function(event) {
  if (!event.target.closest('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              document.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
              openDropdown.setAttribute("aria-hidden", "true");
          }
      }
  }
}
