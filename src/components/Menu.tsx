import { Link } from "react-router-dom";
import { Logo } from "../../public/img/Logo";
import { Vector } from "../../public/img/Vector";
import { Text } from "../util/Text";

export function Menu() {
  return (
    <main className="px-[215px] w-[85vw] m-auto py-2">
      <nav className="flex items-center font-Montserrat leading-[20px] font">
        <Vector />
        <Logo />
        <div className="z-50 w-full justify-end flex items-center">
          <Link to="#">
            <Text size="sm">Como fazer</Text>
          </Link>
          <p className="m-3">/</p>
          <Link to="#">
            <Text size="sm">Ofertas</Text>
          </Link>
          <p className="m-3">/</p>
          <Link to="#">
            <Text size="sm">Depoimentos</Text>
          </Link>
          <p className="m-3">/</p>
          <Link to="#">
            <Text size="sm">Vídeos</Text>
          </Link>
          <p className="m-3">/</p>
          <Link to="#">
            <Text size="sm">Meu carrinho</Text>
          </Link>
        </div>
      </nav>
    </main>
  );
}
