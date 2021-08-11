const spaghettiTimeline = gsap.timeline({
    repeat:-1
})

const spaghettis = document.querySelectorAll("g#spaghetti1, g#spaghetti2, g#spaghetti3, g#spaghetti4, g#spaghetti5 ")

spaghettiTimeline
    .set(spaghettis, { y : 3 })
    .to(spaghettis, { y : 150, duration: 0.25, delay:1, stagger: 0.25})
    .to(spaghettis, { y: 10, duration: 0.7, delay:1, stagger: 0.25  })
  
// eyebrows    
const eyebrowsTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    })
    
    const eyebrows = document.querySelector("g#eyebrows")
    
    eyebrowsTimeline
        .set(eyebrows, { y : 0 })
        .to(eyebrows, { y : - 50, duration: 0.35})
        .to(eyebrows, { y: 0, duration: 0.35 })

const beakTimeline = gsap.timeline({
    repeat:-1
})

// beak
const beak = document.querySelector("g#beak")

beakTimeline
.set(beak, { y : 0, transformOrigin:"50% 50%" })
.to(beak, { rotation: 20,  duration: 0.25})
.to(beak, { rotation: 0, duration: 0.5, delay: 0.1 })


// mans-eye
const eyeTimeline = gsap.timeline({
    repeat:-1,
    repeatDelay: 4
})

const ball = document.querySelector("path#ball")

eyeTimeline 
    .set(ball, {scale:1})
    .to(ball, {scaleY:0.4, scaleX: 1, transformOrigin:"50% bottom", duration: 2})
    .to(ball, {scale:1})

//leaf
const leafTimeline = gsap.timeline({
    repeat:-1,
})

const leaf = document.querySelector("g#leaf")

leafTimeline
    .set(leaf, {rotation:0})
    .to(leaf, {rotation: 2, duration: 0.5})
    .to(leaf, {rotation: 0, duration: 0.5})


const eyetreeTimeline = gsap.timeline({
    repeat:-1,
    repeatDelay: 2
})

const eyestree = document.querySelectorAll("path#eyetree1, path#eyetree2")

eyetreeTimeline
    .set(eyestree, {x:0})
    .to(eyestree, {x: -25, duration: 0.5, delay:1})
    .to(eyestree, {x: 0, duration: 0.75})


//clouds 
const cloudsTimeline = gsap.timeline({
    repeat:-1,
    repeatDelay: 2
})    

const clouds = document.querySelectorAll("g#cloud1, path#cloud2, path#cloud3, g#cloud4, g#cloud5")

cloudsTimeline
    .set(clouds, {x:0})
    .to(clouds, {x: 700, duration: 9, delay:1})
    .to(clouds, {x: -300, duration: 12})
    .to(clouds, {x: 0, duration: 6})





//lable
const label = document.querySelector("div.label")
const link = document.querySelector("svg a")

link.addEventListener("mouseenter", function(){
    label.classList.add("is-visible")
    label.innerHTML = link.getAttribute("data-label")
})

link.addEventListener("mouseleave", function(){
    label.classList.remove("is-visible")
    label.innerHTML ="label"
})

document.addEventListener("mousemove",function(event){
    label.style.left = event.clientX + "px"
    label.style.top = event.clientY + "px"
})