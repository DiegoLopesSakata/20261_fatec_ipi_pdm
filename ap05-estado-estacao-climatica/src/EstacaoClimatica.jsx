import { useEffect, useState } from "react";

const EstacaoClimatica = (props) => {
  const [dataAtual, setDataAtual] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer executando...")
      setDataAtual(new Date().toLocaleString())
    }, 1000)
    
    return () => {
      console.log("timer cancelado");
      clearInterval(timer);
    };
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <div
          className="d-flex align-items-center border rounded mb-2 p-4"
          style={{ height: "6rem" }}
        >
          <i className={`fa-solid fa-3x fa-${props.icone}`}></i>
          <p className="w-75 ms-3 text-center fs-1">{props.estacao}</p>
        </div>
        <div>
          <p className="text-center">
            {props.latitude
              ? `Coordenadas: ${props.latitude},${props.longitude}. Data: ${dataAtual}`
              : "Clique no botão para saber a sua estação climatica"}
          </p>
        </div>
        <button
          onClick={props.obterLocalizacao}
          className="btn btn-outline-primary w-100 mt-2"
        >
          Qual a minha estação?
        </button>
      </div>
    </div>
  );
};

export default EstacaoClimatica;
