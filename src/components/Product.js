/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import PopUpFruits from "../components/PopUpFruits";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../states/cartSlice";
import { nanoid } from "nanoid";
import {
  allProducts,
  productStatus,
  errorProduct,
  loadingProduct,
  fetchFruits,
} from "../states/productSlice";

const Product = () => {
  const allFruits = useSelector(allProducts);
  console.log(allFruits);
  const statusFruits = useSelector(productStatus);
  const errorFruits = useSelector(errorProduct);
  const loadingFruits = useSelector(loadingProduct);
  const [search, setSearch] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState(null);
  const handlePopUp = () => setPopUp(!popUp);

  const dispatch = useDispatch();
  useEffect(() => {
    if (statusFruits !== "ok") {
      dispatch(fetchFruits());
    }
  }, [dispatch, statusFruits]);
  return (
    <>
      <div className="mt-[150px] flex justify-center items-center">
        <input
          className=" rounded-lg p-3 w-[90%] border-0 mt-2 mb-4 outline-0 text-lg bg-slate-100"
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          id="search"
          placeholder="Cerca il tuo frutto..."
        ></input>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto p-20 font-sans">
        {!errorFruits && loadingFruits && (
          <div className="text-3xl font-bold text-white">
            Caricamento dati in corso...
          </div>
        )}

        {allFruits.fruits
          .filter((fruit) => {
            if (search === "") {
              return fruit;
            } else if (
              fruit.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return fruit;
            }
          })

          .map((fruit) => (
            <div
              key={nanoid()}
              className="border border-neutral-300 border-solid rounded-lg p-10"
            >
              <p>
                <img src={fruit.image} className="w-60 h-60" alt={fruit.name} />
              </p>
              <p className="text-3xl font-bold mt-10">{fruit.name}</p>
              <p className="text-2xl mt-3">{fruit.price} €</p>
              <div className="mt-3 text-gray-500">
                <div>calorie: {fruit.nutritions.calories}</div>
              </div>
              <div className="flex items-center justify-between   flex-wrap mt-5">
                <button
                  onClick={() =>
                    dispatch(
                      addItem({
                        ...fruit,
                        cartId: nanoid(),
                      })
                    )
                  }
                  className="bg-lime-500 rounded-lg p-2 text-white"
                >
                  Acquista
                </button>
                <button
                  onClick={() => {
                    setPopUpData(fruit);
                    handlePopUp();
                  }}
                  className="bg-orange-400 rounded-lg p-2 text-white"
                >
                  Dettagli
                </button>
              </div>
            </div>
          ))}
        {popUp && <PopUpFruits fruit={popUpData} state={setPopUp} />}
      </div>
    </>
  );
};

export default Product;
