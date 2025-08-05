<script>
	import Header from '../components/Header.svelte';
	import MonthlyIncome from '../components/MonthlyIncome.svelte';
	import FixedSpending from '../components/FixedSpending.svelte';
	import VariableSpending from '../components/VariableSpending.svelte';
	import { monthlyIncome } from '../lib/store.svelte';
	import { fixedSpendingList } from '$lib/store.svelte';
	import { formatter } from '$lib/utils';

	function addFixedExpense(newExpense, newAmount) {
		fixedSpendingList.current.push({
			id: crypto.randomUUID(),
			expense: newExpense,
			amount: newAmount
		});
	}
</script>

<div class="container">
	<Header />
	<MonthlyIncome />
	<div class="grid">
		<FixedSpending {addFixedExpense} />
		<VariableSpending />
	</div>

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
