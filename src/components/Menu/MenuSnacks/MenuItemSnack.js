
import { Link } from "react-router-dom";


function MenuItemSnacks({snack}) {



    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to={`/menu/${snack.itemId}`}>
                        <img className="media-object" src={snack.img} alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to={`/menu/${snack.itemId}`}>{snack.name}</Link></h4>
                    <span className="mu-menu-price">${snack.price}</span>
                    <p>
                        
                    </p>
                </div>
            </div>
        </li>
    )
}

export default MenuItemSnacks;