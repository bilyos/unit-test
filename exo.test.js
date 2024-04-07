
// const findMax = require('./exo');
// const e = require('./exo')

// test("test if euler have 4 number after commas", ()=>{
//     expect(Number(2.71828.toFixed(4))).toEqual(2.7183)
// });


// test("find the max number into an array", ()=>{
//     const max = findMax();
//     expect(max).toEqual(findMax([1, 4, 8, 9]));
// });

// const quantity = 10;
// const product = { fruit: "banane" };
// const price = 50;
// const bill = `vous avez acheté ${quantity} unités de ${product.fruit} pour $${price * quantity}`;

// test("La facture est correctement formatée", () => {
//     expect(bill).toMatch(/vous avez acheté \d+ unités de banane pour \$\d+/);
//   });
  
//   test("La quantité est correctement insérée dans la facture", () => {
//     expect(bill).toContain(`${quantity} unités`);
//   });
  
//   test("Le nom du produit est correctement inséré dans la facture", () => {
//     expect(bill).toContain(product.fruit);
//   });
  
//   test("Le montant total est correctement calculé", () => {
//     const totalAmount = quantity * price;
//     expect(bill).toContain(`$${totalAmount}`);
//   });


// const arr1 = [1, 9, 0, 3]
// const arr2 = [2, 5, 7, 8]
// const combinedArr = [...arr1, ...arr2]

// test('verifier si les deux array sont bien combinés', ()=>{
//     expect(combinedArr).toStrictEqual([...arr1, ...arr2])
// });

// test('verifier que le tableaux combiner est trier par ordre croissant', ()=>{
//     combinedArr.sort();
//     expect(combinedArr).toEqual([...arr1, ...arr2].sort())
// });
//------------ exericice 4----------
// const car = {make: "mercedes", model: "maybach"}
// const{make, model, year="2024"} = car

// test("La valeur extraite pour make est correcte", () => {
//     expect(make).toBe("mercedes");
//   });
  
//   test("La valeur extraite pour model est correcte", () => {
//     expect(model).toBe("maybach");
//   });
  
//   test("La valeur par défaut de year est correcte", () => {
//     expect(year).toBe("2024");
//   });

const calculerArea = require('./exo');

test("Vérifier que la valeur du rayon est valide", () => {
    const rayonValide = Number(4);
    expect(rayonValide).toEqual(4);
});

test("Vérifier que le calcul de l'aire est correct", () => {
    const rayonValide = 7;
    const aireAttendue = Math.PI * rayonValide * rayonValide;
    expect(calculerArea(rayonValide)).toBe(aireAttendue);
  });
  
  