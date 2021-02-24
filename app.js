// const apiAddress = 'theaudiodb.com/api/v1/json/1/'


async function getMusic(artist) {
  const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    let response = await axios.get(url)
    let data = response.data.artists[0]
    console.log(data)
    fetchData(data)
    return response
  } catch (error) {
    console.error(error) 
  }
  
  }
// getMusic('drake')

function fetchData (data) {
  const dataContainer = document.querySelector('#artist-data')
  const artistInfo = `
  <h1>${data.strArtist}</h1>
  <img src= "${data.strArtistClearart}" alt="Artist pic" class = "Artist-pic"/>
  <h2>${data.strGenre}</h2>
  <p>${data.strWebsite}</p>
  <p>${data.strTwitter}</p>
  <p>${data.strFacebook}</p>   
   `
  console.log(artistInfo)
  dataContainer.insertAdjacentHTML('beforeend', artistInfo)
} 

// 4.Append to Artist info

const form = document.querySelector('form')

// Add event handler to form 
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchValue = document.querySelector('#search-bar').value
  clearArtist()
  getMusic(searchValue)

  document.querySelector('#search-bar').value = ""
})

// Make a function to remove Previous Data and clear search bar
function clearArtist() {
  const artistContainer = document.querySelector('#artist-data')

  while (artistContainer.lastChild) {
    artistContainer.removeChild(artistContainer.lastChild)
  }
    
}