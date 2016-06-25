jQuery(document).ready(function(){
    var nav = jQuery('#top-drop-menu');
    var width = 0;
    jQuery('#top-drop-menu > li').each(function(){
        var $el = jQuery(this);
        
        width += $el.outerWidth();
        $el.hover(function(){
            if (jQuery.support.boxModel === false) {
                jQuery(this).addClass('hover');
            }
        }, function(){
            if (jQuery.support.boxModel === false) {
                jQuery(this).removeClass('hover');
            }
        });
        
        if ($el.hasClass('drop')) { // set appropriate width to sub nav
            var $subNav = $el.children('ul');
            if ($subNav.size() > 0) {
                _resizeSubNav($subNav, 16); 
            }
        }
    });
    nav.width(width);
});
/**
 * Resize sub nav menu closer to content width.
 * @param {Object} $subNav
 * @param integer correction
 */
function _resizeSubNav($subNav, correction){
    var tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    var $tempDiv = jQuery(tempDiv);
    $tempDiv.css({
        position: 'absolute',
        left: '-10000px',
        top: '-10000px',
        height: 'auto',
        width: 'auto'
    });
    var html = $subNav.html();
    $tempDiv.html(html);
    var width = $tempDiv.outerWidth();
    $subNav.width(width + parseInt(correction));
    $tempDiv.remove();
}
