import "../LandingPage/LandingPage.css";
import { Link } from "react-router-dom";



function LendingPage(params) {



    return (

        <div className="landing-page">
            <section id="mu-slider">
                <div className="mu-slider-area">


                    <div className="mu-top-slider">

                        <div className="mu-top-slider-single">
                            <img src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" alt="img" />

                            <div className="mu-top-slider-content">
                                <span className="mu-slider-small-title">Welcome</span>
                                <h2 className="mu-slider-title">To The OsteriaX</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>
                                <Link to="/reservation" className="mu-readmore-btn mu-reservation-btn">BOOK A TABLE</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="mu-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mu-about-us-area">

                                <div className="mu-title">
                                    <span className="mu-subtitle">Discover</span>
                                    <h2>ABOUT US</h2>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mu-about-us-left">
                                            <img src="assets/img/about-us.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mu-about-us-right">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam minus aliquid, itaque illum assumenda repellendus dolorem, dolore numquam totam saepe, porro delectus, libero enim odio quo. Explicabo ex sapiente sit eligendi, facere voluptatum! Quia vero rerum sunt porro architecto corrupti eaque corporis eum, enim soluta, perferendis dignissimos, repellendus, beatae laboriosam.</p>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque similique molestias est quod reprehenderit, quibusdam nam qui, quam magnam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mu-map">
                <iframe title="nadejda" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.2150748102327!2d23.30533994924978!3d42.72436499263281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa91afce6a6bf1%3A0xd062246fc31cab86!2sNadezhda!5e0!3m2!1sen!2sbg!4v1637753579643!5m2!1sen!2sbg" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
            </section>
        </div>



    )
}

export default LendingPage;