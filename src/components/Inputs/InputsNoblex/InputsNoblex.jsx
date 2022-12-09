import { useContext, useState } from 'react'
import { EquipoContext } from '../../../context/EquipoContext'

const InputsNoblex = () => {
    const [manual, setManual] = useState("")
    const { equipo, dispatch } = useContext(EquipoContext);

    const handleManualChange = (e) => {
        setManual(e.target.value)
        console.log(equipo)
        dispatch({
            type: "ADD",
            payload: {
                ...equipo,
                manual: e.target.value,
            }
        })
    }

    return (
        <>
            <label>
                <p className="font-bold text-4xl">Manual</p>
                <input
                    name="manual"
                    type="text"
                    onChange={handleManualChange}
                    value={manual}
                    className="mt-2 px-2 py-2 font-bold text-2xl bg-green border border-black rounded-md placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-2 focus:shadow-md focus:shadow-cyan-500/100 focus:ring-sky-500"/>
            </label>
        </>
    )
}

export default InputsNoblex