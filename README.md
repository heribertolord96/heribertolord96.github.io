# heribertolord96.github.io

Portafolio personal estático (HTML/CSS/JS): dashboard compacto tipo dark IDE, tabs, i18n ES/EN y fondo con blur.

Sitio en vivo: [https://heribertolord96.github.io](https://heribertolord96.github.io)

## Modelo de ramas (importante)

| Rama | Rol |
|------|-----|
| **`main`** | **Fuente** — edita aquí `index.html`, `public/`, `scripts/`, README |
| **`gh-pages`** | **Build publicado** — salida de `dist/` que sirve GitHub Pages |

No edites features a mano en `gh-pages`. Cambia en `main`, construye y despliega.

`dist/` está en `.gitignore` en `main` (artefacto local).

El árbol `src/` es el resume React anterior (referencia histórica). El sitio publicado usa `index.html` + `public/`.

## Local

```bash
npm run dev
```

1. Corre `scripts/build.mjs` (copia `index.html` + `public/` → `dist/`)
2. Sirve `dist/` en **http://localhost:3000**

Otros:

```bash
npm run build      # solo genera dist/
npm run preview    # sirve dist/ en :4173
```

### Assets y symlinks

- Iconos e imágenes viven en `public/icons/` y `public/images/`
- En la raíz hay symlinks `icons` → `public/icons` y `images` → `public/images` para servir el `index.html` raíz con un static server sin pasar por `dist/`

## Publicar (main → gh-pages)

Desde `main`, con cambios ya commiteados:

```bash
npm run deploy
```

Eso ejecuta `predeploy` (`npm run build`) y publica el contenido de `dist/` en la rama **`gh-pages`** (`gh-pages -d dist`).

Equivalente manual:

```bash
npm run build
npx gh-pages -d dist
```

Luego verifica: [https://heribertolord96.github.io](https://heribertolord96.github.io) (puede tardar 1–2 min en refrescar CDN).

## Deep-links (hash)

La tab activa se sincroniza con el hash:

| URL | Tab |
|-----|-----|
| `/#links` | Links |
| `/#products` | Productos |
| `/#services` | Servicios |
| `/#portfolio` | Portafolio |
| `/#skills` | Skills |

Ejemplo: [https://heribertolord96.github.io/#portfolio](https://heribertolord96.github.io/#portfolio)

## Tabs

| Tab | Contenido |
|-----|-----------|
| **Links** | GitHub, LinkedIn, email, WhatsApp, Suno, NotebookLM (Indeed oculto hasta tener URL) |
| **Productos** | Ops Agent, OmniCast (sin fake repo links; Play Store pendiente) |
| **Servicios** | APIs, Frontend, DevOps, AI/ML |
| **Portafolio** | Experiencia + educación |
| **Skills** | Aptitudes, stack, certificaciones |
