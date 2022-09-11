



// Function for the Submit button
const submit = document.querySelector('#submit')

submit.addEventListener("click", function(e){
    e.preventDefault();

    const email = document.querySelector('input')
    const displayResult = document.getElementById('error')

    if(!email.value || !email.value.includes('@' && '.com') ){
        displayResult.classList.remove("green")
        displayResult.innerText= 'Please enter a valid email'
        displayResult.classList.add("red")
        email.value=''
    }
    else{
        displayResult.classList.remove("red")
        displayResult.innerText= 'Thank you for Subcribing'
        displayResult.classList.add("green")
        email.value =''
        
    }

    
})


const countDown = () => {
        const day = document.querySelector('.days')
        const hour = document.querySelector('.hours')
        const minute = document.querySelector('.minutes')
        const second = document.querySelector('.seconds')
        const wrapper = document.querySelector('.wrapper')

        // Get the Current Date
        const currentdate = new Date()

            // console.log(currentdate)
        // Get the time you want the timer to EXPIRE
        const futureDate = new Date('October 27 2022 00:00:00');

        // Get the difference between the Current Date and Future Date
        const countdown = futureDate - currentdate  

            // console.log(countdown)
        // Converting the Milliseconds to days, hours, minutes & seconds

        let days = Math.floor(countdown/(1000*60*60*24))
        let hours = Math.floor(countdown/(1000*60*60))
        let minutes = Math.floor(countdown/(1000*60))
        let seconds = Math.floor(countdown/(1000))


        let displayDay = days;
        let displayHour = hours -  days * 24;
        let displayMinute = minutes - hours * 60;
        let displaySecond = seconds - minutes * 60;

        // console.log(displayDay, displayHour, displayMinute, displaySecond)

        if(displayDay < 10){
            day.innerHTML = '0' + displayDay
        }else day.innerHTML = displayDay

        if(displayHour < 10){
            hour.innerHTML = '0' + displayHour
        }else hour.innerHTML = displayHour

        if(displayMinute < 10){
            minute.innerHTML = '0' + displayMinute
        }else  minute.innerHTML = displayMinute

        if(displaySecond < 10){
            second.innerHTML = '0' + displaySecond
        }else second.innerHTML = displaySecond
        

    if(displayDay === 0 && displayHour === 0 && displayMinute === 0 && displaySecond === 0){
        wrapper.innerHTML = `<h1 class ='complete'>CONGRATULATIONS!</h1>
                                <h1>Happy Birthday OmaNoble</h1>`
    }
}

setInterval(countDown, 1000)