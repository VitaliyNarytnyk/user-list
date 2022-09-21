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
	company: {
		name: string
	},
	phone: string,
	website: string
}