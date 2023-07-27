function Persona(nombre, edad, género) {
    this.nombre = nombre;
    this.edad = edad;
    this.género = género;
  }
  
  Persona.prototype.obtenerDetalles = function() {
    console.log(`persona: ${this.nombre}, Edad: ${this.edad}, Género: ${this.género}`);
  };
  
  function Estudiante(nombre, edad, género, curso, grupo) {
    Persona.call(this, nombre, edad, género);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function() {
    console.log(`estudiante ${this.nombre} se ha registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
  };


  function director(nombre, edad, genero, escuela, distrito)
  {
    Persona.call(this, nombre , edad, genero);
    this.escuela = escuela;
    this.distrito = distrito;
  }

  director.prototype = Object.create(Persona.prototype);
  director.prototype.constructor = director;
  director.prototype.detallesDi = function () {
    console.log(`el director ${this.nombre} dirige la escuela: ${this.escuela}, en el distrito ${this.distrito}.`)
  }

  const profesor1 = new director("Carlos", 40, "Masculino", "colegio 14 de septiembre", "distrito5");
  profesor1.obtenerDetalles();
  profesor1.detallesDi();
  // profesor1.asignar();





  
  function Profesor(nombre, edad, género, asignatura, nivel) {
    Persona.call(this, nombre, edad, género);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

 

  
  // Profesor.prototype = Object.create(Persona.prototype);
  // Profesor.prototype.constructor = Profesor;
  
  // Profesor.prototype.asignar = function() {
  //   console.log(`El profesor ${this.nombre} está asignando ${this.asignatura} de nivel ${this.nivel}.`);
  // };
  
  // // Pruebas
  // const persona1 = new Persona("Juan", 30, "Masculino");
  // persona1.obtenerDetalles();
  
  // const profesor1 = new Profesor("Carlos", 40, "Masculino", "Historia", "Avanzado");
  // profesor1.obtenerDetalles();
  // profesor1.asignar();
  
  // const estudiante1 = new Estudiante("Maria", 20, "Femenino", "Historia", "A");
  // estudiante1.obtenerDetalles();
  // estudiante1.registrar();
  