let slideIndex = 0

$('.slide').css({display: 'none'})
		   .first().css({display: 'block'}).fadeIn('fast')
$('.dot-navigation').first().addClass('active-dot')

$('#arrow-prev').click(function() {
	$(`.dot-navigation:nth-child(${slideIndex + 1})`).removeClass('active-dot')
	$(`.slide:nth-child(${slideIndex-- + 1})`).fadeOut('slow')
	if (slideIndex < 0) slideIndex = $('.slide').length - 1;
	$(`.slide:nth-child(${slideIndex+1})`).fadeIn('slow')
	$(`.dot-navigation:nth-child(${slideIndex+1})`).addClass('active-dot')
})

$('#arrow-next').click(function() {
	$(`.dot-navigation:nth-child(${slideIndex + 1})`).removeClass('active-dot')
	$(`.slide:nth-child(${slideIndex++ + 1})`).fadeOut('slow')
	if (slideIndex >= $('.slide').length) slideIndex = 0;
	$(`.slide:nth-child(${slideIndex+1})`).fadeIn('slow')
	$(`.dot-navigation:nth-child(${slideIndex+1})`).addClass('active-dot')
})