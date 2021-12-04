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

