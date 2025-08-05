<script>
	import VariableExpense from './VariableExpense.svelte';
	import { variableSpendingList } from '$lib/store.svelte';
	import { formatter, deleteExpense } from '$lib/utils';

	let newExpense = $state('');
	let newAmount = $state(0);
	let totalVariable = $derived(
		variableSpendingList.current.reduce((total, expense) => total + Number(expense.amount), 0)
	);
	let { addVariableExpense, totalSpending = $bindable() } = $props();

	$effect(() => {
		totalSpending = totalVariable;
	});

	function addExpense(e) {
		e.preventDefault();
		if ((newExpense === '') | (newAmount <= 0)) {
			alert(
				'Please fill out the form correctly. You may not leave the expense blank or have an amount equal to or less than 0'
			);
			return;
		}
		addVariableExpense(newExpense, newAmount);
		newExpense = '';
		newAmount = 0;
	}
</script>

<article>
	<header>Variable Spending</header>
	<form onsubmit={addExpense}>
		<div class="grid">
			<label>
				Expense
				<input type="text" name="newExpense" placeholder="Expense" bind:value={newExpense} />
			</label>
			<label>
				Amount
				<input
					type="number"
					step="0.01"
					name="newAmount"
					placeholder="Amount"
					bind:value={newAmount}
				/>
			</label>
		</div>
		<button class="form-button">Add</button>
	</form>

	<div class="break"></div>

	<ul>
		{#if variableSpendingList.current.length}
			{#each variableSpendingList.current as item (item.id)}
				<VariableExpense {item} />
			{/each}
		{/if}
	</ul>
	<footer>Total Variable Spending : {formatter.format(totalVariable)}</footer>
</article>

<style>
	form {
		margin-bottom: 1rem;
	}
	.break {
		border-bottom: 1px solid #1a1f28;
		margin-bottom: 1rem;
	}
	.form-button {
		width: 100%;
	}
	ul {
		padding: 0;
	}
</style>
