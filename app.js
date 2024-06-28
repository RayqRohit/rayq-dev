let dayNight = document.querySelector(".dayNight")
let banner = document.querySelector(".banner")

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night")
})


let typingEffect = new Typed("#text" , {
    strings : ["Rayq.","Web Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer"],
    loop : true,
    typeSpeed : 50,
    backSpeed : 50,
    backDelay : 1000
})