
var readline = require('readline')
var entradadedados = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})
   
var resultado
entradadedados.question('Insira o primeiro numero de entrada de dados:' , function(primeiro){
   let num1 = String(primeiro).replace(',', '.')
   entradadedados.question('Insira o segundo numero de entrada de dados:' , function(segundo){
      let num2 = String(segundo).replace(',', '.')
      entradadedados.question(`Escolha um numero para qual operaçao matematica voce deseja realizar
      OPERAÇÕES 
      1 soma
      2 subtração
      3 multiplicação
      4 divisão
      
      `, function (escolha){
         let operacao = escolha

         if(num1 == '' || num2 == ''){
            console.log('ERRO: É obrigatorio o preenchimento de todas as entradas de dados.')
         }else if(isNaN(num1) == true || isNaN(num2) == true){
            console.log ('ERRO: É obrigatorio somente a entrada de numeros')

         }else if (num2 == 0 && operacao == 4){
            console.log('É inviável dividir o numero por zero')

         }else if(operacao != 1 && operacao != 2 && operacao !=3 && operacao !=4 ){
            console.log('ERRO: Não é permitido outras operacoes que nao sejam 1,2,3,4.')

         }else if(operacao == 1){
            var resultado = Number(num1) + Number(num2)
         console.log('O resultado da soma é:' + resultado.toFixed(2))

         }else if(operacao == 2){
            var resultado = Number(num1) - Number(num2)
         console.log('O resultado da subtração é:' + resultado.toFixed(2))
         }else if(operacao == 3){
            var resultado = Number(num1) * Number(num2)
            console.log('O resultado da multiplicação é:' + resultado.toFixed(2))
         }else if(operacao == 4){
            var resultado = Number(num1) / Number(num2)
         console.log('O resultado da divisão é:'+ resultado.toFixed(2))
         }
      
      })
    
   })

})




   
