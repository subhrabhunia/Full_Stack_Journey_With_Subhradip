
// 1. Click Event
function clickEvent() {
    document.getElementById("result").innerHTML = "Button Clicked!";
}


// 2. Double Click Event
function doubleClickEvent() {
    document.getElementById("result").innerHTML = "Button Double Clicked!";
}


// 3. Right Click Event
function rightClickEvent(event) {
    event.preventDefault();
    document.getElementById("result").innerHTML = "Right Clicked!";
}


// 4. Mouse Enter Event
function mouseEnterEvent() {
    document.getElementById("result").innerHTML = "Mouse Entered!";
}


// 5. Mouse Out Event
function mouseOutEvent() {
    document.getElementById("result").innerHTML = "Mouse Out!";
}


// 6. Mouse Down Event
function mouseDownEvent() {
    document.getElementById("result").innerHTML = "Mouse Button Pressed!";
}


// 7. Mouse Up Event
function mouseUpEvent() {
    document.getElementById("result").innerHTML = "Mouse Button Released!";
}


// 8. Key Press Event
function keyPressEvent() {
    document.getElementById("result").innerHTML = "Key Pressed!";
}


// 9. Key Up Event
function keyUpEvent() {
    document.getElementById("result").innerHTML = "Key Released!";
}


// 10. Load Event
function pageLoad() {
    alert("Page Loaded Successfully!");
}


// 11. Unload Event
function pageUnload() {
    console.log("Page Unloaded!");
}


// 12. Resize Event
function pageResize() {
    console.log("Window Resized!");
}


// 13. Scroll Event
function pageScroll() {
    console.log("Page Scrolled!");
}
