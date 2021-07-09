// ARRAY DE OBJETOS
// const producto1 = {
//     id: 1,
//     producto: "mouse inalambrico",
//     marca: "Genius",
//     precio: 899,
//     cantidad: 1
// }

// const listaDeCarrito = [];

// function agregarAListaCarrito() {
//     listaDeCarrito.push(producto1);
// }

// function verListaCarrito() {
//     let total = 0;
//     for (elemento of listaDeCarrito) {
//         console.log("ID: " + elemento.id + " Producto: " + elemento.producto);
//         //total = total + elemento.precio;
//         total += elemento.precio;
//     }
//     console.log("Son " + listaDeCarrito.length + " productos\n  Total de la compra: $" + total);
// }



// arrays de objetos por los valores de las propiedades de los objetos

let people = [
    {
      name: 'Julia',
      age: 10,
    },
    {
      name: 'Miguel',
      age: 45,
    },
    {
      name: 'Juan',
      age: 24,
    },
    {
      name: 'María',
      age: 60,
    },
    {
      name: 'Alfredo',
      age: 45,
    },
    {
      name: 'Alba',
      age: 10,
    },
  ];
  people.sort( (a, b) => {
    if(a.age < b.age) {
      return -1;
    }
    if(a.age > b.age) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(people);