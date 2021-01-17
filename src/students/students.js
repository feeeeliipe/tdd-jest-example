class Student {
  sumNotes(notes) {
    // Verifica se existe alguma nota igual a zero, se existir devolve a soma zerada.
    const minNote = Math.min(...notes);
    if (minNote === 0) {
      return 0;
    }

    // Faz a soma das notas
    let sum = notes.reduce((result, note) => {
      result += note >= 9 ? note * 2 : note;
      return result;
    }, 0);

    // Verifica se o aluno tem mais de 5 notas, caso tenha, as notas devem ser mutiplicadas por dois.
    return notes.length > 5 ? sum * 2 : sum;
  }
}

module.exports = new Student();
