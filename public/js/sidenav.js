
// const $ac = $('.is-active');
// const $menu = $('.side-navbar');

// $(document).mouseup(e => {
//     if (!$menu.is(e.target) &&
//         $menu.has(e.target).length === 0) {
//         $menu.removeClass('is-active');

//     }


// });

// $('.toggle-hamburger').on('click', () => {
//     $menu.toggleClass('is-active');
// });
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".side-navbar");
  const toggleHamburger = document.querySelector(".toggle-hamburger");

  document.addEventListener("mouseup", function (e) {
    if (!menu.contains(e.target)) {
      menu.classList.remove("is-active");
    }
  });

  toggleHamburger.addEventListener("click", function () {
    menu.classList.toggle("is-active");
  });
});
