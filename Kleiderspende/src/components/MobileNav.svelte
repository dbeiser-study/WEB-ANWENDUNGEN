<script>
 let menuVisible = $state(false);
// @ts-ignore
function toggleMenu(){
   
    if(!menuVisible){
        menuVisible = true;
    }else{
        menuVisible = false;
    }
}
</script>

<nav class="lg:hidden bg-custom-color w-full grid grid-cols-6 gap-4 px-10 py-5" >
	<div class="col-2 flex items-center justify-center">
		<div class="relative text-center">
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-m font-semibold text-white"><a href="/">Wärme Spenden</a></div>
			<span class="material-symbols-outlined text-6xl text-red-600">
				favorite
			</span>
		</div>
	</div>
	<div class="col-start-3 col-end-7 gap-4 p-4 text-white flex justify-end">
        <div class="relative">
            <button onclick="{toggleMenu}">
                <span id="mobileBurger" class="material-symbols-outlined text-white text-6xl">
                    menu
                </span>
            </button>
            {#if menuVisible}
            <div class="absolute top-12 right-2 p-5 bg-white whitespace-nowrap text-gray-700 border drop-shadow-sm">
                <ul>
                    <li class="py-2"><a href="/" onclick="{toggleMenu}">Home</a></li>
                    <li class="py-2"><a href="/organisation" onclick="{toggleMenu}">Organistation</a></li>
                    <li class="py-2"><a href="/faq" onclick="{toggleMenu}">FAQ</a></li>
                    <li class="py-2"><a href="/spenden/delivery" onclick="{toggleMenu}">Spenden</a></li>
                </ul>
            </div>
            {/if}
        </div>
	</div>
</nav>

<style>
    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
    }
</style>