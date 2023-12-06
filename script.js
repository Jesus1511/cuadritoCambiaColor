const header = document.querySelector("header").style;
const button1 = document.querySelector(".uno");
const button2 = document.querySelector(".dos");
let index = 1;

const imageMapping = {
  desktop: ["desktop-image-hero-1.jpg", "desktop-image-hero-2.jpg", "desktop-image-hero-3.jpg"],
  mobile: ["mobile-image-hero-1.jpg", "mobile-image-hero-2.jpg", "mobile-image-hero-3.jpg"],
};

const changer = () => {
  const imageType = window.innerWidth > 900 ? "desktop" : "mobile";
  header.backgroundImage = `url(images/${imageMapping[imageType][index - 1]})`;
};

button1.addEventListener("click", () => {
  if (index < 3) {
    index++;
    changer();
  }
});

button2.addEventListener("click", () => {
  if (index > 1) {
    index--;
    changer();
  }
});

changer();

let Menu = document.querySelector(".nav_buttom")
let x = document.querySelector(".nav_xbutton")
let lista = document.querySelector("ul")
let on_off = false

const openn = ()=>{
 lista.style.display = "flex"
}

const close = ()=>{
  lista.style.display = "none"
 }

Menu.addEventListener("click", ()=>{
  openn()
})

x.addEventListener("click",()=>{
  close()
})

const verifier = ()=>{
  if(on_off == true){
    openn()
  }
  else if(on_off == false){
    close()
  }
}

window.addEventListener("resize", ()=>{
  on_off = window.innerWidth > 900
  verifier()
});

on_off = window.innerWidth > 900
  verifier()

