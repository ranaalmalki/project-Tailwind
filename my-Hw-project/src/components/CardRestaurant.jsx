
function CardRestaurant(props) {
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


        </div>

    </div>



</div>
  )
}

export default CardRestaurant