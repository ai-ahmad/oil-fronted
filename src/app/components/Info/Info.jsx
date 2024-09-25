import Image from 'next/image';
import logo from '../../public/media/infologo.png'; // Replace with the actual path

export default function Info() {
  return (
    <div className="container mx-auto flex justify-center items-center py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-red-600 font-bold text-lg">
              Широкий выбор продукции <span className="inline-block">⬇</span>
            </h3>
            <div className="border-b-2 border-black w-2/3 mx-auto"></div>
          </div>
          <div>
            <h3 className="text-black font-bold">Выгодные цены</h3>
            <div className="border-b-2 border-black w-2/3 mx-auto"></div>
          </div>
          <div>
            <h3 className="text-black font-bold">Удобство заказа</h3>
            <div className="border-b-2 border-black w-2/3 mx-auto"></div>
          </div>
        </div>

        {/* Logo in the Center */}
        <div className="flex justify-center">
          <Image src={logo} alt="Logo" width={200} height={200} />
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-black font-bold">Доставка по всей стране</h3>
            <div className="border-b-2 border-black w-2/3 mx-auto"></div>
          </div>
          <div>
            <h3 className="text-black font-bold">Качество обслуживания</h3>
            <div className="border-b-2 border-black w-2/3 mx-auto"></div>
          </div>
          <div>
            <h3 className="text-black font-bold">Спец. предложения и акции</h3>
            <div className="border-b-2 border-black w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
