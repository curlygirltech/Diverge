// const apiAddress = 'theaudiodb.com/api/v1/json/1/'


async function getMusic(artist) {
  const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
  try {
    let response = await axios.get(url)
    let data = response.data.artists[0]
    const languages = findLanguages(data) 
    fetchData(data, languages)
    return response
  } catch (error) {
    console.error(error) 
  }
  
  }
// getMusic('drake')

function fetchData /*change name*/ (data, languages) {
  const dataContainer = document.querySelector('#artist-data')
  const artistArr = Object.entries(data)
  // console.log(artistArr)
  // let languageBtn = artistArr.map((arr) => {
    
  // })
  languages.forEach(language => {
    const val = 'strBiography' + language
    console.log(val)
  })
  const artistInfo = `
  <h1 class="">${data.strArtist}</h1>
  <img src= "${data.strArtistClearart}" alt="Artist pic" class = "Artist-pic"/>
  <h2>${data.strGenre}</h2>
  <p>${data.strWebsite}</p>
  <p>${data.strTwitter}</p>
  <p>${data.strFacebook}</p>   
  <p>${data.strBiographyEN}</p>  
  `

  // console.log(artistInfo)
  dataContainer.insertAdjacentHTML('beforeend', artistInfo)

  const languageBtns = document.querySelectorAll(".language-btn")
  console.log(languageBtns)
  languageBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.value)
      const artistKey = Object.key(data)
      console.log(artistKey)
      // compare the value of the btn with the key of the data obj where the value of the btn and the data objkey are = 
    })  
  })
  // if (`${data.strArtistClearart}` === 0) {
  //   `${data.strArtistBanner}`
  // } 
} 

// 4.Append to Artist info
// switch language Bios
// dataContainer.querySelector('#artist-data') =
//   `
// <p>${data.strBiographyES}</p>
// <p>${data.strBiographyFR}</p>
// <p>${data.strBiographyDE}</p>
// <p>${data.strBiographyCN}</p>
// <p>${data.strBiographyJP}</p>
// <p>${data.strBiographyIT}</p>
// <p>${data.strBiographyPT}</p>
// `





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

const findLanguages = (data) => {
  const validLanguages = []
  const languageItems = Object.keys(data).filter(item => item.includes('strBiography'))  
  languageItems && languageItems.forEach(item => {    
    const bio = data[item]
    bio && validLanguages.push(item.slice(-2))
  })
  return validLanguages
}



// let trimmedLang = languageItem && 