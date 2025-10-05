let menuBar=document.getElementById("menuBar")
let menu=document.getElementById("menu")
let cancle=document.getElementById("cancle")
menuBar.addEventListener("click",(e)=>{
  menu.style.display='block'
cancle.style.display="block"
menuBar.style.display="none"
})

cancle.addEventListener("click",()=>{
    menu.style.display='none'
cancle.style.display="none"
menuBar.style.display="block"
})

let about=document.getElementById("about")
let aboutMe=document.getElementById("aboutMe")
let foot=document.getElementById("foot")
console.log(foot)
about.addEventListener("click",()=>{
  aboutMe.classList.add("displayShow")
 foot.classList.add("displayShow")
})
let skill=document.getElementById("skill")
let skillsMe=document.getElementById("skillsMe")
skill.addEventListener("click",()=>{
skillsMe.classList.add("displayShow")
 foot.classList.add("displayShow")
})
let pro=document.getElementById("pro")
let projects=document.getElementById("projects")
pro.addEventListener("click",()=>{
projects.classList.add("displayShow")
 foot.classList.add("displayShow")
})
let communicate=document.getElementById("communicate")
let contact=document.getElementById("contact")
communicate.addEventListener("click",()=>{
contact.classList.add("displayShow")
 foot.classList.add("displayShow")
})