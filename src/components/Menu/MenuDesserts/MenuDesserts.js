import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { db } from '../../../services/firebase.config';




import MenuItemDesserts from "./MenuItemDesserts";





function MenuDesserts() {


    const [desserts, setDesserts] = useState([]);


    


    async function fetchData() {
        try {

            const q = query(collection(db, "menu"), where("category", "==", "Desserts"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(element => {
                var data = element.data();

                setDesserts(arr => [...arr, data]);
                

            });





        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])




    return (
        <div className="tab-pane fade" id="desserts">
            <div className="mu-tab-content-area">
                <div className="row">

                    <div className="col-md-6">
                        <div className="mu-tab-content-left">
                            <ul className="mu-menu-item-nav">
                                {desserts.map(dessert => <MenuItemDesserts key={dessert.itemId} dessert={dessert} />)}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mu-tab-content-right">
                            <ul className="mu-menu-item-nav">
                                {/* {desserts.map(dessert => <MenuItem key={dessert.itemId} dessert={dessert} />)} */}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MenuDesserts;