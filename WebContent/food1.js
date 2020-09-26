$( document ). ready(function() {
    $("#gobtn").click(function(){
        $('#float *').remove();
        $('#gobtn').remove();
        var $foodimgl = $("<img src='신림먹방특공대/점포1.jpeg'/>");
        var $foodimgr = $("<img src='신림먹방특공대/점포1.jpeg'/>");
        $('#float').append($foodimgl);
        $('#float').append($foodimgr);
    });
    
});