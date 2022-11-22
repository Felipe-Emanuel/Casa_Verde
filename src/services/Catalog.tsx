import { OffersCards } from "../components/OffersCards";

import plant from "../util/plant.json";

export const Catalog = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          <OffersCards
            img={`../src/assets/${plant[0].img}.png`}
            alt={plant[0].name}
            title={plant[0].name}
            price={plant[0].preco}
          />
          <OffersCards
            img={`../src/assets/${plant[1].img}.png`}
            alt={plant[1].name}
            title={plant[1].name}
            price={plant[1].preco}
          />
          <OffersCards
            img={`../src/assets/${plant[2].img}.png`}
            alt={plant[2].name}
            title={plant[2].name}
            price={plant[2].preco}
          />
          <OffersCards
            img={`../src/assets/${plant[3].img}.png`}
            alt={plant[3].name}
            title={plant[3].name}
            price={plant[3].preco}
          />
          <OffersCards
            img={`../src/assets/${plant[4].img}.png`}
            alt={plant[4].name}
            title={plant[4].name}
            price={plant[4].preco}
          />
          <OffersCards
            img={`../src/assets/${plant[5].img}.png`}
            alt={plant[5].name}
            title={plant[5].name}
            price={plant[5].preco}
          />
        </div>
    )
}
