# React Routes - Ejemplo Panel Administrativo

Este proyecto es un **panel administrativo básico** construido con **React**, **Vite**, **React Router** y **Bootstrap**. Incluye una barra de navegación y secciones para:

- Clientes
- Proveedor
- Usuarios
- Logout

Está diseñado como una **Single Page Application (SPA)**, utilizando `react-router-dom` para manejar la navegación entre páginas sin recargar el navegador.

---

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)

---

## Instalación del proyecto

Sigue los siguientes pasos para ejecutar el proyecto localmente:

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/panel-admin-react.git
cd panel-admin-react
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

---

## Estructura básica de rutas

Las rutas se definen en `App.jsx` utilizando `react-router-dom`:

```jsx
<Routes>
  <Route path="/clientes" element={<Clientes />} />
  <Route path="/proveedor" element={<Proveedor />} />
  <Route path="/usuarios" element={<Usuarios />} />
  <Route path="/logout" element={<Logout />} />
</Routes>
```

Cada sección es un componente React independiente ubicado en la carpeta `/pages`.

---

## Navegación sin recargar la página

La navegación entre secciones se logra con el componente `NavLink` de `react-router-dom` dentro del `Navbar`:

```jsx
<Nav.Link as={NavLink} to="/clientes">Clientes</Nav.Link>
```

Esto permite cambiar de vista sin refrescar la aplicación, manteniendo el rendimiento y experiencia de usuario óptimos.

