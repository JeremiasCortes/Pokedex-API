import { IconMinimize } from "@tabler/icons-react";

const ModalPokemon = ({showModal, onCloseModal}) => {
  return (
    <section className={`fixed top-0 left-0 right-0 
    bg-green-400 h-screen 
    ${showModal ? "visible opacity-100" : "invisible opacity-0"}
    transition-opacity duration-500`}>
      <button
      onClick={onCloseModal}
        className="bg-red-400 absolute top-4 right-4
      p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconMinimize size={34} stroke={4} />
      </button>
      <article
        className={`bg-white h-[85%] absolute w-full 
         rounded-tl-3xl rounded-tr-3xl text-center
         transition-opacity duration-700
        ${showModal ? "bottom-0" : "-buttom-full"}
        
        `}
      >
        Pokemon
      </article>
    </section>
  );
};

export default ModalPokemon;
