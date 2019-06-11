(function() {

    const postsApi = "https://heroku-fake-rest-api.herokuapp.com/posts"

    fetch(postsApi)
        .then((response) => response.json())
        .then(function(getData) {
            console.log(getData);
    })

    axios.get(postsApi, {
        params: {
            _sort: "asc",
            _page: "2",
            _limit: "20"
        }
    }).then((response) => { console.log(response); })
})();