import { Link } from "react-router-dom";


function MenuItemBreakfast({breakfast}) {



    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to={`/menu/${breakfast.itemId}`}>
                        <img className="media-object" src={breakfast.img} alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to={`/menu/${breakfast.itemId}`}>{breakfast.name}</Link></h4>
                    <span className="mu-menu-price">${breakfast.price}</span>
                    <p>
                        
                    </p>
                </div>
            </div>
        </li>
    )
}

export default MenuItemBreakfast;