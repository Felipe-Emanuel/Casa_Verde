import plant from "../util/plant.json";

const prices = plant.map(price => price.preco)

export const NameFilter = () => {
  plant.sort((a: any, b: any) => {
    return a.name < b.name ? -1 : 1;
  });
};

export const PriceFilter = () => {
  plant.sort((a: any, b: any) => {
    return a.preco < b.preco ? -1 : 1;
  });
};
