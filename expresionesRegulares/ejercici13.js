

function validarFecha(texto) {
    const fechaRegExp = /\b\d{2}\/\d{2}\/\d{4}\b/;
    return fechaRegExp.test(texto);
  }


  
  function validarEmail(email) {
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    return emailRegExp.test(email);
  }

function escapeHTML(text) {
    const replacements = [
      ["&", "&amp;"],
      ["\"", "&quot;"],
      ["<", "&lt;"],
      [">", "&gt;"],
    ];
  
    replacements.forEach((replace) => {
      const regex = new RegExp(replace[0], "g");
      text = text.replace(regex, replace[1]);
    });
  
    return text;
  }
  
  
  function invertirNombreApellido(nombreCompleto) {
    const nombreApellidoRegExp = /^(\w+)\s(\w+)$/;
    return nombreCompleto.replace(nombreApellidoRegExp, "$2, $1");
  }
  
  function eliminarEtiquetasScript(html) {
    const cleanHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return cleanHtml;
  }
  
  // Pruebas
  const fechaNacimiento = "Nací el 19/06/2003 en managua."
  console.log(`${fechaNacimiento}=`,validarFecha(fechaNacimiento)); 
  
  const email ="usuario123@example.com";
  console.log(`el correo: ${email} es:`,validarEmail(email)); 
  
  const nombreCompleto = "Kenley Gaitan";
  console.log(`nombre invertido de ${nombreCompleto}:`,invertirNombreApellido(nombreCompleto)); // "Smith, John"
  
  const html = "<p>hola mundo.</p><script>alert('Hola');</script><div>buenos dias</div><script></script>";
  console.log(`fragmento hmtl: ${html}\nsin etiqueta script:`,eliminarEtiquetasScript(html)); // "<p>Este es un párrafo.</p><div>Otra etiqueta</div>"
  
  const textoConHTML = eliminarEtiquetasScript(html);
  console.log(`fragmento html: ${textoConHTML}\nReescrito:`,escapeHTML(textoConHTML));
  // "&lt;h1&gt;Título&lt;/h1&gt;&lt;p&gt;Párrafo&lt;/p&gt;&lt;script&gt;console.log('¡Hola!');&lt;/script&gt;"
  