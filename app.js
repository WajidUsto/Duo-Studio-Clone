
let cursorMain = document.querySelector("#cursor")
let mainWrapper = document.querySelector("#main")
let page1 = document.querySelector("#page-1")
let logo = document.querySelector("#logo img")
let navlink = document.querySelector("#nav-links")
let videoCursor = document.querySelector("#video-cursor")
let videoContainer = document.querySelector("#video-container")




// Locomotive Scroll
function Locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
Locomotive()
// Locomotive Scroll


// Cursor
// Cursor

// Nav Cursorhover
logo.addEventListener("mouseover",()=>{
    gsap.to(cursorMain,{
        scale : 2
    })
})
logo.addEventListener("mouseleave",()=>{
    gsap.to(cursorMain,{
        scale : 1
    })
})
navlink.addEventListener("mouseover",()=>{
    gsap.to(cursorMain,{
        scale : 2
    })
})
navlink.addEventListener("mouseleave",()=>{
    gsap.to(cursorMain,{
        scale : 1
    })
})

// Nav Cursorhover
mainWrapper.addEventListener("mousemove", (dets) => {
    gsap.to(cursorMain, {
        x: dets.x,
        y: dets.y,
        // duration: 3.5,
        // ease: "elastic.out(1,0.3)",
    })
})
// Cursor
// Cursor


// Gsap ScrollTrigger 
// Page1

function Page1timeline() {
    
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-1",
        scroller: "#main",
        // markers: true,
        start: "35% 35%",
        end: "95% 5%",
        scrub : true,
        pin:true,
    }
})

tl.to("#head-1", {
    x : -100,
    filter : "blur(5px)",
    color : "#595959"
} , "head")
tl.to("#head-2", {
    x : 100,
    filter : "blur(5px)",
    color : "#595959"
} , "head")
tl.to("#page-1-para p",{
    filter : "blur(5px)",
    color : "#595959"
},"head")
tl.to("#video-container video",{
    top : "0%",
    width : "85%",
},"head")
// tl.to("#video-text",{
//     opacity : 1,
// },"head")
}
Page1timeline()

// gsap.to("#video-text",{
//     opacity : 1,
//     scrollTrigger: {
//         trigger: "#video-text h4 p",
//         scroller: "#main",
//         markers: true,
//         start: "90% 20%",
//         end: "50% 60%",
//         scrub : true,
//         pin:true,
//     }
// })

// Video Cursor
// Video Cursor

function VCursor() {
    videoContainer.addEventListener("mousemove", (dets) => {
        gsap.to(videoCursor, {
            x: dets.x,
            y: dets.y,
            
        })

    })
    videoCursor.style.transform = "translate(-50%,-50%)";
    
    videoContainer.addEventListener("mouseenter",()=>{
        videoCursor.style.opacity = "1"
        cursorMain.style.display = "none"
    })
    videoContainer.addEventListener("mouseleave",()=>{
        videoCursor.style.opacity = "0"
        cursorMain.style.display = "block"
    })
    
    videoCursor.addEventListener("click",()=>{
        var flag = 0
        if (flag == 0) {
                videoCursor.innerHTML = "Sound On"
                flag = 1
        } else {
            videoCursor.innerHTML = "Sound Off"
                flag = 0
        }
            
    })
}
VCursor()

// Video Cursor
// Video Cursor

// PAGE 2
// PAGE 2

var page2Bg = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "#main",
        markers: true,
        start: "top 50% ",
        end: "10% 50% ",
        scrub : true
    }
})

page2Bg.to("#main",{
    backgroundColor : "#FEFCFF",
    color : "black"
})


// PAGE 2
// PAGE 2