import { Link } from "react-router-dom";


function MenuItem(params) {
    return (
        <li>
            <div className="media">
                <div className="media-left">
                    <Link to="#">
                        <img className="media-object" src="assets/img/menu/item-5.jpg" alt="img" />
                    </Link>
                </div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to="#">Indian Breakfast</Link></h4>
                    <span className="mu-menu-price">$15.85</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nulla aliquid praesentium dolorem commodi illo.</p>
                </div>
            </div>
        </li>
    )
}

export default MenuItem;