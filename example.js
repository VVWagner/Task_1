let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.addEventListener("click", function() {
  showSlides(slideIndex += 1);
  clearInterval(timer);
  timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
});

prev.addEventListener("click", function() {
  showSlides(slideIndex -= 1);
  clearInterval(timer);
  timer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);

});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let slides = document.getElementsByClassName("myslide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.classList.remove('myslide__active');
    //slide.style.display = "none";
  }
  slides[slideIndex - 1].classList.add('myslide__active');
  //slides[slideIndex - 1].style.display = "flex"; 
}

let timer = setInterval(function() {
  slideIndex++;
  showSlides(slideIndex);
}, 3000);