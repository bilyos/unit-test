// ------ Exercice 1 ------
export const arrondirEuler = (nombre)=>  Math.round(nombre * 10000) / 10000;


// ------ Exercice 2 ----------

export const findMax= (array)=> array.forEach(element => {
  let max = [0]
  if(element > max) return max = element
});


// ------ Exercice 3 -----
export const genererFacture = (quantite, produit, prixUnitaire)=> facture = `Vous avez acheté ${quantite} unités de ${produit} pour un total de $${quantite * prixUnitaire}`;
     

// --------- Exercice 4 ------
export const fusionnerEtTrier = (tableau1, tableau2)=> tableau1.concat(tableau2)
    

//  ------ Exercice 5 --------
export const getInfoVehicule = (car)=> {
  return  {make, model, year = "2024"} = car;
}


//------ Exercice 6-----------
export const calculerArea = (radius) =>  !radius ? "Radius is missing!" : radius * radius * Math.PI; ;
   

// ----- Exercice 7 ------
export const average = (tableau) => {
  const sum = tableau.reduce((acc, curr) => acc + curr, 0);
  return Math.round((sum / numbers.length) * 100) / 100;
};
 

// -------- Exercice 8 ---------

export const inverserOrdre = ()=> items.map((item) => item.reverse());
     

// -------- Exercice 9 ---------
 
export const  filtrerParPage = ()=> tableau.filter((element) => element.page > 300);
  
  
// ----------- Exercice 10 --------
export const fetchData =()=> {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
      setTimeout(() => { resolve("Données récupérées avec succès !");
      }, delay);
    });
  }

