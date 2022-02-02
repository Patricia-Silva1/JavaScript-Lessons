// Operadores Aritmeticos(Matematicos)
// Operadores de Atribuição 
// operadores de Comparação 
// Operadores Logicos
// Operadores Bitwise

// Operadores Arimeticos 

// +,-,*,\,**
// let Salario = 100;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5**5);
//++ --
// let idade=18 ;
// console.log (++idade);
// console.log (idade--);
// console.log(idade);

// Aula 11 Operadores de Atribuição

// let valorTecladoGamer=100;

// valorTecladoGamer+=valorTecladoGamer+valorTecladoGamer;
// valorTecladoGamer-=valorTecladoGamer-valorTecladoGamer;
// console.log(valorTecladoGamer);

// Aula 12 Operadores de Igualdade
// Igualadade EStrita 
// exemplo

// console.log(1===1);
//  console.log('1'===1);

// Igualdade Solta 

// console.log(1 == 1);

// Aula 13 Operador Ternario 
// tem um cliente,100 premium , comum 
// exemplos:
// let pontos = 200;
// let tipo = pontos > 100 ? 'Premum': 'comum';
// console.log(tipo);

// Aula 14 Operadores Logicos tomar decicioes
// Operadores Logicos e (&&) Retorna TRUE se os dois operadors forem true 

//  pratico 
// console.log(false && true);

// exercicio

// let maiorDeIdade = false;
// let PossuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade &&  PossuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//  Operadores Logito  ou (||)
//  Retorna true se um dos operadores forem true 
//  exemeplo 

//  let maiorDeIdade = false;
// let PossuiCarteiraDeTrabalho = false;
//  let podeAplicar = maiorDeIdade  || PossuiCarteiraDeTrabalho;

//  console.log( 'pode aplicar:',podeAplicar); 

// //  Operador NOT(!)
// let CandidatoRecusado = ! podeAlpicar;
// console.log('CanditadoREcusado',CandidatoRecusado);


//  Aula 15 Comparação com Valores não boelanos 

// Falsy
// underfined 
// null
//  0 
//  false
// ""
// NaN - not a number
// Truthy

//  pratica 

// let corPersonalizada = 'vermelho';
// let corPerfil = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil);

// ......................................................................
//  AUla 16 Trocando Valores de Variaveis 

// let a = 'vermelho';
// let b = 'azul';

// let c = a;
// a = b ;
// b = c;
// console.log(a);
// console.log(b);
// .....................................................................

// AUla 17 (If..Else)
// Se a hora estive entre 06:00 ate 12:00 vamos exibir Bom dia! 
//  se estiver  entre 12:00 ate 18:00 vamos exibir Boa tarde 
//  Caso contrario : Boa noite!
// Exemplo 

// let hora = 23;
// if (hora > 6 && hora<12) {
//     console.log("bom dia");
// }

// else if (hora > 12 && hora < 18 ){
//  console.log("Boa tarde");
// }


// else {
//     console.log("Boa noite");
// }
// ...........................................................................
// Aula 18 (Switch ...Case)

// let Permissao ; //comum ,gerente,direitor
// permissao = 'DIreitor';
// switch(permissao) {
//     case 'comum':
//    console.log('Usuario comum');
//    break;

//    case 'gerente':
//    console.log('Usuario gerente');
//    break;

//    case 'direitor':
//    console.log('Usuario direitor');
//    break;


// default: 
// console.log('Usuario não reconhecido!');
// }
// .............................................................
//  AUla 19 sobre(Laço For) repetir varias vezes 

// 1 for 
// 2 while
// 3 Do ..While 
// 4 For .. In 
// 5 For ..of
//  exe
// for (let i = 0; i <= 5; i++){
// console.log('Estou Aprendendo JavaScript!',i);
// }

//  ex impar 
// for (let i = 5; i >= 1; i--){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }
// ......................................................
// AUla 20 While loop

// let = i = 5 ;

// while (i>= 1){
//    if (i % 2 !==0){
//        console.log(i);
//    }
// i--;
// }
// ............................................................
// Aula 21 (DO WHile )
// let i = 0;
// do {
//     console.log ('Digitando!',i);
//     i ++;
// }   while(i<10)

// .................................................................
// // Aula 22  (For in ) 
// Exemplo 
// const pessoa = {
//     nome:'Paty',
//     idade:22
// };
// // Key-value
//  for (let chave in pessoa){
//    console.log(chave,pessoa['nome']);
//  }
// const cores = ['Vermelho','Azul','verde'];

// for (let indice in cores ) {
//      console.log(indice,cores[indice])

//  }

// Aula 23 For Of
const cores = ['Vermelho','Azul','verde'];
for (let cor of  cores){
    console.log(cor);

}















































































































































