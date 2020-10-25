var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.querySelectorAll(".quote__slide");
	var u_img = document.querySelectorAll(".user__image");
	if(n > slides.length) {slideIndex = 1}
		if(n < 1) {
			slideIndex = slides.length
		}
		for(i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			u_img[i].style.display = "none";
		}

		slides[slideIndex-1].style.display = "block";
		u_img[slideIndex-1].style.display = "block";
}