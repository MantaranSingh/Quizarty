let historyRow = document.getElementsByClassName('historyRow')
let playHistory = document.querySelector('#playHistory')
let earnedHistory = document.querySelector('#earnedHistory')
earnedHistory.style.borderBottom = 'none'
historyRow[1].style.display = 'none'

earnedHistory.addEventListener('click', () => {
    playHistory.style.borderBottom = 'none'
    earnedHistory.style.borderBottom = '3px solid white'
    historyRow[0].style.display = 'none'
    historyRow[1].style.display = 'flex'
})

playHistory.addEventListener('click', () => {
    earnedHistory.style.borderBottom = 'none'
    playHistory.style.borderBottom = '3px solid white'
    historyRow[1].style.display = 'none'
    historyRow[0].style.display = 'flex'
})