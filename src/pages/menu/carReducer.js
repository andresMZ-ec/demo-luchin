// import axios from "axios";
// import { useEffect, useState } from "react";
import { TYPES } from "./actionsCar";


export const estadoInicialCar = {
  products: [
    { id: 1, title: "Hamburguesa 1", price: 4.99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", },
    { id: 2, title: "Hamburguesa 2", price: 5.99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", },
    { id: 3, title: "Hamburguesa 3", price: 4.99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", },
    { id: 4, title: "Hamburguesa 4", price: 5.99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", },
    { id: 5, title: "Hamburguesa 5", price: 6.99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", },
    { id: 6, title: "Hamburguesa 6", price: .99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", },
    { id: 7, title: "Hamburguesa 7", price: 10.99, description: "Soy una descripcion", imageURL: "https://www.ecestaticos.com/file/f369337d113e597004a9d38fa739f2f8/1548864345-color.png", }
  ],
  cart: {}
}


export function carReducer(estado, accion) {

  switch (accion.type) {
    case TYPES.SHOW_DETAILS_PRODUCT: {
      let productSelect = estado.products.find((product) => product.id === accion.payload);

      return {
        ...estado,
        cart: { productSelect }
      };
    }
    default:
      return estado;

  }
}