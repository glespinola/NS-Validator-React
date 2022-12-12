import { limpiarInputs } from "./limpiarInputs.utility";

export const validacionEquipo = (resultado) => {
  const cuadroOk = document.querySelector("#cuadroOk");
  const maquina = document.querySelector("#maquina");
  let timeout;

  if (resultado === "ok") {
    maquina.style.setProperty("background-color", "#22c55e")
    cuadroOk.style.setProperty("background-color", "#22c55e");
    cuadroFail.style.setProperty("background-color", "#fff");
    timeout = setTimeout(() => {
      limpiarInputs()
    }, 2000)
  } else if (resultado === "fail") {
    cuadroFail.style.setProperty("background-color", "#ef4444");
    cuadroFail.addEventListener("click", () => {
      limpiarInputs();
    })
  }
}