

window.addEventListener("scroll",function(){
var headers = this.document.querySelector(".header ");
headers.classList.toggle("sticky",window.scrollY > 0)
})
let button = document.querySelector(".btn");
button.addEventListener("click",()=>{
    alert("your coffee is getting ready")
}); 


gsap.from('.logo',{opacity: 0, duration: 1, delay: 2, y: 10})
gsap.from('.navbar .nav-item',{opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2})

gsap.from('.tital',{opacity: 0, duration: 1, delay: 1.6, y: 30})
gsap.from('.discription',{opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.btn',{opacity: 0, duration: 1, delay: 2.1, y: 30})
gsap.from('.image',{opacity: 0, duration: 1, delay: 2.6, y: 30})
