import Image from "next/image";
import MenuItems from "../menu/MenuItems";
import SectionHeaders from "./SectionHeaders";

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
                <SectionHeaders
                subHeader={'CheckOut'}
                mainHeader={'Menu'} />
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