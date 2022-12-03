// const boton1 = document.getElementById('boton1')

// // //array productos
// // const arrayProductos = []

// // //clase producto
// // class NewProduct{
// //     constructor(id,name,price,stock){
// //       this.id = id
// //       this.name = name
// //       this.price = price
// //       this.stock = stock
// //     }
// //     }

// // const producto = document.getElementById('producto1')

// // const botonCarrito = document.getElementsByClassName('product__icon fas fa-cart-plus')

// // // botonCarrito.click(); = 

// // function AddCarrito(){
// //     arrayProductos.push(new NewProduct(1,'pantalon',35,1));
// //     console.log(arrayProductos);
// // }

// const productos = []
// //clase producto
// class Producto{
//   constructor(id,title,price,image,description){
//     this.id = id
//     this.title = title
//     this.price = price
//     this.image = image
//     this.description = description
//   }
//   }

// productos.push(new Producto(1,'pantalon gris', 1200, '', 'pantalon elastizado color gris'))
// productos.push(new Producto(2,'pantalon celeste', 1200, '', 'pantalon elastizado color celeste'))
// productos.push(new Producto(3,'toalla', 800, '', 'toalla colores varios'))
// productos.push(new Producto(4,'bolso portable', 1200, '', 'bolso portable de tela para yoga mat'))
// console.log(productos)
// console.log(JSON.stringify(productos))

// boton1.onclick = console.log('pantalon')

const divCards = document.querySelector('.cards')
const divContainer = document.querySelector('.container')
const sectionContainer = document.querySelector('.container-products')
const lista = document.querySelector('#lista')
const botonFiltrar = document.querySelector('#filtrar')
const botonCarro = document.querySelector('#carro')



const mostrarCategorias = async () => {
    // const categoriasFetch = await fetch('https://fakestoreapi.com/products/categories')
    const categoriasFetch = await fetch('./categorias.json')
    const categoriasJson = await categoriasFetch.json()
    //console.log(categoriasJson)
    categoriasJson.forEach(cat => {
        const option = document.createElement('option')
        option.innerText = `${cat}`
        lista.append(option)
    })
}

const buscarTodosProductos = async () => {
    // const productosFetch = await fetch('https://fakestoreapi.com/products')
    const productosFetch = await fetch('./productos.json')
    const productosJson = await productosFetch.json()
    //console.log(productosJson)
    productosJson.forEach(prod => {
        const { category, id, description, image, price, title } = prod
         sectionContainer.innerHTML += 
//         `
//     <div class="card" style="width: 18rem;">
//   <img src="${image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5>${title}</h5>
//     <p class="card-text">${description}</p>
//     <p>${price}</p>
//     <button id=${id} class="btn btn-primary">Agregar</button>
//   </div>
// </div>`
`
  <div class="product" id="producto${id}">
  <img src="${image}" class="product__img" alt="...">
  <div class="product__description">
    <h3 class="product__title">${title}</h3>
    <span class="product__price">${price}</span>
  </div>
  <button class="product__icon fas fa-cart-plus boton${id}" id="boton${id}">Agregar</button>
</div>`

/* <div class="product" id="producto1">
                <img src="img/pantalon1.jpg" alt="" class="product__img">
                <div class="product__description">
                    <h3 class="product__title">Farenheit (Grey)</h3>
                    <span class="product__price">$575.00</span>
                </div>
                <button class="product__icon fas fa-cart-plus 1" type="button" id="boton1" value="AddCarrito"></button>
            </div> */
    })

    // fetch('https://fakestoreapi.com/products')
    // .then(response=>response.json())
    // .then(response=>console.log(response)
}

const buscarProductosPorCategoria = async () => {
    sectionContainer.innerHTML = ''
    divCards.innerHTML = ''
    const categoriaElegida = lista.value
    console.log(categoriaElegida)
    // const productosFetch = await fetch(`https://fakestoreapi.com/products/category/${categoriaElegida}`)
    /*L*/ const productosFetch = await fetch('./productos.json')
    const productosJson = await productosFetch.json()
    // console.log(productosJson)
    /*L*/ productosFiltrados = productosJson.filter(prod=>prod.category===categoriaElegida)
    productosFiltrados2 = productosJson.filter(prod=>prod.categoryTodos===categoriaElegida)
    /*L*/ productosFiltrados.forEach(prod => {
        const { category, id, description, image, price, title } = prod
        sectionContainer.innerHTML += 
//         `
//     <div class="card" style="width: 18rem;">
//   <img src="${image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5>${title}</h5>
//     <p class="card-text">${description}</p>
//     <p>${price}</p>
//     <button id=${id} class="btn btn-primary">Agregar</button>
//   </div>
// </div>
// `
`
  <div class="product" id="producto${id}">
  <img src="${image}" class="product__img" alt="...">
  <div class="product__description">
    <h3 class="product__title">${title}</h3>
    <span class="product__price">${price}</span>
  </div>
  <button class="product__icon fas fa-cart-plus boton${id}" id="boton${id}">Agregar</button>
</div>`
    })
/*L*/ productosFiltrados2.forEach(prod => {
  const { category, id, description, image, price, title } = prod
  sectionContainer.innerHTML += 
//         `
//     <div class="card" style="width: 18rem;">
//   <img src="${image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5>${title}</h5>
//     <p class="card-text">${description}</p>
//     <p>${price}</p>
//     <button id=${id} class="btn btn-primary">Agregar</button>
//   </div>
// </div>
// `
`
<div class="product" id="producto${id}">
<img src="${image}" class="product__img" alt="...">
<div class="product__description">
<h3 class="product__title">${title}</h3>
<span class="product__price">${price}</span>
</div>
<button class="product__icon fas fa-cart-plus 1" id="boton${id}">Agregar</button>
</div>`
})
//     productosJson.forEach(prod => {
//         const { category, id, description, image, price, title } = prod
//         divCards.innerHTML += `
//     <div class="card" style="width: 18rem;">
//   <img src="${image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5>${title}</h5>
//     <p class="card-text">${description}</p>
//     <p>${price}</p>
//     <button id=${id} class="btn btn-primary">Agregar</button>
//   </div>
// </div>
// `
//     })

}
buscarTodosProductos()
mostrarCategorias()
botonFiltrar.onclick = buscarProductosPorCategoria
botonCarro.onclick = function () {
  location.href = "cart.html";
};

// const productos = []
// class Producto{
//     constructor(id,price,title,image,description){
//         this.id = id;
//         this.price = price;
//         this.title = title;
//         this.image = image;
//         this.description = description;
//     }
// }
// productos.push(new Producto(1,200,'Iphone','https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png','Celular en buen estado'))
// productos.push(new Producto(2,1200,'Ipad','https://www.macstation.com.ar/img/productos/2569-1.jpg','Ipad dañado'))
// productos.push(new Producto(3,600,'TV','https://www.lg.com/ar/images/televisores/md06198536/gallery/D-02.jpg','TV antiguo'))
// productos.push(new Producto(4,400,'Computadora','https://bangho.vtexassets.com/arquivos/ids/160225-800-auto?v=637709454927900000&width=800&height=auto&aspect=true','Computador con virus'))
// console.log(JSON.stringify(productos))



carrito = []

//clase producto
class producto{
    constructor(id,name,price,stock){
      this.id = id
      this.name = name
      this.price = price
      this.stock = stock
    }
    }

    function AddCarrito(){
          carrito.push(new producto(1,'pantalon',35,1));
      }

// boton1.onclick = console.log(boton1)
