import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { write_to_db } from './write_to_db';
import { db } from './firebase';

/** id - name
 * 12 - Angelfish
 * 212 - Clownfish
 * 14 - Anchovy
 * 
 * Index = id - 1
 */

/**
 * Fetches fish data from the fish-species API.
 */
export function fetchFishData() {
   
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        // This function waits for the request to be done and then resolves the promise with the data.
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                // This is the data that is returned from the API
                const fishData = JSON.parse(this.responseText);
                arrayFish();
            }
        });

        // This is the request being made to the API.
        xhr.open('GET', 'https://fish-species.p.rapidapi.com/fish_api/fishes');
        xhr.setRequestHeader('X-RapidAPI-Key', 'd961a129e5msh01d05926c2eb4dbp1ef8b9jsncd24da716568');
        xhr.setRequestHeader('X-RapidAPI-Host', 'fish-species.p.rapidapi.com');

        xhr.send();
}

/**
 * Takes the data from the API and writes it to the database like a controller.
 */
function passFishData(fishNumber) {

    // fishNumber:
    // 1 - Angelfish
    // 2 - Clownfish
    // 3 - Anchovy

    const template = {"Name" : "",
                      "Species" : "",
                      "TankSize" : "",
                      "MaxSize" : "",
                      "pH" : "",
                      "LifeSpan" : "",
                      "WaterType" : "",
                      "Birthday" : ""};

    if(fishNumber == 1) {
        template.Name = "Kyle";
        template.Species = "Angelfish";
        template.TankSize = "20 gallons";
        template.MaxSize = "6.1 inches";
        template.pH = "7.5 - 7.9";
        template.LifeSpan = "10 years";
        template.WaterType = "Freshwater";
        template.Birthday = "2/25/24";
        write_to_db(template);

    } else if (fishNumber == 2) {
        template.Name = "Caleb";
        template.Species = "Clownfish";
        template.TankSize = "35 gallons";
        template.MaxSize = "8.2 inches";
        template.pH = "7.0 - 8.2";
        template.LifeSpan = "15 years";
        template.WaterType = "Saltwater";
        template.Birthday = "2/25/24";
        write_to_db(template);

    } else if (fishNumber == 3) {
        template.Name = "Jalen";
        template.Species = "Anchovy";
        template.TankSize = "15 gallons";
        template.MaxSize = "5.3 inches";
        template.pH = "6.4 - 7.6";
        template.LifeSpan = "2 years";
        template.WaterType = "Saltwater";
        template.Birthday = "2/25/24";
        write_to_db(template);

    } else {
        console.log('Invalid fish number.');
    }

}


/**
 * To return an array of species in the fishData collection.
 */
export function arrayFish() {
    // const res = [];
    // db.collection('fishData').get().then((snapshot) => {
    //     snapshot.forEach((doc) => {
    //         res.push(doc.data());
    //     });
    // });
   
    // console.log("ArrayFish: "+ res);
    // return res;
}
