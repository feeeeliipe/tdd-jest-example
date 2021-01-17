const student = require("./students");

describe("Testes referente ao modulo de alunos", () => {
  it("Deve retornar 10 quando as notas forem 5, 3 e 2", () => {
    const notes = [5, 3, 2];
    expect(student.sumNotes(notes)).toEqual(10);
  });

  it("Deve retornar zero, caso uma das notas do aluno seja zero", () => {
    const notes = [1, 5, 0];
    expect(student.sumNotes(notes)).toEqual(0);
  });

  it("Deve mutiplicar a soma por dois, caso o aluno tiver mais que cinco notas", () => {
    const notes = [5, 2, 3, 5, 2, 1];
    expect(student.sumNotes(notes)).toEqual(36);
  });

  it("Deve mutiplicar a nota, caso a nota seja maior ou igual a 9", () => {
    const notes = [3, 5, 9];
    expect(student.sumNotes(notes)).toEqual(26);
  });
});
