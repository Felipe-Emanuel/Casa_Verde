import { Text } from "../util/Text";

export const HowToGet = () => {
  return (
    <div className="absolute w-[995px] h-[722.21px] top-[617.79px] left-[462px]">
      <div className="drop-shadow-md bottom-0 absolute w-full flex h-[440px] bg-white">
        <div className="w-[60%]">
          <img src="../public/img/MiddleImg.png" alt="MiddleImg" className="h-full"/>
        </div>
        <div className="pl-4 py-10 w-[40%] h-[440px] flex flex-col">
          <Text className="opacity-50 text-md font-Montserrat w-48 h-7 leading-[48px]">
            Como conseguir
          </Text>
          <Text className="py-4 font-Elsie text-xl font-black">
            minha planta
          </Text>
          <div className="flex items-center">
            <div className="w-14 h-14 mr-4 bg-vector rounded-full"></div>
            <Text className="opacity-50 bg-red text-md font-Montserrat leading-[27px]">
              Escolha suas plantas
            </Text>
          </div>
          <div className="py-8 flex items-center">
            <div className="w-14 h-14 mr-4 bg-vector rounded-full"></div>
            <Text className="opacity-50 bg-red text-md font-Montserrat leading-[27px]">
              Faça seu pedido
            </Text>
          </div>
          <div className="flex items-center">
            <div className="w-14 h-14 mr-4 bg-vector rounded-full"></div>
            <Text className="opacity-50 bg-red text-md font-Montserrat leading-[27px]">
              Aguarde na sua casa
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
