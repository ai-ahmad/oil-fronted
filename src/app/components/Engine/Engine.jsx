import Image from 'next/image';
import engineImg from '../../public/media/engine.png'; // replace with the correct path

export default function Engine() {
  return (
    <div className="container mx-auto px-6 py-12 ">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl text-black font-bold">Забота о состоянии двигателя</h1>
          
          <div className="relative">
            <p className="text-lg text-black font-bold">
              Защита от трения
              <span className="ml-2">→</span>
            </p>
            <div className="absolute  left-0 transform translate-y-1/2 w-full border-t-2 border-red-500"></div>
          </div>
          
          <div className="relative">
            <p className="text-lg text-black font-bold">
              Защита от образования отложений
              <span className="ml-2">→</span>
            </p>
            <div className="absolute left-0 transform translate-y-1/2 w-full border-t-2 border-red-500"></div>
          </div>
          
          <div className="relative">
            <p className="text-lg text-black font-bold">
              Защита от высоких нагрузок
              <span className="ml-2">→</span>
            </p>
            <div className="absolute  left-0 transform translate-y-1/2 w-full border-t-2 border-red-500"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <Image src={engineImg} alt="Engine" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}
