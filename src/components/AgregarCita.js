import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarCitaAction } from "../actions/citasActions";
import { validarFormularioAction } from "../actions/validarAction";
import uuid from "uuid/v4";

function AgregarCita() {

  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const dispatch = useDispatch();
  const addCita = cita => dispatch(agregarCitaAction(cita));
  const validarFormulario = state => dispatch(validarFormularioAction(state));

  const error = useSelector(state => state.error);

  const handleSubmit = e => {
    e.preventDefault();

    if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      validarFormulario(true);
      return;
    }

    addCita({
      id: uuid(),
      mascota, 
      dueño, 
      fecha,
      hora, 
      sintomas
    });

    setMascota('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');
    validarFormulario(false);
  }

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Mascota"
                value={mascota}
                onChange={e =>  setMascota(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Dueño de la Mascota"
                value={dueño}
                onChange={e =>  setDueño(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input
                type="date"
                className="form-control"
                value={fecha}
                onChange={e =>  setFecha(e.target.value)}
              />
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="time"
                className="form-control"
                value={hora}
                onChange={e =>  setHora(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
            <div className="col-sm-8 col-lg-10">
              <textarea
                className="form-control"
                value={sintomas}
                onChange={e =>  setSintomas(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="form-group justify-content-end">
            <button type="submit" className="btn btn-success w-100">Agregar</button>
          </div>
        </form>
        {
          error.error && (
            <div className="alert alert-danger text-center p2">
              Todos los campos son obligatorios
            </div>
          )
        }
      </div>
    </div>
  );
}

export default AgregarCita;