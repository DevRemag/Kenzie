function snapCrackle(valorMaximo){
    let valor = "";
    let contador = [];

    for(let a = 1; a <= valorMaximo; a++){
        valor = a;
        if(a % 2 == 1 && a % 5 == 0){
            valor = "snapCrackle";
        }else if(a % 5 == 0){
            valor = "crackle"
        }else if(a % 2 == 1){
            valor = "snap";
        }else if(a % 1 === 0){
            valor = "prime"
        }
        contador.push(valor);
    }
    return contador.join(", ");
}

console.log(snapCrackle(12));