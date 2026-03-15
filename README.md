# Logística Integral Satelital

Sitio corporativo construido con `React`, `TypeScript`, `Vite` y `SCSS`.

## Requisitos

- `Node.js` 20.19 o superior
- `npm` 10 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: entorno local con Vite
- `npm run build`: validación TypeScript y build de producción
- `npm run lint`: revisión estática con ESLint
- `npm run preview`: sirve la carpeta `dist` localmente
- `npm run check`: lint + build, útil antes de desplegar

## Estructura del proyecto

```text
src/
  app/        # arranque, router y navegación global
  features/   # módulos por página o dominio
  shared/     # layout, secciones reutilizables, UI base y tipos comunes
  styles/     # variables, mixins y estilos globales
  assets/     # recursos importados desde código
public/       # archivos estáticos publicados tal cual
```

## Despliegue

La aplicación es una SPA y requiere redirección de rutas al `index.html`.

Ya quedan incluidos:

- `public/_redirects` para Netlify
- `vercel.json` para Vercel

### Build de producción

```bash
npm install
npm run check
```

El artefacto final queda en `dist/`.

### Hosting estático genérico

Si el proveedor no soporta automáticamente SPAs, configura una regla de rewrite:

```text
/* -> /index.html
```

### Notas

- Los recursos en `public/assets/uploads` se publican como archivos estáticos y no deben moverse sin revisar sus URLs.
- Antes de subir cambios, usa `npm run check`.
