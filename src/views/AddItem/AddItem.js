
import {  useRef,  } from "react";
import { addItem } from "../../services/addItemService";
import "../AddItem/AddItem.css";

function AddItem(params) {

    



    // const nameRef = useRef();
    // const priceRef = useRef();
    // const descriptionRef = useRef();
    const categoryRef = useRef();
    // const imgRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const nameRef = formData.get('name');
        const priceRef = formData.get('price');
        const descriptionRef = formData.get('description');
        const imgRef = formData.get('img');
    


        console.log(nameRef);
        


         addItem(nameRef, priceRef, descriptionRef, categoryRef.current, imgRef);
    }
   
    

    return (
        <section id="mu-reservation">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-reservation-area">

                            <div className="mu-title">
                                <span className="mu-subtitle">Create A</span>
                                <h2>Menu Item</h2>
                            </div>

                            <div className="mu-reservation-content">
                              

                                <div className="col-md-6">
                                    <div className="mu-reservation-left">
                                        <form className="mu-reservation-form" name="myForm"  onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="number" className="form-control" placeholder="Price" name="price"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Description" name="description"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <select className="form-control" ref={categoryRef} onChange={e => {categoryRef.current = e.target.value}}>
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

                                                        <input type="text" placeholder="Image" name="img" />
                                                    </div>
                                                </div>
                                                <button type="submit" className="mu-readmore-btn">Create and Item</button>
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

export default AddItem;