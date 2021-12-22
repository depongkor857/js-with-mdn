// let cats = ['leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// for (let cat of cats) {
//     console.log(cat);
// }

// function toUpper(string){
//     return string.toUpperCase();
// }

// const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

function lcat(cat){
    return cat.startsWith("L");
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter(lcat);

console.log(filtered);