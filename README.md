# MY WATCH

## Introduccion

_Proyecto final para coderhouse, donde implementamos en un ecommerce en este caso, de relojes, todo lo visto en el curso de ReactJs:_


- Navegacion de la pagina con react-router-dom usando Link,useParams,Routes.
- Props entre componentes padres e hijos
- Uso de context para manipular el carrito
- Componente Loading que se activa mientras el usuario espera por la informacion solicitada
- Navbar responsive con acceso a la navegacion de toda la pagina
- Contador de productos en el carrito no solo de tipos sino de unidades,es decir, si agrego tres productos de un solo tipo el contador estara en '3' no en '1'
- Pantalla de bienvenida con un video ligero de presentacion
- Cree un componente llamado button donde tengo clases asignadas con sus respectivos estilos, a causa de que uso los mismos estilos en botones en tres componentes distintos.
- Implementacion de Base de datos de firebase donde agregamos y eliminamos productos, adquisicion de productos, guardado de datos personales, datos de envio, metodos de pago, solicitudes de novedades y ofertas. 

## Echo con:

- HTML para el index e instalacion de cdn
- CSS3
- Estilos gradientes de https://cssgradient.io/
- Flexbox
- CSSgrid
- React - Biblioteca de JavaScript

## Herramientas Utilizadas

- Compilacion: https://vitejs.dev/
- Libreria: https://chakra-ui.com/
- iconos: https://fontawesome.com/
- fuentes: https://fonts.google.com/
- Instalacion : https://nodejs.org/en
- Para la informacion de productos, datos personales de los clientes, solicitudes de novedades y ofertas, utilizo una base de datos : https://firebase.google.com/?hl=es

## Instalacion

- ``` git clone --https://github.com/nagu2211/coderReact.git ```
- ``` npm install ```
- ``` npm run dev ```

## funcionamiento 

**Se puede navegar a toda la pagina en todo momento** 
![Gif de navegacion](./src/assets/navegacion.gif)

**detalles de productos y agregar al carrito**

![gif de agregar producto]()

**Carrito**

![gif de funcionamiento del carrito]()

**Pedido de ticket de compra**

![gif de ticket de compra]()

**Puedes dejar tu email para recibir novedades y ofertas**

![gif de novedades]()

1. Home : Bienvenida 

1. catalogo: Todos los productos
1. marcas: Separa por categorias
1. Limitado : Separa los productos con poco stock de los que tienen mucho stock
1. CartWidget: contador de productos y Link al componente Cart
1. Navbar: Navegacion de toda la pagina
1. Footer : Consultar ticket de compra, Input solicitando su email para mandarle novedades
1. Cart : cards con informacion de los productos, la cantidad, el subtotal y el total, y un formulario donde dejar sus datos de envio que al darle a 'finalizar compra' lo guarda en la base de datos y genera un codigo id(con ese codigo id puede consultar el ticket de compra ubicado en el footer)

## Autor

- Instagram - https://www.instagram.com/santy_2211/
- Linkedin - https://www.linkedin.com/in/santiago-espindola-a56ba4255/

