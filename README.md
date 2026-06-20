# StoreTeam1 – E-commerce App

Aplicación web de comercio electrónico desarrollada como proyecto para la asignatura **Laboratorio de Aplicaciones Web Cliente** del **ISTEA**.  
El proyecto consume productos desde la [FakeStoreAPI](https://fakestoreapi.com/) y ofrece una experiencia completa de navegación, filtrado, búsqueda y gestión de carrito de compras, todo con almacenamiento persistente en `localStorage`.

---

## Características principales

- **Listado de productos** en tarjetas responsivas con imagen, título, categoría y precio.
- **Filtro por categoría** (select desplegable) y **búsqueda por nombre**.
- **Modal de detalle** del producto con imagen, descripción y botón para añadir al carrito.
- **Carrito de compras** en panel lateral (*offcanvas*):
  - Control de cantidad (+ / -) por producto.
  - Eliminación individual y vaciado total con confirmación.
  - Cálculo automático del total.
  - Botones de acción deshabilitados cuando el carrito está vacío.
- **Persistencia**: el carrito se guarda en `localStorage` y se restaura al recargar la página.
- **Notificaciones** tipo *toast* y **diálogos de confirmación** (implementados sin librerías externas).
- **Diseño responsivo** gracias a Bootstrap 5.
- **Código modular** en ES6, facilitando el mantenimiento y la escalabilidad.

---

## Tecnologías utilizadas

| Tecnología | Descripción |
|------------|-------------|
| **HTML5** | Estructura semántica (`<header>`, `<main>`, `<footer>`, `<section>`). |
| **CSS3 / Bootstrap 5** | Estilos y componentes responsivos (grid, offcanvas, cards, modales). |
| **JavaScript (Vanilla ES6)** | Lógica de negocio, manipulación del DOM, Fetch API, `localStorage`. |
| **Módulos ES6** | Organización del código en archivos independientes. |

---

## Estructura del proyecto

```
Ecommers-LabAppWebCliente/
├── index.html
├── css/
│ └── global-styles.css # Estilos personalizados (actualmente vacío)
├── js/
│ ├── index.js # Punto de entrada, inicializa todo
│ ├── data/
│ │ └── product-store.js # Estado global de productos (all, filtered, search)
│ ├── models/
│ │ └── ProductDTO.js # Mapeo de datos desde la API
│ └── modules/
│ ├── api.js # Conexión con FakeStoreAPI
│ ├── basic-html/
│ │ └── basic-html.js # Inyección de header, main, footer y offcanvas del carrito
│ ├── cart/
│ │ ├── cart-service.js # Lógica del carrito (CRUD, persistencia)
│ │ ├── cart-render.js # Renderizado de los ítems en el offcanvas
│ │ └── cart-clear.js # Manejo del botón "DELETE CART"
│ ├── products/
│ │ ├── product-service.js # Carga de productos desde la API
│ │ ├── product-render.js # Renderizado de las tarjetas de productos
│ │ ├── category-filter-render.js # Filtro por categoría
│ │ ├── search-bar-render.js # Inyección de la barra de búsqueda
│ │ └── search-bar.js # Lógica de búsqueda
│ └── ui.components/
│ ├── user-messager.js # Toasts y modales de confirmación
│ └── producto-modal.js # Modal de detalle del producto
└── exportarContenido.js # Utilidad para generar el TXT de código fuente (uso interno)

---

## Instalación y uso

1. **Clonar** o descargar el repositorio.
2. Abrir el proyecto con un servidor local (recomendado: **Live Server** en VSCode).
3. La aplicación cargará automáticamente los productos desde la API externa.
4. Navegar, filtrar, buscar y gestionar el carrito desde la interfaz.

> No se requiere instalar dependencias; todo se obtiene desde CDN (Bootstrap).

---

## Funcionalidades en detalle

### Listado de productos

- Se muestran en tarjetas (grid de Bootstrap) con imagen, título, categoría y precio.
- Cada tarjeta tiene un botón **"View Product"** que abre el modal de detalle.

### Filtros y búsqueda

- **Filtro por categoría**: select con todas las categorías disponibles.
- **Búsqueda por título**: campo de texto y botón "Search"; también se activa con la tecla Enter.
- **Botón "Clear"**: limpia el campo de búsqueda y restaura la lista completa (respetando el filtro de categoría).

### Carrito de compras

- Se abre desde el ícono 🛒 en el header.
- Muestra cada producto con:
  - Imagen en miniatura.
  - Título (truncado).
  - Precio unitario.
  - Botones **+** / **-** para ajustar cantidad (el botón **-** se deshabilita cuando cantidad = 1).
  - Botón 🗑️ para eliminar el producto.
- Al pie del offcanvas:
  - **Total** actualizado en tiempo real.
  - **DELETE CART**: vacía el carrito (con confirmación).
  - **COMPLETE PURCHASE**: finaliza la compra (vacía carrito y muestra mensaje de éxito).
- Ambos botones de acción se deshabilitan automáticamente cuando el carrito está vacío.

### Persistencia

- Todos los cambios en el carrito se sincronizan con `localStorage`.
- Al recargar la página, el carrito se restaura exactamente como estaba.

### Feedback al usuario

- **Toasts** informativos al añadir, eliminar o modificar cantidades.
- **Modales de confirmación** para acciones críticas (vaciar carrito, finalizar compra).

---

## Integrantes del equipo

| Nombre | Usuario de GitHub |
|--------|-------------------|
| **Aixa Jezabel Sosa** | [@AixaSosa](https://github.com/aixa-istea) |
| **Noelia Sanabria**   | [@NoeliaSanabria](https://github.com/NoeliaESanabria) |
| **Rafael Cortez**     | [@RafaelCortez](https://github.com/RafaelCortez) |
| **Guillermo Eduardo Vicente** | [@GuillermoVicente](https://github.com/gvicenteprieto) |

---

## Evaluación y consideraciones finales

- El proyecto cumple con todos los requisitos funcionales solicitados en la consigna.
- La participación de cada integrante puede verificarse en el historial de *commits* del repositorio.
- Se ha puesto especial atención en la **experiencia de usuario**, la **accesibilidad** y el **código limpio y modular**.

---

## Recursos utilizados

- [Bootstrap 5](https://getbootstrap.com/)
- [FakeStoreAPI](https://fakestoreapi.com/)
