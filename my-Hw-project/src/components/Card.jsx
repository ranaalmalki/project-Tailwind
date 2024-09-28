
function Card(props) {
  return (
    <div className=" p-5 justify-center flex">
        <div className="card w-96 ">
            <figure>
                <img
                src={props.img}
                alt="Grilled Flank Steak "
                className="w-full"
                />
            </figure>
            <div className="card-body">
                <div className="card-tile">
                    <h1 className="text-xl font-bold">{props.title}</h1>
                    <p>{props.description}</p>

                </div>
                <div className="card-actions">
                    <a href="#" className="text-[#be7d69] hover:text-black">READ MORE

                        <svg className="hover:text-gray-400 hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg>
                        </a>
                </div>

            </div>

        </div>
  


    </div>
  )
}

export default Card