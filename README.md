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



2. Template for populateEpisodes(episodes);

```js
function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src=${show.image} 
              alt="Bletchly Circle San Francisco" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);
    $showsList.append($show);  }
}
```

