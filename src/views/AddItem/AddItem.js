
import {  useRef,  } from "react";
import { addItem } from "../../services/addItemService";
import "../AddItem/AddItem.css";

function AddItem(params) {

    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const imgRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        addItem(nameRef.current.value, priceRef.current.value, descriptionRef.current.value, categoryRef.current, imgRef.current.value);
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
                                        <form className="mu-reservation-form"  onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name" ref={nameRef}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="number" className="form-control" placeholder="Price" ref={priceRef}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Description" ref={descriptionRef}/>
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

                                                        <input type="file" placeholder="Image" ref={imgRef} />
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