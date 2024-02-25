import { db } from './firebase/firebase.js';
import { addDoc } from 'firebase/firestore/lite';
import { collection } from 'firebase/firestore/lite';

export const write_to_db = () => {
    // write to db
    console.log('Writing to db');

    // Add a new document with a generated id.
    addDoc(collection(db, "fishData"), {
        firstName: "John",
        lastName: "Doe",
        age: 30
      })
        // To indicate which entry ID was created.
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })

        // To catch any errors.
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
}


