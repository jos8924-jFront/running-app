/* Editar nombre de seccion */


export function inputEdit (inputId, targetId, defaultText ="", suffix =""){

    // id del input
    const input = document.getElementById(inputId);

    // id de donde se muestra el mensaje
    const target = document.getElementById(targetId);

    if (!input || !target) return;

    // Inicializa el target con el texto por defecto
    target.textContent = defaultText + (suffix ? ` ${suffix}` : "");

    input.addEventListener("input", () => {
        const value = input.value;
        target.textContent = value
            ? value + (suffix ? ` ${suffix}` : "") 
      : defaultText + (suffix ? ` ${suffix}` : "");
    })
}