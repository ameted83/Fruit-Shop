import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem } from "../states/cartSlice";
import { useDispatch } from "react-redux";

const PopUpCart = () => {
  const modalCart = useSelector((state) => state.cart);
  // console.log(modalCart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="fixed p-4 max-w-md  rounded-lg border shadow-md sm:p-8 bg-green-500 bg-border-white w-screen h-scrren top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-white pb-3">
            I tuoi prodotti nel carrello...
          </h5>
        </div>
        {modalCart.fruits.map((fruit, index) => {
          return (
            <div
              key={index}
              className="flex justify-around items-center text-center text-white text-lg"
            >
              <div className="w-[33%]">
                <img
                  className="w-[50px] text-center mt-2"
                  src={fruit.image}
                  alt={fruit.name}
                />
              </div>
              <div className="w-[33%]">{fruit.name}</div>
              <div className="w-[33%]">{fruit.price}€</div>
              <div>
                <DeleteIcon onClick={() => dispatch(removeItem(fruit))} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopUpCart;
