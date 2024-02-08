import { getNextFourDays } from "@/Components/Booking"
import { database } from "@/firebase"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

export const addReservation = async (data) => {
    const ref = collection(database, "reservation")
    try {
        await addDoc(ref, data)
        console.log("Document added")
    } catch (error) {
        console.log("Error")
        console.log(error)
        throw error
    }
}

export const fetchAvailableHours = async (data) => {
    const nextDays = getNextFourDays()
    try {
        console.log("running")
        const ref = collection(database, "reservation")
        const q = query(ref, where("date", "in", nextDays));
        const data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        console.log("🚀 --------------------------------------------------------------🚀")
        console.log("🚀 ~ file: dbServices.js:29 ~ fetchAvailableHours ~ data:", data)
        console.log("🚀 --------------------------------------------------------------🚀")

    } catch (error) {
        console.log("Error")
        console.log(error)
        throw error

    }
}