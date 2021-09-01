export function useLocalStorage() {

  const obtenerDesc = () => {
    let dataDesc;

    if(localStorage.getItem("uQx-GGh_zTHpq_ZcZvLy_qU") === null){
      dataDesc = 0;
    }else {
      dataDesc = JSON.parse(localStorage.getItem("uQx-GGh_zTHpq_ZcZvLy_qU"));
    }
    return dataDesc;
  }

  const obtenerDatosLS = () => {
    let bolsaLS;

    if (localStorage.getItem("__bolsa") === null) {
      bolsaLS = [];
    } else {
      bolsaLS = JSON.parse(localStorage.getItem("__bolsa"));
    }

    return bolsaLS;
  }

  const adminCar = (longLS) => {
    const bolsaCar = document.querySelector(".bolsita.shop-car");
    bolsaCar.querySelector(".producto").innerHTML = longLS;
  }


  const saveProductLS = (productoObject) => {
    let isModific = false;
    let dataLS = obtenerDatosLS();
    dataLS.forEach((item) => {
      if (item.id === productoObject.id) {
        item.quantity = productoObject.quantity;
        item.inforAdd = productoObject.inforAdd;
        isModific = true;
      }
    })

    if (!isModific) {
      dataLS.push(productoObject);
    }
    localStorage.setItem("__bolsa", JSON.stringify(dataLS))
    adminCar(dataLS.length);
  }

  const updateProductLS = (idProduct, cantidad) => {
    let dataLS = obtenerDatosLS();
    dataLS.forEach((item) => {
      if (item.id === idProduct) {
        item.quantity = cantidad;
      }
    })
    localStorage.setItem("__bolsa", JSON.stringify(dataLS));
  }


  const deleteProductLS = (idProduct) => {
    let dataLS = obtenerDatosLS();
    let dataProdDesc = obtenerDesc();
    const { productAplica } = dataProdDesc;

    dataLS.forEach((item, index) => {
      if (item.id === idProduct) {
        if(dataProdDesc !== 0){
          productAplica.map(prod => prod.id === item.id ? localStorage.removeItem("uQx-GGh_zTHpq_ZcZvLy_qU") : null);
        }
        dataLS.splice(index, 1);
      }
    })
    localStorage.setItem("__bolsa", JSON.stringify(dataLS));
  }


  const calcularValores = () => {
    let productos = obtenerDatosLS(),
        descuento = obtenerDesc(),
        total = 0, 
        subtotales = 0, 
        delivery = 3,
        totalDesc = 0.00;

    if(descuento !== 0){
      const { desc, productAplica } = descuento;

      productAplica.map(prodWithDesc => 
        productos.map(prod => {
          if(prod.id === prodWithDesc.id){
            let subtProd = parseFloat(prod.price * prod.quantity);
            totalDesc = totalDesc + (subtProd * desc/100);
          }
        })
      );
      
    }else{

    }
    productos.map(producto => subtotales = subtotales + parseFloat(producto.price * producto.quantity));
    total = parseFloat(subtotales + delivery - totalDesc)
    return {totalDesc, subtotales, total, delivery};
  }


  return [
    obtenerDatosLS,
    saveProductLS,
    updateProductLS,
    deleteProductLS,
    calcularValores
  ];
}


