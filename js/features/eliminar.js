import { deleteTarea } from "../store.js";

export function activarEliminar(render) {
  const lista = document.querySelector("#task-list");

  if (!lista) return;

  lista.addEventListener("click", (event) => {
    const boton = event.target.closest("button[data-action='delete']");

    if (!boton) return;

    const tarea = boton.closest("li[data-id]");
    if (!tarea) return;

    const id = Number(tarea.dataset.id);
    if (Number.isNaN(id)) return;

    deleteTarea(id);
    render();
  });
}
