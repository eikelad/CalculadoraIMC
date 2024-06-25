const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc(){
 const nome = document.getElementById('nome').value;
 const altura = +document.getElementById('altura').value;
 const peso = +document.getElementById('peso').value;
 const resultado = document.getElementById('resultado');

    if(nome!='' && altura!='' && peso!=''){
        const valor = (peso/(altura*altura)).toFixed(1);

    let classificacao = '';

    if(valor<18.5){
        classificacao = 'abaixo do peso!';
    }
    else if(valor<25){
        classificacao = 'peso normal!';

    }
    else if(valor<30){
        classificacao = 'acima do peso!';
        
    }
    else if(valor<35){
        classificacao = 'obesidade nivel 1!';
        
    }
    else if(valor<40){
        classificacao = 'obesidade nivel 2!';
        
    }
    else{
        classificacao = 'obesidade nivel 3!';
    }

    resultado.textContent = `Olá, ${nome} seu imc é ${valor} e sua classificação é ${classificacao}`;

}  
    else{
    resultado.textContent = 'Não foi fornecido corretamente os dados!';

}




}

