

const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});







// Some random colors
const colors = ["#e73c7e", "#2AA7FF", "#1B1B1B", "#cb62ee", "#516acc"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});





var social_open = false;

window.addEventListener('load', () => {
  const menu = document.querySelector('.social-button');

  menu.addEventListener('click', () => {
    const icon = document.querySelector('#social-icon');
    
    if (social_open) {
      social_open = false;

      menu.title = menu.title.replace(/hide/, "expand");
      menu.classList.remove('social-button-open');
      

      var menu_point = document.querySelectorAll(".social-point");
      for (let i = 0; i < menu_point.length; i++) {
        menu_point[i].classList.remove('social-point-open');
        setTimeout(function () {
          menu_point[i].hidden = true;
        }, 800);
      }
    } else {
      social_open = true;

      menu.title = menu.title.replace(/expand/, "hide");
      menu.classList.add('social-button-open');

      var menu_point = document.querySelectorAll(".social-point");
      for (let i = 0; i < menu_point.length; i++) {
        menu_point[i].hidden = false;
        setTimeout(function () {
          menu_point[i].classList.add('social-point-open');
        }, 200);
      }
    }
  });
});








  // $(document).ready(function () {
  //     $(".custom-carousel").owlCarousel({
  //         autoWidth: true,
  //         loop: true
  //     });

  //     $(".custom-carousel .item").click(function () {
  //         $(".custom-carousel .item").not($(this)).removeClass("active");
  //         $(this).toggleClass("active");
  //     });
  // });

  // $(document).ready(function(){
  //   $('.carousel').slick({
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     dots: false, // Устанавливаем dots в false, чтобы скрыть индикаторы страниц
  //     arrows: false, // Устанавливаем arrows в false, чтобы скрыть кнопки "Previous" и "Next"
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         }
  //       }
  //     ]
  //   });
  // });