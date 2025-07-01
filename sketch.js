
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
  position = position + e.deltaX;
  position = min(1000, position);
  position = max(0, position);
});
document.addEventListener("mousewheel", function (e) {
  document.preventDefault();
});

let position = 0;

function setup() {
  createCanvas(620, 515);
}

function draw() {
  background(242, 240, 237);
  noFill();
  stroke(0);
  bar = rect(50, 500, 520, 10, 10);
  fill(0);

  // COVER
  if (position < 100) {
    cover.style.display = "block";
    page1.style.display = "none";
    bar = rect(50, 500, 50, 10, 10);
    // PAGE 1
  } else if (position >= 100 && position < 150) {
    cover.style.display = "none";
    page1.style.display = "block";
    mid1_1.style.display = "none";
    sticky.style.display = "none";
    bar = rect(100, 500, 50, 10, 10);
    // mid 1 & mid 2 from 150 to 200
    // bar will move accordingly so split into 17, 34, 50 / 67, 84, 100
  } else if (position >= 150 && position < 175) {
    page1.style.display = "none";
    mid1_1.style.display = "block";
    mid1_2.style.display = "none";
    bar = rect(117, 500, 50, 10, 10);
  } else if (position >= 175 && position < 200) {
    mid1_1.style.display = "none";
    mid1_2.style.display = "block";
    page2.style.display = "none";
    bar = rect(134, 500, 50, 10, 10);
    // PAGE 2
  } else if (position >= 200 && position < 250) {
    mid1_2.style.display = "none";
    page2.style.display = "block";
    mid2_1.style.display = "none";
    bar = rect(150, 500, 50, 10, 10);
  } else if (position >= 250 && position < 275) {
    page2.style.display = "none";
    mid2_1.style.display = "block";
    mid2_2.style.display = "none";
    bar = rect(167, 500, 50, 10, 10);
  } else if (position >= 275 && position < 300) {
    mid2_1.style.display = "none";
    mid2_2.style.display = "block";
    page3.style.display = "none";
    bar = rect(184, 500, 50, 10, 10);
    // PAGE 3
  } else if (position >= 300 && position < 350) {
    mid2_2.style.display = "none";
    page3.style.display = "block";
    mid3_1.style.display = "none";
    bar = rect(200, 500, 50, 10, 10);
  } else if (position >= 350 && position < 375) {
    page3.style.display = "none";
    mid3_1.style.display = "block";
    mid3_2.style.display = "none";
    bar = rect(217, 500, 50, 10, 10);
  } else if (position >= 375 && position < 400) {
    mid3_1.style.display = "none";
    mid3_2.style.display = "block";
    page4.style.display = "none";
    bar = rect(234, 500, 50, 10, 10);
    // PAGE 4
  } else if (position >= 400 && position < 450) {
    mid3_2.style.display = "none";
    page4.style.display = "block";
    mid4_1.style.display = "none";
    bar = rect(250, 500, 50, 10, 10);
  } else if (position >= 450 && position < 475) {
    page4.style.display = "none";
    mid4_1.style.display = "block";
    mid4_2.style.display = "none";
    bar = rect(267, 500, 50, 10, 10);
  } else if (position >= 475 && position < 500) {
    mid4_1.style.display = "none";
    mid4_2.style.display = "block";
    page5.style.display = "none";
    bar = rect(284, 500, 50, 10, 10);
    // PAGE 5
  } else if (position >= 500 && position < 550) {
    mid4_2.style.display = "none";
    page5.style.display = "block";
    mid5_1.style.display = "none";
    bar = rect(300, 500, 50, 10, 10);
  } else if (position >= 550 && position < 575) {
    page5.style.display = "none";
    mid5_1.style.display = "block";
    mid5_2.style.display = "none";
    bar = rect(317, 500, 50, 10, 10);
  } else if (position >= 575 && position < 600) {
    mid5_1.style.display = "none";
    mid5_2.style.display = "block";
    page6.style.display = "none";
    bar = rect(334, 500, 50, 10, 10);
    // PAGE 6
  } else if (position >= 600 && position < 650) {
    mid5_2.style.display = "none";
    page6.style.display = "block";
    mid6_1.style.display = "none";
    bar = rect(350, 500, 50, 10, 10);
  } else if (position >= 650 && position < 675) {
    page6.style.display = "none";
    mid6_1.style.display = "block";
    mid6_2.style.display = "none";
    bar = rect(367, 500, 50, 10, 10);
  } else if (position >= 675 && position < 700) {
    mid6_1.style.display = "none";
    mid6_2.style.display = "block";
    page7.style.display = "none";
    bar = rect(384, 500, 50, 10, 10);
    // PAGE 7
  } else if (position >= 700 && position < 750) {
    mid6_2.style.display = "none";
    page7.style.display = "block";
    mid7_1.style.display = "none";
    bar = rect(400, 500, 50, 10, 10);
  } else if (position >= 750 && position < 775) {
    page7.style.display = "none";
    mid7_1.style.display = "block";
    mid7_2.style.display = "none";
    bar = rect(417, 500, 50, 10, 10);
  } else if (position >= 775 && position < 800) {
    mid7_1.style.display = "none";
    mid7_2.style.display = "block";
    page8.style.display = "none";
    bar = rect(434, 500, 50, 10, 10);
    // PAGE 8
  } else if (position >= 800 && position < 850) {
    mid7_2.style.display = "none";
    page8.style.display = "block";
    mid8_1.style.display = "none";
    bar = rect(450, 500, 50, 10, 10);
  } else if (position >= 850 && position < 875) {
    page8.style.display = "none";
    mid8_1.style.display = "block";
    mid8_2.style.display = "none";
    bar = rect(477, 500, 50, 10, 10);
  } else if (position >= 875 && position < 900) {
    mid8_1.style.display = "none";
    mid8_2.style.display = "block";
    page9.style.display = "none";
    bar = rect(500, 500, 50, 10, 10);
    // PAGE 9
  } else if (position >= 900) {
    mid8_2.style.display = "none";
    page9.style.display = "block";
    bar = rect(520, 500, 50, 10, 10);
  }
}
