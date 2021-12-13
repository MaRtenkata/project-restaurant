import { Link } from "react-router-dom";


function MenuItemMeals({meals}) {



    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to="#">
                        <img className="media-object" src={meals.img} alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to="#">{meals.name}</Link></h4>
                    <span className="mu-menu-price">${meals.price}</span>
                    <p>
                        
                    </p>
                </div>
            </div>
        </li>
    )
}

export default MenuItemMeals;