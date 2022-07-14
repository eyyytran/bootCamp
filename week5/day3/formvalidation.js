const form = document.getElementById('form')

const logFormData = e => {
    e.preventDefault()

    const currentUserSaved = JSON.parse(localStorage.getItem('userData')) || []

    const formToSend = {}
    for (const input of e.target.children) {
        if (input.name === 'email') {
            if (!input.value.includes('@')) {
                alert('please use an @ sign')
                break
            }
        }
        formToSend[input.name] = input.value
    }

    let newUser = [...currentUserSaved, formToSend]
    localStorage.setItem('userData', JSON.stringify(newUser))
}

form.onsubmit = e => logFormData(e)
