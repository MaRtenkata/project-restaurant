
import MenuItem from "./MenuMeals";

function MenuBreakfast(params) {
    return (
        
            <div className="mu-tab-content-area">
                <div className="row">

                    <div className="col-md-6">
                        <div className="mu-tab-content-left">
                            <ul className="mu-menu-item-nav">
                                <MenuItem></MenuItem>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mu-tab-content-right">
                            <ul className="mu-menu-item-nav">
                            <MenuItem></MenuItem>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        
    )
}

export default MenuBreakfast;