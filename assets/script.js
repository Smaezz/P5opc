const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

function slideTo(index) {
	slides.style.transform = `translateX(-${index * slideWidth}px)`;
	currentSlide = index;
  
	const slideImage = document.querySelector('.slideImage');
	const bannerText = document.querySelector('.bannerText');
	slideImage.src = slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;
  }
  
  const banner = document.getElementById('.banner');
  const arrowLeft = document.querySelector('.arrowLeft');
  const arrowRight = document.querySelector('.arrowRight');
  const slideWidth = slides.clientWidth;
  let currentSlide = 0;
  
  arrowLeft.addEventListener('click', () => {
	if (currentSlide > 0) {
	  slideTo(currentSlide - 1);
	}
  });
  
  arrowRight.addEventListener('click', () => {
	if (currentSlide < slides.length - 1) {
	  slideTo(currentSlide + 1);
	}
  });
  
  // Afficher la première diapositive au chargement de la page
  /*slideTo(0);*/


