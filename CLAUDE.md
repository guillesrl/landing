# CLAUDE.md - Contexto del Proyecto

## Información General
- **Proyecto**: Landing page para Automatizaciones IA
- **Repositorio**: https://github.com/guillesrl/landing
- **Tecnología**: HTML5 + CSS3 (sitio estático puro)
- **Dominio en EasyPanel**: Desplegado como Static Files

## Historia del Proyecto

### Problema Inicial
- El proyecto tenía un `package.json` con dependencias de Node.js
- EasyPanel ejecutaba `serve` y mostraba warnings y errores SIGTERM
- El comando de inicio era `npx serve . -l 3000`

### Solución Implementada
1. Se eliminó `package.json` y `package-lock.json` para convertir el proyecto en sitio estático 100%
2. EasyPanel ahora sirve los archivos directamente (Caddy/Nginx integrado)
3. No hay dependencias de Node.js en producción

### Botón Flotante de WhatsApp
- **Agregado**: Marzo 2026
- **Ubicación**: Esquina inferior derecha
- **Número**: +376 615808
- **Mensaje predefinido**: "Hola, me interesa información sobre automatizaciones IA"
- **Características**: Animación de pulso, hover effect, accesible
- **Archivos modificados**: `index.html`, `index.css`

## Estructura del Proyecto
```
/
├── index.html                  # Página principal
├── index.css                   # Estilos y animaciones
├── hero-asistencia.jpg         # Imagen del hero
├── landing_page_hero_bg.png    # Visual 3D (cubo IA)
└── skills/                     # Metodologías y referencias (no desplegadas)
```

## EasyPanel Config
- **Tipo**: Static Files (no Node.js)
- **Root Directory**: `/app` o `.`
- **Index File**: `index.html`
- **Build Command**: (vacío)
- **Start Command**: (vacío - no necesario)

## Datos de Contacto
- **Teléfono**: +376 615808
- **Email**: guillesrl@gmail.com
- **Webhook n8n**: configurado en index.html (no exponer URL/secret en docs)

## Consideraciones Técnicas
- No usar `npm` en producción (eliminado)
- Servir archivos estáticos directamente
- Formulario contacta con webhook de n8n
- Honeypot antispam en formulario
- Política de privacidad en modal

## Notas para Actualizaciones Futuras
- Para cambiar número de WhatsApp: editar `href` en `index.html` (clase `whatsapp-float`)
- Para cambiar colores: modificar variables CSS en `:root` de `index.css`
- Para cambiar mensaje del webhook: modificar script en `index.html` línea 175-180
