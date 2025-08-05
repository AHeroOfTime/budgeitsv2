<script>
	import FixedExpense from './FixedExpense.svelte';
	import { fixedSpendingList } from '$lib/store.svelte';
	import { formatter, deleteExpense } from '$lib/utils';

	let newExpense = $state('');
	let newAmount = $state(0);
	let totalFixed = $derived(
		fixedSpendingList.current.reduce((total, expense) => total + Number(expense.amount), 0)
	);
	let { addFixedExpense, totalSpending = $bindable() } = $props();

	$effect(() => {
		totalSpending = totalFixed;
	});

	function addExpense(e) {
		e.preventDefault();
		if ((newExpense === '') | (newAmount <= 0)) {
			alert(
				'Please fill out the form correctly. You may not leave the expense blank or have an amount equal to or less than 0'
			);
			return;
		}
		addFixedExpense(newExpense, newAmount);
		newExpense = '';
		newAmount = 0;
	}
</script>

<article>
	<header>Fixed Spending</header>
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
		{#if fixedSpendingList.current.length}
			{#each fixedSpendingList.current as item (item.id)}
				<FixedExpense {item} />
			{/each}
		{/if}
	</ul>
	<footer>Total Fixed Spending : {formatter.format(totalFixed)}</footer>
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
