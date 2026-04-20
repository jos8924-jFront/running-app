
import { fileUpload } from "./module/fileUpload.js";
import { downloadPng } from "./module/downloadPng.js";
import { sessionReport } from "./module/sessionReport.js";


document.addEventListener("DOMContentLoaded", () => {
    const inputFile = document.getElementById("file");
    inputFile.addEventListener("change", fileUpload );

    //Descargar preview
    const downloadBtn = document.getElementById("download");
    downloadBtn.addEventListener("click", () => {
        downloadPng();
    })

    //Editar mensajes
    sessionReport();
});