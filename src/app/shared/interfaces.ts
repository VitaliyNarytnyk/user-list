export interface User {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		city: string,
		geo: {
			street: string,
			zipcode: string
		}
	},
	phone: string,
	website: string
}