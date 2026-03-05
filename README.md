# IU Media API & Frontend

Este proyecto contiene una API de medios y su correspondiente frontend en React.

## Requisitos

- Node.js instalado
- npm instalado

## Cómo empezar

### 1. Instalación

Instala las dependencias en la raíz del proyecto:

```bash
npm install
```

Y también en la carpeta del frontend:

```bash
cd frontend
npm install
cd ..
```

### 2. Ejecutar el proyecto (Recomendado)

Desde la **raíz** del proyecto, ejecuta el siguiente comando para iniciar tanto el backend como el frontend simultáneamente:

```bash
npm run dev:all
```

Esto evitará errores de conexión (`ECONNREFUSED`) entre el frontend y el backend.

### 3. Ejecutar por separado

Si prefieres ejecutarlos en terminales diferentes:

**Backend:**
```bash
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## Estructura del proyecto

- `src/`: Código fuente del backend (Express + Sequelize).
- `frontend/`: Código fuente del frontend (Vite + React).
- `database.sqlite`: Base de datos local.
