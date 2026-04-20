# Running app - muestra la info de un .tcx 

## Estado actual
- [x] Info general del .tcx
- [x] Oraganizacion del preview .png
- [ ] Descargar el .png
- [ ] Animacion


## Cambios recientes

- Funcionalidad basica, interpreta un .tcx y muestra la info general.

- 31/03/2026: 

## Aplicacion de GitHub al modificar directo al main

- git status        # ver qué cambiaste
- git add .         # preparar todos los cambios
- git commit -m "mensaje claro del cambio"
- git push origin main

## Aplicacion de GitHub al modificar en una rama en paralelo y luego lo pasamos al main

# Crear la rama
- git checkout -b feature-nueva-funcionalidad

# Trabajar y hacer los commits
- git status        # ver qué cambiaste
- git add .         # preparar todos los cambios
- git commit -m "feat: añade nueva funcionalidad"

# Subir la rama a GitHub:
- git push origin feature-nueva-funcionalidad

# Fusionar en main
- git checkout main # cambiar de rama
- git pull origin main # traer los ultimos cambios al main
- git merge descargar-png
- git push origin main
