const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

export const offersTop = [{
	id: 1,
	key: 1,
	image: require('../assets/images/hotelOffer.jpg'),
	text: 'Hotel price drop off',
	amount: 199,
	coordinate: {
		latitude: LATITUDE + 0.004,
		longitude: LONGITUDE - 0.004,
	},
}, {
	id: 2,
	key: 2,
	type: 1,
	title: 'Drop off',
	info: [
		'Price drop off',
		'Distance: 2km',
		'Half price'
	],
	amount: 34,
	coordinate: {
		latitude: LATITUDE + 0.008,
		longitude: LONGITUDE - 0.004,
	},
}, {
	id: 3,
	key: 3,
	image: require('../assets/images/hotel2.jpg'),
	text: 'Hotel price drop off',
	amount: 205,
	coordinate: {
		latitude: LATITUDE + 0.004,
		longitude: LONGITUDE - 0.008,
	},
}, {
	id: 4,
	key: 4,
	image: require('../assets/images/hotel3.jpg'),
	text: 'Hotel price drop off',
	amount: 54,
	coordinate: {
		latitude: LATITUDE + 0.0016,
		longitude: LONGITUDE - 0.007,
	},
}, {
	id: 5,
	key: 5,
	type: 1,
	title: 'Cinema',
	info: [
		'Price drop off',
		'Distance: 4km',
		'Best deal'
	],
	amount: 12,
	coordinate: {
		latitude: LATITUDE + 0.003,
		longitude: LONGITUDE - 0.0018,
	},
}];

export const offersFull = [
	{
		title: 'Appointments',
		icon: 'av-timer'
	},
	{
		title: 'Trips',
		icon: 'flight-takeoff'
	},{
		title: 'Proposal',
		icon: 'event-seat'
	},{
		title: 'Proposal',
		icon: 'explore'
	},{
		title: 'Appointments',
		icon: 'av-timer'
	},{
		title: 'Proposal #',
		icon: 'account-balance'
	},{
		title: 'Proposal #',
		icon: '3d-rotation'
	},{
		title: 'Proposal #',
		icon: 'album'
	},{
		title: 'Proposal #',
		icon: 'airline-seat-individual-suite'
	},{
		title: 'Proposal #',
		icon: 'book'
	},{
		title: 'Proposal #',
		icon: 'confirmation-number'
	},{
		title: 'Proposal #',
		icon: 'extension'
	},{
		title: 'Proposal #',
		icon: 'games'
	},{
		title: 'Proposal #',
		icon: 'local-bar'
	},{
		title: 'Proposal #',
		icon: 'local-cafe'
	},{
		title: 'Proposal #',
		icon: 'store'
	}
];