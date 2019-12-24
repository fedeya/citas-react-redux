const initialState = {
  citas: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'AGREGAR_CITA': 
      return {
        ...state,
        citas: [...state.citas, action.payload]
      };
    case 'ELIMINAR_CITA':
      return {
        ...state,
        citas: state.citas.filter(cita => cita.id !== action.payload)
      }
    default:
      return state; 
  }
}