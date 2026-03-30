/* Procesar archivo a json */

export function processFile(){
    if (!window.tcxDataRaw) {
        console.error("No hay archivo cargado");
        return null;
    }

    // Paso 1: convertir a XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(window.tcxDataRaw, "application/xml");

    // Paso 2: recorrer Trackpoints
    const trackpoints = xmlDoc.getElementsByTagName("Trackpoint");
    const data = [];

    for (let i = 0; i < trackpoints.length; i++) {
        const tp = trackpoints[i];
        const timeNode = tp.getElementsByTagName("Time")[0];
        const latNode = tp.getElementsByTagName("LatitudeDegrees")[0];
        const lonNode = tp.getElementsByTagName("LongitudeDegrees")[0];
        const distNode = tp.getElementsByTagName("DistanceMeters")[0];
        const hrNode = tp.getElementsByTagName("HeartRateBpm")[0];

        data.push({
        time: timeNode ? timeNode.textContent : null,
        latitude: latNode ? parseFloat(latNode.textContent) : null,
        longitude: lonNode ? parseFloat(lonNode.textContent) : null,
        distance: distNode ? parseFloat(distNode.textContent) : null,
        heartRate: hrNode ? parseInt(hrNode.getElementsByTagName("Value")[0].textContent, 10) : null
        });
    }

    // Paso 3: guardar como JSON global
    window.tcxDataJson = data;
    /* console.log("TCX convertido a JSON", data); */

    return data;



}