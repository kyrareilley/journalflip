
// ----- MAIN PAGES -----

let cover = document.getElementById("cover");
cover.style.display = "none";

let page1 = document.getElementById("page1");
page1.style.display = "none";

let page2 = document.getElementById("page2");
page2.style.display = "none";

let page3 = document.getElementById("page3");
page3.style.display = "none";

let page4 = document.getElementById("page4");
page4.style.display = "none";

let page5 = document.getElementById("page5");
page5.style.display = "none";

let page6 = document.getElementById("page6");
page6.style.display = "none";

let page7 = document.getElementById("page7");
page7.style.display = "none";

let page8 = document.getElementById("page8");
page8.style.display = "none";

let page9 = document.getElementById("page9");
page9.style.display = "none";

let sticky = document.getElementById("sticky");

// ----- FLIP PAGES -----

let mid1_1 = document.getElementById("mid1_1");
mid1_1.style.display = "none";

let mid1_2 = document.getElementById("mid1_2");
mid1_2.style.display = "none";

let mid2_1 = document.getElementById("mid2_1");
mid2_1.style.display = "none";

let mid2_2 = document.getElementById("mid2_2");
mid2_2.style.display = "none";

let mid3_1 = document.getElementById("mid3_1");
mid3_1.style.display = "none";

let mid3_2 = document.getElementById("mid3_2");
mid3_2.style.display = "none";

let mid4_1 = document.getElementById("mid4_1");
mid4_1.style.display = "none";

let mid4_2 = document.getElementById("mid4_2");
mid4_2.style.display = "none";

let mid5_1 = document.getElementById("mid5_1");
mid5_1.style.display = "none";

let mid5_2 = document.getElementById("mid5_2");
mid5_2.style.display = "none";

let mid6_1 = document.getElementById("mid6_1");
mid6_1.style.display = "none";

let mid6_2 = document.getElementById("mid6_2");
mid6_2.style.display = "none";

let mid7_1 = document.getElementById("mid7_1");
mid7_1.style.display = "none";

let mid7_2 = document.getElementById("mid7_2");
mid7_2.style.display = "none";

let mid8_1 = document.getElementById("mid8_1");
mid8_1.style.display = "none";

let mid8_2 = document.getElementById("mid8_2");
mid8_2.style.display = "none";



document.addEventListener("mousewheel", function (e) {
  position = parseInt(position + e.deltaX);
  position = min(1000, position);
  position = max(0, position);
});
/*
document.addEventListener("mousewheel", function (ev) {
  ev.preventDefault();
});
*/

  let bar = document.getElementById("bar");
  bar.addEventListener("dragstart", function (ev) {
    ev.preventDefault();
  })


  //bar.addEventListener("mousedown", mouseDown);

let position = 0;


function reset_pages() {
  // ----- MAIN PAGES -----
  cover.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
  page7.style.display = "none";
  page8.style.display = "none";
  page9.style.display = "none";

  // ----- FLIP PAGES -----
  mid1_1.style.display = "none";
  mid1_2.style.display = "none";
  mid2_1.style.display = "none";
  mid2_2.style.display = "none";
  mid3_1.style.display = "none";
  mid3_2.style.display = "none";
  mid4_1.style.display = "none";
  mid4_2.style.display = "none";
  mid5_1.style.display = "none";
  mid5_2.style.display = "none";
  mid6_1.style.display = "none";
  mid6_2.style.display = "none";
  mid7_1.style.display = "none";
  mid7_2.style.display = "none";
  mid8_1.style.display = "none";
  mid8_2.style.display = "none";
}

function hide_sticky(){
  sticky.style.display = "none";
}

function setup() {
  createCanvas(620, 515);

}

function draw() {
//  background(242, 240, 237);

background(255, 255, 255);
  noFill();
  stroke(0);
  holder = rect(35, 500, 550, 10, 10);
  fill(0);
  
  if (position <= 0) {
    bar.style.left = 35 + "px";
  } else if (position >= 1000) {
    bar.style.left = 535 + "px";
  } else {
    bar.style.left = (35 + position / 2) + "px";
  }

  //bar = rect(35 + position / 2, 500, 50, 10, 10);

  bar.addEventListener("mousedown", mouseDown);


  // COVER
  if (position < 100) {
    reset_pages();
    cover.style.display = "block";
    // PAGE 1
  } else if (position >= 100 && position < 150) {
    reset_pages();
    hide_sticky();
    page1.style.display = "block";
    // mid 1 & mid 2 from 150 to 200
    // bar will move accordingly so split into 17, 34, 50 / 67, 84, 100
  } else if (position >= 150 && position < 175) {
    reset_pages();
    hide_sticky();
    mid1_1.style.display = "block";
  } else if (position >= 175 && position < 200) {
    reset_pages();
    hide_sticky();
    mid1_2.style.display = "block";
    // PAGE 2
  } else if (position >= 200 && position < 250) {
    reset_pages();
    hide_sticky();
    page2.style.display = "block";
  } else if (position >= 250 && position < 275) {
    reset_pages();
    hide_sticky();
    mid2_1.style.display = "block";
  } else if (position >= 275 && position < 300) {
    reset_pages();
    hide_sticky();
    mid2_2.style.display = "block";
    // PAGE 3
  } else if (position >= 300 && position < 350) {
    reset_pages();
    page3.style.display = "block";
  } else if (position >= 350 && position < 375) {
    reset_pages();
    mid3_1.style.display = "block";
  } else if (position >= 375 && position < 400) {
    reset_pages();
    mid3_2.style.display = "block";
    // PAGE 4
  } else if (position >= 400 && position < 450) {
    reset_pages();
    page4.style.display = "block";
  } else if (position >= 450 && position < 475) {
    reset_pages();
    mid4_1.style.display = "block";
  } else if (position >= 475 && position < 500) {
    reset_pages();
    mid4_2.style.display = "block";
    // PAGE 5
  } else if (position >= 500 && position < 550) {
    reset_pages();
    page5.style.display = "block";
  } else if (position >= 550 && position < 575) {
    reset_pages();
    mid5_1.style.display = "block";
  } else if (position >= 575 && position < 600) {
    reset_pages();
    mid5_2.style.display = "block";
    // PAGE 6
  } else if (position >= 600 && position < 650) {
    reset_pages();
    page6.style.display = "block";
  } else if (position >= 650 && position < 675) {
    reset_pages();
    mid6_1.style.display = "block";
  } else if (position >= 675 && position < 700) {
    reset_pages();
    mid6_2.style.display = "block";
    // PAGE 7
  } else if (position >= 700 && position < 750) {
    reset_pages();
    page7.style.display = "block";
  } else if (position >= 750 && position < 775) {
    reset_pages();
    mid7_1.style.display = "block";
  } else if (position >= 775 && position < 800) {
    reset_pages();
    mid7_2.style.display = "block";
    // PAGE 8
  } else if (position >= 800 && position < 850) {
    reset_pages();
    page8.style.display = "block";
  } else if (position >= 850 && position < 875) {
    reset_pages();
    mid8_1.style.display = "block";
  } else if (position >= 875 && position < 900) {
    reset_pages();
    mid8_2.style.display = "block";
    // PAGE 9
  } else if (position >= 900) {
    reset_pages();
    page9.style.display = "block";

  }

// MOUSEDOWN TO SCROLL

}

function mouseDown(e) {
  startX = e.clientX;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  isDragging = true;

  newX = startX - e.clientX;
  deltaX = e.clientX;
  
 if (isDragging = true){
  position = (bar.offsetLeft - newX);
 }
}

function mouseUp(e) {
  isDragging = false;
  document.removeEventListener("mousemove", mouseMove);
}






