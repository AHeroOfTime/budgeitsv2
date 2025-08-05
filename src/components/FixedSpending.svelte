<script>
	import { Trash2 } from '@lucide/svelte';

	let fixedList = $state([]);
	let newExpense = $state('');
	let newAmount = $state(0);
	let totalFixed = $state(0);

	function addExpense(e) {
		e.preventDefault();
		console.log(newExpense, newAmount);
		console.log($state.snapshot(fixedList));
		if ((newExpense === '') | (newAmount <= 0)) {
			alert(
				'Please fill out the form correctly. You may not leave the expense blank or have an amount equal to or less than 0'
			);
			return;
		}
		fixedList.push({
			id: crypto.randomUUID(),
			expense: newExpense,
			amount: newAmount
		});
		console.log($state.snapshot(fixedList));
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
				<input type="number" name="newAmount" placeholder="Amount" bind:value={newAmount} />
			</label>
		</div>
		<button class="form-button">Add</button>
	</form>

	<div class="break"></div>
	<!-- hardcoded list for now -->
	<ul>
		<li>Expense : Amount</li>
		<button class="delete-button">
			<Trash2 />
		</button>
	</ul>
	<footer>Total Fixed Spending : $0</footer>
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
	.delete-button {
		background-color: #af291d;
		border: #af291d;
	}

	.delete-button:hover {
		background-color: #d93526;
	}

	ul {
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	li {
		list-style-type: none;
	}
</style>
