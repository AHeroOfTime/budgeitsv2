import { LocalStorage } from './storage.svelte';

// all state will go in here - has to be an object for default value?
export let monthlyIncome = new LocalStorage('income', 0);
// export let fixedSpendingList = new LocalStorage('fixed', [])
