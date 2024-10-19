/* eslint-disable react/prop-types */
const Modal = ({ isOpen, closeModal, pokemon }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg max-w-sm sm:max-w-md md:max-w-lg w-full overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={closeModal}
        >
          X
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 bg-gradient-to-r from-blue-300 to-purple-500">
          <div className="w-full flex justify-center">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold capitalize bg-gray-900 text-white w-full py-2">
              #{pokemon.id.toString().padStart(3, "0")} {pokemon.name}
            </h2>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold">Base Stats</h3>
            <ul className="list-none mt-2">
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="text-base">
                  <span className="font-semibold">{stat.stat.name.toUpperCase()}:</span> {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold">Type</h3>
            <div className="flex flex-col md:flex-row gap-1 items-start mt-2">
              {pokemon.types.map((typeSlot) => (
                <span
                  key={typeSlot.slot}
                  className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                    typeSlot.type.name === "grass"
                      ? "bg-green-500"
                      : typeSlot.type.name === "fire"
                      ? "bg-orange-500"
                      : typeSlot.type.name === "water"
                      ? "bg-blue-500"
                      : typeSlot.type.name === "poison"
                      ? "bg-purple-500"
                      : "bg-gray-500"
                  }`}
                >
                  {typeSlot.type.name.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
