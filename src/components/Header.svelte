<script>
	import { monthlyIncome, fixedSpendingList, variableSpendingList } from '../lib/store.svelte';

	function resetEverything() {
		if (confirm('Are you sure you want to reset all of your information?')) {
			monthlyIncome.current = 0;
			fixedSpendingList.current.length = 0;
			variableSpendingList.current.length = 0;
		} else {
			return;
		}
	}
</script>

<nav>
	<ul>
		<li><strong>Budge It</strong></li>
	</ul>
	<ul>
		<li><button onclick={resetEverything} class="secondary">Reset</button></li>
	</ul>
</nav>
