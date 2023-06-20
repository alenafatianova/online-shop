import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, initializeFirestore } from "firebase/firestore";
import { BestellersType } from "./Components/types";


const firebaseConfig = {
    apiKey: "AIzaSyCkfm1EdqfwxYo39Hap8CPjB41OJX7aUw4",
    authDomain: "st-moriz.firebaseapp.com",
    projectId: "st-moriz",
    storageBucket: "st-moriz.appspot.com",
    messagingSenderId: "31783096981",
    appId: "1:31783096981:web:99adcb49b78089e827019c",
    measurementId: "G-H96RV38VT0"
}


const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
})


export const initializeAPI = () => {
    initializeApp(firebaseConfig)
}

export const getBestsellers = async (): Promise<BestellersType[]> => {
    const querySnapshot = await getDocs(collection(db, "bestsellers"));
    const bestsellers: BestellersType[] = []
    
    querySnapshot.forEach((doc) => {
    const data = doc.data() as Omit<BestellersType, 'id'>
    bestsellers.push({
        id: doc.id,
        ...data
    })
    console.log(`${doc.id} => ${doc.data()}`);
  }); 

  return bestsellers
}

getBestsellers()