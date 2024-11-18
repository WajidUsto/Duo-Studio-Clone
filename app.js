
let cursorMain = document.querySelector("#cursor")
let mainWrapper = document.querySelector("#main")
let page1 = document.querySelector("#page-1")


// Cursor
// Cursor

mainWrapper.addEventListener("mousemove", (dets) => {
    gsap.to(cursorMain, {
        x: dets.x,
        y: dets.y,
        duration: 3.5,
        ease: "elastic.out(1,0.3)",
    })
})
// Cursor
// Cursor


// Gsap ScrollTrigger 
// Page1

// let tl = gsap.timeline()

gsap.to("#page-1",{
    scrollTrigger:{
        trigger:"#page-1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        // scrub:true,
        // pin:true,
    }
})