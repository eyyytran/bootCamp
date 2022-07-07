//fetch

const BASE_URL = 'url goes here'

const fetchHouses = async () => {
    const HouseURL = BASE_URL + 'Houses'
    const wizardHouses = await fetch(BASE_URL)
    const wizardHousesJson = await wizardHouses.json()
}

//fetch(url, {})
