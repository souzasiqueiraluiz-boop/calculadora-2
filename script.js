function adicionar(valor){
    document.getElementById("visor").value += valor;
}

function limpar(){
    document.getElementById("visor").value = "";
}

function calcular(){
    let visor = document.getElementById("visor");

    try{
        visor.value = eval(visor.value);
    }catch{
        visor.value = "Erro";
    }
}