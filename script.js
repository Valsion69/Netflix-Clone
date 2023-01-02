/* 
🌟 APP: Make Netflix

Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions and their URL'S you must create  👇
========================================

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }
  
  // ** Helper function that makes dynamic API calls **
  function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down 
    fetch(`${url}`)
            .then(respone => respone.json())
            .then(response =>{
              const data = response;
              showMovies(data, dom_element, path_type)
              // const path_type = data.results[0].backdrop_path
              // getMovieTrailer(`${data.results[0].backdrop_path}`)
              // console.log(data)

              return response
              
            })
            
    // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
  }
  fetchMovies()
  //  ** Function that displays the movies to the DOM **
  const showMovies = (movies, dom_element, path_type) => {
    // Create a variable that grabs id or class  
    // console.log(`this is ${path_type}` )
    const trending = document.querySelector(dom_element)
    let movie =Object.values(movies.results).map(single =>{
      let imageElement = document.createElement('img')

          imageElement.setAttribute('data-id', single.id)
          console.log(single.id)
          console.log(single[path_type])
          imageElement.src = `https://image.tmdb.org/t/p/original${single[path_type]}`
          
          trending.appendChild(imageElement)
        console.log(single)
      return single

    })
    // console.log(movie)
    
  //   for (const movie in movies.results) {
  //     console.log(movie)
  //     let imageElement = document.createElement('img')
  //     imageElement.setAttribute('data-id', movie.id)
  //     console.log(movie.path_type)
  //     // imageElement.src = `https://image.tmdb.org/t/p/original${movie.results[path_type]}`
      
  //     trending.appendChild(imageElement)
  // }
    // Loop through object


    }
  
  
  // ** Function that fetches Netflix Originals **
  function getOriginals() {

    const url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

    fetchMovies(url, ".original__movies","poster_path")
  }
  // ** Function that fetches Trending Movies **
  function getTrendingNow() {

    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
    fetchMovies(url, "#trending", "backdrop_path")
  
  }
  // ** Function that fetches Top Rated Movies **
  function getTopRated() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

    fetchMovies(url, "#top_rated", "backdrop_path")
  }
  
  // ** BONUS **
  
  // ** Fetches URL provided and returns response.json()
  async function getMovieTrailer(id) {
    const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
        const respone = await fetch(`${URL}`)
        const data = await respone.json()
        
  }
  
  // // ** Function that adds movie data to the DOM
  // const setTrailer = trailers => {
  //   // Set up iframe variable to  hold id of the movieTrailer Element
  //   // const iframe
  //   // Set up variable to select .movieNotFound element
  //   // const movieNotFound
  
  //   // If there is a trailer add the src for it
  //   if (trailers.length > 0) {
  //     // add d-none class to movieNotFound and remove it from iframe
  
  //     // add youtube link with trailers key to iframe.src
  //   } else {
  //     // Else remove d-none class to movieNotfound and ADD it to iframe
  
  //   }
  // }


  
  
  
  
  