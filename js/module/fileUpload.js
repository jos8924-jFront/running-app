/* Cargar file */
import { processFile } from "./processFile.js";
import { calcularMetricas } from "./metrics.js";
import { mostrarMetricas } from "./ui.js";

export function fileUpload(event){

    // Donde se guarda el documento
    const file = event.target.files[0];
    // mensajes de confirmacion
    const successMsg = document.getElementById("succes-message");
    const failMsg = document.getElementById("fail-message");
    const preview = document.getElementById("preview-container");
    const info = document.getElementById("info-container");

    // Si el usuario cancela o no hay archivo
    if (!file) {
        successMsg.style.display = "none";
        failMsg.style.display = "block";
        return; //salir sin intentar leer
    };

    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        // Guardar internamente en window o en un objeto global
        window.tcxDataRaw = content;

        // ✅ Ahora sí: procesar y calcular métricas dentro del onload
        const jsonData = processFile();
        const metrics = calcularMetricas(jsonData);

        /* console.log("Métricas generales:", metrics); */
        
        preview.style.display = "none";
        info.style.display = "flex";
        mostrarMetricas(jsonData);



        // Mostrar mensaje de éxito
        successMsg.style.display = "block";
        failMsg.style.display = "none";
    };

    reader.onerror = function() {
        // Mostrar mensaje de error si falla la lectura
        successMsg.style.display = "none";
        failMsg.style.display = "block";
    };


    reader.readAsText(file);
}