# Besito Snacks

🌐 **Sitio web:** [besitosnacks.com.ar](https://besitosnacks.com.ar)

Sitio web institucional de Besito, emprendimiento dedicado a crear propuestas de snacks saludables para empresas.

La página presenta la marca, sus propuestas y permite que potenciales clientes soliciten un presupuesto personalizado.

## Tecnologías

- React y Vite
- CSS
- Animaciones CSS e IntersectionObserver para entradas por viewport
- React Icons
- Formspree para el formulario de contacto
- Netlify para el despliegue

## Funcionalidades

- Diseño responsive para escritorio, tablet y celular.
- Presentación de la marca y sus propuestas.
- Galería de combos y carrusel de marcas.
- Formulario para solicitar presupuesto.
- Contacto directo por WhatsApp y enlaces a redes sociales.
- Página 404 personalizada.
- Animaciones adaptadas a la preferencia de movimiento reducido.

> El formulario envía la consulta a través de Formspree. El presupuesto se prepara y comunica posteriormente; no se genera automáticamente en la página.


## Estructura principal

```text
src/
├── assets/       # Imágenes y recursos visuales
├── components/   # Componentes de la página
├── App.jsx       # Composición principal
├── App.css       # Estilos de los componentes
├── index.css     # Estilos globales
└── main.jsx      # Punto de entrada de React

public/
├── 404.html      # Página de error personalizada
└── robots.txt    # Indicaciones para buscadores
```

## Despliegue

El proyecto está preparado para Netlify mediante `netlify.toml`:

- Comando de compilación: `npm run build`.
- Carpeta de publicación: `dist`.
- La variable `VITE_FORMSPREE_ENDPOINT` debe configurarse también en Netlify antes de compilar.

## Contacto

Las consultas realizadas desde el formulario llegan a la casilla configurada en Formspree. La página también permite contactar a Besito mediante WhatsApp y redes sociales.
