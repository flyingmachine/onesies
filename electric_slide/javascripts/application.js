$(function(){  
  function trueSlideFunction(slide){
    return true;
  }
  
  var settings = {
    slideIdentifier          : ".slide",
    slideContainerIdentifier : "#slides",
    shouldInsertHeader       : true,
    showFunction             : function(){$(this).show()},
    hideFunction             : function(){$(this).hide()},
    slideWillGetFocus        : trueSlideFunction,
    slideDidGetFocus         : trueSlideFunction,
    slideWillLoseFocus       : trueSlideFunction,
    slideDidLoseFocus        : trueSlideFunction
  }
  
  var slides = $(settings.slideIdentifier);
  var slideContainer = $(settings.slideContainerIdentifier)
  var currentSlidePosition = 0;
  
  // Set slide container height
  var maxHeight = 0;
  var maxTopMargin = 0;
  var maxBottomMargin = 0;
  var maxTopPadding = 0;
  var maxBottomPadding = 0;
  var maxTopBorder = 0;
  var maxBottomBorder = 0;
  function findMaxDimensions(slideElem) {
    var height = $(slideElem).height();
    if(height > maxHeight) maxHeight = height;
    
    // margins
    var margins = $(slideElem).margin();
    
    var topMargin = margins.top;
    if(topMargin > maxTopMargin) maxTopMargin = topMargin;
    
    var bottomMargin = margins.bottom;
    if(bottomMargin > maxBottomMargin) maxBottomMargin = bottomMargin;
    
    // padding
    var padding = $(slideElem).padding();
    
    var topPadding = padding.top;
    if(topPadding > maxTopPadding) maxTopPadding = topPadding;
    
    var bottomPadding = padding.bottom;
    if(bottomPadding > maxBottomPadding) maxBottomPadding = bottomPadding;
    
    
    // border
    var border = $(slideElem).border();
    
    var topBorder = border.top;
    if(topBorder > maxTopBorder) maxTopBorder = topBorder;
    
    var bottomBorder = border.bottom;
    if(bottomBorder > maxBottomBorder) maxBottomBorder = bottomBorder;
  }
  
  function slideWidth() {
    return $("#slides").width()
  }
  
  function insertHeader(slideElem){
  }
  
  function currentSlide() {
    return slides[currentSlidePosition][0];
  }
  
  function maxSlidePosition() {
    return slides.size();
  }
  
  // setup slides
  slides.each(function(i, el){
    if(settings.shouldInsertHeader) insertHeader(this);
    $(this).width(slideWidth());
    findMaxDimensions(el);
    
    if(i == 0) {
      $(this).show();
    }
    
    this.show = settings.showFunction;
    this.hide = settings.hideFunction;
    this.willGetFocus  = settings.slideWillGetFocus;
    this.didGetFocus   = settings.slideDidGetFocus;
    this.willLoseFocus = settings.slideWillLoseFocus;
    this.didLoseFocus  = settings.slideDidLoseFocus;
  })
  $("#slides").height(maxHeight + maxTopMargin + maxBottomMargin + maxTopPadding + maxBottomPadding + maxTopBorder + maxBottomBorder)
  
  // Navigation
  function showSlide(newSlidePosition) {
    var oldSlide = slides[currentSlidePosition];
    var newSlide = slides[newSlidePosition];
    
    if(!newSlide) {
      return false;
    }
    
    if(!oldSlide.willLoseFocus()) {
      return false;
    }
    oldSlide.hide();
    oldSlide.didLoseFocus();
    
    // should I really be doing this?
    if(!newSlide.willGetFocus()) {
      return false;
    }
    newSlide.show();
    newSlide.didGetFocus();
    currentSlidePosition = newSlidePosition;
  }
  
  function showNextSlide() {
    newSlidePosition = currentSlidePosition + 1;
    if(newSlidePosition <= maxSlidePosition()) {
      showSlide(newSlidePosition)
    }
  }
  
  function showPreviousSlide() {
    newSlidePosition = currentSlidePosition - 1;
    if(newSlidePosition >= 0) {
      showSlide(newSlidePosition)
    }
  }
  
  jQuery.easing.def = "easeOutQuart";
  slideContainer.click(function(){
    showNextSlide();
  })
})