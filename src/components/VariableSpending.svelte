<script>
	import { Trash } from '@lucide/svelte';
</script>

<article>
	<header>Variable Spending</header>

	<!-- hardcoded list for now -->
	<ul>
		<li>Expense : Amount</li>
		<button class="delete-button">
			<Trash />
		</button>
	</ul>
	<footer>Total Variable Spending : $0</footer>
</article>

<style>
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
