function Calcular(){
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resp = document.getElementById('res');

    let imc = peso / (altura * altura);
    let imcIdeal = (peso * 18.5) / imc; 
    let idealKg = "";
    
    if(imcIdeal > peso){
        idealKg = imcIdeal - peso;
    }else{
        idealKg = peso - imcIdeal;
    }
    
    if(imc < 18.5){
        resp.innerText = "Você está abaixo do peso!!! \n";
    }else if(imc >= 18.5 && imc < 25){
        resp.innerText = "Você está com o peso normal.\n";
    }else if(imc >=25 && imc < 30){
        resp.innerText = "Você está acima do peso.\n";
    }else if(imc >= 30 && imc < 40){
        resp.innerText = "Você está obeso!!!, larga o BigMac.\n" ;
    }else{
        resp.innerText = "Você está com obesidade grave, grandes chances de você ser a taís carla ou um planeta novo.\n";
    }
    
    if(imc >=18.5){
        resp.innerText += "Teu IMC é " + imc.toFixed(2) + " gordão.\n";
        resp.innerText += "Já teu peso deveria ser " + imcIdeal.toFixed(2) + " Kg.\n";
        resp.innerText += "Se quiser ficar no shape pro verão vai ter que emagrecer " + idealKg.toFixed(2) + " Kg.";
    
    }else{
        resp.innerText += "Teu IMC é " + parseFloat(imc.toFixed(2)) + ". " + "\n Já teu peso deveria ser " + parseFloat(imcIdeal.toFixed(2)) + " Kg."
        + "\n Agora se quiser sair do modo caveira, vai ter que comer uns BigMac pra pegar mais " + parseFloat(idealKg.toFixed(2)) + " Kg.";
    }
}





