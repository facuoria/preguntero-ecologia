# Preguntero de Ecología Agrícola

Web estática (Vite + React + TypeScript, sin backend) para practicar el parcial de múltiple opción de Ecología Agrícola (Unidades 1, 2 y 3).

Tiene dos secciones:

- **Examen rápido**: 100 preguntas conceptuales en 10 grupos de 10.
- **Preguntas estilo parcial**: 50 preguntas de interpretación de casos (formato real del parcial) en 5 grupos de 10, con explicación de cada respuesta y modo cronometrado opcional (15 minutos).

En ambas, al presionar **"Realizar examen"** se elige al azar uno de los grupos fijos (sin repetir el último usado en esa sección), se mezclan preguntas y opciones, y al entregar se muestra el puntaje junto con el detalle de los errores (tu respuesta, la correcta, la explicación cuando corresponde, y la sección del apunte donde repasar). El historial de puntajes se guarda por separado para cada sección.

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

- `src/data/questions.ts`: banco del examen rápido (100 preguntas, 10 grupos de 10).
- `src/data/questions-parcial.ts`: banco de preguntas estilo parcial (50 preguntas, 5 grupos de 10, con `explanation`).
- `src/lib/exam.ts`: lógica de selección de grupo, mezcla y corrección, parametrizada por sección (`mode: 'rapido' | 'parcial'`).
- `src/lib/storage.ts`: helpers de `localStorage` (último grupo e historial de puntajes, separados por sección).
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

**URL de producción:** https://preguntero-ecologia.vercel.app
