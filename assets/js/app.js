// hamburger

// // Look for .hamburger
// var hamburger = document.querySelector(".hamburger");
// // On click
// hamburger.addEventListener("click", function() {
//   // Toggle class "is-active"
//   hamburger.classList.toggle("is-active");
//   // Do something else, like open/close menu
// });

$(document).ready(function(){
  $('.slider-wrap').slick({
    appendDots:$(".slider__dots"),
    dots: true,
  //   customPaging : function(slider, i) {
  //     return '<button class="pager__item"> '+' </button>';
  // },
    appendArrows: $(".slider__btns"),
    prevArrow: '<button type="button" class="slick-prev slider-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrow"></button>',
    fade: true,
    cssEase: 'linear'
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoYW1idXJnZXJcblxuLy8gLy8gTG9vayBmb3IgLmhhbWJ1cmdlclxuLy8gdmFyIGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuLy8gLy8gT24gY2xpY2tcbi8vIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4vLyAgIC8vIFRvZ2dsZSBjbGFzcyBcImlzLWFjdGl2ZVwiXG4vLyAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xuLy8gICAvLyBEbyBzb21ldGhpbmcgZWxzZSwgbGlrZSBvcGVuL2Nsb3NlIG1lbnVcbi8vIH0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAkKCcuc2xpZGVyLXdyYXAnKS5zbGljayh7XG4gICAgYXBwZW5kRG90czokKFwiLnNsaWRlcl9fZG90c1wiKSxcbiAgICBkb3RzOiB0cnVlLFxuICAvLyAgIGN1c3RvbVBhZ2luZyA6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAvLyAgICAgcmV0dXJuICc8YnV0dG9uIGNsYXNzPVwicGFnZXJfX2l0ZW1cIj4gJysnIDwvYnV0dG9uPic7XG4gIC8vIH0sXG4gICAgYXBwZW5kQXJyb3dzOiAkKFwiLnNsaWRlcl9fYnRuc1wiKSxcbiAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgc2xpZGVyLWFycm93XCI+PC9idXR0b24+JyxcbiAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpZGVyLWFycm93XCI+PC9idXR0b24+JyxcbiAgICBmYWRlOiB0cnVlLFxuICAgIGNzc0Vhc2U6ICdsaW5lYXInXG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
