$(document).ready(function(){
   	
    $('form .show-hide').on('click',function(e){
    	e.preventDefault();

    	clickedId = $(this).data('target');
    	var target = document.getElementById(clickedId);
    	if(target.type == 'password'){
    		target.type = 'text';
    	}else{
    		target.type = 'password';
    	}
    })
    
    $('.profit-orders-block').owlCarousel({
        loop:true,
        nav: false,
        navText: ["<",">"],
        dots: true,
        margin:20,
        responsive : {
            0 : {
                    items: 1
            },
            480 : {
                    items: 2
               
            },
            768 : {
                    items: 6
            }
        }
    });
	

});