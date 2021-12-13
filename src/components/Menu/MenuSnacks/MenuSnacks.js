

import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { db } from '../../../services/firebase.config';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import MenuItemSnacks from "./MenuItemSnack";


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
        <div class="tab-pane fade" id="snacks">
            <div class="mu-tab-content-area">
                <div class="row">

                    <div class="col-md-6">
                        <div class="mu-tab-content-left">
                            <ul class="mu-menu-item-nav">
                            {snacks.map(snack => <MenuItemSnacks key={snack.itemId} snack={snack} />)}
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mu-tab-content-right">
                            <ul class="mu-menu-item-nav">
                                
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuSnacks;