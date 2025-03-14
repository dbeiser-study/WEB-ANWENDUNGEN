<script>
    import { clothingDonation } from "../stores/donationStore.js";
    import { branchOffices } from "../stores/formDataStore.js"

    let deliveryType = $state(clothingDonation.deliveryType);
    let branchOffice = $state(clothingDonation.branchOffice);
    let donationStatus = $state(1);
    
    $effect(() => {
        clothingDonation.deliveryType = deliveryType;
        clothingDonation.branchOffice = branchOffice;
        clothingDonation.donationStatus = donationStatus;
    });

    


    let deliveryOptions = [
        {
            value: 0,
            text: "auswählen"
        },
        {
            value: 1,
            text: "Geschäftsstelle"
        },
        {
            value: 2,
            text: "Abholung"
        }
    ]

    
    // @ts-ignore
    function resetBranchOffice(event){
        if(event.target.value == 2){
            branchOffice = 0;
        }
        
    }


</script>

<div class="w-full">
    <div class="grid grid-rows-3 gap-10">
        <div>
            <div class="grid grid-cols-3 gap-1 py-10">
                <div>
                    <span>Spendenanlieferung*</span>
                </div>
                <div class="col-start-2 col-end-4">
                    <select name="delivery" id="delivery" bind:value={deliveryType} class="w-full" onchange="{resetBranchOffice}">
                        {#each deliveryOptions as option}
                            {#if deliveryType == option.value}
                                <option value={option.value} selected>{option.text}</option>
                            {:else}
                                <option value={option.value}>{option.text}</option>
                            {/if}
                        {/each}
                    </select>
                </div>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-3 gap-1 py-10 h-16">
                {#if deliveryType == 1}
                    <div>
                        <span>Geschäftsstelle*</span>
                    </div>
                    <div class="col-start-2 col-end-4">
                        <select name="branchOffice" id="branchOffice" bind:value={branchOffice} class="w-full">
                            {#each $branchOffices as option}
                                {#if branchOffice == option.locationId}
                                    <option value={option.locationId} selected>{option.concatAddress()}</option>
                                {:else}
                                    <option value={option.locationId}>{option.concatAddress()}</option>
                                {/if}
                            {/each}
                        </select>
                    </div>   
                {/if}
            </div>
        </div>
        <div>
            <div class="grid grid-cols-4 gap-10 py-10 h-16">
                {#if donationStatus != 1}
                    <div class="w-full bg-black h-10 text-white col-start-1 col-end-3 grid place-items-center ">
                        <a href="/" class="h-full w-full grid place-items-center">zurück</a>
                    </div>
                {/if}
                {#if deliveryType == 1 && branchOffice != 0}
                    <div class="w-full bg-custom-color h-10 text-white col-start-3 col-end-5 grid place-items-center ">
                        <a href="/spenden/project" class="h-full w-full grid place-items-center">weiter</a>
                    </div>
                {:else if deliveryType != 1 && deliveryType != 0}
                    <div class="w-full bg-custom-color h-10 text-white col-start-3 col-end-5 grid place-items-center ">
                        <a href="/spenden/personal_data" class="h-full w-full grid place-items-center"><span>weiter</span></a>
                    </div>
                {:else}
                    <div class="w-full bg-gray-200 h-10 text-white col-start-3 col-end-5 grid place-items-center">
                        <span class="h-full w-full cursor-default grid place-items-center"><span>weiter</span></span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>    