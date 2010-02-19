$(function(){
  var maxHeight = 0;
  var maxTopMargin = 0;
  var maxBottomMargin = 0;
  var maxTopPadding = 0;
  var maxBottomPadding = 0;
  var maxTopBorder = 0;
  var maxBottomBorder = 0;
  
  var width = $("#slides").width()
  
  $(".slide").each(function(){
    var height = $(this).height();
    if(height > maxHeight) maxHeight = height;
    
    // margins
    var margins = $(this).margin();
    
    var topMargin = margins.top;
    if(topMargin > maxTopMargin) maxTopMargin = topMargin;
    
    var bottomMargin = margins.bottom;
    if(bottomMargin > maxBottomMargin) maxBottomMargin = bottomMargin;
    
    // padding
    var padding = $(this).padding();
    
    var topPadding = padding.top;
    if(topPadding > maxTopPadding) maxTopPadding = topPadding;
    
    var bottomPadding = padding.bottom;
    if(bottomPadding > maxBottomPadding) maxBottomPadding = bottomPadding;
    
    
    // border
    var border = $(this).border();
    
    var topBorder = border.top;
    if(topBorder > maxTopBorder) maxTopBorder = topBorder;
    
    var bottomBorder = border.bottom;
    if(bottomBorder > maxBottomBorder) maxBottomBorder = bottomBorder;
  })
  
  $("#slides").height(maxHeight + maxTopMargin + maxBottomMargin + maxTopPadding + maxBottomPadding + maxTopBorder + maxBottomBorder)
  
  $(".slide").each(function(){
    $(this).height(maxHeight)
    $(this).show();
    $(this).width(width);
  })
  jQuery.easing.def = "easeOutQuart";
  $("#slides").click(function(){
    $('#track').animate({ marginLeft: '-' + width + 'px' }, 200);
  })
})