<script>
	import Header from '../components/Header.svelte';
	import MonthlyIncome from '../components/MonthlyIncome.svelte';
	import FixedSpending from '../components/FixedSpending.svelte';
	import VariableSpending from '../components/VariableSpending.svelte';
	import { monthlyIncome } from '../lib/store.svelte';
	import { fixedSpendingList, variableSpendingList } from '$lib/store.svelte';
	import { formatter } from '$lib/utils';

	let totalFixedProp = $state(0);
	let totalVariableProp = $state(0);

	let totalSpending = $derived(totalFixedProp + totalVariableProp);
	let disposableIncome = $derived(monthlyIncome.current - totalSpending);

	function addFixedExpense(newExpense, newAmount) {
		fixedSpendingList.current.push({
			id: crypto.randomUUID(),
			expense: newExpense,
			amount: newAmount,
			type: 'fixed'
		});
	}

	function addVariableExpense(newExpense, newAmount) {
		variableSpendingList.current.push({
			id: crypto.randomUUID(),
			expense: newExpense,
			amount: newAmount,
			type: 'variable'
		});
	}

	function checkDisposableIncome() {
		const getSpan = document.getElementById('disposable-income');
		if (disposableIncome === 0) {
			getSpan.style.setProperty('--value-color', '#c2c7d0');
		} else if (disposableIncome > 0) {
			getSpan.style.setProperty('--value-color', '#398712');
		} else if (disposableIncome < 0) {
			getSpan.style.setProperty('--value-color', '#D93526');
		}
	}

	$effect(() => checkDisposableIncome());
</script>

<div class="container">
	<Header />
	<MonthlyIncome />
	<div class="grid">
		<FixedSpending {addFixedExpense} bind:totalSpending={totalFixedProp} />
		<VariableSpending {addVariableExpense} bind:totalSpending={totalVariableProp} />
	</div>

	<footer>
		<ul>
			<li>Monthly Income : {formatter.format(monthlyIncome.current)}</li>
			<li>Total Spending : {formatter.format(totalSpending)}</li>
			<li>
				Disposable Income : <span id="disposable-income"
					>{formatter.format(monthlyIncome.current - totalSpending)}</span
				>
			</li>
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

	#disposable-income {
		color: var(--value-color, #c2c7d0);
	}
</style>
