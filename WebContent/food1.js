$( document ). ready(function() {
    $("#gobtn").click(function(){
        $('#float *').remove();
        $('#gobtn').remove();
        var $foodimg = $("<img id='foodImage' src='신림먹방특공대/점포1.jpeg'/>");
        $('#float').append($foodimg);
    });
    
});