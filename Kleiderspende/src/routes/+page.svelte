<script>
    import Register from "../components/Register.svelte";
    let { data } = $props();
</script>

<section class="grid place-items-center gap-y-2 w-full h-2/3  bg-custom-color pb-24 px-5 py-5">
        <div class="xl:w-1/3 md:w-1/2 sm:w-full lg:p-10 p-5">
            <h1 class="text-white text-xl py-2 font-bold">Spende Kleidung an Menschen die sie brauchen.</h1>
            <p class="text-white">Viele Menschen in Krisenregionen sind auf unsere Hilfe angewiesen.
                Du kannst diesen Menschen helfen. Spende guterhaltene Kleidung.
                In welche Region deine Spende gebracht wird, entscheidest <b>DU</b>.
            </p>
        </div>
        <div class="xl:w-1/3 md:w-1/2 sm:w-full grid place-items-center">
            <Register/>
        </div>
</section>

<section>
    <div class="grid md:grid-rows-2 gap-y-2 w-full h-2/3 pb-24 px-5 py-5">
        <h1 class="text-2xl">Unsere Projekte</h1>
        <p>Unten kannst du dich über unsere Projekte informieren.</p>
    </div>
    <div class="grid place-items-center md:grid-cols-3 gap-y-2 w-full h-2/3 pb-24 px-5 py-5">
    {#each data.projects as {slug, title, img}}
        <div class="text-center">
            <img src="{img}" alt="" class="w-48 h-48 md:w-96 md:h-96 bg-gray-600">
            <h1 class="text-xl py-2 underline"><a data-sveltekit-preload-data="false" href="/projects/{slug}">{title}</a></h1>
        </div>
    {/each}
    </div>
</section>

