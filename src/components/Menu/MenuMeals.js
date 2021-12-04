
import MenuItem from "./MenuItem";


function MenuMeals(params) {
    return (

        <div class="tab-pane fade" id="meals">
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

export default MenuMeals;