import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../../services/firebase.config";
import "../Reservations/Reservations.css";
import ReservationsBox from "./ReservationsBox";



function Reservations() {


    const [items, setItems] = useState([])


    const fetchData = () => {
        db.collection("reservations").get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setItems(arr => [...arr, data]);

            });
        });
    }


    useEffect(() => {

        fetchData();

    }, [])


    return (
        <section id="mu-gallery">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-reservations-area">

                            <div className="mu-title">
                                <span className="mu-subtitle">Reservations</span>
                                <h2>For the restaurant</h2>
                            </div>
                            <div className="mu-reservations-content">
                                <div className="mu-reservations-body">
                                    <div className="mu-format">

                                        <ul>
                                        {items.map(item => <ReservationsBox key={item.resId} item={item}></ReservationsBox>)}     
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservations;