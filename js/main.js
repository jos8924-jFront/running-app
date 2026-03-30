
import { fileUpload } from "./module/fileUpload.js";


document.addEventListener("DOMContentLoaded", () => {
    const inputFile = document.getElementById("file");
    inputFile.addEventListener("change", fileUpload );

});