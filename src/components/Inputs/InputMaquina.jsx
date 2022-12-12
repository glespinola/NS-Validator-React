import { useContext, useEffect, useState } from 'react'
import { EquipoContext } from '../../context/EquipoContext';
import InputsAsus from './InputsAsus/InputsAsus';
import InputsNoblex from './InputsNoblex/InputsNoblex';


const Input = () => {
  const [maquina, setMaquina] = useState('');
  const { equipo, dispatch } = useContext(EquipoContext);


  const handleChange = (e) => {
    const inputMaquina = document.getElementById("maquina");
    setMaquina(e.target.value);
    dispatch({
      type: "ADD",
      payload: {
        ...equipo,
        maquina: e.target.value
      }
    })
    if (e.target.value.length === 17 || e.target.value.length === 35) {
      inputMaquina.style.setProperty("background-color", "#22c55e")
    } else {
      inputMaquina.style.setProperty("background-color", "#ef4444")
    }
  }

  useEffect(() => {
    const cuadroFail = document.querySelector("#cuadroFail");
    setMaquina(equipo.maquina);
    cuadroFail.style.setProperty("background-color", "#fff")

  }, [equipo.maquina])

  return (
    <>
      <label>
        <p className="font-bold text-4xl">Maquina</p>
        <input
          autoFocus
          name='maquina'
          value={maquina}
          onChange={handleChange}
          type="text"
          id='maquina'
          className={`mt-2 px-2 py-2 font-bold text-2xl bg-green border border-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:shadow-md focus:shadow-cyan-500/100 focus:ring-sky-500`} />
      </label>
      {
        maquina.length === 17
          ? <InputsNoblex />
          : maquina.length === 35
            ? <InputsAsus />
            : <p className="text-red-500 font-medium mt-1">Ingrese un serie válido</p>
      }
    </>
  )
}


export default Input