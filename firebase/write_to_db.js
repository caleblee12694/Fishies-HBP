import { db } from './firebase.js';
import { addDoc } from 'firebase/firestore/lite';
import { collection } from 'firebase/firestore/lite';

/**
 *  Writes data to the fishData collection in the database.
 */
export const write_to_db = (writingData) => {
    // write to db
    console.log('Writing to db');

    // Add a new document with a generated id.
    addDoc(collection(db, "fishData"), writingData)
      
        // To indicate which entry ID was created.
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })

        // To catch any errors from writing to the database.
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
}


