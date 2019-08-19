var currentSlide;

$(".timeline-point").click(function() {

  var numberOfSlides = 5;
  var contentWidth = $("#timeline-copy-container").outerWidth();
  var clickedPointId = event.target.id;
  var slideAmount = (clickedPointId - 1) * contentWidth * -1;
  var selectedPointPosition = $('#'+ clickedPointId).position().left;

  $('#timeline-fill').css('width', selectedPointPosition)

  for(var i = clickedPointId; i < 5; i++) {
    $(".timeline-point").eq(i).removeClass('selected');
  }

  for(var j = clickedPointId -1 ; j >= 1; j--) {
    $(".timeline-point").eq(j).addClass('selected');
  }




  currentSlide = clickedPointId;


  $('#timeline-copy-container').css('transform', 'translateX(' + slideAmount + 'px)');
});


$(window).on('resize', function(){
    var contentWidth = $("#timeline-copy-container").outerWidth();
  var clickedPointId = event.target.id;
  var slideAmount = (clickedPointId - 1) * contentWidth * -1 - 50;

  $('#timeline-copy-container').css('transform', 'translateX(' + slideAmount + 'px)');
});
