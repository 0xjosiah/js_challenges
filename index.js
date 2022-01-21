const modal = document.getElementById('modal')
const openBtn = document.getElementById('open-modal')
const closeBtn = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')
const inputSearch = document.getElementById('usernameInput')
const resultsDiv = document.querySelector('.search-results')



openBtn.addEventListener('click', function() {
    overlay.style.transform = 'scale(1)';
    modal.classList.add('active')
    // overlay.classList.add('active')
})

closeBtn.addEventListener('click', function() {
    overlay.style.transform = 'scale(0)';
    // overlay.classList.remove('active')
    modal.classList.remove('active')
})

document.addEventListener('keydown', function(e) {
    if(e.key == 'Escape'){
        modal.classList.remove('active')
        // overlay.classList.remove('active')
        overlay.style.transform = 'scale(0)';
    }
});

inputSearch.addEventListener('keyup', function(event) {
    // if (event.key == 'Enter') {
        let searchQuery = event.target.value.toLowerCase()
        let allNamesDOMCollection = document.querySelectorAll('.name')
        // let newUser = document.createElement('div')
        // newUser.textContent += user
        // resultsDiv.appendChild(newUser)
        // inputSearch.value = ''
        allNamesDOMCollection.forEach((listItem) => {
            if (listItem.textContent.toLowerCase() == searchQuery) {
                listItem.classList.add('queried')
            } else {
                listItem.classList.remove('queried')
            }
        })
        // for (let i = 0; i < allNamesDOMCollection.length; i++) {
        //     if (allNamesDOMCollection[i].textContent.toLowerCase() == searchQuery) {
        //         allNamesDOMCollection[i].classList.add('queried')
        //     } else {
        //         allNamesDOMCollection[i].classList.remove('queried')
        //     }
        // }
    // }
})

