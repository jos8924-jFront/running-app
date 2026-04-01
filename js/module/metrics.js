/* extraer las metricas en general del archivo procesado */

// metrics.js
export function calcularMetricas(dataJson) {
    if (!dataJson || dataJson.length === 0) {
        console.error("No hay datos para calcular métricas");
        return null;
    }

    // Distancia total (último punto - primero)
    const distanciaTotal = dataJson[dataJson.length - 1].distance - dataJson[0].distance;

    // Duración total (último tiempo - primero)
    const inicio = new Date(dataJson[0].time);
    const fin = new Date(dataJson[dataJson.length - 1].time);
    const duracionSegundos = (fin - inicio) / 1000;

    // Pace promedio (segundos por km)
    const km = distanciaTotal / 1000;
    const paceSegKm = km > 0 ? duracionSegundos / km : 0;
    const paceMin = Math.floor(paceSegKm / 60);
    const paceSec = String(Math.round(paceSegKm % 60)).padStart(2, "0");
    const paceTotal = `${paceMin}:${paceSec} min/km`;

    // Frecuencia cardíaca promedio
    const hrValues = dataJson.map(tp => tp.heartRate).filter(hr => hr !== null);
    const avgHR = hrValues.length > 0
        ? (hrValues.reduce((sum, hr) => sum + hr, 0) / hrValues.length).toFixed(0)
        : "N/A";

    // Fecha de la actividad (primer trackpoint)
    /* const fechaActividad = inicio.toISOString().replace("T", " ").split(".")[0]; */
    const fechaActividad = inicio.toLocaleString("es-PE", {
        timeZone: "America/Lima",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });




        

    return {
        fecha: fechaActividad,
        distanciaKm: (distanciaTotal / 1000).toFixed(2),
        duracion: formatHhMmSs(duracionSegundos),
        pace: paceTotal,
        cadencia: "NA",
        avgHR: avgHR
    };
}

// Función auxiliar para formato hh:mm:ss
function formatHhMmSs(segundos) {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = Math.floor(segundos % 60);
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}