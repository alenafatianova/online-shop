import { initializeApp } from 'firebase/app'
import { collection, getDocs, initializeFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
import { ProductType } from './Components/types'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'st-moriz.firebaseapp.com',
  projectId: 'st-moriz',
  storageBucket: 'st-moriz.appspot.com',
  messagingSenderId: '31783096981',
  appId: '1:31783096981:web:99adcb49b78089e827019c',
  measurementId: 'G-H96RV38VT0',
}

const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

export const storage = getStorage(app)

export const initializeAPI = () => {
  initializeApp(firebaseConfig)
}

export const getBestsellers = async (): Promise<ProductType[]> => {
  const querySnapshot = await getDocs(collection(db, 'bestsellers'))
  const bestsellers: ProductType[] = []

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Omit<ProductType, 'id'>
    bestsellers.push({
      id: doc.id,
      ...data,
    })
    // console.log(`${doc.id} => ${doc.data()}`)
  })

  return bestsellers
}

export const getNewies = async (): Promise<ProductType[]> => {
  const querySnapshot = await getDocs(collection(db, 'newProducts'))
  const newies: ProductType[] = []

  querySnapshot.forEach((doc) => {
    const newProducts = doc.data() as Omit<ProductType, 'id'>
    newies.push({
      id: doc.id,
      ...newProducts,
    })
  })
  return newies
}

export const getInstagramPhotos = async (): Promise<any> => {
  const storage = getStorage()
  const imagesRef = await ref(storage, 'instagramUsers/peel_user.jpg')
  return imagesRef
}
