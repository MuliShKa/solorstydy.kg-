//  var social_open = false
//  window.addEventListener('load', () => {
//    const menu = document.querySelector('.social-button');

//    menu.addEventListener('click', () => {
//      const icon = document.querySelector('#social-icon');
//      if(social_open == true) {
//       social_open = false;

//         menu.title = menu.title.replace(/hide/,"expand")
//         menu.classList.remove('social-button-open')
//         icon.classList.remove('fa-solid fa-plane fa-rotate-90')
//         icon.classList.add('fa-solid fa-plane fa-rotate-270')

//      var menu_point = document.querySelectorAll(".social-point");
//        for (let i = 0; i < menu_point.length; i++) {
//            menu_point[i].classList.remove('social-point-open');
//          setTimeout(function() {
//            menu_point[i].hidden = true;
//          }, 800)
//        }
//      } else {
//        social_open = true;

//        menu.title = menu.title.replace(/expand/,"hide")
//        menu.classList.add('social-button-open');
//        icon.classList.remove('fa-solid fa-plane fa-rotate-270')
//        icon.classList.add('fa-solid fa-plane fa-rotate-90')

//        var menu_point = document.querySelectorAll(".social-point");
//        for (let i = 0; i < menu_point.length; i++) {
//          menu_point[i].hidden = false;
//          setTimeout(function() {
//            menu_point[i].classList.add('social-point-open');
//          }, 200)
//        }
//      }
//    });
//  })





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



// Some random colors
const colors = [" #e3e3e3", " #e3e3e3", " rgba(255,66,224,1)", " #e3e3e3", "#516acc"];

const numBalls = 100;
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


