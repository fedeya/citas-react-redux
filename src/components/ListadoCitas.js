import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { eliminarCitaAction } from "../actions/citasActions";

function ListadoCitas() {

  const citas = useSelector(state => state.citas);

  const message = citas.citas.length === 0 ? "No hay Citas" : "Administra las citas aqui";

  const dispatch = useDispatch();

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">{message}</h2>

        <div className="lista-citas">
          {citas.citas.map(cita => (
            <div className="media mt-3" key={cita.id}>
              <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text"><span>Nombre Dueño: </span>{cita.dueño}</p>
                <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
                <p className="card-text"><span>Hora: </span>{cita.hora}</p>
                <p className="card-text"><span>Sintomas: </span>{cita.sintomas}</p>
              </div>
              <button 
                className="btn btn-danger"
                onClick={() => dispatch(eliminarCitaAction(cita.id))}
              >
                Borrar &times;
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ListadoCitas;