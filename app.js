// Create an APP that uses an API to get data and append it to the DOM.

// Use an Async function using try/catch that returns a promise 

async function searchArtist(artist) { //this function searches for artist in API
  const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    let response = await axios.get(url)
    let data = response.data.artists[0]
    artistData(data)
    console.log(data)
    return response
  } catch (error) {
    console.error(error)
    let errorMessage = document.createElement('h1')
    errorMessage.textContent = 'Sorry this artist isn\'t available. Try another one.'
    document.body.append(errorMessage)
  }
}



function artistData(data) {        //this function takes the Artist's info and appends it to the DOM
  const dataContainer = document.querySelector('#artist-data') // we are making changes to this div

  let artistName = document.createElement('h1')
  artistName.textContent = data.strArtist
  dataContainer.append(artistName)

  if (data.strArtistClearart) {
    let artistImg = document.createElement('img')
    artistImg.src = data.strArtistClearart
    dataContainer.append(artistImg)
  }

  if (!data.strArtistClearart || !data.strArtistBanner) {
    let noPic = document.createElement('h2')
    noPic.textContent = 'Sorry, no image available'
    dataContainer.append(noPic)
  }

  let artistGenre = document.createElement('h2')
  artistGenre.textContent = data.strGenre
  dataContainer.append(artistGenre)

  if (data.strWebsite) {
    let artistWebsite = document.createElement('a')
    let webLinkText = document.createTextNode('Website')
    artistWebsite.append(webLinkText)
    artistWebsite.title = 'Website'
    artistWebsite.href = `http://${data.strWebsite}` 
    dataContainer.appendChild(artistWebsite)
  }

  let artistBio = document.createElement('p')
  artistBio.textContent = data.strBiographyEN
  dataContainer.append(artistBio)


  // //Conditionals for missing info

  if (data.strTwitter) {
    let twitterLink = document.createElement('a')
    let webLinkText = document.createTextNode('Twitter')
    twitterLink.append(webLinkText)
    twitterLink.title = 'Twitter'
    twitterLink.href = `http://${data.strTwitter}`  
    dataContainer.append(twitterLink)
  }

  if (data.strFacebook) {
    let facebookLink = document.createElement('a')
    let webLinkText = document.createTextNode('Facebook')
    facebookLink.append(webLinkText)
    facebookLink.title = 'Facebook'
    facebookLink.href = `http://${data.strFacebook}` 
    dataContainer.append(facebookLink)
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

