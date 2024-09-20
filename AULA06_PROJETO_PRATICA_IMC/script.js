//IMC
/*ABAIXO DE 17 - MUITO ABAIXO DO PESO
ENTRE 17 E 18,49 - ABAIXO DO PESO
ENTERE 18,50 E 24,99 - PESO NORMAL
ENTRE 25 E 29,99 - ACIMA DO PESO
A PARTIR DE 30 - OBESIDADE

IMC = PESO/(ALTURA*ALTURA)
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    alert("teste");
    event.preventDefault();

    peso=document.getElementById('peso').value
    altura=document.getElementById('altura').value

    //testar a recepção das informações

    console.log(peso)
    console.log(altura)

    //calculo de IMC

    imc=peso/(altura*altura)
    console.log(imc);
    resultado.document.getElementById('resultado');

    if(imc<17){
        resultado.innerHTML ="</br>Seu resultado foi: "+imc+"</br>Cuidado você está muito abaixo do peso"
    }else if(imc>17 && imc<18.5){
        resultado.innerHTML ="</br>Seu resultado foi: "+imc+"</br>Cuidado você está abaixo do peso"
    }else if(imc>18.50 && imc<24.99){
        resultado.innerHTML ="</br>Seu resultado foi: "+imc+"</br> você está com o peso normal"
    }else if(imc>25 && imc<29.99){
        resultado.innerHTML ="</br>Seu resultado foi: "+imc+"</br> você está acima do peso normal"
    }else if(imc<30){
        resultado.innerHTML ="</br>Seu resultado foi: "+imc+"</br> você está "
    }

    
}