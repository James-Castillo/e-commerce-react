//Añadir item al carrito

export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};

//Borrar item del carrito
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
