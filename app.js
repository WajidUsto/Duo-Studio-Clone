
let cursorMain = document.querySelector("#cursor")
let mainWrapper = document.querySelector("#main")


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