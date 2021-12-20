

import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { db } from '../../../services/firebase.config';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import MenuItemSnacks from "./MenuItemSnack";
import { halfFirst, halfsSecond } from "../../../services/util";


function MenuSnacks(params) {

    const [snacks, setSnacks] = useState([]);


    async function fetchData() {
        try {

            const q = query(collection(db, "menu"), where("category", "==", "Snacks"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(element => {
                var data = element.data();

                setSnacks(arr => [...arr, data]);


            });

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="tab-pane fade" id="snacks">
            <div className="mu-tab-content-area">
                <div className="row">

                    <div className="col-md-6">
                        <div className="mu-tab-content-left">
                            <ul className="mu-menu-item-nav">
                                {halfFirst(snacks).map(snack => <MenuItemSnacks key={snack.itemId} snack={snack} />)}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mu-tab-content-right">
                            <ul className="mu-menu-item-nav">
                                {halfsSecond(snacks).map(snack => <MenuItemSnacks key={snack.itemId} snack={snack} />)}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuSnacks;