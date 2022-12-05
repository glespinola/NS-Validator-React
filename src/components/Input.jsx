import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Input = () => {

  const [valor, setValor] = useState({
    maquina: '',
    manual: ''
  });

  const { maquina, manual } = valor;

  const handleChange = (e) => {
    setValor({
      ...valor,
      [e.target.name] : e.target.value,
    })
  }

  let maquinaFinal = '';
  let manualFinal = ''

  if (maquina.length === 17 && manual.length === 17){
    maquinaFinal = maquina;
    manualFinal = manual;
    console.log(maquinaFinal);
    console.log(manualFinal)
    if(maquinaFinal == manual){
      
    }else{
      console.log("no son iguales")
    }
  }

  return (
    <>
      <label>
        <p className="font-bold text-4xl">Maquina</p>
        <input
        name='maquina'
        value={maquina}
        onChange={handleChange}
        type="text" 
        className="mt-2 px-2 py-2 font-bold text-2xl bg-green border border-black rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:shadow-md focus:shadow-cyan-500/100 focus:ring-sky-500"/>
      </label>
      <label>
        <p className="font-bold text-4xl">Manual</p>
        <input 
        name="manual"
        value={manual}
        onChange={handleChange}
        type="text" 
        className="mt-2 px-2 py-2 font-bold text-2xl bg-green border border-black rounded-md placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-2 focus:shadow-md focus:shadow-cyan-500/100 focus:ring-sky-500"/>
      </label>
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string,
}

export default Input