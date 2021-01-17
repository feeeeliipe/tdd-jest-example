describe("Testes referente ao modulo de alunos", () => {
  it("Deve retornar 10 quando as notas forem 5, 3 e 2", () => {
    const notes = [5, 3, 2];
    expect(student.sum(notes)).toEqual(10);
  });

  it("Deve retornar zero, caso uma das notas do aluno seja zero", () => {
    const notes = [1, 5, 0];
    expect(student.sum(notes).toEqual(0));
  });

  it("Deve mutiplicar a soma por dois, caso o aluno tiver mais que cinco notas", () => {
    const notes = [5, 2, 3, 5, 2];
    expect(student.sum(notes).toEqual(34));
  });
});
