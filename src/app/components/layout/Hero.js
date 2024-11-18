import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return(
        <section className="hero  mt-4">
            <div className="py-12">
                <h1 className="text-4xl  font-semibold ">
                    Everything <br/> is better with a
                    <span className="text-primary"> Pizza 
                    </span>
                
                </h1>
                <p className="my-4 text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quis, id facere quasi, amet iure, 
                </p>

                <div className="flex gap-4">
                    <button className="bg-primary uppercase flex gap-2   text-white px-4 py-2 rounded-full">
                        Order Now
                        <Right/>
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn More
                        <Right/>
                        </button>
                </div>

            </div>
            
            <div className=" relative">
                <Image src="/images/pizza.png" alt="Pizza" layout={'fill'} objectFit={'contain'} />
            </div>
            
        </section>
    );
}