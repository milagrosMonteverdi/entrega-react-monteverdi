const products = [
    {
      id: 30,
      name: "Café Oro - 1 kg",
      stock: 5,
      cost: 1500,
      description: "Empaque de 1Kg. Mezcla de granos árabica y rubusta, de textura regular y cremosidad compacta, color avellana, de sabor redondo y notas dulces, con aroma a flores y grano de cacao",
      capacity: 1,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-Oro_280x315@2x.jpg?v=1647970409"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "CAFE",
        id: 9
      },
      brand: {
        id: 95,
        name: "MOKADOR"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Café Oro Ground - 250 grs",
      stock: 100,
      cost: 1500,
      description: "Clásico empaque al vacio, en bloque de 250 grs. Mezcla molida de arábica y robusta, escogida por Mokador entre sus mejores variedades por su armonioso balance y equilibrio.",
      capacity: 1500,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-Oro-Ground-250-grs_280x315@2x.jpg?v=1647968713"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "CAFE",
        id: 9
      },
      brand: {
        id: 95,
        name: "MOKADOR"
      },
      reviews: [
        {
          "comment": "Muy rico y refrescante",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Café BRIO - 1 kg",
      stock: 92,
      cost: 1500,
      description: "Empaque de 1 Kg. Mezcla de granos árabica y rubusta. Espresso de textura espesa, de  color chocolate, con notas de almibar, e intenso aroma tostado.",
      capacity: 750,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-BRIO-en-granos_280x315@2x.jpg?v=1647969855"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "CAFE",
        id: 95
      },
      brand: {
        id: 10,
        name: "MOKADOR"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Café 100% Arábica Orgánico - 1 kg",
      stock: 100,
      cost: 575,
      description: "Empaque de 1kg. Mezcla de granos orgánica, 100% árabica. Expresso delicado y cremoso, aterciopelado, y de color avellanada, con notas de frutos secos y cacao. De acidez suave y balanceada.",
      capacity: 750,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-100_-Arabica-Organico_1e4ca1f0-365e-438e-9563-807ebde23d87_280x315@2x.jpg?v=1647969635"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "CAFE",
        id: 95
      },
      brand: {
        id: 10,
        name: "MOKADOR"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Café Extra Cream - 1 kg",
      stock: 100,
      cost: 1500,
      description: "Empaque de 1Kg. Mezcla de granos árabica y robusta proveniente de las mejores plantaciones de Asia y Africa, de cuerpo espeso y cremosidad pesistente, color café oscuro. Con notas de almibar, y un intenso aroma tostado.",
      capacity: 750,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/Cafe-EXTRA-CREAM_1600x.jpg?v=1647970012"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "CAFE",
        id: 95
      },
      brand: {
        id: 10,
        name: "MOKADOR"
      },
      reviews: []
    },
    {
      id: 139,
      name: "48 Cápsulas compatibles con Dolce Gusto ® - Cremoso",
      stock: 100,
      cost: 2000,
      description: "Mezcla molida de árabica y rubusta. Espresso de textura espesa, de color chocolate, con notas de almibar, e intenso aroma tostado.",
      capacity: 750,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/CAPSULAS-DOLCE-OFERTA-04_280x315@2x.png?v=1660157600"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "CAPSULAS",
        id: 1
      },
      brand: {
        id: 16,
        name: "CREMOSO"
      },
      reviews: []
    },
    {
      id: 68,
      name: "48 Cápsulas compatible con Dolce Gusto ® - Chocko",
      stock: 89,
      cost: 490,
      description: "48 Cápsulas compatible con Dolce Gusto ® - Chocko",
      capacity: 750,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/CAPSULAS-DOLCE-OFERTA_1600x.png?v=1660157975"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "CAPSULAS",
        id: 1
      },
      brand: {
        id: 16,
        name: "CREMOSO"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Cafetera Milano Blanca para 3 tazas",
      stock: 100,
      cost: 5000,
      description: "La cafetera milano de GROSCHE es una cafetera espresso italiana clásica para estufa, también llamada olla Moka. Es perfecto para cualquiera que ame el sabor de un trago fuerte o un trago doble de espresso. En comparación con las cafeteras de filtro, este método de preparación extrae más cafeina y sabores. Esto le da al espresso de la estufa una infusión más fuerte y rica que una cafetera común. La cafetera de espresso para estufa MILANO hará que su experiencia de espresso sea perfecta en todo momento.",
      capacity: 375,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/cafe-milano-blanca-3-tazas-label_1600x.jpg?v=1647475369"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 5,
      brandId: 16,
      packingId: null,
      category: {
        name: "ACCESORIOS",
        id: 5
      },
      brand: {
        id: 16,
        name: "GROSCHE"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Cafetera Milano Negra para 6 tazas",
      stock: 100,
      cost: 5000,
      description: "La cafetera milano de GROSCHE es una cafetera espresso italiana clásica para estufa, también llamada olla Moka. Es perfecto para cualquiera que ame el sabor de un trago fuerte o un trago doble de espresso. En comparación con las cafeteras de filtro, este método de preparación extrae más cafeina y sabores. Esto le da al espresso de la estufa una infusión más fuerte y rica que una cafetera común. La cafetera de espresso para estufa MILANO hará que su experiencia de espresso sea perfecta en todo momento.",
      capacity: 750,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/cafe-milano-blanca-6-tazas-label-negro_1600x.jpg?v=1647475958"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 5,
      brandId: 16,
      packingId: null,
      category: {
        name: "ACCESORIOS",
        id: 5
      },
      brand: {
        id: 16,
        name: "GROSCHE"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Cafetera Milano Roja para 6 tazas",
      stock: 100,
      cost: 5500,
      description: "La cafetera milano de GROSCHE es una cafetera espresso italiana clásica para estufa, también llamada olla Moka. Es perfecto para cualquiera que ame el sabor de un trago fuerte o un trago doble de espresso. En comparación con las cafeteras de filtro, este método de preparación extrae más cafeina y sabores. Esto le da al espresso de la estufa una infusión más fuerte y rica que una cafetera común. La cafetera de espresso para estufa MILANO hará que su experiencia de espresso sea perfecta en todo momento.",
      capacity: 700,
      image: [
        "https://cdn.shopify.com/s/files/1/0611/4243/4004/products/cafe-milano-blanca-6-tazas-label-rojo_1600x.jpg?v=1647476299"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "ACCESORIOS",
        id: 5
      },
      brand: {
        id: 17,
        name: "GROSCHE"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }