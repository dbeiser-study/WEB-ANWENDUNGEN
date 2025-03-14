export default class ClothingDonation{
    // @ts-ignore
    #deliveryType;
    // @ts-ignore
    #branchOffice;
    // @ts-ignore
    #project;
    // @ts-ignore
    #clothing;
    // @ts-ignore
    #dataPrivacy;
    // @ts-ignore
    #donationStatus;
    // @ts-ignore
    #donor

    constructor(){
        this.#deliveryType = 0;
        this.#branchOffice = 0;
        this.#project = 0;
        this.#clothing = new Array();
        this.#clothing.push({id: Date.now(), 'value': 0});
        this.#dataPrivacy = false;
        this.#donationStatus = 0
        this.donor = null;

    };

    // @ts-ignore
    set deliveryType(deliveryType){
        this.#deliveryType = deliveryType;
    }

    get deliveryType(){
        return this.#deliveryType;
    }

    // @ts-ignore
    set branchOffice(branchOffice){
        this.#branchOffice = branchOffice;
    }

    get branchOffice(){
        return this.#branchOffice;
    }

    // @ts-ignore
    set project(project){
        this.#project = project;
    }

    get project(){
        return this.#project;
    }

    // @ts-ignore
    set clothing(clothing){
        this.#clothing = clothing;
    }

    get clothing(){
        return this.#clothing;
    }
    // @ts-ignore
    addClothing(){
        
        this.#clothing = new Array(
            ...this.#clothing,
            {'id': Date.now(), 'value': 0}
        );
        
    }

    // @ts-ignore
    removeClothing(clothingId){
        let newArray = new Array();

        for(let i=0; i<this.clothing.length;i++){
            if(clothingId != this.clothing[i].id){
                newArray.push(this.clothing[i]);
            }
        };

        this.#clothing = newArray;
    }

    // @ts-ignore
    updateClothing(updatedClothing){
        let newArray = new Array();
        console.log(updatedClothing)
        for(let i=0; i<this.clothing.length;i++){
            if(updatedClothing.id != this.clothing[i].id){
                newArray.push(this.clothing[i]);
            }
        };

        newArray.push(updatedClothing);

        this.#clothing = newArray;

    }

    // @ts-ignore
    set dataPrivacy(dataPrivacy){
        this.#dataPrivacy = dataPrivacy;
    }
    
    get dataPrivacy(){
            return this.#dataPrivacy;
    }

    // @ts-ignore
    set donationStatus(donationStatus){
        this.#donationStatus = donationStatus;
    }
    
    get donationStatus(){
            return this.#donationStatus;
    }

    // @ts-ignore
    set donor(donor){
        this.#donor = donor;
    } 
    
    // @ts-ignore
    get donor(){
        return this.#donor;
    }
    
}