import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart } from "../redux/actions";

const Carrito = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch(delCart(product));
  };

  const handleAddMore = (product) => {
    dispatch(addCart(product));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, product) => acc + product.price * product.qty,
      0
    );
  };

  return (
    <div className="container py-5">
      <h2>Carrito de compras</h2>
      {cartItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>${product.price}</td>
                  <td>{product.qty}</td>
                  <td>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => handleAddMore(product)}
                    >
                      Añadir más
                    </button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => handleDelete(product)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Total:</td>
                <td>${calculateTotal().toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Carrito;
