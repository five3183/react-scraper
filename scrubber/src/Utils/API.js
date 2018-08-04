const submit = document.getElementById("search")

submit.addEventListener('click', (event) => {
	event.preventDefault()
	console.log("CLICK")
	let topic = document.querySelector('#topic').value
	let startYear = document.querySelector('#start-year').value
	let endYear = document.querySelector('#end-year').value

	newsArray = []

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
	url += '?' + $.param({
		'api-key': "4e6a18908e354053b2e7120e5811b61a",
		'q': topic,
		'begin_date': startYear,
		'end_date' : endYear
	})

	$.ajax({
	url: url,
	method: 'GET',
	}).done(function(result) {
		newsArray.push(result.response.docs);
			for (let x = 0; x < 5; x++){
				let headline = newsArray[0][x].headline.main
				let urlDisplay = newsArray[0][x].web_url

				news = $(".articles")
				news.append("<tr>")
				news.append("<td class = 'col-md-10'><a href=" + urlDisplay + " " + "target='_blank'" + "class = 'news-link'>" + headline)
				news.append("<td class='col-md-2'><button type='button' class='btn btn-outline-success'>SAVE ME</button></td>")
			}
	})
})
