<script>
    let { data } = $props();
</script>

<section class="grid place-items-center gap-y-2 w-full h-2/3 pb-24 px-5 py-5">
    <div class="xl:w-1/3 md:w-1/2 sm:w-full lg:p-10 p-5">
        <h1 class="text-3xl">{data.post.title}</h1>
        <img class="py-4 " src="{data.post.image}" alt="">
        <p>{data.post.content}</p>
    </div>
</section>