
// Importamos la utilidad para editar contenido
import { inputEdit } from '../utils/inputEdit.js';
import { sectionHidden } from '../utils/sectionHidden.js';
import { editSectionHidden } from '../utils/editSectionHidden.js';

export function sessionReport() {

    // 1° inputId, 2° tagetID, 3° mensaje
    inputEdit("edit-tittle", "titulo", "Titulo de la sesion");
    inputEdit("edit-cadencia", "cadencia", "cadencia", "spm");

    // Ocultar secciones left panel
    editSectionHidden("editar-reporte", "editar-contenedor");
    editSectionHidden("crear-reporte", "crear-contenedor");

    // Ocultar Secciones del reporte
    sectionHidden("hidden-date", "date");
    sectionHidden("hidden-tittle", "tittle");
    sectionHidden("hidden-distance", "distance");
    sectionHidden("hidden-pace", "ritmo");
    sectionHidden("hidden-duration", "duration");
    sectionHidden("hidden-cadence", "cadence");
    sectionHidden("hidden-bpm", "bpm");
    sectionHidden("hidden-logo", "logo");

}