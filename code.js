// // const apiAddress = 'theaudiodb.com/api/v1/json/1/'


// async function getMusic(artist) {
//   const url = `http://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
//   try {
//     let response = await axios.get(url)
//     let data = response.data.artists[0]
//     console.log(data)
//     const languages = findLanguages(data) 
//     artistData(data, languages)
//     console.log(response)
//     return response
//   } catch (error) {
//     console.error(error)
//     alert("sorry this artist isn't available")
      
// }
//   }
// // getMusic('drake')

// function artistData(data, languages) {
//   const dataContainer = document.querySelector('#artist-data')
//   const artistArr = Object.entries(data)
  
//   languages.forEach(language => {
//     const val = 'strBiography' + language
//     console.log(val)
//   })
//   const artistInfo = `
//   <h1 class="">${data.strArtist}</h1>
//   <img src= "${data.strArtistClearart}" alt="Artist pic" class = "Artist-pic"/>
//   <h2>${data.strGenre}</h2>
//   <p>${data.strWebsite}</p>
//   <a id='twitter-link' href='http://${data.strTwitter}' target="_blank">Twitter</a>
//   <a id='facebook-link' href='http://${data.strFacebook}' target="_blank">Facebook</a>   
//   <p>${data.strBiographyEN}</p>  
//   `
//   dataContainer.insertAdjacentHTML('beforeend', artistInfo)
//   // 
  

//   const languageBtns = document.querySelectorAll(".language-btn")
//   console.log(languageBtns)
//   languageBtns.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       console.log(e.target.value)
//       const artistKey = Object.key(data)
//       console.log(artistKey)
//       // compare the value of the btn with the key of the data obj where the value of the btn and the data objkey are = 
//     })
//   })
// }
//   // 4.Append to Artist info
  
//   const button = document.querySelector('#Button')
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const searchValue = document.querySelector('#search-bar').value
//     clearArtist()
//     getMusic(searchValue)
//     console.log(searchValue)
//     console.log("test")
//     document.querySelector('#search-bar').value = ""
//   }

//   button.addEventListener('submit', handleSubmit)

    
  




//   // Make a function to remove Previous Data and clear search bar
//   function clearArtist() {
//     const artistContainer = document.querySelector('#artist-data')

//     while (artistContainer.lastChild) {
//       artistContainer.removeChild(artistContainer.lastChild)
//     }
    
//   }

//   const findLanguages = (data) => {
//     const validLanguages = []
//     const languageItems = Object.keys(data).filter(item => item.includes('strBiography'))
//     languageItems && languageItems.forEach(item => {
//       const bio = data[item]
//       bio && validLanguages.push(item.slice(-2))
//     })
//     return validLanguages
//   }

// console.log(new Date())