import { addTarea } from "../store.js";

export function activarAnadir(render) {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");

  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = input.value.trim();
    if (!texto) return;

    addTarea(texto);
    input.value = "";
    render();
  });
}
