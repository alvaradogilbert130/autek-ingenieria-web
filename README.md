# Autek Ingeniería - Plataforma Web Industrial 🚀

Bienvenido al repositorio oficial del sitio web y catálogo digital de **Autek Ingeniería**, especialistas en soluciones integrales de ingeniería industrial, maquinaria para procesamiento de alimentos, calderas, tableros de control y automatización de procesos.

---

## 🛠️ Tecnologías Utilizadas

- **Framework principal:** [Next.js 15](https://nextjs.org/) (App Router)
- **Biblioteca de UI:** [React 18](https://react.dev/)
- **Estilos & Diseño:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Servicio de Correo:** [Nodemailer](https://nodemailer.com/) (con fallback seguro simulado para entorno de desarrollo)
- **IA & Backend:** [Firebase App Hosting](https://firebase.google.com/) & [Genkit AI Framework](https://firebase.google.com/docs/genkit)

---

## ✨ Características Principales

1. **Diseño Adaptativo (Responsive Design):** Experiencia optimizada para dispositivos móviles, tabletas y computadoras de escritorio.
2. **Catálogo de Servicios y Equipos:** Presentación visual de maquinaria industrial (bandas transportadoras, hiladoras, mezcladores, calderas, ciclónicos, tanques industriales y tableros de control).
3. **Galería de Portafolio:** Exhibición de proyectos ejecutados con imágenes de alta resolución, retos técnicos solucionados y resultados de clientes.
4. **Formulario de Contacto Seguro:** Integración con Server Actions de Next.js y Nodemailer con sanitización de inputs mediante Zod.
5. **Arquitectura Limpia & Seguridad:** Estricta separación de variables de entorno y prevención de fugas de credenciales.

---

## 🔑 Configuración del Entorno de Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alvaradogilbert130/autek-ingenieria-web.git
   cd autek-ingenieria-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**
   Copia el archivo `.env.example` para crear tu entorno local:
   ```bash
   cp .env.example .env.local
   ```
   *Nota: Nunca subas `.env.local` al control de versiones.*

---

## 💻 Comandos Disponibles

- **Iniciar servidor de desarrollo:**
  ```bash
  npm run dev
  ```
  Abre [http://localhost:9002](http://localhost:9002) en tu navegador.

- **Verificación de Tipos (TypeScript):**
  ```bash
  npm run typecheck
  ```

- **Compilar para Producción:**
  ```bash
  npm run build
  ```

- **Ejecutar servidor de Producción:**
  ```bash
  npm start
  ```

---

## 🛡️ Seguridad & Buenas Prácticas

- Ninguna clave de API, contraseña de correo o credencial privada está hardcodeada en el código fuente.
- Todas las variables sensibles son administradas mediante variables de entorno en tiempo de ejecución.
- Los mensajes enviados a través del formulario de contacto son sanitizados usando esquemas descriptivos Zod.

---

## 🚀 Despliegue

Este proyecto está configurado para desplegarse en **Firebase App Hosting**. Para desplegar una versión en la nube:

```bash
npx firebase deploy
```

---

© 2026 **Autek Ingeniería**. Todos los derechos reservados.
