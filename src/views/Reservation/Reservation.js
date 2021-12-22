import { useRef } from "react";
import { useNavigate } from "react-router";
import { reserve } from "../../services/addItemService";
import "../Reservation/Reservation.css";

function Reservation(params) {

    const peopleRef = useRef();
    let navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const nameRef = formData.get('name');
        const emailRef = formData.get('email');
        const numberRef = formData.get('number');
        const dateRef = formData.get('date');
        const textRef = formData.get('freeText');




        console.log(nameRef);



        reserve(nameRef, emailRef, numberRef, peopleRef.current, dateRef,textRef );
        navigate("/");
    }




    return (
        <section id="mu-reservation">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-reservation-area">

                            <div className="mu-title">
                                <span className="mu-subtitle">Make A</span>
                                <h2>Reservation</h2>
                            </div>

                            <div className="mu-reservation-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quidem autem iusto, perspiciatis, amet, quaerat blanditiis ducimus eius recusandae nisi aut totam alias consectetur et.</p>

                                <div className="col-md-6">
                                    <div className="mu-reservation-left">
                                        <form className="mu-reservation-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Full Name" name="name" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="Email" name="email" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Phone Number" name="number" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <select className="form-control" ref={peopleRef} onChange={e => { peopleRef.current = e.target.value }}>
                                                            <option value="0">How Many?</option>
                                                            <option value="1 Person">1 Person</option>
                                                            <option value="2 People">2 People</option>
                                                            <option value="3 People">3 People</option>
                                                            <option value="4 People">4 People</option>
                                                            <option value="5 People">5 People</option>
                                                            <option value="6 People">6 People</option>
                                                            <option value="7 People">7 People</option>
                                                            <option value="8 People">8 People</option>
                                                            <option value="9 People">9 People</option>
                                                            <option value="10 People">10 People</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="datepicker" placeholder="Date" name="date" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" cols="30" rows="10" placeholder="Your Message" name="freeText"></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="mu-readmore-btn">Make Reservation</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-md-5 col-md-offset-1">
                                    <div className="mu-reservation-right">
                                        <div className="mu-opening-hour">
                                            <h2>Opening Hours</h2>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <p>Monday &amp; Tuesday</p>
                                                    <p>9:00 AM - 4:00 PM</p>
                                                </li>
                                                <li>
                                                    <p>Wednesday &amp; Thursday</p>
                                                    <p>9:00 AM - Midnight</p>
                                                </li>
                                                <li>
                                                    <p>Friday &amp; Saturday</p>
                                                    <p>9:00 AM - Midnight</p>
                                                </li>
                                                <li>
                                                    <p>Sunday</p>
                                                    <p>9:00 AM - 11:00 PM</p>
                                                </li>
                                            </ul>
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

export default Reservation;