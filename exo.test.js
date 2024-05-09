// ----------- Exercice 1 -----------
const { arrondirEuler, findMax, genererFacture, fusionnerEtTrier, calculerArea, average, inverserOrdre, filtrerParPage, fetchData} = require("./exo.js");

test("Vérifie si le nombre d'Euler est arrondi à 4 chiffres après la virgule", () => {
    const euler = 2.718281828459045
    expect(arrondirEuler(euler)).toEqual(2.7183); 
});

//--------- Exercice 2 -------------
test("trouver le grand nombre dans un tableau", ()=>{
    const max = Math.max(...number =[1, 4, 8, 9])
    expect(findMax(max)).toEqual(9);
})

//---------- Exercice 3 ------------

test("Générer une facture avec les bonnes informations", () => {
   
    expect(genererFacture(quantite, produit, prixUnitaire)).toBe("Vous avez acheté 3 unités de Ordinateur portable pour un total de $3600");
});

// --------- Exercice 4 --------------

test("verifier la fusion de deux tableaux", ()=>{
    const tableauCombine = [...tab1, ...tab2];
    expect(tableauCombine).toEqual([2, 4, 5, 9, 7, 0, 8])
})

test("verifier que le tableau est trié", ()=>{
    const tab1 = [2, 4, 5]
    const tab2 = [9, 7, 0, 8]
    const tableauCombine = [...tab1, ...tab2].sort();
    expect(tableauCombine).toEqual([0, 2, 4, 5, 7, 8, 9])
})
//-----------Exercice 5 ------------

test("Renvoie un objet avec les valeurs fournies", () => {
    const car = {
      make: "Toyota",
      model: "Corolla",
      year: "2022"
    };
    const result = getInfoVehicule(car);
    expect(result).toEqual(car);
  });
  
//---------- Exercice 6---------
test("Calculer correctement l'aire d'un cercle", () => {

    expect(calculerArea(5)).toBe(5 * 5 * Math.PI);
});

test("Gérer correctement le cas où le rayon est manquant", () => {
    const rayon = null;
    const messageAttendu = "Radius is missing!";
    expect(calculerArea(rayon)).toBe(messageAttendu);
});

// ----------- Exercice 7 --------

test("calculer la moyenne des nombres dans un tableau", ()=>{
    const tab = [2, 5, 0, 1]
   expect(average(tab)).toBe(2)
})

// -------- Exercice 8 ---------
test("inverser l'ordre des elt dans un tableau", ()=>{
    const tab = ["toto", "tata", "mama", "papa"]
    expect(inverserOrdre(tab)).toEqual(["papa", "mama", "tata", "toto"])
})

// --------- Exercice 9 ----------

test("Filtrer les livres par nombre de pages", () => {
    
    const resultatAttendu = [
        { titre: "40 ans de prison", page: 310 },
        { titre: "48 loi du pouvoir", page: 500 },
    ];
    expect(filtrerParPage(livres)).toEqual(resultatAttendu);
});


//--------------------------- LOT 2 ------------------------------------------



const {mulDiv, longuestString} = require('./script') 
//---------- EXERCICE 3 -------------
test('Retourne la multiplication et la division des deux nombres si les deux sont supérieurs à zéro', () => {
    expect(mulDiv(4, 2)).toBe('la multiplication des 2 nombres est : 8 et la division est : 2');
  });

  test('Retourne "Les deux nombres doivent être définis." si l\'un des deux nombres est indéfini', () => {
    expect(mulDiv(4)).toBe('Les deux nombres doivent être définis.');
  });

  test('Retourne "Les deux nombres doivent être supérieurs à zéro." si l\'un des deux nombres est inférieur ou égal à zéro', () => {
    expect(mulDiv(4, 0)).toBe('Les deux nombres doivent être supérieurs à zéro.');
    expect(mulDiv(0, 4)).toBe('Les deux nombres doivent être supérieurs à zéro.');
  });

//------------ EXERCICE 4 ------------

test('Retourne la chaîne la plus longue dans le tableau', () => {
    expect(longuestString( ['chat', 'chien', 'éléphant', 'souris'])).toBe('éléphant');
  });

  test('Retourne une chaîne vide si le tableau est vide', () => {
    const tableau = [];
    expect(longuestString(tableau)).toBe('');
  });

  //--------------- EXERCICE 5 ----------------

  test('Retourne le plus grand nombre pair dans un tableau', () => {
    const tableau = [1, 2, 3, 4, 5, 6];
    expect(largestEvenNumber(tableau)).toBe(6);
  });

  test('Retourne 0 si aucun nombre pair n\'est présent dans le tableau', () => {
    const tableau = [1, 3, 5, 7, 9];
    expect(largestEvenNumber(tableau)).toBe(0);
  });
  //--------------- EXERCICE 6 ------------------

  test('Retourne une chaîne sans caractères en double', () => {
    const chaine = 'bonjour';
    expect(removeCharacter(chaine)).toBe('bnu');
  });

  test('Retourne la même chaîne si aucun caractère n\'est répété', () => {
    const chaine = 'hello';
    expect(removeCharacter(chaine)).toBe(chaine);
  });

//--------------- EXERCICE 7 ----------

test('Retourne la somme des cubes des entiers jusqu\'à nombre', () => {
  expect(cubenumber(3)).toBe(36); 
});

test('Retourne 0 si nombre est 0', () => {
  expect(cubenumber(0)).toBe(0);
});

//-------------- EXERCICE 8 ----------------

test('Retourne true si les valeurs des propriétés sont égales', () => {
  const obj1 = { property: { value: 5 } };
  const obj2 = { property: { value: 5 } };
  expect(compare(obj1, obj2)).toBe(true);
});

test('Retourne false si les valeurs des propriétés sont différentes', () => {
  const obj1 = { property: { value: 5 } };
  const obj2 = { property: { value: 10 } };
  expect(compare(obj1, obj2)).toBe(false);
});

//----------- EXERCICE 9 -------------

test('Retourne un tableau filtré en fonction des valeurs à filtrer', () => {
  const tableau = [1, 2, 3, 4, 5];
  const valeursfiltrer = [2, 4];
  expect(functionFilter(tableau, valeursfiltrer)).toEqual([1, 3, 5]);
});

//------------ EXERCICE 10 -------------

test('Retire une valeur du tableau si elle est présente', () => {
  expect(functionExtract([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
});

//----------- EXERCICE 12 ------------
test('Calcul du volume pour un cylindre de rayon 2 et de hauteur 5', () => {
  const cylindre = new Volume(2, 5);
  expect(cylindre.calculerVolume()).toBeCloseTo(62.83);
});

//----------- EXERCICE 13 -------------


//--------------- EXERCICE 14 --------------

test('Retourne true si la chaîne est entièrement en minuscules', () => {
  expect(lowerCaseFunction('hello')).toBe(true);
});

test('Retourne false si la chaîne contient des lettres majuscules', () => {
  expect(lowerCaseFunction('Hello')).toBe(false);
});