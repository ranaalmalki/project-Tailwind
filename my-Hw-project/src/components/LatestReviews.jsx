import Card from "./Card"
function LatestReviews() {
  return (
    <div className="justify-center grid ">
      <div className="flex  flex-wrap justify-between">
        <h1 className="font-bold text-4xl">Latest Reviews</h1>
        
                <button className="btn text-[#be7d69] bg-white hover:bg-[#be7d69] hover:text-white col-span-1">View All</button>
                </div>
    <div className="grid lg:grid-flow-col md:grid-flow-row">
<Card img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
title="Grilled Flank Steak with Chimichurri"
description="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."

/>
<Card img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
title="Mushroom Penne with Walnut Pesto"
description="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."

/>
<Card img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
title="Garlic Butter White Wine Shrimp Linguine"
description="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."

/>
    </div>
    </div>
  )
}

export default LatestReviews