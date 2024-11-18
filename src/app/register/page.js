export default function RegisterPage(){
    return(
        <section className="text-current text-primary
     text-4xl  mt-8  ">
        Register
        <h1>
            <form action="">
                <input  type="email" placeholder="email"> </input>
                <input  type="password" placeholder="password"> </input>
                <button type="submit">Register</button>
            </form>
        </h1>
     </section>
    )
}