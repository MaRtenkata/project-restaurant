
import { Link } from "react-router-dom";


function MenuItemDesserts({dessert}) {



    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to={`/menu/${dessert.itemId}`}>
                        <img className="media-object" src={dessert.img} alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to={`/menu/${dessert.itemId}`}>{dessert.name}</Link></h4>
                    <span className="mu-menu-price">${dessert.price}</span>
                    <p>
                        
                    </p>
                </div>
            </div>
        </li>
    )
}

export default MenuItemDesserts;