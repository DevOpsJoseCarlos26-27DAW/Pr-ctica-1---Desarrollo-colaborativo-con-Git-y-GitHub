import { setFiltro } from "../store.js";

export function activarFiltro(render) {
  const filtro = document.querySelector("#filter");

  if (!filtro) return;

  filtro.addEventListener("change", (event) => {
    setFiltro(event.target.value);
    render();
  });
}
