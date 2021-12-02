
 function nota3(){

 
 let notas  = parseFloat(document.getElementById('notas').value);
 let notas2 = parseFloat(document.getElementById('notas2').value);
 let resultado= document.getElementById('resultado')
 let calcular = parseFloat(notas + notas2) / 2

 if(calcular > 9){
     resultado.innerHTML=(`suas notas são ${notas} e ${notas2}, sua media é ${calcular} , seu conceito é A, parabéns foi voce aprovado`)
 }else if (calcular>= 7.5 && calcular <= 8.9){
     resultado.innerHTML=(`suas notas são ${notas} e ${notas2}, sua media é ${calcular} , seu conceito é B, parabéns foi voce aprovado`)
 }else if (calcular>= 6 && calcular <=7.4){
     resultado.innerHTML=(`suas notas são ${notas} e ${notas2}, sua media é ${calcular} , seu conceito é C, parabéns foi voce aprovado`)
 }else if (calcular>= 4 && calcular <=5.9){
     resultado.innerHTML=(`suas notas são ${notas} e ${notas2}, sua media é ${calcular} , seu conceito é D,  foi voce reprovado`)
 } else if (calcular <=3.9 ){
     resultado.innerHTML=(`suas notas são ${notas} e ${notas2}, sua media é ${calcular} , seu conceito é E,  foi voce reprovado`)
 }



}

