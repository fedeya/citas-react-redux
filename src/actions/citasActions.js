export const agregarCitaAction = cita => {
  return {
    type: 'AGREGAR_CITA',
    payload: cita
  }
}

export const eliminarCitaAction = id => {
  return {
    type: 'ELIMINAR_CITA',
    payload: id
  }
}