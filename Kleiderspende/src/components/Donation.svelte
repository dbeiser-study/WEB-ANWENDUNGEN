<script>
    import { clothingDonation } from "../stores/donationStore.js";
    import ClothingSelect from "./ClothingSelect.svelte";

    clothingDonation.donationStatus = 4;
    let clothingList = $state(clothingDonation.clothing);
    let donationStatus = $state(clothingDonation.donationStatus);
    let project = $state(clothingDonation.project);

    $effect(() =>{
        clothingDonation.clothing = clothingList;
    })

    function addClothingSelect(){        
        clothingList.push({'id': Date.now(), 'value': 0});
    }
    //@ts-ignore
    function remove(id){
        console.log("ICH LÖSCHE!")
        clothingList = clothingList.filter((clothing) => clothing.id !== id)
        //console.log(clothingList)
        //console.log(clothingDonation.clothing)
    }


</script>

<div class="w-full">
    <div id="row_container" class="grid row-auto gap-10">
        {#each clothingList as clothing }
            <ClothingSelect id={clothing.id} bind:value={clothing.value} onDelete={remove}/>
        {/each}
        <div id="add_more">
            <div class="w-full bg-custom-color h-10 text-white md:col-start-3 md:col-end-5 grid place-items-center">
                <button class="h-full w-full grid place-items-center" onclick="{addClothingSelect}">mehr</button>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 h-16">
                {#if donationStatus != 1}
                    <div class="w-full bg-black h-10 text-white md:col-start-1 md:col-end-3 grid place-items-center ">
                        <a href="/spenden/project" class="h-full w-full grid place-items-center">zurück</a>
                    </div>
                {/if}
                {#if project != 0}
                    <div class="w-full bg-custom-color h-10 text-white md:col-start-3 md:col-end-5 grid place-items-center ">
                        <a href="/spenden/summary" class="h-full w-full grid place-items-center">weiter</a>
                    </div>
                {:else}
                    <div class="w-full bg-gray-200 h-10 text-white md:col-start-3 md:col-end-5 grid place-items-center">
                        <span class="h-full w-full cursor-default grid place-items-center"><span>weiter</span></span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>    