let arreglo=[];
arreglo[0]=1.65;
arreglo[1]=1.76;
arreglo[2]=1.50;
arreglo[3]=1.94;
arreglo[4]=1.52;
arreglo[5]=2.0;
arreglo[6]=1.83;
arreglo[7]=1.79;
arreglo[8]=1.59;
arreglo[9]=1.62;

document.write(arreglo);

arreglo.push(1.75);
document.write("<br>");
document.write("elemento agregado: "+arreglo);

arreglo.pop();
arreglo.pop();
arreglo.pop();
document.write("<br>");
document.write("elementos eliminados: "+arreglo);