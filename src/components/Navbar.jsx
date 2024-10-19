import pokemonImg from '../assets/pokemon.png';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-slate-800 p-4 mb-4'>
        <img src={pokemonImg} alt="pokemon" className='w-36 md:w-64 h-24 md:h-28' />
    </div>
  )
}

export default Navbar