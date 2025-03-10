let num = [5, 8, 2, 9, 3];

console.log(num);
console.log(`O vetor tem ${num.length} posições`);

num.push(1); //adiciona valor na ultima posção do vetor
console.log(num);
console.log(`O primeiro valor do vetor é ${num[0]}`);

num.sort(); //coloca o vetor em ordem
console.log(num);
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`O vetor tem ${num.length} posições`);

let pos = num.indexOf(8);
if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor está na posição ${pos}`);
}
