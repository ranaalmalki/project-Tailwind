
function Join() {
  return (
    <div className="container p-20">

<div className="card bg-base-100 shadow-xl shadow-black grid grid-flow-col">
  <figure className="relative -mt-10 indicator indicator-item">
    <img
src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
alt="Mailing" />
  </figure>
  <div className="card-body">
    <h1 className="card-title">
Join Mailing List
</h1>
    <p>

Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.
</p>
    <div className="card-actions justify-end ">
        <label className="input input-bordered flex items-center gap-2">
        Email address

            <input type="text" className=""/>
            </label>
            <button className="btn text-[#be7d69] bg-white hover:bg-[#be7d69] hover:text-white col-span-1">SUBSCRIBE</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default Join