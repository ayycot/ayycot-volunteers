
// Mobile nav toggle
document.querySelector(".menu-toggle").addEventListener("click", ()=>{document.querySelector("nav").classList.toggle("active");});

// Scroll animations
const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add('visible');}
});
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});

// Gallery slider
const slide=document.querySelector(".gallery-slide");
const images=document.querySelectorAll(".gallery-slide img");
let index=0;
const nextSlide=()=>{index=(index+1)%images.length;slide.style.transform=`translateX(${-index*100}%)`;}
const prevSlide=()=>{index=(index-1+images.length)%images.length;slide.style.transform=`translateX(${-index*100}%)`;}
document.querySelector(".next").addEventListener("click",nextSlide);
document.querySelector(".prev").addEventListener("click",prevSlide);
setInterval(nextSlide,4000);

// WhatsApp form
//document.getElementById("whatsappForm").addEventListener("submit",function(e){
//e.preventDefault();
//let name=document.getElementById("name").value;
//let message=document.getElementById("message").value;
//et url=`https://wa.me/+256786011542?text=Hello, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
//window.open(url,"_blank");
//});

function sendToWhatsapp(){
    let name= document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/+256786011542" + number + "?text="
    + "Name : " +name+ "%0a"
    + "Email : " +email+ "%0a"
    + "Message : " +message+ "%0a%0a";

    window.open(url, '_blank').focus();
}