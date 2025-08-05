<script>
	import { fade } from 'svelte/transition';
	import { Trash2 } from '@lucide/svelte';
	import { variableSpendingList } from '$lib/store.svelte';
	import { formatter, deleteExpense } from '$lib/utils';

	let newExpense = $state('');
	let newAmount = $state(0);
	let { item } = $props();
</script>

<div class="wrapper" transition:fade>
	<li>
		{item ? item.expense : null} : {item ? formatter.format(item.amount) : null}
	</li>
	<button onclick={() => deleteExpense(item)} class="delete-button">
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
