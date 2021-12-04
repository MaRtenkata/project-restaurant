import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";


function MenuSnacks(params) {
    return (
        <div class="tab-pane fade" id="snacks">
            <div class="mu-tab-content-area">
                <div class="row">

                    <div class="col-md-6">
                        <div class="mu-tab-content-left">
                            <ul class="mu-menu-item-nav">
                                <MenuItem />
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mu-tab-content-right">
                            <ul class="mu-menu-item-nav">
                                <MenuItem />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuSnacks;