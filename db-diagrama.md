# 🧩 Diseño de Base de Datos - Tienda K-Zero

Este documento describe el diseño inicial de la base de datos para la tienda K-Zero. Está pensada para una estructura escalable, clara y orientada a una experiencia de usuario simple.

---

## 📘 TABLAS PRINCIPALES

### 1. **Usuarios (users)**
Representa a los usuarios registrados en la tienda.

| Campo       | Tipo      | Detalles                          |
|-------------|-----------|-----------------------------------|
| id          | INTEGER   | PK, autoIncrement, not null       |
| email       | STRING    | único, obligatorio                |
| password    | STRING    | hash de la contraseña, obligatorio|
| createdAt   | DATE      | generado automáticamente          |
| updatedAt   | DATE      | generado automáticamente          |

Relaciones:
- 1 usuario tiene 1 carrito.

---

### 2. **Productos (products)**
Representa los productos disponibles en la tienda (guantes deportivos).

| Campo       | Tipo          | Detalles                        |
|-------------|---------------|---------------------------------|
| id          | INTEGER       | PK, autoIncrement               |
| nombre      | STRING        | obligatorio                     |
| descripcion | TEXT          | mínimo 10 caracteres            |
| imagen      | STRING        | URL o ruta de la imagen         |
| precio      | DECIMAL(10,2) | obligatorio, mayor a 0          |
| stock       | INTEGER       | opcional, default: 0            |
| createdAt   | DATE          | generado automáticamente        |
| updatedAt   | DATE          | generado automáticamente        |

Relaciones:
- Un producto puede estar en muchos carritos.

---

### 3. **Carritos (carts)**
Representa el carrito de un usuario.

| Campo       | Tipo      | Detalles                      |
|-------------|-----------|-------------------------------|
| id          | INTEGER   | PK, autoIncrement             |
| userId      | INTEGER   | FK → users.id                 |
| createdAt   | DATE      | generado automáticamente      |
| updatedAt   | DATE      | generado automáticamente      |

Relaciones:
- 1 carrito pertenece a 1 usuario.
- 1 carrito tiene muchos productos (relación N:M con cantidad).

---

### 4. **Productos en Carrito (cart_products)**
Tabla intermedia que representa los productos agregados a cada carrito.

| Campo       | Tipo          | Detalles                          |
|-------------|---------------|-----------------------------------|
| id          | INTEGER       | PK, autoIncrement                 |
| cartId      | INTEGER       | FK → carts.id                     |
| productId   | INTEGER       | FK → products.id                  |
| cantidad    | INTEGER       | obligatorio, mínimo 1             |
| precioUnit  | DECIMAL(10,2) | precio al momento de agregar      |
| createdAt   | DATE          | generado automáticamente          |
| updatedAt   | DATE          | generado automáticamente          |

Relaciones:
- Muchos cart_products → 1 producto
- Muchos cart_products → 1 carrito

---

## 🔗 Relaciones resumen

- **users** 1 ←→ 1 **carts**
- **carts** 1 ←→ N **cart_products** N ←→ 1 **products**

---

## ✅ Pendiente para el futuro

- Modelo `orders` (pedidos confirmados)
- Modelo `order_items` (detalle de pedidos)
- Roles de usuarios (cliente, admin)
- Categorías de productos

---

