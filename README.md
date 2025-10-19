# 🖥️ DIVCENTRADO 💻

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![TSParticles](https://img.shields.io/badge/TSParticles-000000?style=for-the-badge&logo=particles.js&logoColor=white)

> 💡 **Nota:** Este proyecto es un trabajo práctico en desarrollo. Las funcionalidades se irán ampliando progresivamente a medida que se agreguen más trabajos prácticos.

---

## 🚀 Proyecto Desplegado

Puedes ver la última versión desplegada aquí:
**[Publicación en Vercel](https://frontend-ifts.vercel.app/)**

---

## 📄 Descripción

Somos un grupo de estudiantes del Instituto de Formación Técnica Superior N° 29 que queremos darnos a conocer para, en un futuro, conseguir un trabajo en empresas IT.
En este proyecto vas a conocernos más a fondo: quiénes somos, nuestros gustos y habilidades, y qué hacemos en nuestros tiempos libres.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** React 18+
* **Lenguaje:** TypeScript
* **Bundler:** Vite
* **Routing:** React Router DOM
* **Estilos:** Bootstrap 5 y CSS3
* **Animaciones:** TSParticles
* **Linting:** ESLint

---

## ⚙️ Instalación y Uso

### Prerrequisitos
* Node.js (versión 18 o superior)
* `npm` o `yarn`

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    # Reemplaza la URL por la de tu repositorio (HTTPS o SSH)
    git clone [https://github.com/tu-usuario/divcentrado2.git](https://github.com/tu-usuario/divcentrado2.git)
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd divcentrado2
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecutar en modo de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`

### Otros Scripts

* **Crear build de producción:**
    ```bash
    npm run build
    ```
* **Previsualizar el build:**
    ```bash
    npm run preview
    ```
* **Ejecutar el linter:**
    ```bash
    npm run lint
    ```

---

## ✨ Funcionalidades Implementadas

* **Navegación y Routing:** Uso de `React Router DOM` para la navegación fluida entre páginas y rutas dinámicas para los perfiles individuales.
* **Carrusel Principal:** Componente `CarouselWrapper` que funciona como contenedor principal para navegar por las secciones.
* **Componentes Interactivos:**
    * **Portada (`Nombre`):** Componente SVG con texto centrado.
    * **Trabajo:** Sistema de círculos con animaciones CSS (Flip, Ripple, Shrink) al hacer clic.
* **Perfiles Individuales:**
    * **Santiago:** Implementación de `TSParticles` con configuración dinámica para efectos de partículas.
    * **Lautaro, Cristian, Paola, Silvana:** Estructura base preparada para el desarrollo futuro.
* **Bitácora:** Sistema de logs y entradas para documentar el progreso.

---

## 📂 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Bitacora.tsx     # Componente de bitácora
│   ├── logentry.tsx     # Componente de entrada de log
│   ├── nombre.tsx       # Componente de nombre/portada
│   ├── Perfil.tsx       # Componente de perfil
│   └── Trabajo.tsx      # Componente de trabajo
├── pages/               # Páginas principales
│   ├── CarouselWrapper.tsx  # Wrapper del carrusel principal
│   └── profile/         # Páginas de perfiles individuales
│       ├── Cristian.tsx
│       ├── Lautaro.tsx
│       ├── Paola.tsx
│       ├── Santiago.tsx
│       └── Silvana.tsx
├── styles/              # Hojas de estilo CSS
│   ├── profiles/        # Estilos específicos de perfiles
│   ├── bitacora.css
│   ├── carousel.css
│   ├── nombre.css
│   └── trabajo.css
├── assets/              # Recursos multimedia
│   └── img/            # Imágenes y iconos
├── types/              # Definiciones de tipos TypeScript
├── main.tsx           # Punto de entrada de la aplicación
└── router.tsx         # Configuración de rutas
```