export const limpiarInputs = () => {
  const cuadroOk = document.querySelector("#cuadroOk");
  const cuadroFail = document.querySelector("#cuadroFail");
  const maquina = document.querySelector("#maquina");
  cuadroOk.style.setProperty("background-color", "#fff")
  cuadroFail.style.setProperty("background-color", "#fff")
  maquina.style.setProperty("background-color", "#fff")
  maquina.focus();
}