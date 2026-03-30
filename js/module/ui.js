import { calcularMetricas } from "./metrics.js";

export function mostrarMetricas(data) {
  const m = calcularMetricas(data);

  document.getElementById("fecha").textContent = m.fecha;
  document.getElementById("distancia").textContent = m.distanciaKm + " km";
  document.getElementById("duracion").textContent = m.duracion;
  document.getElementById("pace").textContent = m.pace;
  document.getElementById("cadencia").textContent = m.cadencia;
  document.getElementById("avgHR").textContent = m.avgHR;
}