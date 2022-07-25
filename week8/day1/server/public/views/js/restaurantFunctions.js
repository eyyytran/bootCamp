const submitBtn = document.getElementById('submit-button')
const userInput = document.getElementById('user-input').value

const addRestaurant = async () => {
    const data = {
        name: userInput,
    }
    const result = await fetch(
        'http://localhost:3000/restaurants/add_restaurant',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    )
}

submitBtn.addEventListener('click', () => {
    addRestaurant()
})
