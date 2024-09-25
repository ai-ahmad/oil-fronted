import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardFiltration from "./components/CardFiltration/CardFiltration";
import Info from "./components/Info/Info";
import Engine from "./components/Engine/Engine";
import ProductList from "./components/ProductsList/ProductsList";
import ProductListsHotDiscount from "./components/ProductsList/ProductsListHotDiscount";
import ZayavkaForm from "./components/Zayavka/Zayavka";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <section>
          <CardFiltration />
        </section>
        <section>
          <Info />
        </section>
        <section className="bg-[#F1F1F1]">
          <Engine />
        </section>
        <section>
          <ProductList />
        </section>
        <section>
          <ProductListsHotDiscount />
        </section>
        <section>
          <ZayavkaForm/>
        </section>
      </main>
    </>
  );
}
