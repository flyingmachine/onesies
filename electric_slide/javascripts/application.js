$(function(){
  // // I'm not sure this is even necessary...
  // var maxHeight = 0;
  // var maxTopMargin = 0;
  // var maxBottomMargin = 0;
  // var maxTopPadding = 0;
  // var maxBottomPadding = 0;
  // var maxTopBorder = 0;
  // var maxBottomBorder = 0;
  // function findMaxDimensions(slideElem) {
  //   var height = $(this).height();
  //   if(height > maxHeight) maxHeight = height;
  //   
  //   // margins
  //   var margins = $(this).margin();
  //   
  //   var topMargin = margins.top;
  //   if(topMargin > maxTopMargin) maxTopMargin = topMargin;
  //   
  //   var bottomMargin = margins.bottom;
  //   if(bottomMargin > maxBottomMargin) maxBottomMargin = bottomMargin;
  //   
  //   // padding
  //   var padding = $(this).padding();
  //   
  //   var topPadding = padding.top;
  //   if(topPadding > maxTopPadding) maxTopPadding = topPadding;
  //   
  //   var bottomPadding = padding.bottom;
  //   if(bottomPadding > maxBottomPadding) maxBottomPadding = bottomPadding;
  //   
  //   
  //   // border
  //   var border = $(this).border();
  //   
  //   var topBorder = border.top;
  //   if(topBorder > maxTopBorder) maxTopBorder = topBorder;
  //   
  //   var bottomBorder = border.bottom;
  //   if(bottomBorder > maxBottomBorder) maxBottomBorder = bottomBorder;
  // }
  // $("#slides").height(maxHeight + maxTopMargin + maxBottomMargin + maxTopPadding + maxBottomPadding + maxTopBorder + maxBottomBorder)
  
  var slideIdentifier = ".slide";
  var slideContainerIdentifier = "#slides";
  var shouldInsertHeader = true;
  var currentSlide = 0;
  var slides = $(slideIdentifier);
  var slideContainer = $(slideContainerIdentifier);
  
  function slideWidth() {
    return $("#slides").width()
  }
  
  function insertHeader(slideElem){
  }
  
  // setup slides
  slides.each(function(i){
    if(shouldInsertHeader) insertHeader(this);
    $(this).width(slideWidth());
    $(this).show();
    this.slidePosition = i;
  })
  
  // Navigation
  function showSlide(slidePosition) {
    
  }
  
  jQuery.easing.def = "easeOutQuart";
  slideContainer.click(function(){
    $('#track').animate({ marginLeft: '-' + slideWidth() + 'px' }, 200);
  })
})