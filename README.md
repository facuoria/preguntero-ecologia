# Preguntero de Ecología Agrícola

Web estática (Vite + React + TypeScript, sin backend) para practicar el parcial de múltiple opción de Ecología Agrícola (Unidades 1, 2 y 3).

Al presionar **"Realizar examen"** se elige al azar uno de 10 grupos fijos de 10 preguntas (sin repetir el último grupo), se mezclan preguntas y opciones, y al entregar se muestra el puntaje junto con el detalle de los errores (tu respuesta, la correcta y la sección del apunte donde repasar).

## Correr en local

```bash
npm install
npm run dev
```

Abrir la URL que indica la consola (por defecto `http://localhost:5173`).

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/data/questions.ts`: banco de 100 preguntas (10 grupos de 10).
- `src/lib/exam.ts`: lógica de selección de grupo, mezcla y corrección.
- `src/lib/storage.ts`: helpers de `localStorage` (último grupo e historial de puntajes).
- `src/components/`: `Home`, `Exam`, `QuestionCard`, `ProgressBar`, `Results`.
- `src/styles.css`: estética "Monte nativo" (paleta inspirada en el bosque chaqueño/espinal), con modo oscuro y diseño responsive.

## Deploy en Vercel

1. Subir este repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importar el repo.
3. Preset: **Vite** (build command `npm run build`, output directory `dist`). Vercel lo detecta automáticamente.
4. Deploy. Cada `git push` a `main` vuelve a desplegar.

Alternativa por CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

**URL de producción:** _(completar una vez desplegado)_
