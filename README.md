[Link to Completed Project](https://kendrickpc.github.io/tvmazeAPI/)

[TV Maze API](https://www.tvmaze.com/api)

[Binding the Show Episodes to Parent Element](https://www.codewall.co.uk/jquery-on-click-function-not-working-after-appending-html/#:~:text=The%20fix%20is%20easy%20enough,the%20parent%20was%20never%20removed)




### Step 1: How I Understand The API

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




