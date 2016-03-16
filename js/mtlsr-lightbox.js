$(document).ready(function() {
			var current = '.mtlsr-images-for-lightbox';
			
			$('.mtlsr-images-for-lightbox').on('click', 'a', function(event) {
				event.preventDefault();
				var big_image_href = $(this).attr('href');
				
				$(this).parent().addClass('current');
				$('.mtlsr-lightbox').fadeIn();
				$('.mtlsr-lightbox').append('<img class="image-in-lightbox" src="'+big_image_href+'" alt=""></div>');
				
				check_image_position();
			});
			//Fechar
			$('.mtlsr-lightbox').on('click', '.close', function(event) {
				$('.mtlsr-lightbox').fadeOut();
				$('.mtlsr-lightbox .image-in-lightbox').remove();
				$(current).removeClass('current');
			});
		});