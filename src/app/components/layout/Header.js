import Link from "next/link";

export default function Header() {
    return (
    <header className="flex items-center justify-between">
        
        <nav className="flex items-center gap-8 font-semibold text-gray-500 ">
            <Link className="text-primary       font-semibold text-2xl " href={'/'}>
                Cloud Kitchen
            </Link>
            <Link href={'/'}>Home</Link>
            <Link href={""}>Menu</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
            {/*<Link className="bg-primary text-white px-6 py-2 rounded-full" href={""}        >
                Login 
            </Link>*/}
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold ">
            <Link href={'/login'} className="">Login</Link>
        <Link href={'/register'} className="bg-primary text-white px-6 py-2 rounded-full" >
                Register 
            </Link>
        </nav>
    </header>
    );
}
