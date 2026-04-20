export function editSectionHidden(inputRadioId, targetEditSectionId) {
  const inputRadio = document.getElementById(inputRadioId);
  const targetEditSection = document.getElementById(targetEditSectionId);

  if (!inputRadio || !targetEditSection) return;

  inputRadio.addEventListener("change", () => {
    if (inputRadio.checked) {
      // Oculta todas las secciones asociadas al grupo
      const radios = document.querySelectorAll(`input[name="${inputRadio.name}"]`);
      radios.forEach(radio => {
        const sectionId = radio.getAttribute("data-target");
        if (sectionId) {
          const section = document.getElementById(sectionId);
          if (section) section.style.display = "none";
        }
      });

      // Muestra solo la sección asociada al radio actual (usando tu parámetro)
      targetEditSection.style.display = "flex";
      console.log("mostrar");
    }
  });
}
