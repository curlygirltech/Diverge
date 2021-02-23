console.log('hey, its working')
// const apiAddress = 'theaudiodb.com/api/v1/json/1/'


async function getMusic() {
  const url = 'theaudiodb.com/api/v1/json/1/search.php?s='
  try {
    let response = await axios.get(url)
    let data = response.data
    console.log(data)
  } catch (error) {
    console.error(err) 
  }
  
  }
getMusic('beyonce')

function fetchData () {
  const dataContainer = document.querySelector('#artist-data')
} 

