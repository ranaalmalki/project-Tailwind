import CardRestaurant from "./CardRestaurant"
function ClassRestaurant() {
  return (
    <div className="justify-center grid text-center">
        <h1 className="font-bold text-4xl">Best in Class Restaurant</h1>
        <p>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
            <div className="grid lg:grid-flow-col md:grid-flow-row">
                <CardRestaurant
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
                title="Bern's Steak House"
                description="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
                
                />
                     <CardRestaurant
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
                title="Eewak Korean Restaurant"
                description="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
                
                />     <CardRestaurant
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
                title="The Ramban Vegan House"
                description="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
                
                />
            </div>
            <div className="grid lg:grid-flow-col md:grid-flow-row">
                <CardRestaurant
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
                title="Maniest Bake & Cake"
                description="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
                
                />
                     <CardRestaurant
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
                title="Crush Los Angeles"
                description="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
                
                />     <CardRestaurant
                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
                title="The Mike Winery"
                description="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
                
                />
            </div>

        


    </div>
  )
}

export default ClassRestaurant