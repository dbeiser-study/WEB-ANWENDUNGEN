<script>
	import '../app.css';
	import DesktopNav from '../components/DesktopNav.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();

</script>

<DesktopNav/>
<MobileNav/>

<main class="flex-grow">
	{@render children()}
</main>

<Footer/>
