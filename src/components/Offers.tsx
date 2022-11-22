import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Catalog } from "../services/Catalog";
import { NameFilter, PriceFilter } from "../services/OptionsFilter";
import plant from "../util/plant.json";

import { Text } from "../util/Text";
import { TextInput } from "../util/TextInput";
import { Hover } from "./Hover";
import { OffersCards } from "./OffersCards";

export const Offers = () => {
  const [name, setName] = useState(plant);
  const [price, setPrice] = useState(plant);
  const [search, setSearch] = useState("");
  const [checkPrice, setCheckPrice] = useState("");

  const capitalized = search.toLowerCase();

  const filtredSearch =
    capitalized.length > 0
      ? plant.filter((plant) => plant.name.toLowerCase().includes(capitalized))
      : [];

  const filtredPrice =
    checkPrice.length > 0
      ? plant.filter((prices) => String(prices.preco).includes(checkPrice))
      : [];

  const handleNameChange = () => {
    name == price ? setName(NameFilter()!) : setName(NameFilter()!);
  };

  const handlePriceChange = () => {
    setName(null!);
    setPrice(PriceFilter()!);
  };

  return (
    <div className="bg-Home">
      <div className="absolute left-[360px] top-[1384px] w-[1200px] h-[568px]">
        <div className="text-center flex flex-col">
          <Text className="opacity-50 text-md font-Montserrat leading-[27px]">
            Conheça
          </Text>
          <Text className="font-Elsie text-2xl font-black leading-[94px]">
            Nossas plantas
          </Text>
        </div>
        <div className="py-10 flex items-center">
          <Text className="opacity-50 text-md font-Montserrat leading-[27px]">
            Ordenar por:
          </Text>
          <div className="font-Montserrat text-white ml-10 text-sm leading-[19px]">
            <button
              onClick={handleNameChange}
              className="
                bg-white text-vector py-2 px-4 rounded-md
                drop-shadow-md hover:bg-vector hover:text-white
                transition-all focus:ring-2 focus:ring-vector
              "
            >
              Nome
            </button>
          </div>
          <div className="font-Montserrat text-white ml-10 text-sm leading-[19px]">
            <Hover
              handlePriceChange={handlePriceChange}
              handleChange={(e: any) => setCheckPrice(e.target.value)}
            />
          </div>
          <form className="absolute right-0 mb-5 drop-shadow-md">
            <TextInput.Root>
              <TextInput.Input
                onChange={(e) => setSearch(e.target.value)}
                className="w-[267px] outline-none"
                type="text"
                name="search"
                id="search"
                placeholder="Busca sua planta favorita..."
                value={capitalized}
              />
              <button
                onClick={(e) => e.preventDefault()}
                className="
                  bg-vector text-white px-8 h-[75px]
                  disabled:bg-slate-400 disabled:cursor-not-allowed
                "
              >
                <TextInput.Icon>
                  <MagnifyingGlass />
                </TextInput.Icon>
              </button>
            </TextInput.Root>
          </form>
        </div>
        {checkPrice.length > 0 ? (
          <div className="grid grid-cols-3 grid-rows-2 gap-8">
            {filtredPrice.map((plants) => {
              return (
                <div>
                  <OffersCards
                    img={`../src/assets/${plants.img}.png`}
                    alt={plants.name}
                    title={plants.name}
                    price={plants.preco}
                  />
                </div>
              );
            })}
          </div>
        ) : capitalized.length > 0 ? (
          <div className="grid grid-cols-3 grid-rows-2 gap-8">
            {filtredSearch.map((plants) => {
              return (
                <div>
                  <OffersCards
                    img={`../src/assets/${plants.img}.png`}
                    alt={plants.name}
                    title={plants.name}
                    price={plants.preco}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <Catalog />
        )}
      </div>
    </div>
  );
};
