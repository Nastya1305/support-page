const nextBtn = document.querySelector('.slider__next-btn')
const list = document.querySelector('.slider__list')
let slides = list.children;

const slidesCount = list.querySelectorAll('.slider__item').length
const slideWidth = list.querySelector('.slider__item').offsetWidth

let activeSlideIndex = 0


const addCloneToEnd = (cloneIndex, itemsList) => {
   let cloneItem = itemsList[cloneIndex].cloneNode(true);
   itemsList[cloneIndex].parentNode.appendChild(cloneItem);
};

addCloneToEnd(0, slides)


nextBtn.addEventListener('click', changeSlide)


function changeSlide() {
   activeSlideIndex++;
   if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
   }

   list.animate([
      { transform: `translateX(0)` },
      { transform: `translateX(-${slideWidth}px)` },
   ], {
      duration: 500,
      easing: "ease-out",
      fill: "forwards"
   });

   addCloneToEnd(1, slides);
   slides[0].parentNode.removeChild(slides[0]);
}


