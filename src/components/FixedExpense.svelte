<script>
	import { Trash2 } from '@lucide/svelte';
	import { fixedSpendingList } from '$lib/store.svelte';
	import { formatter } from '$lib/utils';

	let newExpense = $state('');
	let newAmount = $state(0);
	let { addFixedExpense, item } = $props();

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

<div class="wrapper">
	<li>
		{item ? item.expense : null} : {item ? formatter.format(item.amount) : null}
	</li>
	<button class="delete-button">
		<Trash2 />
	</button>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
	.delete-button {
		background-color: #af291d;
		border: #af291d;
	}

	.delete-button:hover {
		background-color: #d93526;
	}

	li {
		list-style-type: none;
	}
</style>
