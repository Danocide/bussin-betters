const API_URL = 'https://odds.p.rapidapi.com/v4/sports';
var keyArr = ['2ca9e05eb2mshaad55f69b7a7e24p152fdajsn1f4c0544ad64',
  'c1a48b6beemsh933a4cb8cf03335p126b55jsnd037988b766f', '92892adfc3msh6c3519920a0dd57p1c0fcbjsn891d97cf349d', 'eaaa813926msh7bc3448e9439517p1e2fffjsn1e58d3a059e7']

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