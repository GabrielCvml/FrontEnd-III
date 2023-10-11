function objetivoDaDisciplina(tecnologia){
    var string = "Meu objetivo é aprender " + tecnologia;
    return string;
    /* or return `O objetivo da disciplina é aprender $(tecnologia)` */
}

const tecnologia = "React";
console.log(objetivoDaDisciplina(tecnologia));
