
//PORTFOLIO FILTER


$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});





 //BASIC INITIALIZATION OF MODALS

            //demo 01
            $("#demo01").animatedModal();


            //demo 02
            $("#demo02").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'fadeIn',
                animatedOut:'zoomOut',
                color:'#3498db',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });

            
 			//demo 03
            $("#demo03").animatedModal({
                modalTarget:'modal-03',
                animatedIn:'fadeIn',
                animatedOut:'zoomOut',
                color:'#333',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });
      	


document.getElementById("#contact-form").reset();

/*formspree ajax*/
var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/waithereromaureen@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',




        beforeSend: function() {
            $contactForm.append('<div class="alert alert--success">Sending message… </div>');
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append(' <div class="alert alert--success"> Message sent </div> ');

            function resetForm(#contact-form) {
                $('#' + #contact-form + ' :input').each(function(){  
            $(this).val('').attr('checked',false).attr('selected',false);
            });
            }
        },
        error: function(err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Oops, there was an error send error.</div>');
        }
    });
});









 