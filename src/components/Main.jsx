import Input from './Inputs/InputMaquina'

const Main = () => {

  let style = "border-solid border-2 border-black px-20 py-16 font-bold text-5xl rounded text-center"

  return (
    <main className="flex justify-center items-center mt-16">
      <div className="flex justify-start items-center container-fluid gap-96 h-full">
        <div className="flex flex-col h-full">
          <Input />
        </div>
        <div className="flex flex-col gap-10 justify-center aling-items-center">
          <p className={style}>OK</p>
          <p className={style}>FAIL</p>
        </div>
      </div>
    </main>
  )
}

export default Main