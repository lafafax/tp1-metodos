let citricos=[];
let pepita=[];

for (let i=0;i<5;i++){
    var fruta=prompt("ingrese el nombre de la fruta")
    var tipo=prompt("ingrese si es c si es citrico o p si es pepita");
    if(tipo=="c"){
        citricos.push(fruta);
    }
    else if (tipo=="p"){
        pepita.unshift(fruta);
    }
}
document.write("Los citricos son: "+citricos);
document.write("<br>");
document.write("Los pepita son: "+pepita);
