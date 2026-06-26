# 🛒 E-Commerce Web Client - StoreTeam1
## Equipo

De acuerdo a la rúbrica de evaluación, a continuación se detalla la participación y el desarrollo técnico de cada integrante del equipo **Team1**:

* **Rafael Cortez** - [@RafaelECortez](https://github.com/RafaelECortez)

* **Aixa Sosa** - [@aixa-istea](https://github.com/aixa-istea)

* **Noelia Sanabria** - [@NoeliaESanabria](https://github.com/NoeliaESanabria)

* **Guillermo Vicente** - [@gvicenteprieto](https://github.com/gvicenteprieto)


## Descripción

Proyecto integrador para la materia **Laboratorio de Aplicaciones Web Cliente**. Es una aplicación web tipo *Single Page Application (SPA)* desarrollada enteramente con JavaScript Vanilla y estructurada mediante ES6 Modules.

La plataforma simula un e-commerce completo consumiendo datos de la [FakeStore API](https://fakestoreapi.com/) y gestionando el estado global de la aplicación (catálogo, filtros y carrito) de forma local.

## Funcionalidades Implementadas

El proyecto cumple con todas las reglas de negocio y requerimientos UX/UI solicitados:

* **Catálogo Dinámico:** Consumo asíncrono de la API y renderizado de productos en un sistema de grilla (Cards) adaptativo (Responsive).
* **Navegación por Categorías y Búsqueda:** Filtrado en tiempo real mediante un `select` dinámico de categorías y una barra de búsqueda por texto.
* **Visualización de Detalles:** Ventanas modales interactivas que muestran imagen, título, precio, descripción y categoría de cada producto, con la opción directa de "Agregar al carrito".
* **Gestión Avanzada del Carrito (Sidebar):**
  * Panel lateral (Offcanvas) accesible desde el *badge* en la barra de navegación que indica la cantidad total de artículos.
  * Controles individuales por ítem: sumar, restar (se deshabilita al llegar a 1) y eliminar.
  * Cálculo dinámico del precio total.
  * Persistencia de datos utilizando `LocalStorage` para no perder el estado tras recargar la página.
  * Acciones globales: Botones protegidos (deshabilitados si está vacío) para "Finalizar Compra" y "Vaciar Carrito" con confirmación crítica.
* **Feedback de Usuario (Toasts y Modals):** Notificaciones flotantes implementadas con Bootstrap para confirmar acciones exitosas (como agregar productos) o advertir sobre errores de conexión.

## Tecnologías utilizadas

| Tecnología | Descripción |
|------------|-------------|
| **HTML5** | Estructura semántica (`<header>`, `<main>`, `<footer>`, `<section>`). |
| **CSS3 / Bootstrap 5** | Estilos y componentes responsivos (grid, offcanvas, cards, modales). |
| **JavaScript (Vanilla ES6)** | Lógica de negocio, manipulación del DOM, Fetch API, `localStorage`. |
| **Módulos ES6** | Organización del código en archivos independientes. |

## Instalación y Ejecución

Al ser un cliente web estático, su ejecución es inmediata.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/RafaelECortez/Ecommers-LabAppWebCliente.git
   ```

2. Abrir la carpeta del proyecto en el editor (ej. VS Code).

3. Lanzar la aplicación utilizando un servidor local como **Live Server** para permitir la carga correcta de los módulos `import/export` de JavaScript.

