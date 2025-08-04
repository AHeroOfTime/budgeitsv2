// Using Intl.NumberFormat for US Dollar in US English locale
export const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});
