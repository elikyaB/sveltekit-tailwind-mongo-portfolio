<svelte:head>
	<title>Eli B3 Web Dev</title>
	<style>
		@import 'tailwindcss/base';
		@import 'tailwindcss/components';
		@import 'tailwindcss/utilities';
		@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
	</style>
</svelte:head>

<script>
	// import '../app.css'
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<slot/>
<Header />
<main>
	<slot/>
</main>
<Footer />