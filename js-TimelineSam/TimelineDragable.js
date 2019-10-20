$(function(){
  var curDown = false,
      curYPos = 0,
      curXPos = 0;
  $(".timelineTableContainer").mousemove(function(m){
    if(curDown === true){
     $(".timelineTableContainer").scrollTop($(".timelineTableContainer").scrollTop() + (curYPos - m.pageY/50)); 
     $(".timelineTableContainer").scrollLeft($(".timelineTableContainer").scrollLeft() + (curXPos - m.pageX/50));
    }
  });
  
  $(".timelineTableContainer").mousedown(function(m){
    curDown = true;
    curYPos = m.pageY/50;
    curXPos = m.pageX/50;
  });
  
  $(".timelineTableContainer").mouseup(function(){
    curDown = false;
  });
})