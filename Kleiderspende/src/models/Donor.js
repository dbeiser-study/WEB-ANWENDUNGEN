export default class Donor{
    // @ts-ignore
    #firstName;
    // @ts-ignore
    #surname;
    // @ts-ignore
    #street;
    // @ts-ignore
    #postCode;
    // @ts-ignore
    #city;
    // @ts-ignore
    #emailAddress;

    constructor(){
        this.#firstName = '';
        this.#surname = '';
        this.#street = '';
        this.#postCode = '';
        this.#city = '';
        this.#emailAddress = '';
    }

    // @ts-ignore
    set firstName(firstName){
        this.#firstName = firstName;
    }

    get firstName(){
        return this.#firstName;
    }

    // @ts-ignore
    set surname(surname){
        this.#surname = surname;
    }

    get surname(){
        return this.#surname;
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

    // @ts-ignore
    set emailAddress(emailAddress){
        this.#emailAddress = emailAddress;
    }

    get emailAddress(){
        return this.#emailAddress;
    }

    formIsComplete(){
        if(this.firstName .length > 0
            && this.surname.length > 0
            && this.street.length > 0
            && this.postCode.length > 0
            && this.city.length > 0
            && this.emailAddress.length > 0){

                return true;
            }
        return false;

            
    }

    getAddress(){
        let address = this.#firstName + " " + this.#surname + ", " + this.#street + " " + this.#postCode + " " + this.#city; 
        if(address.length == 0){
            return ''
        }
        return address;
    }


}