"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");

/*
$("form").on("submit", async function(evt) {
  evt.preventDefault();
  const searchTerm = $("#search-query").val();
  $("search-query").val("");
  const showQueryURL = await axios.get(`http://api.tvmaze.com/search/shows?`, {
    params: {
      q: searchTerm,
    }
  })
  console.log(showQueryURL)
  const showQueryID = showQueryURL.data[0].show.id;
  const showQueryURLFromID = await axios.get(`http://api.tvmaze.com/shows/${showQueryID}/episodes`)
  // http://api.tvmaze.com/shows/<show id>/episodes
  console.log(showQueryURLFromID);
})
*/

// https://api.tvmaze.com/search/shows?q=girls

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */
 

async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const showData = await axios.get('http://api.tvmaze.com/search/shows?', {
    params: {
      q: term,
    }
  })
  // console.log(showData.data[0].show.image === null);
  const showName = showData.data[0].show.name; 
  const showSummary = showData.data[0].show.summary
  const showID = showData.data[0].show.id
  const showImage = showData.data[0].show.image;
  
  // const showImage = showData.data[0].show.image.medium === "null" ?  : showData.data[0].show.image.medium
  
  return [
    {
      id: showID,
      name: showName,
      summary: showSummary,
      image: !showImage ? "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png" : showImage.medium,
    }
  ]
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();



  for (let show of shows) {
    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src="${show.image}" 
              alt="${show.name}" 
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
    $showsList.append($show);  
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#search-query").val()
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) { 
  const showData = await axios.get('http://api.tvmaze.com/search/shows?', {
    params: {
      q: term,
    }
  })



}

/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
