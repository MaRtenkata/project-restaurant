import { Link } from "react-router-dom";


function MenuItemMeals({meal}) {



    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to="#">
                        <img className="media-object" src={meal.img} alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to="#">{meal.name}</Link></h4>
                    <span className="mu-menu-price">${meal.price}</span>
                    <p>
                        
                    </p>
                </div>
            </div>
        </li>
    )
}

export default MenuItemMeals;