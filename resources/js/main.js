
	$(document).ready(function(){
	//STICKY MENU
		var topbutton = document.getElementById("topbtn");
		window.onscroll = function(){scrollFunction()};
		function scrollFunction(){
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
				$("nav").addClass("sticky");
				topbutton.style.display = "block";
				
			}else{
				$("nav").removeClass("sticky");
				topbutton.style.display = "none";
			}
		}
	
	//MIXITUP
	var mixer = mixitup('.contain');
$('.testmonials-slider').slick({
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				arrows: true,
				prevArrow:'<i class="fa fa-long-arrow-left"></i>',
				nextArrow:'<i class="fa fa-long-arrow-right"></i>',
		});
		
});
//SCROLL TO TOP
	function topFunction(){
			window.scrollTo({top: 0, behavior:"smooth"});
			//document.body.scrollTop = 0;
			//document.documentElement.scrollTop = 0;
		}


function openNav(){	document.getElementById("openNav").style.width="100%";
}
function closeNav(){document.getElementById("openNav").style.width="0%";
}






