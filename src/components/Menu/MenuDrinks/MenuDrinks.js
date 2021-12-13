import { getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { collection, query, where, } from "firebase/firestore";
import { db } from '../../../services/firebase.config';

import { useState } from "react/cjs/react.development";


function MenuDrinks(params) {

    const [drinks, setDrinks] = useState([]);


    async function fetchData() {
        try {

            const q = query(collection(db, "menu"), where("category", "==", "Drinks"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(element => {
                var data = element.data();

                setDrinks(arr => [...arr, data]);
                

            });

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div class="tab-pane fade" id="drinks">
            <div class="mu-tab-content-area">
                <div class="row">

                    <div class="col-md-6">
                        <div class="mu-tab-content-left">
                            <ul class="mu-menu-item-nav">
                            {drinks.map(item => console.log(item))}
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

export default MenuDrinks;