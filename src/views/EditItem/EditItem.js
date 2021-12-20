import { useEffect, useRef, } from "react";
import { useNavigate, useParams } from "react-router";

import { getDocs } from "firebase/firestore";
import { collection, query, where, } from "firebase/firestore";
import { useState } from "react/cjs/react.development";
import { db } from "../../services/firebase.config";
import "../EditItem/EditItem.css";


function EditItem() {

    let params = useParams();



    let navigate = useNavigate();
    const categoryRef = useRef();
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

    function updateItem(id, name, price, description, category, img) {
        
    
            db.collection('menu').where("itemId", "==", `${id}`).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.update({
                        name,
                        price,
                        description,
                        category,
                        img
                    });
                })
            })
            console.log("Item Edited Successfully");
        } 



    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const nameRef = formData.get('name');
        const priceRef = formData.get('price');
        const descriptionRef = formData.get('description');
        const imgRef = formData.get('img');



        console.log(nameRef);



        updateItem(params.itemId, nameRef, priceRef, descriptionRef, categoryRef.current, imgRef);
        navigate("/");
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
                                <span className="mu-subtitle">Edit</span>
                                <h2>Menu Item</h2>
                            </div>

                            <div className="mu-reservation-content">


                                <div className="col-md-6">
                                    <div className="mu-reservation-left">
                                        <form className="mu-reservation-form" name="myForm" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name" name="name" defaultValue={item.name}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="number" className="form-control" placeholder="Price" name="price" defaultValue={item.price}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Description" name="description" defaultValue={item.description}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <select className="form-control" ref={categoryRef} onChange={e => { categoryRef.current = e.target.value }}>
                                                            <option value="0">Category</option>
                                                            <option value="Breakfast">Breakfast</option>
                                                            <option value="Meals">Meals</option>
                                                            <option value="Snacks">Snacks</option>
                                                            <option value="Desserts">Desserts</option>
                                                            <option value="Drinks">Drinks</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">

                                                        <input type="text" placeholder="Image" name="img" defaultValue={item.img}/>
                                                    </div>
                                                </div>
                                                <button type="submit" className="mu-readmore-btn">Edit</button>
                                            </div>
                                        </form>
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

export default EditItem;