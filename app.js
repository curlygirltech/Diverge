// Create an APP that uses an API to get data and append it to the DOM.

// Use an Async function using try/catch that returns a promise 

async function searchArtist(artist) { //this function searches for artist in API
  const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    let response = await axios.get(url)
    let data = response.data.artists[0]
    console.log(data)  
    return response
  } catch (error) {
    console.error(error)
    alert('Sorry, that artist is not available')
  }
}
searchArtist('Drake')


function artistData(data) {        //this function takes the Artist's info and appends it to the DOM
  const dataContainer = document.querySelector('#artist-data') // we are making changes to this div

  
    const artistInfo = `
    <h1 class="">${data.strArtist}</h1>
    <img src= "${data.strArtistClearart}" alt="Artist pic" class = "Artist-pic"/>
    <h2>${data.strGenre}</h2>
    <p>${data.strWebsite}</p>
    <a id='twitter-link' href='http://${data.strTwitter}' target="_blank">Twitter</a>
    <a id='facebook-link' href='http://${data.strFacebook}' target="_blank">Facebook</a>   
    <p>${data.strBiographyEN}</p>  
  `
    dataContainer.insertAdjacentHTML('beforeend', artistInfo)
  let twitter = `${data.strTwitter}`
  console.log(twitter)
    // if (twitter === null) {
    //    dataContainer
    // }
  
}  
    
