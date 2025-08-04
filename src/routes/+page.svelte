<script>
	import Header from '../components/Header.svelte';
	import MonthlyIncome from '../components/MonthlyIncome.svelte';
	import { monthlyIncome } from '../lib/store.svelte';
	import { formatter } from '$lib/utils';
</script>

<div class="container">
	<Header />
	<MonthlyIncome />

	<footer>
		<ul>
			<li>Monthly Income : {formatter.format(monthlyIncome.current)}</li>
			<li>Total Spending:</li>
			<li>Disposable Income:</li>
		</ul>
	</footer>
</div>

<style>
	ul {
		padding: 0;
	}

	li {
		list-style-type: none;
	}
</style>
