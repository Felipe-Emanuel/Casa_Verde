import { ReactNode } from 'react'
import { ArrowRight } from "phosphor-react";

export interface OffersCardsProps {
  img: string;
  title: ReactNode;
  price: number;
  alt: string;
}

export function OffersCards({ img, title, price, alt}: OffersCardsProps){
  return (
    <div className="flex w-[379px] h-[200px] drop-shadow-lg bg-white">
      <div className="w-[50%]">
        <img className="h-full w-full transform-gpu hover:bg-cover hover:rotate-1 transition-all" src={img} alt={alt}/>
      </div>
      <div className="py-8 flex flex-col w-[50%] p-2">
        <div className="font-Elsie text-lg font-black leading-[36px]">
          {title}
        </div>
        <div className="pt-2 pb-4 opacity-50 text-sm font-Montserrat leading-[19px]">
          R$ {price}
        </div>
        <div className="felx flex-row">
          <div className="font-Montserrat text-vector text-sm leading-[19px]">
            <button>
                Comprar
            </button>
          <button className="ml-6">
            <ArrowRight />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
