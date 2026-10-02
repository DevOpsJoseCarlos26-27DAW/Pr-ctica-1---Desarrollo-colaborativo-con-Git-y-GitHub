import { toggleTarea } from "../store.js";

export function activarCompletar(render) {
  const lista = document.querySelector("#task-list");

  if (!lista) return;

  lista.addEventListener("click", (event) => {
    const boton = event.target.closest("button");

    if (!boton || boton.dataset.action !== "complete") return;

    const tarea = boton.closest("li[data-id]");
    if (!tarea) return;

    const id = Number(tarea.dataset.id);
    if (Number.isNaN(id)) return;

    toggleTarea(id);
    render();
  });
}
