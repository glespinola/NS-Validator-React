import { initialStateEquipo } from "../context/EquipoContext"

const equipoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return action.payload;

        case "REMOVE-ALL":
            return initialStateEquipo;
    }
}

export default equipoReducer