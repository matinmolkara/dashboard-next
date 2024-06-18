//      $('.nav-item .dropdown-container a').each(function() {
//   if ($(this).hasClass('active')) {
//     $(this).parents(".dropdown-container").css('display', 'block');
//   }
// })
document
  .querySelectorAll(".nav-item .dropdown-container a")
  .forEach(function (element) {
    if (element.classList.contains("active")) {
      let parentDropdown = element.closest(".dropdown-container");
      if (parentDropdown) {
        parentDropdown.style.display = "block";
      }
    }
  });
