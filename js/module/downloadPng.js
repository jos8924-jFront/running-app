/* DESCARGAR PNG */

export function downloadPng (){
    const element = document.getElementById("info-container");
    
    html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "transparent",
        onclone: (clonedDoc) => {
            const count = clonedDoc.querySelectorAll("*").length;
            console.log("Nodos clonados por html2canvas:", count);
        }
    }).then(canvas => {
        console.timeEnd("html2canvas");

        const targetWidth = 1900;
        const targetHeight = 1080;
        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = targetWidth;
        finalCanvas.height = targetHeight;

        const ctx = finalCanvas.getContext("2d");
        ctx.drawImage(canvas, 0, 0, targetWidth, targetHeight);

        const button = document.createElement("a");
        button.download = "image.png";
        button.href = finalCanvas.toDataURL("image/png");
        button.click();

        console.log("Descargado");
    })
}