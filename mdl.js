const alunos = [
    {nome: 'Paola', nota: 2},
    {nome: 'Rogerio', nota: 3},
    {nome: 'Elaine', nota: 6},
    {nome: 'Nathalia', nota: 5},
    {nome: 'Juliana', nota: 9},
    {nome: 'Gabriel', nota: 7},
    {nome: 'Lucas', nota: 5}
];

function filtraAlunos(alunosAprovados) {
    return alunosAprovados.filter(alunos => alunos.nota >= 6)
}

const alunosOk = filtraAlunos(alunos);

console.log("Alunos aprovados: ");
console.log(alunosOk);