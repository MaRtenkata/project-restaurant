function ReservationsBox({ item }) {



    return (
        <li className="li-reserve">
            <div className="mu-reservations-item-box">
                <div className="mu-reservations-item-box-content">
                    <div className="mu-reservations-item-box-name">
                        <h4>Neme of the person:</h4>
                        <p>{item.name}</p>
                    </div>
                    <div className="mu-reservations-item-box-phone">
                        <h4>Phone number of the person:</h4>
                        <p>{item.phoneNumber}</p>
                    </div>
                    <div className="mu-reservations-item-box-people">
                        <h4>Number of the people</h4>
                        <p>{item.people}</p>
                    </div>
                    <div className="mu-reservations-item-box-date">
                        <h4>Date:</h4>
                        <p>{item.date}</p>
                    </div>
                    <div className="mu-reservations-item-box-buttons">
                        <button className="btn btn-success btn-reserve">Approved</button>
                        <button className="btn btn-danger btn-reserve">Decline</button>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default ReservationsBox;