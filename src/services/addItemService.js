import { db } from "./firebase.config";
import { v4 as uuidv4 } from 'uuid';







export function addItem(name, price, description, category, img) {
    try {
        db.collection('menu').add({
            itemId: uuidv4(),
            name,
            price,
            description,
            category,
            img
        });
        console.log("Item Added Successfully");
    } catch (error) {
        console.error(error);
        alert("An error occured while fetching user data");
    }
 
}


export function reserve(name, email, phoneNumber, people, date, text) {
    try {
        db.collection('reservations').add({
            resId: uuidv4(),
            name,
            email,
            phoneNumber,
            people,
            date,
            text
        });
        alert("Reserved a table");
    } catch (error) {
        console.error(error);
        alert("An error occured while fetching user data");
    }
}








