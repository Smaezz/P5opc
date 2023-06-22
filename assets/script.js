
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"<p>Impressions tous formats <span>en boutique et en ligne</span></>",
		"dot": "dot1"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></>",
		"dot": "dot2"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"<p>Grand choix de couleurs <span>de CMJN aux pantones</span></>",
		"dot": "dot3"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"<p>Autocollants <span>avec découpe laser sur mesure</span></>",
		"dot": "dot4"
	}
];



  const arrowLeft = document.querySelector('.arrowLeft');
  const arrowRight = document.querySelector('.arrowRight');
  const dot_selected = document.querySelector('dot_selected');
  let currentSlide = 0;
  
  arrowLeft.addEventListener('click', () => {
	if (currentSlide > 0) {
	  currentSlide--;
	} 
	else {
	  currentSlide = slides.length - 1;
	}

	slideTo(currentSlide);
    dotChange(currentSlide);
  });
  
  arrowRight.addEventListener('click', () => {
	if (currentSlide < slides.length - 1) {
	  currentSlide++;
	} 
	else {
	  currentSlide = 0;
	}

	slideTo(currentSlide);
    dotChange(currentSlide);
  });
  
  function slideTo(index) {
	const slidesContainer = document.querySelector('.bannerImg');
	const bannerImg = document.querySelector('.bannerImg');
	const bannerText = document.querySelector('.bannerText');
	
	bannerImg.src = slides[index].image;
	bannerText.innerHTML = slides[index].tagLine;
  };

  function dotChange(index) {
	const dotSelected = document.querySelector('.dot_selected');
	dotSelected.classList.remove('dot_selected');
	
	const dots = document.querySelectorAll('.dot');
	dots[index].classList.add('dot_selected');
  }
  
  // Afficher la première diapositive au chargement de la page
  slideTo(0);
  dotChange(0);
  
