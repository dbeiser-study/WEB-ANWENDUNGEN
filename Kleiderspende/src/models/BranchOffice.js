export default class BranchOffice{
    // @ts-ignore
    #locationId
    // @ts-ignore
    #locationName;
    // @ts-ignore
    #street;
    // @ts-ignore
    #postCode;
    // @ts-ignore
    #city;

    // @ts-ignore
    constructor(locationId, locationName, street, postCode, city){
        this.#locationId = locationId;
        this.#locationName = locationName;
        this.#street = street;
        this.#postCode = postCode;
        this.#city = city;
    }


    // @ts-ignore
    set locationId(locationId){
        this.#locationId = locationId;
    }

    get locationId(){
        return this.#locationId;
    }

    // @ts-ignore
    set locationName(locationName){
        this.#locationName = locationName;
    }

    get locationName(){
        return this.#locationName;
    }

    // @ts-ignore
    set street(street){
        this.#street = street;
    }

    get street(){
        return this.#street;
    }

    // @ts-ignore
    set postCode(postCode){
        this.#postCode = postCode;
    }

    get postCode(){
        return this.#postCode;
    }

    // @ts-ignore
    set city(city){
        this.#city = city;
    }

    get city(){
        return this.#city;
    }
    
    
    /* concat Address concatenates the address string of a branch office. This method has been 
       scoped to fill a form select field to provide options to be selected from. In case the 
       location id is 0 ~ unset only the location name is returned which is "auswählen" per default.
    */
   // @ts-ignore
    concatAddress(){

        if(this.locationId == 0){
            return this.#locationName;
        }
        return this.#locationName+ ", " + this.street + "," + this.postCode + "," + this.#city;
    }


}