// using fetch method
const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/sadam-codes')
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json()
        const { name, location, bio } = data
        console.log(`Name: ${name}, Location: ${location}, Bio: ${bio}`);
    } catch (error) {
        console.error(`Fetch API Error: ${error.message}`);
    }
}
fetchData()

// using axios method
const axios = require('axios')
const fetchUsingAxios = async () => {
    try {
        const response = await axios.get('https://api.github.com/users/sadam-codes')
        const { name, location, bio } = response.data
        console.log(`Name: ${name}, Location: ${location}, Bio: ${bio}`);
    } catch (error) {
        console.error(`Axios Error: ${error.message}`);
    }

}
fetchUsingAxios()