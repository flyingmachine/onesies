$(function(){
  $(".needs-confirmation-wrapper").toggle(
    function() {
      var borderColor = "#ff8873"
      $(this).animate({ 
        backgroundColor: "#ffbca7", 
        borderLeftColor: borderColor,
        borderTopColor: borderColor,
        borderRightColor: borderColor,
        borderBottomColor: borderColor,
        width: "300", 
        height:"165px", 
        top:"-=35"
      }, {
        duration: 500,
        complete: function() {
          $(this).children(".explanation, .confirm-wrapper").show();
        }
      });
      
    },function() {
      $(this).children(".explanation, .confirm-wrapper").hide();
      var borderColor = "#ffd7a4"
      $(this).animate({
        backgroundColor: "#ffdec8", 
        borderLeftColor: borderColor,
        borderTopColor: borderColor,
        borderRightColor: borderColor,
        borderBottomColor: borderColor,
        width: "100", 
        height:"20px", 
        top:"0", 
        marginBottom:"0" }, {
          duration: 500,
        });
    });
    
})