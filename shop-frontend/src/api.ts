import { initializeApp } from 'firebase/app'
import { collection, getDocs, initializeFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { ImagesType, ProductType } from './Components/types'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)

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

export const getInstagramPhotos = async (): Promise<ImagesType[]> => {
  const querySnapshot = await getDocs(collection(db, 'instagramUsers'))
  const usersImages: ImagesType[] = []

  querySnapshot.forEach((image) => {
    const imagesList = image.data() as Omit<ImagesType, 'id'>
    usersImages.push({
      id: image.id,
      ...imagesList,
    })
  })
  return usersImages
}
