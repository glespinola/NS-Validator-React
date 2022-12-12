import { useContext, useEffect, useState } from 'react'
import { EquipoContext } from '../../../context/EquipoContext'
import { validacionEquipo } from '../../../utilities/validacionEquipo.utility'

const InputsNoblex = () => {
    const [manual, setManual] = useState("")
    const { equipo, dispatch } = useContext(EquipoContext);
    const [manualStyle, setManualStyle] = useState("");
    const { maquina } = equipo;

    const handleManualChange = (e) => {
        setManual(e.target.value)
        dispatch({
            type: "ADD",
            payload: {
                ...equipo,
                manual: e.target.value,
            }
        })

        if (e.target.value.length === 17) {
            if (e.target.value === maquina) {
                setManualStyle("bg-green-500");
            } else {
                setManualStyle("bg-red-500");
            }
        } else {
            setManualStyle("bg-red-500");
        }
    }

    useEffect(() => {
        if (manual.length === maquina.length) {
            if (manual === maquina) {
                console.log("son iguales")
                validacionEquipo("ok")
                setTimeout(() => {
                    dispatch({
                        type: "REMOVE-ALL",
                        payload: {}
                    })
                }, 2000);
            } else {
                console.log("nope")
                validacionEquipo("fail")
            }
        }

    }, [manual])


    return (
        <>
            <label>
                <p className="font-bold text-4xl">Manual</p>
                <input
                    name="manual"
                    type="text"
                    onChange={handleManualChange}
                    value={manual}
                    className={`mt-2 px-2 py-2 font-bold text-2xl bg-green border border-black rounded-md placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-2 focus:shadow-md focus:shadow-cyan-500/100 focus:ring-sky-500 ${manualStyle}`} />
            </label>
        </>
    )
}

export default InputsNoblex