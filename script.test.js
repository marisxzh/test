// Função para somar dois números
function adicionar(a,b){
    return a + b;
}

//função para calcular o dobro do número
function calcularDobro(valor){
    return valor * 2;
}

// TESTE DE INTEGRAÇÃO
describe("Teste de integração", function() {
    it("deve somar dois números e calcular o dobro", function() {
        const resultadoSoma = adicionar(2,3);
        const resultadoDobro = calcularDobro(resultadoSoma)
        //Verifica se o dobro está correto
        expect(resultadoDobro).toBe(10)
    });

    it("deve calcular o dobro mesmo com número negativos", function(){
        const resultadoSoma = adicionar(-2,-3);
        const resultadoDobro = calcularDobro(resultadoSoma);

        expect(resultadoDobro).toBe(-10);
    });
});


// função para concatenar duas partes de texto
function concatenarTexto(parte1, parte2) {
    return parte1 + ' ' + parte2;
}

// função para deixar os textos maiúsculos
function converter(texto) {
    return texto.toUpperCase();
}

//TESTE
describe("Segundo teste de integração", function(){
    it("Deve juntar dois textos e deixar maiúsculo", function() {
        const texto = concatenarTexto("tudo", "bem");
        const textoMaiusculo = converter(texto);

        //Verifica se deu certo
        expect(textoMaiusculo).toBe("TUDO BEM");
    });

    it("Deve lidar com String vazia", function() {
        const texto = concatenarTexto("", "teste");
        const textoMaiusculo = converter(texto)

        expect(textoMaiusculo).toBe(" TESTE")
    })
})

//EXERCÍCIO 1

//função para somar as notas
function somarNotas(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4)
    
}

//função para calcular a média das notas
function calcularMedia(somaDasNotas, quantidadeDeNotas) {
    const media = somaDasNotas / quantidadeDeNotas
    var resultado
    if (media >= 6){
        resultado = "aprovado"
    } else if (media < 6){
        resultado = "reprovado"
    }

    return (resultado)
}

//TESTE DE VERIFICAÇÃO
describe("teste de cálculo de média", function(){
    it("deve efetuar a soma das quatro notas", function(){
        const somaDasNotas = somarNotas(7,3,10,9)

        expect(somaDasNotas).toBe(29)
    })
    it("deve apresentar que o aluno está aprovado", function(){
        const somaDasNotas = somarNotas(9,5,10,4)
        const resultado = calcularMedia(somaDasNotas, 4)

        expect (resultado).toBe("aprovado")
    })
    it("deve apresentar que o aluno está reprovado", function(){
        const somaDasNotas = somarNotas(9,1,5,5)
        const resultado = calcularMedia(somaDasNotas, 4)
        
        expect(resultado).toBe("reprovado")
    })
})


// EXERCÍCIO 2

// função para multiplicar dois números
function multiplicar(a, b){
    return a * b
}

//função para calcular o triplo de um número
function calcularTriplo (valor){
    return valor * 3
}

//TESTE DE VERIFICAÇÃO
describe("teste do triplo de um número", function(){
    it("deve, ao multiplicar dois números positivos, calcular corretamente seu triplo", function(){
        const valor = multiplicar(5,10)
        const triplo = calcularTriplo (valor)

        expect (triplo).toBe(150)
    })
    it("deve, ao multiplicar dois números negativos, calcular corretamente seu triplo", function(){
        const valor = multiplicar(-5,-10)
        const triplo = calcularTriplo(valor)

        expect (triplo).toBe(150)
    })
    it("deve, ao multiplicar um número positivo e um negativo, calcular corretamente seu triplo", function(){
        const valor = multiplicar(-5,10)
        const triplo = calcularTriplo(valor)

        expect (triplo).toBe(-150)
    })
})


//EXERCÍCIO 3

//função para calcular o desconto baseado no valor total da compra
function calcularDesconto(valorTotal){
    var desconto
    if (valorTotal <= 100) {
        desconto = 0.05;
    } else if (valorTotal > 100 && valorTotal <= 500){
        desconto = 0.10;
    } else if (valorTotal > 500){
        desconto = 0.15
    }

    return (desconto)
}

//função para aplicar o desconto ao valor total da compra
function aplicarDesconto(valorTotal, desconto){
    return valorTotal - (valorTotal * desconto)
}

//TESTE DE VERIFICAÇÃO
describe ("teste do cálculo de desconto", function(){
    it("deve aplicar o desconto de 5% corretamente", function(){
        const valorTotal = 100
        const desconto = calcularDesconto(valorTotal)
        const resultado = aplicarDesconto(valorTotal, desconto)

        expect (resultado).toBe(95)
    })
    it("deve aplicar o desconto de 10% corretamente", function(){
        const valorTotal = 500
        const desconto = calcularDesconto(valorTotal)
        const resultado = aplicarDesconto(valorTotal, desconto)

        expect (resultado).toBe(450)
    })
    it("deve aplicar o desconto de 15% corretamente", function(){
        const valorTotal = 1000
        const desconto = calcularDesconto(valorTotal)
        const resultado = aplicarDesconto(valorTotal, desconto)

        expect (resultado).toBe(850)
    })
})