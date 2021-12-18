import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { db } from '../../../services/firebase.config';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { halfFirst, halfsSecond } from "../../../services/util";
import MenuItemBreakfast from "./MenuItemBreakfast";


function MenuBreakfast(params) {



    const [breakfast, setBreakfast] = useState([]);


    async function fetchData() {
        try {

            const q = query(collection(db, "menu"), where("category", "==", "Breakfast"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(element => {
                var data = element.data();

                setBreakfast(arr => [...arr, data]);


            });

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();

    }, [])

    return (

        <div className="tab-pane fade in active" id="breakfast">
            <div className="mu-tab-content-area">
                <div className="row">

                    <div className="col-md-6">
                        <div className="mu-tab-content-left">
                            <ul className="mu-menu-item-nav">
                                {halfFirst(breakfast).map(breakfast => <MenuItemBreakfast key={breakfast.itemId} breakfast={breakfast} />)}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mu-tab-content-right">
                            <ul className="mu-menu-item-nav">
                                {halfsSecond(breakfast).map(breakfast => <MenuItemBreakfast key={breakfast.itemId} breakfast={breakfast} />)}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MenuBreakfast;