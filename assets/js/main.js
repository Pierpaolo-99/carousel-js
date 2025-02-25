const slides = [
    {
      image: 'img/01.jpg',
      title: 'Svezia',
      text: 'Scandinavia\'s blend of nature and innovation.',
    }, {
      image: 'img/02.jpg',
      title: 'Norvegia',
      text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
    }, {
      image: 'img/03.jpg',
      title: 'Alaska',
      text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
    }, {
      image: 'img/04.jpg',
      title: 'Gran Canyon',
      text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
    }, {
      image: 'img/05.jpg',
      title: "Skyrim",
      text: 'Epic Nordic fantasy with dragons and ancient magic.',
    }
];
let activeSlide = 0;
console.log(slides);

// select the DOM elements

const sliderEl = document.querySelector('.slider')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

console.log(sliderEl,prevEl,nextEl);

// render all the images into the slider DOM elements

/*for (let i = 0; i < slides.length; i++){
  const thisSlide = slides[i]
  console.log(thisSlide);
  // generate slide markup
  const imgEl = document.createElement('img')
  imgEl.src = thisSlide.image
  console.log(imgEl);
 // check if the index === activeSlide 
  imgEl.className = i === activeSlide ? 'active' : ''
  console.log(imgEl);
  
  sliderEl.appendChild(imgEl)
}*/


// for loop + template literal
let slidesImagesElements = ''
for (let i = 0; i < slides.length; i++){
  const {image, text, title} = slides[i]
  // generate slide markup
  const markup = `<img class="${i === activeSlide ? 'active' : ''}"
  src="./assets/${image}" alt="${title}">`
  slidesImagesElements += markup
}
console.log(slidesImagesElements);

sliderEl.innerHTML = slidesImagesElements


// add event listener to the prev button
prevEl.addEventListener('click', function(){
  console.log('clicked prev');

  activeSlide--

  if (activeSlide > 0){
    activeSlide--
  }
  else{
    activeSlide = slides.length - 1
  }

  console.log('clicked next');
  
  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')
  
  // remove the active class
  activeImage.classList.remove('active')
  
  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')
})


// add event listener to the next button


nextEl.addEventListener('click', function(){
  
  activeSlide++

  console.log('clicked next');

  if (activeSlide < slides.length - 1){
    activeSlide++
  }
  else{
    activeSlide = 0
  }

  
  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')
  
  // remove the active class
  activeImage.classList.remove('active')
  
  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')

})

const thumbnailsEL = document.querySelector('.thumbnails')
const thumbnails1 = document.getElementById('thumbnails1')
const thumbnails2 = document.getElementById('thumbnails2')
const thumbnails3 = document.getElementById('thumbnails3')
const thumbnails4 = document.getElementById('thumbnails4')
const thumbnails5 = document.getElementById('thumbnails5')

// add event listener to the thumbnails

thumbnails1.addEventListener('click', function(){
    activeSlide = 0
    // select the currently active image
    const activeImage = document.querySelector('.slider img.active')
  
    // remove the active class
    activeImage.classList.remove('active')
    
    // get the next slide
    const nextSlide = document.querySelectorAll('.slider img')[activeSlide]
  
    // add active class
    nextSlide.classList.add('active')
})

thumbnails2.addEventListener('click', function(){
  activeSlide = 1
  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')

  // remove the active class
  activeImage.classList.remove('active')
  
  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')
})

thumbnails3.addEventListener('click', function(){
  activeSlide = 2
  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')

  // remove the active class
  activeImage.classList.remove('active')
  
  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')
})

thumbnails4.addEventListener('click', function(){
  activeSlide = 3
  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')

  // remove the active class
  activeImage.classList.remove('active')
  
  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')
})

thumbnails5.addEventListener('click', function(){
  activeSlide = 4
  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')

  // remove the active class
  activeImage.classList.remove('active')
  
  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')
})

