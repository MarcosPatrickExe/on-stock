import BlurCircle from '../assets/blurcircle.svg'
import MicImg from '../assets/mic-removebg-preview.png'

export function Home() {
  return (
    <div className="w-full px-20 bg-back h-fit">
      <div className="flex flex-row justify-between pr-8">
        <div>
          <h2 className="text-paragraph font-semibold text-5xl mt-20">
            Torne-se um Streamer <br /> de sucesso
          </h2>
          <p className="text-textSec font-openSans font-semibold text-lg mt-4">
            Encontre os melhores equipamentos que não podem <br />
            faltar no seu setup
          </p>
          <div className="flex flex-col">
            <input
              type="search"
              name="searchBar"
              id="searchBar"
              className=" h-12 bg-transparent border-2 border-purple w-[35vw] mt-14 px-4 font-openSans font-semibold text-white"
              placeholder='Pesquisar por "Webcam"'
            />
            <button className=" bg-purple mt-4 w-36 py-3  text-textSec font-semibold text-sm hover:bg-purple/75">
              Comprar Agora
            </button>
          </div>
        </div>
        <div>
          <img src={MicImg} className="rotate-180 w-[25vw] mt-4" />
        </div>
      </div>

      <div className="flex justify-between absolute left-0 top-16 pointer-events-none">
        <img src={BlurCircle} className="w-[40%]" />
        <img src={BlurCircle} className="rotate-180 w-[30%] " />
      </div>
    </div>
  )
}
