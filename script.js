const sidenav = document.getElementById("sidenav");

document.getElementById("menu").addEventListener("click",()=>{
    sidenav.style.transform = "translateX(0%)"
})
document.querySelector("#sidenav>h3").addEventListener("click",()=>{
    sidenav.style.transform = "translateX(100%)"
})

// typing js
var typed = new Typed('.typing', {
    strings: [
        'WE ARE',
        'NOUS SOMMES',
        'MI SMO'
    ],
    typeSpeed: 50,
    loop: true,
});

// gsap.to(".right>.gif>img",{
//     duration:1,
//     stagger: 0.5,
//     x:"-200",
//     repeat:-1
// })

var swiper = new Swiper(".gif,.container", {
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true
});