# E-Commerce Web Client - StoreTeam1

## Descripción

Proyecto integrador desarrollado para la materia **Laboratorio de Aplicaciones Web Cliente**.

La aplicación simula un e-commerce implementado como una *Single Page Application* (SPA), desarrollado con JavaScript Vanilla y organizado mediante módulos ES6.

El sistema consume productos desde la [FakeStore API](https://fakestoreapi.com/), permite navegar y filtrar el catálogo, visualizar detalles, agregar productos a un carrito y mantener su estado mediante `localStorage`.

## Equipo y contribuciones

De acuerdo con la consigna de evaluación, se detalla la participación de cada integrante, junto con su usuario de GitHub y las funcionalidades desarrolladas.

### Rafael Enrique Cortez — [@RafaelECortez](https://github.com/RafaelECortez)

Principales desarrollos:

- Comunicación asíncrona con FakeStore API. (`api.js`, `ProductDTO.js`) 
  - Manejo de errores de comunicación.
- Obtención de productos y renderizado dinámico de cards. (`product-cart.js`, `product-service.js`, `product-render.js`, `product-store.js`)
- Implementación de la barra de búsqueda. (`search-bar.js`, `search-bar-render.js`)
  - Manejo del estado sin resultados.

### Noelia Elisabeth Sanabria — [@NoeliaESanabria](https://github.com/NoeliaESanabria)

Responsable de los componentes de interacción, mensajes y confirmaciones para el usuario.

Principales desarrollos:

- Implementación del modal de detalle de producto.
- Visualización de imagen, título, descripción, precio y categoría.
- Cierre del modal y conexión con la acción de agregar al carrito.
- Creación de un componente reutilizable para mostrar Toasts.
- Creación de un modal global de confirmación.
- Implementación de la acción **Clear Cart**.
- Confirmación previa antes de vaciar el carrito.
- Integración del botón de vaciado con la lógica central del carrito.
- Traducción al inglés de mensajes, botones y textos de interacción.
- Implementación de mensajes de éxito, advertencia y error.

### Aixa Jezabel Sosa — [@aixa-istea](https://github.com/aixa-istea)

Responsable de la persistencia y de la lógica central del carrito de compras.

Principales desarrollos:

- Creación del servicio centralizado del carrito mediante `cart-service.js`.
- Lectura y escritura del carrito en `localStorage`.
- Incorporación de productos al carrito.
- Incremento de la cantidad cuando un producto ya se encuentra agregado.
- Eliminación de productos y modificación de cantidades.
- Cálculo de la cantidad total de artículos y del importe total.
- Actualización y persistencia del badge del carrito.
- Recuperación del estado del carrito al recargar la aplicación.
- Integración de la acción **Add to Cart** desde el modal de producto.
- Implementación de la finalización de compra.
- Limpieza del carrito y de `localStorage` luego de confirmar la compra.
- Actualización del estado vacío del carrito.
- Habilitación y deshabilitación de las acciones según el contenido del carrito.

### Guillermo Eduardo Vicente — [@gvicenteprieto](https://github.com/gvicenteprieto)

Principales desarrollos:

- Implementación del carrito mediante un componente Offcanvas de Bootstrap.
- Renderizado dinámico de los productos agregados.
- Visualización de imagen, nombre, precio y cantidad de cada producto.
- Incorporación de controles para aumentar y disminuir cantidades.
- Deshabilitación del botón de disminución cuando la cantidad es igual a uno.
- Implementación de la eliminación individual de productos.
- Actualización dinámica del total del carrito.
- Visualización del estado de carrito vacío.
- Implementación del filtrado de productos por categoría.
- Diseño y adaptación responsive del panel lateral del carrito.
- Integración de los controles visuales con las funciones de `cart-service.js`.

## Funcionalidades implementadas

El proyecto integra las principales reglas de negocio y requerimientos de experiencia de usuario solicitados.

* **Catálogo dinámico:** consumo asíncrono de FakeStore API y renderizado de productos mediante cards de Bootstrap en una grilla responsive.

* **Navegación por categorías y búsqueda:** filtrado de productos mediante un selector dinámico de categorías y una barra de búsqueda por texto, incluyendo el manejo de búsquedas sin resultados.

* **Visualización de detalles:** modal interactivo con imagen, título, descripción, precio y categoría del producto, junto con la opción de agregarlo directamente al carrito.

* **Gestión del carrito de compras:**

  * Panel lateral implementado con Offcanvas de Bootstrap.
  * Badge con la cantidad total de artículos.
  * Persistencia del estado mediante `localStorage`.
  * Recuperación del carrito después de recargar la página.
  * Controles para incrementar y disminuir cantidades.
  * Deshabilitación del botón de disminución cuando la cantidad es igual a uno.
  * Eliminación individual de productos.
  * Cálculo dinámico del precio total.
  * Estado visual para carrito vacío.

* **Acciones generales del carrito:**

  * Vaciado completo del carrito con confirmación previa.
  * Finalización de compra con confirmación.
  * Limpieza del carrito y de `localStorage` después de confirmar la operación.
  * Deshabilitación de las acciones cuando el carrito no contiene productos.

* **Feedback al usuario:** utilización de Toasts y modales de Bootstrap para informar acciones exitosas, advertencias y errores de conexión con la API.

* **Diseño responsive:** adaptación de la interfaz, el catálogo, los modales y el carrito a distintos tamaños de pantalla.


## Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| **HTML5** | Estructura semántica de la aplicación. |
| **CSS3** | Estilos personalizados. |
| **Bootstrap 5** | Sistema responsive y componentes como cards, modales, Toasts y Offcanvas. |
| **JavaScript Vanilla ES6** | Lógica de negocio, eventos, manipulación del DOM y consumo de datos. |
| **Fetch API** | Consulta asíncrona de productos desde FakeStore API. |
| **LocalStorage** | Persistencia del estado del carrito. |
| **Módulos ES6** | Organización del código mediante `import` y `export`. |
| **Git y GitHub** | Trabajo por ramas y revisión mediante Pull Requests. |


## Instalación y ejecución

Al tratarse de una aplicación web estática, no requiere instalación de dependencias.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/RafaelECortez/Ecommers-LabAppWebCliente.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd Ecommers-LabAppWebCliente
   ```

3. Abrir la carpeta con un editor como Visual Studio Code.

4. Ejecutar la aplicación mediante un servidor local, por ejemplo la extensión **Live Server**.

El uso de un servidor local es necesario para que el navegador cargue correctamente los módulos JavaScript que utilizan `import` y `export`.

## Flujo de uso

1. La aplicación consulta los productos disponibles en FakeStore API.
2. El usuario puede buscar productos o filtrarlos por categoría.
3. Al seleccionar un producto, se abre un modal con su información detallada.
4. El producto puede agregarse al carrito desde el modal.
5. El carrito permite modificar cantidades, eliminar productos, vaciar su contenido o avanzar con la compra.
6. El estado se conserva en `localStorage` después de recargar la página.
7. Las operaciones relevantes muestran mensajes de confirmación o advertencia.
