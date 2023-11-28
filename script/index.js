var js_qntd_horas;
var js_valor_horas;
var js_desc_inss;
var js_total_desc;
var js_sal_bruto;
var js_sal_liq;
var js_resposta = true;


// Entrda de dados:
js_qntd_horas = parseFloat(window.prompt("Informe a quantidade de horas trabalhadas no mês: (130 a 180)", "0"))
js_valor_horas= parseFloat(window.prompt("Informe o valor da hora trabalhada: (25 a 50)", "0"))
js_desc_inss = parseFloat(window.prompt("Informe o percentual de desconto do INSS: (5% a 15%): " , "0%"))

// Processamento de dados:
js_sal_bruto = js_valor_horas * js_qntd_horas
js_total_desc = (js_desc_inss/100) * js_sal_bruto
js_sal_liq = js_sal_bruto - js_total_desc

//  Saida de dados:

document.write("<p> Demonstração para cálculo de salário líquido</p>")

document.write("<p> Quantiade de horas trabalhadas no mês => </p>" + js_qntd_horas)
if (js_qntd_horas > 180){
    document.write("<b> Valor maximo excedido</b>")
} if (js_qntd_horas < 135) {
    document.write("<b> Valor mínimo excedido </b>")
} 

document.write("<p>Valor da hora trabalhada => </p>" + js_valor_horas)
if (js_valor_horas > 50) {
    document.write("<b> Valor maximo excedido </b>")
} if (js_valor_horas < 25) {
    document.write("<b> Valor mínomo excedido </b>")
}

document.write("<p>Valor de percentual de desconto do INSS => </p>" + js_desc_inss)
if (js_desc_inss > 15){
    document.write("<b> Valor máximo excedido </b>")
} if (js_desc_inss < 5){
    document.write("<b> Valor mímo excedido </b>")
}

// Saida de dados com e sem aninhamento de if:
document.write("<p>==========================================</p>")

document.write("<p> salário bruto = R$ </p>" + js_sal_bruto)
document.write("<p>Total de descontos INSS = </p>" + js_total_desc)
document.write("<p> salário líquido = R$ </p>" + js_sal_liq)

if(js_sal_liq > 10500) {
    document.write("<b> Salário elevado! Valor maior do que R$ 10500</b>")
} else {
    if(js_sal_liq > 6000) {
        document.write("<b> Salário satisfatório! Maior que R$ 6000</b>")
    } else {
        if(js_sal_liq > 3000) {
            document.write("<b> Salário moderado! Maior que R$ 3000</b>")
        } else {
            document.write("<b> Salário insastifatório! Menor ou igual a R$ 3000</b>")
        }
    }
}

do{
js_resposta = window.confirm("Deseja continuar ?");
}
while(js_resposta == true);


// switch case:             

var js_nome

function Form() {

    js_nome = parseInt(document.form_mes.f_nome.value);

    switch(js_nome) {
        case 1: document.form_mes.f_nomemes.value = "janeiro"; break;
        case 2: document.form_mes.f_nomemes.value = "fevereiro"; break;
        case 3: document.form_mes.f_nomemes.value = "março"; break;
        case 4: document.form_mes.f_nomemes.value = "Abril"; break;
        case 5: document.form_mes.f_nomemes.value = "Maio"; break;
        case 6: document.form_mes.f_nomemes.value = "Junho"; break;
        case 7: document.form_mes.f_nomemes.value = "Julho"; break;
        case 8: document.form_mes.f_nomemes.value = "Agosto"; break;
        case 9: document.form_mes.f_nomemes.value = "Setembro"; break;
        case 10: document.form_mes.f_nomemes.value = "Outubro"; break;
        case 11: document.form_mes.f_nomemes.value = "Novembro"; break;
        case 12: document.form_mes.f_nomemes.value = "Dezembro"; break;
        default: document.form_mes.f_nomemes.value = "Mês inválido!"; break;
    }

}

//Operador ternário:

var nmr = 3;

nmr > 10? document.write("sim"):document.write("nao");

// While com um laço contador:

var number = 1;

while (number < 10) {
    document.write(number)
    number = number + 1
}

// while com usuário determinando parada:

var contador = 1;
var resposta = true;

while (resposta == true) {
    document.write(contador)
    contador +=1
    resposta = window.confirm("deseja continuar ?")
}

// utilização do for:

var js_num;

for (js_num = 1; js_num <= 10; js_num  = js_num + 2) {
    document.write("<p>" + js_num)
}

// for aninhado:
for (var js_number = 1; js_number <=2; js_number++) {
    for (var js_numbertwo = 1; js_numbertwo <=3; js_numbertwo++){
        document.write(js_numbertwo)
    }
    document.write(js_number)
}

// Método confirm:
var condicao = window.confirm()

if (condicao == true) {
    window.alert("True")
} else {
    window.alert("False")
}

// Aplicando o método "toUpperCase()" em um form:
var curso_dig;

function Validar() {
    curso_dig = document.form_curso.f_cursodig.value;

    if(curso_dig.toUpperCase() == "SIST"){
        document.form_curso.f_codcurso.value = "SIST001/FB";
    }
    else {
        window.alert("Curso inválido")
    }
}




























