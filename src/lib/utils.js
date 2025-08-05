import { fixedSpendingList, variableSpendingList } from './store.svelte';

// Using Intl.NumberFormat for US Dollar in US English locale
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

// delete expense function
export function deleteExpense(expense) {
	if (expense.type === 'fixed') {
		const index = fixedSpendingList.current.findIndex((item) => item.id === expense.id);
		fixedSpendingList.current.splice(index, 1);
	} else if (expense.type === 'variable') {
		const index = variableSpendingList.current.findIndex((item) => item.id === expense.id);
		variableSpendingList.current.splice(index, 1);
	} else {
		alert('Something went wrong');
		return;
	}
}
