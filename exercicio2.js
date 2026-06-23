// Lista de alunos com duas notas cada
const alunos = [
  { nome: "João", nota1: 8.5, nota2: 7.0 },
  { nome: "Maria", nota1: 6.0, nota2: 5.5 },
  { nome: "Pedro", nota1: 9.0, nota2: 8.0 }
];

// Percorrendo os alunos
alunos.forEach(aluno => {
  // Operadores aritméticos
  let media = (aluno.nota1 + aluno.nota2) / 2;

  // Formatando para 2 casas decimais
  let mediaFormatada = media.toFixed(2);

  // Operador relacional + ternário
  let status = media >= 7 ? "Aprovado" : "Reprovado";

  // Exibindo com template string (crase)
  console.log(`Aluno: ${aluno.nome} | Média: ${mediaFormatada} | Status: ${status}`);
});