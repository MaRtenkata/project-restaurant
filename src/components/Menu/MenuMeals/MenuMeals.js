
import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { db } from '../../../services/firebase.config';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import MenuItemMeals from "./MenuItemMeals";
import { halfFirst, halfsSecond } from "../../../services/util";


function MenuMeals(params) {



    const [meals, setMeals] = useState([]);


    async function fetchData() {
        try {

            const q = query(collection(db, "menu"), where("category", "==", "Meals"));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(element => {
                var data = element.data();

                setMeals(arr => [...arr, data]);
                

            });

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
       
    }, [])

    return (

        <div className="tab-pane fade" id="meals">
            <div className="mu-tab-content-area">
                <div className="row">

                    <div className="col-md-6">
                        <div className="mu-tab-content-left">
                            <ul className="mu-menu-item-nav">
                            {halfFirst(meals).map( meal => <MenuItemMeals key = {meal.itemId} meal = {meal}/>)}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mu-tab-content-right">
                            <ul className="mu-menu-item-nav">
                            {halfsSecond(meals).map( meal => <MenuItemMeals key = {meal.itemId} meal = {meal}/>)}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MenuMeals;