const cl = console.log;

const fpara= document.getElementById("fpara");
const spara= document.getElementById("spara");
const tpara= document.getElementById("tpara");
const fopara= document.getElementById("fopara");
const fipara= document.getElementById("fipara");
const sipara= document.getElementById("sipara");
const separa= document.getElementById("separa");
const epara= document.getElementById("epara");


let noary = [11,12,13,14,15,16,17,18,19,20];


let doublenoary = noary.map (num => num * 2)

fpara.innerHTML = doublenoary;



let triplenoary = noary.map (num => num * 3)

spara.innerHTML = triplenoary;



let quadruplenoary = noary.map (num => num * 4)

tpara.innerHTML = quadruplenoary;



let quintuplenoary = noary.map (num => num * 5)

fopara.innerHTML = quintuplenoary;




let sextuplenoary = noary.map (num => num * 6)

fipara.innerHTML = sextuplenoary;




let septuplenoary = noary.map (num => num * 7)

sipara.innerHTML = septuplenoary;




let octuplenoary = noary.map (num => num * 8)

separa.innerHTML = octuplenoary;




let nontuplenoary = noary.map (num => num * 9)

epara.innerHTML = nontuplenoary;