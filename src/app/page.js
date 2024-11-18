
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={"Our Story"}
          mainHeader={"About Us"}/>
          <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4" >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eligendi quod quam molestiae facilis quo ad sint nemo suscipit consequatur eveniet mollitia saepe laborum, ipsum, labore commodi nobis maiores odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magnam veritatis possimus. Eius, unde magnam commodi beatae labore non sint repellendus asperiores adipisci quae laboriosam sapiente, porro at, illum possimus.
            </p>
          </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
        subHeader={'Don\'t hesitate'}                mainHeader={'Contact Us'} /> 
        <div className="mt-8">
          <a className="text-4xl" href="tel:+46789345634">
            +46 789 345 634
          </a>
        </div>
      </section>
      
    </>
  );
}
