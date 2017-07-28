$(document).ready(function() {
    
    $("#houses img").click(function(){
        var houseid = $(this).attr("id");

        $.get('https://anapioficeandfire.com/api/houses/'+houseid+'' , function(res) {
            //name
            var html_str = "<p>" + res.name + "</p>";
            //words
            html_str += "<p>" + res.words + "</p>";
            //titles
            html_str += "<p>Titles: ";
            for(var i = 0; i < res.titles.length; i++) {
            html_str += res.titles +", ";
            }
            html_str += "</p>";

            $("#hdetails").html(html_str);

        }, "json");
   
    });


});

