const API_URL = 'https://odds.p.rapidapi.com/v4/sports';
var keyArr = ['6c1819b5d5msh224df4793f36756p19b1cfjsnef2c211706bb', 'fedebbc7demsh1c790ae5a713c61p1837b1jsnc32cc7e8f148', '6b55b80c68mshdbfe1a445d77d04p165c27jsncdca01d6fff9']

	export async function getSports() {
		const response = await fetch(API_URL, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function getOddsBySport(sport, region, oddsFormat, market) {
		const response = await fetch(`${API_URL}/${sport}/odds?regions=${region}&oddsFormat=${oddsFormat}&markets=${market}&dateFormat=iso`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function getOddsByRegion(region) {
		const response = await fetch(`${API_URL}/odds?regions=${region}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function getSR(sport, region) {
		const response = await fetch(`${API_URL}/${sport}/odds?regions=${region}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function getSRM (sport, region, market) {
		const response = await fetch(`${API_URL}/${sport}/odds?regions=${region}&markets=${market}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function getSRMO(sport, region, market, oddsFormat) {
		const response = await fetch(`${API_URL}/${sport}/odds?regions=${region}&oddsFormat=${oddsFormat}&markets=${market}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function getSRMOD(sport, region, market, oddsFormat, date) {
		const response = await fetch(`${API_URL}/${sport}/odds?regions=${region}&oddsFormat=${oddsFormat}&markets=${market}&dateFormat=${date}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function  scoresBySport(sport) {
		const response = await fetch(`${API_URL}/${sport}/scores`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};
	
	
	export async function scoresByDays(sport, days) {
		const response = await fetch(`${API_URL}/${sport}/scores?daysFrom=${days}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'odds.p.rapidapi.com',
				'x-rapidapi-key': keyArr[Math.floor(Math.random() * keyArr.length)]
			}
		});
		const data = await response.json();
		return data;
	};