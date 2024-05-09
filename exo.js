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




  //------------------------------- LOT 2 ---------------------------------------



// ----------- EXERCICE 1 -----------------

const input = document.getElementById("usernumber");
const nombreAleatoire = Math.floor(Math.random() * 10) + 1;

input.addEventListener("input", () => {
  const valeuruser = parseInt(input.value);
  if (valeuruser === nombreAleatoire) {
    alert("Bon travail");
  } else {
    alert("Ne correspond pas");
  }
});

//---------- EXERCICE 2 ---------------
export const nextChrismas = () => {
  const dateActuelle = new Date();
  const anneeActuel = dateActuelle.getFullYear();
  const prochainNoel = new Date(anneeActuel, 11, 25);
  const unjourEnSeconde = 24 * 60 * 60;
  const diffenSeconde = prochainNoel - dateActuelle;
  const jourRestant = Math.ceil(diffenSeconde / unjourEnSeconde);

  return jourRestant;
};

//------------- EXERCICE 3 -----------------
export const mulDiv = (num1, num2) => {
  if (num1 && num2 > 0) {
    return `la mutiliplication des 2 nombre est : ${
      num1 * num2
    } et la div est: ${num1 / num2}`;
  } else if (num1 === undefined || num2 === undefined) {
    return "Les deux nombres doivent être définis.";
  } else {
    return "Les deux nombres doivent être supérieurs à zéro.";
  }
};


//-------------- EXERCICE 4 ----------------

 export const longuestString = (tableau) => {
  let laplusLongueChaine = "";
  tableau.foreach((item) => {
    if (item.length > laplusLongueChaine.length) {
      laplusLongueChaine = item;
    }
  });
  return laplusLongueChaine;
};

//----------- EXERCICE 5 ------------------
 export const largestEvenNumber = (tableau) => {
  let leplusgrdNombrePaire = 0;
  tableau.foreach((item) => {
    if (item % 2 === 0 && item > leplusgrdNombrePaire) {
      leplusgrdNombrePaire = item;
    }
  });
  return leplusgrdNombrePaire;
};

//------------- EXECICE 6 ------------
 export const removeCharacter = (chaine) => {
  let nbreOcc = {};
  for (let i = 0; i < chaine.length; i++) {
    const character = chaine[i];
    nbreOcc[character] = (nbreOcc[character] || 0) + 1;
  }
  const resultat = chaine
    .split("")
    .filter((character) => nbreOcc[character] === 1)
    .join("");
  return resultat;
};

//---------- EXERCICE 7 -------------
export const cubenumber = (nombre) => {
  let sum = 0;
  for (let i = 1; i < nombre; i++) {
    sum += Math.pow(nombre, 3);
  }
  return sum;
};

//---------- EXERCICE 8-------------------
export const compare = (obj1, obj2) => {
  return obj1.property.value === obj2.property.value;
};


//------------ EXERCICE 9 ---------------

 export const functionFilter = (tableau, valeursfiltrer) => {
  return tableau.filter((item) => !valeursfiltrer.includes(item));
};

//----------- EXERCICE 10 --------------------
export const functionExtract = (tableau, valeuraSupp) => {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeuraSupp) {
      tableau.splice(i, 1);
      i--; 
    }
  }
};


//------------ EXERCICE 11---------------------

const student = {
  ame: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(student);
delete student.rollno;
console.log(student);

//--------- EXERCICE 12 -------------------

class volume {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  calculerVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}

//-------------- EXERCICE 13 ---------------

 export const createClock = () => {
  const nouvelDate = new Date();
  const heure = nouvelDate.getHours;
  const minute = nouvelDate.getMinutes;
  const seconde = nouvelDate.getSeconds;
  return (`${heure}:${minute}:${seconde}`);
};

//--------------- EXERCICE 14 ----------------
 export const lowerCaseFunction = (chaine) => {
  return chaine === chaine.toLowerCase();
};

//--------------- EXERCICE 15 -----------------
 export const add = (param1, param2) => {
  return new Promise((resolve, reject) => {
    if (param1 === undefined || param2 === undefined) {
      reject("doit entrer les paramètres");
    } else {
      const result = param1 + param2;
      resolve(result);
    }
  });
};

