/* comentarios*/
var variavel // nesse tipo de variavel posso declarar a mesma varias vezes
let nome = 'Daniel'; // criando variavel apenas uma vez
const numb = 10; // variavel constante, imutavel, mas depende
idiota = 5; //declarando variavel da forma errada
console.log('"hello"', 10, "'novo'"); // aula1 comentário
// alert(nome);
console.log('hello', nome, 'kk'); // aula1 comentário
console.log(typeof numb, nome);
const nom_sobre = 'Daniel Pedro';
const idade = 22;
const peso = 80;
const altura = 1.81;
let imc
let ano_atual = 2021
let ano_nascimento
imc = peso/(altura*altura)
ano_nascimento = ano_atual - idade
//print

console.log(nom_sobre, 'tem', idade, 'anos pesa', peso, 'kg')// o print nunca foi tão dificil
console.log(`tem ${altura} de ${altura} e seu imc é de ${imc}`)// o print nunca foi tão dificil
console.log(`${nom_sobre} nasceu em: ${ano_nascimento}`) // o print nunca foi tão dificil


//Tipo de dados
const str_id = `idiota`;//string
const int_id = 10;//number
let unde_id; //undefined como é uma variavel indefinida tenho que colocar let
const nulo_id = null; // valor nulo
const boolean_t = true;
const boolean_f = false;
// quando eu trabalho com variaveis eu não preciso me preocupar com o Type = referencia
// ou seja quando eu só vou ter uma cópia na memória em alguns tipos de variaves
// nos tipos mais basicos é uma cópia
const a = [1,2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b);

const c = 1;
let d = c;

console.log(d,c)
d = 3
console.log(d,c)

//