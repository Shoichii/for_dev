const API_URL = 'http://127.0.0.1:8000/api/v1/'

let telegram_id = window.location.hostname.split('=')
console.log(window.location.hostname)
if(telegram_id.length = 2) {
    telegram_id = telegram_id[1]
}
console.log(telegram_id)

fetch(`${API_URL}sign_up`)


const times = document.querySelector(".time");

let calA = new Calendar({
    id: "#calendar-a",
    theme: "glass",
    // border: "5px solid black",
    weekdayType: "long-upper",
    monthDisplayType: "long",
    // headerColor: "yellow",
    // headerBackgroundColor: "black",
    calendarSize: "small",
    layoutModifiers: ["month-left-align"],
    eventsData: [
        {
            id: 1,
            name: "workDay",
            start: "2023-11-15T09:00:00",
            end: "2023-11-15T18:00:00"
        },
    ],
    dateChanged: (currentDate, events) => {
        // тут fetch запрос с получением времени и в нём далее:
        let res = ['12:00', '13:30', '14:00', '15:00', '16:00', '16:30']
        times.innerHTML = ''
        res.forEach(item => times.innerHTML += `<p class="time-item">${item}</p>`)
        times.addEventListener('click', e => {
            const timeElem = e.target.closest('.time-item')
            if(timeElem) {
                const times = document.querySelectorAll('.time-item')
                times.forEach(item => item.classList.remove('time-item-active'))
                timeElem.classList.add('time-item-active')
            }
        })
    },
    monthChanged: (currentDate, events) => {
        console.log("month change", currentDate, events);
    }
});