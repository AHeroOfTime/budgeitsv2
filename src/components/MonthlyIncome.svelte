<script>
	import { monthlyIncome } from '../lib/store.svelte';
	let newIncome = $state();

	function submitIncome(e) {
		e.preventDefault();
		monthlyIncome.current = newIncome;
		newIncome = '';
	}
</script>

<article>
	<form onsubmit={submitIncome}>
		<label>
			Monthly Income
			<input name="income" type="number" bind:value={newIncome} placeholder="Monthly Income" />
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
