// Create an APP that uses an API to get data and append it to the DOM.

// Use an Async function using try/catch that returns a promise 

async function searchArtist(artist) { //this function searches for artist in API
  const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    let response = await axios.get(url)
    let data = response.data.artists[0]
    console.log(data)
    artistData(data)
    if (data === null) {
      let errorMessage = document.querySelector('#artistData')
      errorMessage.createTextNode('Sorry this artist isn\'t available. Try another one.' ) 
      
    }return response
  } catch (error) {
    console.error(error)
    alert('Sorry, that artist is not available')
  }
}



function artistData(data) {        //this function takes the Artist's info and appends it to the DOM
  const dataContainer = document.querySelector('#artist-data') // we are making changes to this div

  
    const artistInfo = `
    <h1 class="">${data.strArtist}</h1>
    <img class="artist-img" src= "${data.strArtistClearart}" alt="Artist pic" class = "Artist-pic"/>
    <h2>${data.strGenre}</h2>
    <p>${data.strWebsite}</p>
    <a class='social-link' href='http://${data.strTwitter}' target="_blank">Twitter</a>
    <a class='social-link' href='http://${data.strFacebook}' target="_blank">Facebook</a>   
    <p>${data.strBiographyEN}</p>  
  `
  dataContainer.insertAdjacentHTML('beforeend', artistInfo)

  //Conditionals for missing info
  if (data.strTwitter === null || data.strFacebook === null) {  
    let childNode = document.querySelectorAll('.social-link')
    console.log(childNode)
    dataContainer.removechild(childNode)
  }
  if (data.strArtistClearart === null) {
    let nullImg = document.querySelector('.artist-img')
    nullImg.replaceChild(data.strArtistBanner, data.strArtistClearart)
  }
}


const handleSubmit = (e) => {       //this function is an event handler attached to a form  
  e.preventDefault()
  const searchValue = document.querySelector('#search-bar').value  //take the value of what was entered in the search and store  
  clearArtist()
  searchArtist(searchValue)
  document.querySelector('#search-bar').value = ""    
}

// event handler
const button = document.querySelector('#artist-search') 
button.addEventListener('submit', handleSubmit)


// Make a function to remove Previous Data and clear search bar
function clearArtist() {
  const artistContainer = document.querySelector('#artist-data')
  while (artistContainer.lastChild) {
    artistContainer.removeChild(artistContainer.lastChild)
  }
}

console.log(new Date())