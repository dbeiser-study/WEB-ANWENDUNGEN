import { writable } from "svelte/store";
import BranchOffice from "../models/BranchOffice";

let branchOfficeData = [
    {
        "locationId": 0,
        "locationName": "bitte wählen",
        "street": "",
        "postCode": "",
        "city": "",
    },
    {
        "locationId": 1,
        "locationName": "Geschäftsstelle 1",
        "street": "Straße 1",
        "postCode": "12345",
        "city": "Stadt",
    },
    {
        "locationId": 2,
        "locationName": "Geschäftsstelle 2",
        "street": "Straße 2",
        "postCode": "31321",
        "city": "Dorf",
    },
    {
        "locationId": 3,
        "locationName": "Geschäftsstelle 3",
        "street": "Straße 2",
        "postCode": "54123",
        "city": "Dorf",
    }
]


// @ts-ignore
export const branchOffices= writable(branchOfficeData.map(
    data => new BranchOffice(data.locationId, data.locationName, data.street, data.postCode, data.city)
));