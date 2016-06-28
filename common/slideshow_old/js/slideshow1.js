var timer = null;
var slideSpeed = 2000;
var currImg = null;
var alphaImgs = [];
var iCurrImg = 0;
var iCurrStep = 0;
var showSlides = false;

$(document).ready(function() {
  slideShow(window.slideshow_speed ? window.slideshow_speed : 3000);
});

function checkImg(){
  var imgCounter=0;
  $('ul.slideshow li img').each(function(){
    if(this.complete==true) imgCounter++;
  });
  if(imgCounter>50){
    showSlides = true;
    //checkImg2();
    gallery();
  }else
    timer = setTimeout(checkImg,500);
}
function checkImg2(){
  if(showSlides===false){
    clearTimeout(timer);
    return;
  }
  var imgCounter=0;
  for(im in alphaImgs[iCurrImg]){
    if(alphaImgs[iCurrImg][im].complete===true && alphaImgs[iCurrImg][im].width>0)
      imgCounter++;
  }
  if(imgCounter==4) changeImg();
    else gallery();
}
function changeImg(){
  currImg.attr('src',alphaImgs[iCurrImg][iCurrStep].src);
   iCurrStep++;
  if(iCurrStep>3){
    iCurrStep = 0;
    gallery();
  }else
    timer = setTimeout('changeImg()',200);
}

function slideShow(speed) {
  //show first LI
  var current = $('ul.slideshow li:first');
  var next = current.next();
  current.addClass('show');
  next.addClass('showBack');
  
  //append a LI item to the UL list for displaying caption
  $('ul.slideshow').append('<li id="slideshowCaption"><div><h3></h3><p></p></div></li>');
  $('ul.slideshow').append('<li id="slideshowButton"><a></a><p></p></li>');
  $('ul.slideshow').show();

  //Get the caption of the first image from REL attribute and display it
  $('#slideshowCaption h3').html($('ul.slideshow a:first').find('img').attr('title'));
  $('#slideshowCaption p').html($('ul.slideshow a:first').find('img').attr('alt'));
  $('#slideshowButton a').html($('ul.slideshow a:first').attr('title'));
  $('#slideshowButton a').attr('href',$('ul.slideshow a:first').attr('href'));

  /*
  iCurrImg = 0;
  currImg = $('ul.slideshow a:first').find('img');
  path = currImg.attr('src');
  x = path.indexOf('.');
  path = path.substr(0,x);
  var tmp = [];
  tmp[0] = new Image();
  tmp[1] = new Image();
  tmp[2] = new Image();
  tmp[3] = new Image();
  tmp[4] = currImg.attr('src');
  tmp[0].src = path+'_80.png';
  tmp[1].src = path+'_60.png';
  tmp[2].src = path+'_40.png';
  tmp[3].src = path+'_20.png';
  alphaImgs[iCurrImg] = tmp;
  */
  //Display the caption
  $('#slideshowCaption').css({opacity: 0.7, bottom:0});
  //Display the button
  $('#slideshowButton').css({opacity: 1.0, bottom:0});

  //pause the slideshow on mouse over
  $('ul.slideshow').hover(
    function () {
      //showSlides = false;
    },
    function () {
      //showSlides = true;
      //gallery();
      //checkImg2();
    }
  );
  slideSpeed = speed;
  checkImg();
}

function gallery() {
  if(showSlides===false){
    clearTimeout(timer);
    return;
  }
  //if no IMGs have the show class, grab the first image
  var current = ($('ul.slideshow li.show')?  $('ul.slideshow li.show') : $('ul.slideshow li:first'));
  current.removeClass('show');
  //currImg.attr('src',alphaImgs[iCurrImg][4]);

  if(current.next().attr('id') == 'slideshowCaption'){
    //iCurrImg = 0;
    var next = $('ul.slideshow li:first');
  }else{
    //iCurrImg++;
    var next = current.next();
  }
  /*
  currImg = next.find('img');
  if(alphaImgs[iCurrImg]==undefined){
    path = currImg.attr('src');
    x = path.indexOf('.');
    path = path.substr(0,x);
    var tmp = [];
    tmp[0] = new Image();
    tmp[1] = new Image();
    tmp[2] = new Image();
    tmp[3] = new Image();
    tmp[4] = currImg.attr('src');
    tmp[0].src = path+'_80.png';
    tmp[1].src = path+'_60.png';
    tmp[2].src = path+'_40.png';
    tmp[3].src = path+'_20.png';
    alphaImgs[iCurrImg] = tmp;
  }
  */
  next.removeClass('showBack');
  next.addClass('show');
  //Get next image caption
  var title = next.find('img').attr('title');
  var desc = next.find('img').attr('alt');
  var button = next.find('a').attr('title');
  var href = next.find('a').attr('href');
  $('#slideshowCaption h3').html(title);
  $('#slideshowCaption p').html(desc);
  $('#slideshowButton a').html(button);
  $('#slideshowButton a').attr('href',href);

  if(next.next().attr('id') == 'slideshowCaption'){
    var next = $('ul.slideshow li:first');
  }else{
    var next = next.next();
  }
  next.addClass('showBack');
  
  timer = setTimeout('gallery()',slideSpeed);
}