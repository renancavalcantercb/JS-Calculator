var operacao = prompt("Digite 1 para fazer uma soma, 2 para subtração, 3 para multiplicação e 4 para divisão: ")

if (operacao == 1){
    var valor1 = parseInt(prompt('Digite o primeiro valor:'))
    var valor2 = parseInt(prompt('Digite o segundo valor:'))
    if(isNaN(resultado)){
        alert('Insira um número válido')
    }
    var resultado = valor1 + valor2
    document.write("<h2>" + valor1 +" + "+ valor2 + ' = ' +  resultado + "</h2>")
}
else if(operacao == 2){
    var valor1 = parseInt(prompt('Digite o primeiro valor:'))
    var valor2 = parseInt(prompt('Digite o segundo valor:'))
    var resultado = valor1 - valor2
    if(isNaN(resultado)){
        alert('Insira um número válido')
    }
    document.write("<h2>" + valor1 +" - "+ valor2 + ' = ' +  resultado + "</h2>")
}
else if(operacao == 3){
    var valor1 = parseInt(prompt('Digite o primeiro valor:'))
    var valor2 = parseInt(prompt('Digite o segundo valor:'))
    if(isNaN(resultado)){
        alert('Insira um número válido')
    }
    var resultado = valor1 * valor2
    document.write("<h2>" + valor1 +" * "+ valor2 + ' = ' +  resultado + "</h2>")
}
else if(operacao == 4){
    var valor1 = parseInt(prompt('Digite o primeiro valor:'))
    var valor2 = parseInt(prompt('Digite o segundo valor:'))
    if(isNaN(resultado)){
        alert('Insira um número válido')
    }
    var resultado = valor1 / valor2
    document.write("<h2>" + valor1 +" / "+ valor2 + ' = ' +  resultado + "</h2>")
}
else{
    document.write("<h2>" + 'Opção Inválida' + "</h2>" )
}