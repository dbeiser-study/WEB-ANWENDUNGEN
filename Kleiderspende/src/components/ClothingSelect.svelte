<script>
    import { clothingDonation } from "../stores/donationStore.js";
    clothingDonation.donationStatus = 6;

    // @ts-ignore
    let {value = $bindable(), id = $bindable(), onDelete} = $props();;

    let clothingOptions = [    
        {
            value: 0,
            text: "auswählen"
        },
        {
            value: 1,
            text: "T-Shirt"
        },
        {
            value: 2,
            text: "Hose"
        },
        {
            value: 3,
            text: "Pullover"
        },
        {
            value: 4,
            text: "Socken"
        },
        {
            value: 5,
            text: "Unterwäsche"
        }
    ]
    //@ts-ignore
    function handleRemove(){
        onDelete(id)
    }

</script>

{#if typeof(clothingDonation.clothing.find((cloth) => cloth.id === id)) != "undefined"}
<div>
    <form>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1 py-10">
            <div>
                <span>Kleidungsstück</span>
            </div>
            <div class="md:col-start-2 md:col-end-4 flex flex-row content-between">

                <select name="donation" bind:value id={id} class="w-full">
                    {#each clothingOptions as option}
                        <option value={option.value}>{option.text}</option>
                    {/each}
                </select>
            </div>
            {#if clothingDonation.clothing.length > 1}
            <div class="w-full bg-black h-10 text-white md:col-start-2 md:col-end-4 grid place-items-center ">
                <button id={id} class="grid place-items-center" onclick={handleRemove}>löschen</button>
            </div>
            {/if}
        </div>  
    </form>
</div>
{/if}