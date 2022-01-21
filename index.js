const modal = document.getElementById('modal')
const openBtn = document.getElementById('open-modal')
const closeBtn = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')
const inputSearch = document.getElementById('usernameInput')
const resultsDiv = document.querySelector('.search-results')



openBtn.addEventListener('click', function() {
    overlay.style.transform = 'scale(1)';
    modal.classList.add('active')
})

closeBtn.addEventListener('click', function() {
    overlay.style.transform = 'scale(0)';
    modal.classList.remove('active')
})

document.addEventListener('keydown', function(e) {
    if(e.key == 'Escape'){
        modal.classList.remove('active')
        overlay.style.transform = 'scale(0)';
    }
});

inputSearch.addEventListener('keyup', function(event) {
    let searchQuery = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.querySelectorAll('.name')
    allNamesDOMCollection.forEach((listItem) => {
        if (listItem.textContent.toLowerCase().includes(searchQuery) && searchQuery !== '') {
            listItem.classList.add('queried')
        } else if (searchQuery == '') {
            listItem.classList.remove('queried')
            listItem.style.display = 'block'
        } else {
            listItem.classList.remove('queried')
            listItem.style.display = 'none'
        }
    })
})
