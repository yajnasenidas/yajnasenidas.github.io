$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		
	});

	//toggle menu/navbar script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active"); 
	})


	//owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}

	});
});



	//typing animation scrpt
	var typed = new Typed(".typing" , {
		strings: ["Fresher!","Student!","FrontEnd Developer!","Tech Enthusiast!","Freelancer!"],
		typeSpeed: 60,
		backSpeed: 60,
		loop: true
    }); 

     
     var typed = new Typed(".typing-2" , {
		strings: ["Fresher!","Student!","FrontEnd Developer!","Tech Enthusiast!","Freelancer!"],
		typeSpeed: 60,
		backSpeed: 60,
		loop: true
    }); 

    

