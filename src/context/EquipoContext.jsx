import { createContext, useReducer } from "react";
import equipoReducer from "../reducer/equipoReducer";

export const initialStateEquipo = {
    maquina: "",
    manual: "",
    frente: "",
    dorso: ""
}

export const initialStateContext = {
    initialStateEquipo,
    dispatch: () => { }
}

export const EquipoContext = createContext(initialStateContext);

export const EquipoProvider = ({ children }) => {
    const [equipo, dispatch] = useReducer(equipoReducer, initialStateEquipo)
    return (
        <EquipoContext.Provider value={{ equipo, dispatch }}>
            {children}
        </EquipoContext.Provider>
    )
}