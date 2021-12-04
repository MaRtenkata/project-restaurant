import "../Menu/Menu.css";


import MenuDesserts from "../../components/Menu/MenuDesserts";


function Menu(params) {
  return (
    <section id="mu-restaurant-menu">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-restaurant-menu-area">

              <div className="mu-title">
                <span className="mu-subtitle">Discover</span>
                <h2>OUR MENU</h2>
              </div>

              <div className="mu-restaurant-menu-content">
                <ul className="nav nav-tabs mu-restaurant-menu">
                  <li className="active"><a href="#breakfast" data-toggle="tab">Breakfast</a></li>
                  <li><a href="#meals" data-toggle="tab">Meals</a></li>
                  <li><a href="#snacks" data-toggle="tab">Snacks</a></li>
                  <li><a href="#desserts" data-toggle="tab">Desserts</a></li>
                  <li><a href="#drinks" data-toggle="tab">Drinks</a></li>
                </ul>


                <div className="tab-content">
                  <div className="tab-pane fade in active" id="breakfast">
                    <div className="mu-tab-content-area">
                      <div className="row">

                        <div className="col-md-6">
                          <div className="mu-tab-content-left">
                            <ul className="mu-menu-item-nav">
                              
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mu-tab-content-right">
                            <ul className="mu-menu-item-nav">
                              
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

               

                  <MenuDesserts />

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu;