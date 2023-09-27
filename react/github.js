import { useEffect } from "react";

function Window() {
  useEffect(() => {
    const handleResize = () => {
      console.log("La ventana se ha redimensionado");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <p>Abre la consola y redimensiona la ventana</p>;
}
