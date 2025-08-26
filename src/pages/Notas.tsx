import { useEffect, useState } from "react";
import "./Notas.css";

export default function Notas(props) {
  const [notas, setNotas] = useState([])

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
      <div className="notas-container">
        <h3 className="notas-title">Lista de Notas</h3>
        <table className="notas-table">
          <thead>
            <tr className="notas-thead-row">
              <th className="notas-th">Nota</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota, idx) => (
              <tr key={idx} className="notas-tr">
                <td className="notas-td">{nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
