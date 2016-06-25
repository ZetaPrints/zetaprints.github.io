/* Pixel - Inch Converter */

function pxin_convert()
{
    var imgw = parseFloat(document.getElementById('inp_width').value);
    var imgh = parseFloat(document.getElementById('inp_height').value);
    var sdpi = parseFloat(document.getElementById('inp_dpi').value);

    var type = document.getElementById('convert_type').value;

    pxin_validate(imgw,imgh,sdpi);

    var width = 0;
    var height = 0;
	var imgw2 = 0;
	var imgh2 = 0;
    var px_w = 0;
    var px_h = 0;

    if (type == "a")
    {
        width = imgw/sdpi;
        height = imgh/sdpi;

        // Inches
        var in_w = Math.round(width*100) / 100;
        var in_h = Math.round(height*100) / 100;

        document.getElementById('output').value = in_w + " x " + in_h + " inches";
    }

    if (type == "b")
    {
        width = imgw*sdpi;
        height = imgh*sdpi;

        px_w = Math.ceil(width);
        px_h = Math.ceil(height);

        document.getElementById('output').value = px_w + " x " + px_h + " pixels";
    }
    if (type == "c")
    {
		imgw2 = imgw*2.4
		imgh2 = imgh*2.4
        width = imgw2/sdpi;
        height = imgh2/sdpi;

        px_w = Math.ceil(width);
        px_h = Math.ceil(height);

        document.getElementById('output').value = px_w + " x " + px_h + " centimeters";
    }
    if (type == "d")
    {
		imgw2 = imgw/2.4
		imgh2 = imgh/2.4
		width = imgw2*sdpi;
        height = imgh2*sdpi;

        px_w = Math.ceil(width);
        px_h = Math.ceil(height);

        document.getElementById('output').value = px_w + " x " + px_h + " pixels";
    }
}

function pxin_validate(imgw,imgh,sdpi)
{
	if (imgw == 0 && imgh == 0 && sdpi == 0) {
		alert("Please enter a width.\nPlease enter a height.\nPlease enter a dpi value.");
        return false;
	}
	if (imgw == 0 && imgh == 0) {
		alert("Please enter a width.\nPlease enter a height.");
        return false;
	}
	if (imgw == 0 && sdpi == 0) {
		alert("Please enter a width.\nPlease enter a dpi value.");
        return false;
	}
	if (imgh == 0 && sdpi == 0) {
		alert("Please enter a height.\nPlease enter a dpi value.");
        return false;
	}
	if (imgw == 0) {
		alert("Please enter a width.");
        return false;
	}
	if (imgh == 0) {
		alert("Please enter a height.");
        return false;
	}
	if (sdpi == 0) {
		alert("Please enter a dpi value.");
        return false;
	}
}

function highlightArea(id)
{
    if (document.getElementById)
    {
        var area = document.getElementById(id);

        if (area.style.border == "")
        {
            area.style.border = "2px dotted #ff0000";

            if (navigator.userAgent.toLowerCase().indexOf('msie')+1 && id == "content") {
                document.getElementById("skip").style.left = "0";
                document.getElementById("skip").style.padding = "3px";
                document.getElementById("skip").style.backgroundColor = "#ffffc0";
                document.getElementById("skip").style.color = "#000000";
            }
        }
        else
        {
            area.style.border = "";

            if (navigator.userAgent.toLowerCase().indexOf('msie')+1 && id == "content") {
                document.getElementById("skip").style.left = "-999px";
                document.getElementById("skip").style.padding = "0";
                document.getElementById("skip").style.backgroundColor = "";
                document.getElementById("skip").style.color = "";
            }
        }
    }
}

function formFields(id)
{
    if (document.getElementById(id))
    {
        var form = document.getElementById(id);
        var field = form.getElementsByTagName('input');
        var textarea = form.getElementsByTagName('textarea');

        for (var i=0; i<field.length; i++)
        {
            if (field[i].getAttribute("type") == "text")
            {
                field[i].onblur = function()
                {
                    if (this.value == "")
                    {
                        var filler = this.getAttribute('title');
                        this.value = filler;
                    }
                }

                field[i].onfocus = function()
                {
                    var filler = this.getAttribute('title');
                    if (this.value == filler)
                    {
                        this.value = "";
                    }
                }
 
                if (field[i].value == "")
                {
                    var filler = field[i].getAttribute('title');
                    field[i].value = filler;
                }
            }
        }

        for (var i=0; i<textarea.length; i++)
        {
            textarea[i].onblur = function()
            {
                if (this.value == "")
                {
                    var filler = this.getAttribute('title');
                    this.value = filler;
                }
            }

            textarea[i].onfocus = function()
            {
                var filler = this.getAttribute('title');
                if (this.value == filler)
                {
                    this.value = "";
                }
            }

            if (textarea[i].value == "")
            {
                var filler = textarea[i].getAttribute('title');
                textarea[i].value = filler;
            }

        }
    }
}

function doHighlight()
{
	document.getElementById('b2nav').onfocus = function() {
		highlightArea('navigation');
	}

	document.getElementById('b2nav').onblur = function() {
		highlightArea('navigation');
	}

	document.getElementById('skip').onfocus = function() {
		highlightArea('content');
	}

	document.getElementById('skip').onblur = function() {
		highlightArea('content');
	}
}

window.onload = function() {
    formFields('enquiry');
	//doHighlight();
}
