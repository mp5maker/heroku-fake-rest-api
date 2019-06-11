(function() {

    const postsApi = "https://heroku-fake-rest-api.herokuapp.com/posts"
    fetch(postsApi)
        .then((response) => response.json())
        .then(function(getData) {
            console.log(getData);
    })

})();