import { useEffect } from "react";
import {  useParams } from "react-router"
import { useState } from "react/cjs/react.development";
import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { db } from "../services/firebase.config";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { checkAdmin} from "../services/util";



function MenuDetails(props) {

    let params = useParams();

    const {currentUser} = useAuth();






    const [item, setItem] = useState({});


    async function getOne(id) {
        try {

            const q = query(collection(db, "menu"), where("itemId", "==", `${id}`));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(element => {
                var data = element.data();

                let objItem = Object.assign({}, data);

                setItem(objItem)
            });

        } catch (error) {
            console.log(error);
        }
    }


    function deleteItem(id) {

        let item = db.collection('menu').where("itemId", "==", `${id}`);
        item.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.delete()
            })
        })
        console.log("Item deleted");
      }

   


    

    function checkUser(currentUser) {
        if(currentUser){
            if(checkAdmin(currentUser)){
                return (<p> <Link to="/" className="btn btn-danger" role="button" onClick={() => { deleteItem(params.itemId)} }>Delete</Link> <Link to={`/edit/${params.itemId}`} className="btn btn-info" role="button">Edit</Link> </p>)
            }else{
                return (<p><Link to="#" className="btn btn-primary" role="button">Add to cart</Link></p>);
            }
        }else{
            return 
        }
    }

    useEffect(() => {

        getOne(params.itemId)

    }, [])

    return (
        <section id="mu-reservation">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-reservation-area">
                            <div className="mu-title">
                                <span className="mu-subtitle">Menu</span>
                                <h2>Details</h2>
                            </div>
                            <div className="mu-details">
                                    <div className="col-sm-6 col-md-4 mu-details-box" >
                                        <div className="thumbnail">
                                            <img src={item.img} alt="..." />
                                            <div className="caption">
                                                <h3>{item.name}</h3>
                                                <p>Item price is: ${item.price}</p>
                                                <p>Description: {item.description}</p>
                                                {checkUser(currentUser)}
                                            </div>
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


export default MenuDetails;