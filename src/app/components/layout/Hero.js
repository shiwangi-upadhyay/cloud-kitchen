import Image from "next/image";

export default function Hero() {
    return(
        <section>
            <h1>Everything išbetter with a pizza</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quis, id facere quasi, amet iure, sapiente voluptatum inventore excepturi nihil expedita nulla consectetur! Labore incidunt repudiandae libero, facere excepturi et?
            </p>
            <Image src={''} layout={'fill'} objectFit={'contain'} alt={'pizza'}></Image>
        </section>
    );
}