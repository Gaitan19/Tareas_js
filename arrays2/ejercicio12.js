function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function lanzarDosDados() {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    return dado1 + dado2;
  }
  
  const simulaciones = 36000;
  const resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < simulaciones; i++) {
    const suma = lanzarDosDados();
    resultados[suma - 2]++; 
  }
  
  console.log(`Resultados de las ${simulaciones} repeticiones:`);
  for (let i = 0; i < 11; i++) {
    console.log(`Suma ${i + 2}: ${resultados[i]} apariciones`); 
  }
  