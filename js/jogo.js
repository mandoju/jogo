/**
 * Created by jorge on 05/07/2016.
 */


$(document).ready(function () {
    $('#launchpad_table td').click(function(){
        if($(this).css("background-color") == "rgb(255, 192, 203)")
        {
            $(this).css("background-color", "white");
        }
        else {
            $(this).css("background-color", "pink");
            console.log("teste");
        }



        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        var numero = row * 8 + col + 1;
        if(numero < 10 ) var audio = new Audio('audio/0' + numero + '.wav');
        else  var audio = new Audio('audio/' + numero + '.wav');
        audio.play();

    });

});


function iniciar_jogo()
{
    var audio = new Audio('audio/01.wav');
    audio.play();

}