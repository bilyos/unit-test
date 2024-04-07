//------ Exercice 1 ------
const euler = 2.71828.toFixed(4)
console.log(euler)

//------ Exercice 2 ----------

const findMax= ()=>{
  const max = Math.max(...number =[1, 4, 8, 9])
  console.log(max)

}
findMax()

//------ Exercice 3 -----
const quantity =10;
const product = {fruit: "banane"}
const price = 50
const bill = `you purchased ${quantity} units of ${product.fruit} for $${price * quantity}`
console.log(bill)

//--------- Exercice 4 ------
const arr1 = [1, 9, 0, 3]
const arr2 = [2, 5, 7, 8]
const combinedArr = [...arr1, ...arr2].sort()
console.log(combinedArr)

// ------ Exercice 5 --------
const car = {make: "mercedes", model: "maybach"}
const{make, model, year="2024"} = car
// console.log(year)
// console.log(model)
// console.log(make)

//------ Exercice 6-----------

const calculerArea = (radius) => {
  if (!radius) {
    return "Radius is missing!";
  } else {
    const area = radius * radius * Math.PI;
    console.log(area);
  }
};
calculerArea();
module.exports = calculerArea;

// ----- Exercice 7 ------

const average = (number=[1, 3, 4, 5])=> {
    let sum =0;
    for(let i =0; i< number.length; i++){sum += number[i]}
    return console.log((sum /number.length).toFixed(2));
    }; average()

//-------- Exercice 8 ---------

const item = ["Rolls royce", "Ferrari", "Mercedes", "Maseratti", "Aston Martin", "Audi"];
const newItem = item.map((items)=> items).reverse()
console.log(newItem)

//-------- Exercice 9 ---------

const array = [
  { title: "jeune millionnaire", page: 250 },
  { title: "40 ans de prison", page: 310 },
  { title: "Reflechir", page: 300 },
  { title: "48 loi du pouvoir", page: 500 },
];
const newArray = array.filter((array) => array.page > 300);
console.log(newArray);
  

// ----------- Exercice 10 --------
function fetchData() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
      setTimeout(() => { resolve("Données récupérées avec succès !");
      }, delay);
    });
  }