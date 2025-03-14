<script>
    import { clothingDonation } from "../stores/donationStore";
    import { donor } from "../stores/donorStore";
    import { emailPattern } from "../stores/emailPatternStore";
    import { branchOffices } from "../stores/formDataStore";

    let postCodeMatch = $state(false);

    let donationStatus = $state(2);
    let firstName = $state(donor.firstName);
    let surname = $state(donor.surname);
    let street = $state(donor.street);
    let postCode = $state(donor.postCode);
    let city = $state(donor.city);
    let emailAddress = $state(donor.emailAddress);
    let dataPrivacy = $state(clothingDonation.dataPrivacy);
    

    $effect(() => {
        checkPostCode();
        donor.firstName = firstName;
        donor.surname = surname
        donor.street = street;
        donor.postCode = postCode;
        donor.city = city;
        donor.emailAddress = emailAddress;
        clothingDonation.dataPrivacy = dataPrivacy;
        clothingDonation.donor = donor;
       
    });

    function checkPostCode(){
       
        if(postCode.length >= 2){

            for(let i=0; i < $branchOffices.length; i++){

                if($branchOffices[i].postCode.substring(0,2) == postCode.substring(0,2)){
                    postCodeMatch = true;
                    break;
                }      
            }
        } else{
            postCodeMatch = false; 
        }
         
    }
   
</script>

<div class="w-full">
    <div class="grid grid-rows-1 gap-1">
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div>
                    <span>Vorname*</span>
                </div>
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <input class="w-full" bind:value={firstName} id="donorFirstName">
                </div>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                    <div>
                        <span>Nachname*</span>
                    </div>
                    <div class="col-span-1 md:col-start-2 md:col-end-4">
                        <input class="w-full" bind:value={surname} id="donorSurname">
                    </div>   
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div>
                    <span>Straße*</span>
                </div>
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <input class="w-full" bind:value={street} id="donorStreet">
                </div>   
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div>
                    <span>Postleitzahl*</span>
                </div>
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <input class="w-full" bind:value={postCode} id="donorPostCode">
                </div>   
            </div>
        </div>
        {#if postCodeMatch}
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <p class="text-red-600">
                       Deine Postleitzahl ist in der Nähe einer Geschäftsstelle,
                       bring deiner Bestellung doch bei uns persönlich vorbei.
                    </p>
                </div>
            </div>
        </div>
        {/if}
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div>
                    <span>Stadt*</span>
                </div>
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <input class="w-full" bind:value={city} id="donorCity">
                </div>   
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div>
                    <span>E-Mail*</span>
                </div>
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <input class="w-full" bind:value={emailAddress} id="donorEmail">
                </div>   
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1">
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    {#if $emailPattern.test(emailAddress) == false && emailAddress.length > 0}
                    <p class="text-red-600">
                        E-Mail ungültig.
                    </p>
                    {/if}
                </div>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-3 py-1 h-16">
                <div class="col-span-1 md:col-start-2 md:col-end-4">
                    <p>
                        Hiermit bestätigte ich, dass ich die <a href="/general/data_privacy" class="text-custom-color underline">Datenschutzvereinbarung</a> gelesen habe und sie akzeptiere.
                        <span><input type="checkbox" class="h-4 w-4" bind:checked={dataPrivacy} id="dataPrivacy"></span>
                    </p>
                </div>
            </div>
        </div>
        <div>
           <div class="grid grid-cols-1 md:grid-cols-4 gap-5 py-1 h-16">
                {#if donationStatus != 1}
                    <div class="w-full bg-black h-10 text-white grid place-items-center py-1 md:col-start-1 md:col-end-3">
                        <a href="/spenden/delivery" class="h-full w-full grid place-items-center">zurück</a>
                    </div>
                {/if}
                {#if donor.formIsComplete() == true && dataPrivacy == true}
                    <div class="w-full bg-custom-color h-10 text-white grid place-items-center md:col-start-3 md:col-end-5">
                        <a href="/spenden/project" class="h-full w-full grid place-items-center">weiter</a>
                    </div>
                {:else}
                    <div class="w-full bg-gray-200 h-10 text-white place-items-center py-1 md:col-start-3 md:col-end-5">
                        <span class="h-full w-full cursor-default grid place-items-center">weiter</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>    