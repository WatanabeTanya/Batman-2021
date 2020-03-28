$(document).ready(function() {
	let tabsItem = $('.tabs-item');
	tabsItem.on('click', function(event){
		event.preventDefault();/*отменяет все стандартные действия*/
		let activeContent = $(this).attr('href');
		$('.visible').toggleClass('visible');
		$(activeContent).toggleClass('visible');
		$('.tabs-item-active').toggleClass('tabs-item-active');
		$(this).toggleClass('tabs-item-active');
	});
});