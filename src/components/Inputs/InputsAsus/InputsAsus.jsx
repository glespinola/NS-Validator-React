import { useEffect, useState } from 'react';

const InputsAsus = () => {

    const [bgStyle, setBgStyle] = useState('');

    let style = `mt-2 px-2 py-2 font-bold text-2xl bg-green border border-black rounded-md placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-2 focus:shadow-md focus:shadow-cyan-500/100 focus:ring-sky-500`;

    const [inputs, setInputs] = useState({
        manual: "",
        frente: "",
        dorso: ""
    });
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };


    useEffect((e) => {
        console.log(inputs.manual)
        console.log(inputs.frente)
        console.log(inputs.dorso)
    }, [inputs.manual])



    return (
        <>
            <label>
                <p className="font-bold text-4xl">Manual</p>
                <input
                    name="manual"
                    type="text"
                    onChange={handleChange}
                    value={inputs.manual}
                    className={style + bgStyle} />
            </label>
            <label>
                <p className="font-bold text-4xl">Frente</p>
                <input
                    name="frente"
                    type="text"
                    onChange={handleChange}
                    value={inputs.frente}
                    className={style} />
            </label>
            <label>
                <p className="font-bold text-4xl">Dorso</p>
                <input
                    name="dorso"
                    type="text"
                    onChange={handleChange}
                    value={inputs.dorso}
                    className={style} />
            </label>
        </>
    )
}

export default InputsAsus