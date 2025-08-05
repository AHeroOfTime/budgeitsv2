<script>
	import { monthlyIncome } from '../lib/store.svelte';
	let newIncome = $state();

	function submitIncome(e) {
		e.preventDefault();
		if (newIncome <= 0) {
			alert('You must enter valid income greater than 0');
			return;
		}
		monthlyIncome.current = newIncome;
		newIncome = '';
	}
</script>

<article>
	<form onsubmit={submitIncome}>
		<label>
			Monthly Income
			<input name="income" type="number" bind:value={newIncome} placeholder="Enter income..." />
		</label>
		<div>
			<button>Submit</button>
		</div>
	</form>
</article>

<style>
	form {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
