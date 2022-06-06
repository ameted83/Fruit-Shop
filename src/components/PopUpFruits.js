import React, { useEffect } from "react";

const PopUpFruits = ({ fruit, state }) => {
  useEffect(() => {
    state(true);
  }, [fruit, state]);

  const handleClosePopUp = () => {
    state(false);
  };

  return (
    <div className="z-10 backdrop-blur-md w-screen h-screen fixed top-1/2 left-1/2 flex items-center justify-center -translate-y-1/2 -translate-x-1/2">
      <div className="shadow-xl rounded-lg flex flex-col justify-center items-center inset-x-0 bg-gradient-to-t from-green-400 to-green-600 w-[500px] h-[600px] ">
        <h1 className="text-white font-bold text-4xl mb-4">{fruit.name}</h1>
        <img
          src={fruit.image}
          alt={fruit.name}
          className="w-[200px] rounded-[100%] mb-4"
        />
        <h2 className="text-white">Alcune informazioni su questo frutto:</h2>
        <p className="text-white">
          Appartiene alla famiglia {fruit.family}, gene {fruit.genus}.
        </p>
        <p className="text-white">Contiene i seguenti valori nutrizionali:</p>
        <ul className="text-white">
          <li>Zuccheri: {fruit.nutritions.sugar}</li>
          <li>Grassi: {fruit.nutritions.fat}</li>
          <li>Proteine: {fruit.nutritions.protein}</li>
        </ul>
        <button
          className="bg-orange-500 rounded-lg p-3 mt-4 text-white font-bold text-xl"
          onClick={handleClosePopUp}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default PopUpFruits;
