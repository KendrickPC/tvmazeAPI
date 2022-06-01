[TV Maze API](https://www.tvmaze.com/api)

### Step 1: Understand The API

1. The following is my AJAX call:
```js
$("form").on("submit", async function(evt) {
  evt.preventDefault();
  const searchTerm = $("#search-query").val();
  $("search-query").val("");
  const showQueryURL = await axios.get(`http://api.tvmaze.com/search/shows?`, {
    params: {
      q: searchTerm,
    }
  })
  const showQueryID = showQueryURL.data[0].show.id;
  const showQueryURLFromID = await axios.get(`http://api.tvmaze.com/shows/${showQueryID}/episodes`)
  // http://api.tvmaze.com/shows/<show id>/episodes
  console.log(showQueryURLFromID);
})
```

