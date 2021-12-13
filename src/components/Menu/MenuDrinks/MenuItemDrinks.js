import { Link } from "react-router-dom";


function MenuItemDrinks({drinks}) {



    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to="#">
                        <img className="media-object" src={drinks.img} alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to="#">{drinks.name}</Link></h4>
                    <span className="mu-menu-price">${drinks.price}</span>
                    <p>
                        
                    </p>
                </div>
            </div>
        </li>
    )
}

export default MenuItemDrinks;