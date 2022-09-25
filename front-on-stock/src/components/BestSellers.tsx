import { ProductCard } from './ProductCard'
import Brio from '../assets/products/brio.png'
import C920 from '../assets/products/c920.webp'
import Deck from '../assets/products/deck.webp'
import Hyperx from '../assets/products/hyperx.jpg'
import Linkpro from '../assets/products/linkpro.png'
import Michyper from '../assets/products/michyper.png'
import Stars5 from '../assets/stars5.svg'
import Stars4 from '../assets/stars4.svg'
import Stars3 from '../assets/stars3.svg'
import Stars2 from '../assets/stars2.svg'
import Stars1 from '../assets/stars1.svg'

interface BestSellersProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>
}

export function BestSellers({ setCartCount }: BestSellersProps) {
  return (
    <div className="mt-12 flex flex-col h-[1000px] w-full">
      <h2 className="text-white text-4xl font-medium w-full text-center">
        Mais Vendidos
      </h2>
      <div className="flex flex-row gap-20 mt-10 w-full justify-center">
        <ProductCard
          image={C920}
          name="Webcam C922 Logitech"
          price="350.99"
          stars={Stars3}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Michyper}
          name="QuadCast HyperX"
          price="860.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Brio}
          name="Webcam BRIO Logitech"
          price="1050.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />
      </div>
      <div className="flex flex-row gap-20 mt-10 w-full justify-center">
        <ProductCard
          image={Hyperx}
          name="HyperX Cloud Stinger"
          price="230.00"
          stars={Stars4}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Deck}
          name="Stream Deck Elgato"
          price="850.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Linkpro}
          name="Linkpro Elgato"
          price="1990.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />
      </div>
    </div>
  )
}