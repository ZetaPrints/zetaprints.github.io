function initToggle(){
	jQuery("#designstep").hide();
		jQuery("#designtoggle").click(function () {
			jQuery("#printstep").hide();
			jQuery("#printexpand").show();
			if (jQuery("#designstep").is(":hidden")) {
				jQuery("#designstep").show("slow");
				jQuery("#designtoggle").hide();
			}
			return false;
		  
		});
		
		jQuery("#designerclose").click(function () {
			jQuery("#designstep").hide();
			jQuery("#designtoggle").show();
			return false;
		});
		
		// Printer
		jQuery("#printstep").hide();
		jQuery("#printexpand").click(function () {
			jQuery("#designstep").hide();
			jQuery("#designtoggle").show();
			if (jQuery("#printstep").is(":hidden")) {
				jQuery("#printstep").show("slow");
				jQuery("#printexpand").hide();
			}
			return false;
		});
		
		jQuery("#printclose").click(function () {
			jQuery("#printstep").hide();
			jQuery("#printexpand").show();
			return false;
		});
		
		// Advanced template
		jQuery("#advtpllink").hide();
		jQuery("#advtpl").click(function () {
		  jQuery("#advtpllink").slideToggle(400);
		  jQuery(this).toggleClass("dautru");
		  return false;
		});
	
};
