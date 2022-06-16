jQuery('input[name="dtp"]').change(function() {
	if(jQuery(this).prop('checked')){
		$('.accordion').slideDown(500);
		$('.dtp_list').addClass('checked');
	}else{
		$('.accordion').slideUp(500);
		$('.dtp_list').removeClass('checked');
	}
});