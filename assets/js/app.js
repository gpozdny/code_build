// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
    });

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

// menu

var link = document.querySelector('.hamburger');
var items = document.querySelectorAll('.menu__item');
var menu = document.querySelector('.menu');

link.addEventListener('click', function (e) {
    e.preventDefault();

    menu.classList.toggle('animated');

    if (menu.classList.contains('animated')) {
        [].slice.call(items).forEach(function (item) {
            item.firstElementChild.classList.remove('bounce-in');
        });
    }
}, true);

document.querySelector('.menu__left')
    .addEventListener('transitionend', showItems);


function showItems() {
    var counter = 0;

    function recursion() {
        items[counter].firstElementChild.classList.add('bounce-in');
        counter++;

        if (counter < items.length) {
            setTimeout(recursion, 200);
        }
    }

    recursion();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb29rIGZvciAuaGFtYnVyZ2VyXG52YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG4vLyBPbiBjbGlja1xuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBjbGFzcyBcImlzLWFjdGl2ZVwiXG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICAvLyBEbyBzb21ldGhpbmcgZWxzZSwgbGlrZSBvcGVuL2Nsb3NlIG1lbnVcbiAgICB9KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgJCgnLnNsaWRlci13cmFwJykuc2xpY2soe1xuICAgIGFwcGVuZERvdHM6JChcIi5zbGlkZXJfX2RvdHNcIiksXG4gICAgZG90czogdHJ1ZSxcbiAgLy8gICBjdXN0b21QYWdpbmcgOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgLy8gICAgIHJldHVybiAnPGJ1dHRvbiBjbGFzcz1cInBhZ2VyX19pdGVtXCI+ICcrJyA8L2J1dHRvbj4nO1xuICAvLyB9LFxuICAgIGFwcGVuZEFycm93czogJChcIi5zbGlkZXJfX2J0bnNcIiksXG4gICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IHNsaWRlci1hcnJvd1wiPjwvYnV0dG9uPicsXG4gICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWRlci1hcnJvd1wiPjwvYnV0dG9uPicsXG4gICAgZmFkZTogdHJ1ZSxcbiAgICBjc3NFYXNlOiAnbGluZWFyJ1xuICB9KTtcbn0pO1xuXG4vLyBtZW51XG5cbnZhciBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xudmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKTtcbnZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcblxubGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlZCcpO1xuXG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbmltYXRlZCcpKSB7XG4gICAgICAgIFtdLnNsaWNlLmNhbGwoaXRlbXMpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYm91bmNlLWluJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0sIHRydWUpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGVmdCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzaG93SXRlbXMpO1xuXG5cbmZ1bmN0aW9uIHNob3dJdGVtcygpIHtcbiAgICB2YXIgY291bnRlciA9IDA7XG5cbiAgICBmdW5jdGlvbiByZWN1cnNpb24oKSB7XG4gICAgICAgIGl0ZW1zW2NvdW50ZXJdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JvdW5jZS1pbicpO1xuICAgICAgICBjb3VudGVyKys7XG5cbiAgICAgICAgaWYgKGNvdW50ZXIgPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVjdXJzaW9uLCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjdXJzaW9uKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
