const products = [
    {
      id: 1,
      name: "Café Oro - 1 kg",
      stock: 5,
      cost: 1500,
      description: "Empaque de 1Kg. Mezcla de granos árabica y rubusta, de textura regular y cremosidad compacta, color avellana, de sabor redondo y notas dulces, con aroma a flores y grano de cacao",
      capacity: 1,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-Oro_280x315@2x.jpg?v=1647970409"
      ],
      categoryId: 9,
      brandId: 95,
      category: {
        name: "CAFE",
        id: 9
      },
      brand: {
        id: 95,
        name: "MOKADOR"
      },
    },
    {
      id: 2,
      name: "Café Oro Ground - 250 grs",
      stock: 100,
      cost: 1500,
      description: "Clásico empaque al vacio, en bloque de 250 grs. Mezcla molida de arábica y robusta, escogida por Mokador entre sus mejores variedades por su armonioso balance y equilibrio.",
      capacity: 250,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-Oro-Ground-250-grs_280x315@2x.jpg?v=1647968713"
      ],
      categoryId: 9,
      brandId: 95,
      category: {
        name: "CAFE",
        id: 9
      },
      brand: {
        id: 95,
        name: "MOKADOR"
      },
    },
    {
      id: 3,
      name: "Café BRIO - 1 kg",
      stock: 100,
      cost: 1500,
      description: "Empaque de 1 Kg. Mezcla de granos árabica y rubusta. Espresso de textura espesa, de  color chocolate, con notas de almibar, e intenso aroma tostado.",
      capacity: 1,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-BRIO-en-granos_280x315@2x.jpg?v=1647969855"
      ],
      categoryId: 9,
      brandId: 10,
      category: {
        name: "CAFE",
        id: 95
      },
      brand: {
        id: 10,
        name: "MOKADOR"
      },
    },
    {
      id: 4,
      name: "Café 100% Arábica Orgánico - 1 kg",
      stock: 100,
      cost: 2000,
      description: "Empaque de 1kg. Mezcla de granos orgánica, 100% árabica. Expresso delicado y cremoso, aterciopelado, y de color avellanada, con notas de frutos secos y cacao. De acidez suave y balanceada.",
      capacity: 1,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-100_-Arabica-Organico_1e4ca1f0-365e-438e-9563-807ebde23d87_280x315@2x.jpg?v=1647969635"
      ],
      categoryId: 9,
      brandId: 10,
      category: {
        name: "CAFE",
        id: 95
      },
      brand: {
        id: 10,
        name: "MOKADOR"
      },
    },
    {
      id: 5,
      name: "Café Extra Cream - 1 kg",
      stock: 100,
      cost: 1500,
      description: "Empaque de 1Kg. Mezcla de granos árabica y robusta proveniente de las mejores plantaciones de Asia y Africa, de cuerpo espeso y cremosidad pesistente, color café oscuro. Con notas de almibar, y un intenso aroma tostado.",
      capacity: 1,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-EXTRA-CREAM_1600x.jpg?v=1647970012"
      ],
      categoryId: 9,
      brandId: 10,
      category: {
        name: "CAFE",
        id: 95
      },
      brand: {
        id: 10,
        name: "MOKADOR"
      },
    },
    {
      id: 6,
      name: "48 Cápsulas compatibles con Dolce Gusto ® - Cremoso",
      stock: 100,
      cost: 3000,
      description: "Mezcla molida de árabica y rubusta. Espresso de textura espesa, de color chocolate, con notas de almibar, e intenso aroma tostado.",
      capacity: 48,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/CAPSULAS-DOLCE-OFERTA-04_280x315@2x.png?v=1660157600"
      ],
      categoryId: 1,
      brandId: 16,
      category: {
        name: "CAPSULAS",
        id: 1
      },
      brand: {
        id: 16,
        name: "CREMOSO"
      },
    },
    {
      id: 7,
      name: "48 Cápsulas compatible con Dolce Gusto ® - Chocko",
      stock: 150,
      cost: 3000,
      description: "48 Cápsulas compatible con Dolce Gusto ® - Chocko",
      capacity: 48,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/CAPSULAS-DOLCE-OFERTA_1600x.png?v=1660157975"
      ],
      categoryId: 1,
      brandId: 16,
      category: {
        name: "CAPSULAS",
        id: 1
      },
      brand: {
        id: 16,
        name: "CREMOSO"
      },
    },
    {
      id: 8,
      name: "Cafetera Milano Blanca para 3 tazas",
      stock: 100,
      cost: 5000,
      description: "La cafetera milano de GROSCHE es una cafetera espresso italiana clásica para estufa, también llamada olla Moka. Es perfecto para cualquiera que ame el sabor de un trago fuerte o un trago doble de espresso. En comparación con las cafeteras de filtro, este método de preparación extrae más cafeina y sabores. Esto le da al espresso de la estufa una infusión más fuerte y rica que una cafetera común. La cafetera de espresso para estufa MILANO hará que su experiencia de espresso sea perfecta en todo momento.",
      capacity: 150,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/cafe-milano-blanca-3-tazas-label_1600x.jpg?v=1647475369"
      ],
      categoryId: 5,
      brandId: 16,
      category: {
        name: "ACCESORIOS",
        id: 5
      },
      brand: {
        id: 16,
        name: "GROSCHE"
      },
    },
    {
      id: 9,
      name: "Cafetera Milano Negra para 6 tazas",
      stock: 100,
      cost: 5000,
      description: "La cafetera milano de GROSCHE es una cafetera espresso italiana clásica para estufa, también llamada olla Moka. Es perfecto para cualquiera que ame el sabor de un trago fuerte o un trago doble de espresso. En comparación con las cafeteras de filtro, este método de preparación extrae más cafeina y sabores. Esto le da al espresso de la estufa una infusión más fuerte y rica que una cafetera común. La cafetera de espresso para estufa MILANO hará que su experiencia de espresso sea perfecta en todo momento.",
      capacity: 150,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/cafe-milano-blanca-6-tazas-label-negro_1600x.jpg?v=1647475958"
      ],
      categoryId: 5,
      brandId: 16,
      category: {
        name: "ACCESORIOS",
        id: 5
      },
      brand: {
        id: 16,
        name: "GROSCHE"
      },
    },
    {
      id: 10,
      name: "Cafetera Milano Roja para 6 tazas",
      stock: 100,
      cost: 5500,
      description: "La cafetera milano de GROSCHE es una cafetera espresso italiana clásica para estufa, también llamada olla Moka. Es perfecto para cualquiera que ame el sabor de un trago fuerte o un trago doble de espresso. En comparación con las cafeteras de filtro, este método de preparación extrae más cafeina y sabores. Esto le da al espresso de la estufa una infusión más fuerte y rica que una cafetera común. La cafetera de espresso para estufa MILANO hará que su experiencia de espresso sea perfecta en todo momento.",
      capacity: 200,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/cafe-milano-blanca-6-tazas-label-rojo_1600x.jpg?v=1647476299"
      ],

      categoryId: 5,
      brandId: 17,
      category: {
        name: "ACCESORIOS",
        id: 5
      },
      brand: {
        id: 17,
        name: "GROSCHE"
      },

    }
  ];

  module.exports = {
    products,
  }