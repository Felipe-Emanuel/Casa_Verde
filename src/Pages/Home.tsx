import { HowToGet } from "../components/HowToGet";
import { Menu } from "../components/Menu";
import { Newsletter } from "../components/Newsletter";
import { Offers } from "../components/Offers";

export function Home() {
  return (
    <div className="h-[2105px] bg-darkBack">
      <main>
        <Menu />
        <Newsletter />
      </main>
      <section>
        <HowToGet />
      </section>
      <section >
        <Offers />
      </section>
    </div>
  );
}
