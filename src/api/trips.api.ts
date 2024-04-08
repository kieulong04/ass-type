import { ITrip } from "../interfaces";
import instance from "./instance";

export const getTrips = () => {
    const data = instance.get("/trips?_expand=busHouse");
    console.log(data);
    return data
}

export const getTripById = (id: number | string) => {
    const data = instance.get("/trips/" + id)
    return data
}

export const postTrip = async (data: ITrip) => {
    const uri = "trips"
    return instance.post(uri, data)
}

export const putTrip = async (id: string | number, data: ITrip) => {
    const uri = "trips/" + id
    return instance.put(uri, data)
}

export const deleteTrip = async (id: string | number) => {
    const uri = "trips"
    return instance.delete(uri)
}