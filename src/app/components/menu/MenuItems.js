export default function MenuItems() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/25 transition-all duration-300 ease-in-out">
        <div className="text-center ">
            <img src="/images/pizza.png" alt="pizza" className="max-h-auto max-h-24 block mx-auto" />
        </div>       
        <h4 className="font-semibold text-xl my-3">Pepporini Pizza</h4>
        <p className="text-gray-500 text-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">
            Add to cart 20
        </button>
    </div>
  );
}
