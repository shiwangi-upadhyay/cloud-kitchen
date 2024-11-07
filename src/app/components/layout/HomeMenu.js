import Image from "next/image";
import MenuItems from "../menu/MenuItems";

export default function HomeMenu(){
    return(
        <section>
            <div className="absolute  left-0 right-0 w-full">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src="/images/leftlettuce.png" alt={'Salad'} width={160} height={160}   />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10" >
                    <Image src="/images/rightlettuce.png" alt={'Salad'} width={198} height={158}/>
                </div>
            </div>
            
            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check Out</h3>
                <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 py-8">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>

            </div>
        </section>
        
    );
}