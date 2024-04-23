// ------ Exercice 1 ------
function arrondirEuler(nombre) {
  return Math.round(nombre * 10000) / 10000;
}



// ------ Exercice 2 ----------

const findMax= ()=>{
  const max = Math.max(...number =[1, 4, 8, 9])
  return max;

}


// ------ Exercice 3 -----
function genererFacture(quantite, produit, prixUnitaire) {
    const facture = `Vous avez acheté ${quantite} unités de ${produit} pour un total de $${quantite * prixUnitaire}`;
    return facture;
}

// --------- Exercice 4 ------
function fusionnerEtTrier(tableau1, tableau2) {
    const tableauCombine = [...tableau1, ...tableau2];
    const tableauTrie = tableauCombine.sort();
    return tableauTrie;
}

//  ------ Exercice 5 --------
function getInfoVehicule({make, model, year = "2024"}) {
  return {make, model, year};
}
const car = {make: "Mercedes", model: "Maybach"};
const {make, model, year} = getInfoVehicule(car);


//------ Exercice 6-----------
const calculerArea = (radius) => {
  if (!radius) {
    return "Radius is missing!";
  } else {
    const area = radius * radius * Math.PI;
    return  area;
  }
};


// ----- Exercice 7 ------
const average = (number=[1, 3, 4, 5])=> {
    let sum =0;
    for(let i =0; i< number.length; i++)
    {sum += number[i]}
    return Math.round((sum / number.length) * 100) / 100;
    };
 

// -------- Exercice 8 ---------

function inverserOrdre( items = ["Rolls Royce", "Ferrari", "Mercedes", "Maserati", "Aston Martin", "Audi"]) {
    return items.map((item) => item).reverse();
}


// -------- Exercice 9 ---------
 
function filtrerParPage([]) {
  const tableau  =  [
    {  titre : "jeune millionnaire" ,  page : 250  } ,
    {  titre : "40 ans de prison" ,  page : 310  } ,
    {  titre : "Reflechir" ,  page : 300  } ,
    {  titre : "48 loi du pouvoir" ,  page : 500  } ,
  ] ;
  return tableau.filter((element) => element.page > 300);
}

  

// ----------- Exercice 10 --------
function fetchData() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
      setTimeout(() => { resolve("Données récupérées avec succès !");
      }, delay);
    });
  }

  module.exports = {arrondirEuler, findMax, genererFacture, fusionnerEtTrier, calculerArea, average, inverserOrdre, filtrerParPage, fetchData}