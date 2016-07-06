/**
 * Created by jorge on 05/07/2016.
 */

var demonstrando = false; //serve para não executar a função de retirar da sequencia quando é iniciada a sequencia
var sequencia_array = []; //array com as teclas que devem ser apertadas para acertar a sequencia
var fase = 1; //fase inicial

$(document).ready(function () {
    $('#launchpad_table td').click(function(){
        /*if($(this).css("background-color") == "rgb(255, 192, 203)")
        {
            $(this).css("background-color", "white");
        }
        else {
            $(this).css("background-color", "pink");
            console.log("teste");
        }*/




        //esta parte do código  serve para identificar o "numero" da tecla
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        var numero = row * 8 + col + 1;

        $(this).effect("highlight", {color: "#F" + (numero+10)}, 100); //esta função serve para piscar quando clica na tecla


        //esta parte do código serve para tocar o audio referente a tecla que foi clicada
        if(numero < 10 ) var audio = new Audio('audio/0' + numero + '.wav');
        else  var audio = new Audio('audio/' + numero + '.wav');
        audio.play();

        //a variável demonstrando serve para não executar esta função conforme é criado a sequencia
        if(sequencia_array.length != 0 && demonstrando == false)
        {
            if(numero == sequencia_array[0])
            {
                sequencia_array.shift(); //esta funcção retira o primeiro item da sequencia do array
                if(sequencia_array.length == 0) // caso não tenha mais nada na sequencia , passou de fase
                {
                    fase += 1;
                    iniciar_jogo();
                }
            }
            else
            {
                alert("você errou a nota");
                fase = 1;  //volta para primeira fase
            }
        }
    });

});


function iniciar_jogo() {

    demonstrando = true;


    //o setTimeout faz com que a função rode depois de X segundos, porém , o javascript ja pega a outra linha
    //de execução quando executa isto, logo , o tempo do delay tem que ir aumentando para ficar de forma que não toque tudo ao mesmo tempo.
    if(fase == 1) {
        setTimeout(function () {
            $("#botao_02").trigger("click")
        }, 1000);
        setTimeout(function () {
            $("#botao_01").trigger("click")
        }, 1000 + 500 * 1);
        setTimeout(function () {
            $("#botao_02").trigger("click")
        }, 1000 + 500 * 2);
        setTimeout(function () {
            $("#botao_01").trigger("click")
        }, 1000 + 500 * 3);
        setTimeout(function () {
            $("#botao_03").trigger("click")
        }, 1000 + 500 * 4);
        setTimeout(function () {
            demonstrando = false;
        }, 1000 + 500 * 5);


        sequencia_array = [2, 1, 2, 1, 3];
    }
    if(fase == 2) {
        setTimeout(function () {
            $("#botao_02").trigger("click")
        }, 1000);
        setTimeout(function () {
            $("#botao_01").trigger("click")
        }, 1000 + 500 * 1);
        setTimeout(function () {
            $("#botao_02").trigger("click")
        }, 1000 + 500 * 2);
        setTimeout(function () {
            $("#botao_01").trigger("click")
        }, 1000 + 500 * 3);
        setTimeout(function () {
            $("#botao_03").trigger("click")
        }, 1000 + 500 * 4);
        setTimeout(function () {
            demonstrando = false;
        }, 1000 + 500 * 5);


        sequencia_array = [2, 1, 2, 1, 3,2, 1, 2, 1, 3];
    }

    if(fase == 3) {
        setTimeout(function () {
            $("#botao_04").trigger("click")
        }, 1000);
        setTimeout(function () {
            $("#botao_05").trigger("click")
        }, 1000 + 500 * 1);
        setTimeout(function () {
            $("#botao_04").trigger("click")
        }, 1000 + 500 * 2);
        setTimeout(function () {
            $("#botao_05").trigger("click")
        }, 1000 + 500 * 3);
        setTimeout(function () {
            $("#botao_06").trigger("click")
        }, 1000 + 500 * 4);
        setTimeout(function () {
            demonstrando = false;
        }, 1000 + 500 * 5);


        sequencia_array = [2, 1, 2, 1, 3,2, 1, 2, 1, 3,4,5,4,5,6];
    }


    //última fase, estava sem saco para fazer o resto da música.
    if(fase == 4)
    {
        alert('Parabéns, você completou o jogo');
        fase = 1;
    }

    /*    setTimeout($("#botao_01").trigger("click"), 2000);
        setTimeout($("#botao_02").trigger("click"), 3000);
        setTimeout($("#botao_01").trigger("click"), 4000);
        setTimeout($("#botao_03").trigger("click"), 5000);*/

}