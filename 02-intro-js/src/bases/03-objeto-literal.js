const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20,
  direccion: {
    ciudad: "New York",
    zip: "12345",
    latitude: "14.675",
    lng: "-12.345",
  },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Pedro";

console.log({ persona2 });
console.log(persona);
