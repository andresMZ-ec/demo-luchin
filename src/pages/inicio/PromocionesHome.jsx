
const promocionesItems = [
  {
    id: 1,
    imageURL: "https://irt-cdn.multiscreensite.com/f26e7d7d06bf42f8895007233554a868/MOBILE/jpg/339.jpg",
    desc: 20,
    product: {
      name: "Hamburguesa de Pollo",
      priceNormal: 9.99
    }
  },
  {
    id: 2,
    imageURL: "https://abasto.com/wp-content/uploads/2016/01/comida-rapida.jpg",
    desc: 20,
    product: {
      name: "Hamburguesa de Pollo",
      priceNormal: 9.99
    }
  },
  {
    id: 2,
    imageURL: "https://img.freepik.com/psd-gratis/banner-plantilla-comida-rapida_23-2148747065.jpg?size=626&ext=jpg",
    desc: 20,
    product: {
      name: "Hamburguesa de Pollo",
      priceNormal: 9.99
    }
  }
]

export function Promociones() {
  return (
    <>
      {promocionesItems.map((promocion, index) => (
        <div key={index} className="item__promo">
          <img src={promocion.imageURL} alt={promocion.product.name} />
          <div className="detalle">
            <p className="topic">{promocion.product.name}</p>
            <p className="descrip">
              <span className="price-new">${(promocion.product.priceNormal - (promocion.product.priceNormal * promocion.desc / 100)).toFixed(2)}</span>
              <span><s>${promocion.product.priceNormal}</s></span>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}