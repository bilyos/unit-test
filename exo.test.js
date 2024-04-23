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
    const quantite = 3;
    const produit = "Ordinateur portable";
    const prixUnitaire = 1200;
    const resultatAttendu = "Vous avez acheté 3 unités de Ordinateur portable pour un total de $3600";
    expect(genererFacture(quantite, produit, prixUnitaire)).toBe(resultatAttendu);
});

// --------- Exercice 4 --------------

test("verifier la fusion de deux tableaux", ()=>{
    const tab1 = [2, 4, 5]
    const tab2 = [9, 7, 0, 8]
    const tableauCombine = [...tab1, ...tab2];
    expect(tableauCombine).toEqual([2, 4, 5, 9, 7, 0, 8])
})

test("verifier que le tableau est trié", ()=>{
    const tab1 = [2, 4, 5]
    const tab2 = [9, 7, 0, 8]
    const tableauCombine = [...tab1, ...tab2].sort();
    expect(tableauCombine).toEqual([0, 2, 4, 5, 7, 8, 9])
})

//---------- Exercice 6---------
test("Calculer correctement l'aire d'un cercle", () => {
    const rayon = 5;
    const area =  5 * 5 * Math.PI; 
    expect(calculerArea(rayon)).toBe(area);
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
    const livres = [
        { titre: "jeune millionnaire", page: 250 },
        { titre: "40 ans de prison", page: 310 },
        { titre: "Reflechir", page: 300 },
        { titre: "48 loi du pouvoir", page: 500 },
    ];
    const resultatAttendu = [
        { titre: "40 ans de prison", page: 310 },
        { titre: "48 loi du pouvoir", page: 500 },
    ];
    expect(filtrerParPage(livres)).toEqual(resultatAttendu);
});

//------------ Exercice 10 ------------
