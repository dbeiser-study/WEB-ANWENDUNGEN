<script>
    import { clothingDonation } from "../../../stores/donationStore";
    import { branchOffices } from "../../../stores/formDataStore"; 

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

<section class="grid grid-cols-2 lg:grid-cols-12 gap-y-2 w-full pb-24 px-5 py-5">
        <h1 class="font-bold  text-xl col-start-5 col-end-7">Zusammenfassung</h1>
        <p class="font-bold  text-xl col-start-7 col-end-10">{new Date().toLocaleString()}</p>
        <h1 class="font-bold col-start-5 col-end-7">Anlieferung</h1>
        <p class="col-start-7 col-end-10">
            {#if clothingDonation.deliveryType == 1}
                Abgabe an Geschäftsstelle
            {:else if clothingDonation.deliveryType == 2}
                Abholung zu Hause
            {:else}
                !FEHLER!
            {/if}
        </p>  
        <h1 class="font-bold col-start-5 col-end-7">Geschäftsstelle</h1>
        <p class="col-start-7 col-end-10">
            {#if clothingDonation.branchOffice !== 0}
                {$branchOffices[clothingDonation.branchOffice].concatAddress()}
            {/if}
        </p>
        <h1 class="font-bold col-start-5 col-end-7">Adresse</h1>
        <p class="col-start-7 col-end-10">
            {#if typeof(clothingDonation.donor) !== 'undefined' && clothingDonation.donor != null}
                {clothingDonation.donor.getAddress()}
            {/if}
        </p>
        <h1 class="font-bold col-start-5 col-end-7">E-Mail</h1>
        <p class="col-start-7 col-end-10">
            {#if typeof(clothingDonation.donor) !== 'undefined' && clothingDonation.donor != null}
                {clothingDonation.donor.emailAddress}
            {/if}
        </p>
        <h1 class="font-bold col-start-5 col-end-7">Unterstütztes Projekt</h1>
        <p class="col-start-7 col-end-10">
            {projectOptions[clothingDonation.project].text}
        </p>
        <h1 class="font-bold col-start-5 col-end-7">Spende</h1>
            {#each clothingDonation.clothing as cloth}
            <p class="col-start-7 col-end-10">
                {#if cloth.value == 1}
                  T-SHIRT
                {:else if cloth.value == 2}
                    HOSE
                {:else if cloth.value == 3}
                    PULLOVER
                {:else if cloth.value == 4}
                    SOCKEN
                {:else if cloth.value == 5}
                    UNTERWÄSCHE
                {:else}
                    !FEHLER!
                {/if}
            </p>
            {/each}
       
        <p class="py-10 col-start-5 col-end-9">
            Solltest du "Abholung zu Hause" ausgewählt haben, senden wir dir den Aboholtermin und weitere Infos per E-Mail zu.
        </p>
        <h1 class="font-bold py-10 text-xl col-start-5 col-end-9 text-green-600">
            Spendenregistrierung erfolgreich.
        </h1>
        
</section>