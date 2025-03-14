<script>
    import { clothingDonation } from "../stores/donationStore.js";

    clothingDonation.donationStatus = 3;
    let donationStatus = $state(clothingDonation.donationStatus);
    let project = $state(clothingDonation.project);

    $effect(() => {
        clothingDonation.project = project;
    })

    let projectOptions =[
        {
            value: 0,
            text: "auswählen"
        },
        {
            value: 1,
            text: "Projekt 1"
        },
        {
            value: 2,
            text: "Projekt 2"
        },
        {
            value: 3,
            text: "Projekt 3"
        },
        {
            value: 4,
            text: "freie Verfügung"
        }
    ]
        
</script>

<div class="w-full">
    <div class="grid grid-rows-3 gap-10">
        <div>
            <div class="grid grid-cols-3 gap-1 py-10">
                <div>
                    <span>Projekt*</span>
                </div>
                <div class="col-start-2 col-end-4">
                    <select name="delivery" id="delivery" bind:value={project} class="w-full">
                        {#each projectOptions as option}
                            {#if project == option.value}
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
            <div class="grid grid-cols-4 gap-10 py-10 h-16">
                {#if donationStatus != 1}
                    <div class="w-full bg-black h-10 text-white col-start-1 col-end-3 grid place-items-center ">
                        <a href="/spenden/personal_data" class="h-full w-full grid place-items-center">zurück</a>
                    </div>
                {/if}
                {#if project != 0}
                    <div class="w-full bg-custom-color h-10 text-white col-start-3 col-end-5 grid place-items-center ">
                        <a href="/spenden/donation" class="h-full w-full grid place-items-center">weiter</a>
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