import { useEffect, useState } from "react";

export default function Notas(props) {
  const [notas, setNotas] = useState("NA")

    useEffect(() => {
      fetch("http://localhost:5002/notas")
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta de /notas:", data.notas);
          setNotas(data.notas)
        })
        .catch((error) => {
          console.error("Error en la petición /estudiantes:", error);
        });
    }, []);
  return (
    <div>
      <h3>{notas}</h3>
    </div>
  );
}
