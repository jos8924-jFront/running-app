/* Ocultar seccion */

export function sectionHidden(inputCheckboxId, targetSectionId){

    // id del inputCheckbox
    const inputCheckbox = document.getElementById(inputCheckboxId);

    // id del tagetSection
    const targetSection = document.getElementById(targetSectionId);

    if (!inputCheckbox || !targetSection) return;

    inputCheckbox.addEventListener("change", () => {
        if (inputCheckbox.checked) {
            targetSection.style.display = "none";   // ocultar
        } else {
            targetSection.style.display = "flex";  // mostrar
        }
    });
}