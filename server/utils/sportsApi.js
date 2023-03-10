var keyArr = ['2ca9e05eb2mshaad55f69b7a7e24p152fdajsn1f4c0544ad64',
  'c1a48b6beemsh933a4cb8cf03335p126b55jsnd037988b766f', '92892adfc3msh6c3519920a0dd57p1c0fcbjsn891d97cf349d', 'eaaa813926msh7bc3448e9439517p1e2fffjsn1e58d3a059e7']

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': keyArr[1],
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

fetch('https://odds.p.rapidapi.com/v4/sports?all=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));