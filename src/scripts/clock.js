const getCurrentTime = () => {
    // GEt New Date
    const today = new Date();

    // Convert
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let milisecond = today.getMilliseconds();

    // Day Array
    const dayArray = [
        "Sun", "Mon", "tues", "wed", "Thr", "Fri", "Sat"
    ]

    // Checking Leading zero
    hour = checkLeadingZero(hour);
    minute = checkLeadingZero(minute);
    milisecond = checkLeadingZero(milisecond);

    // Assemble
    let currentTime = `${dayArray[day]}  ${hour} : ${minute} : ${second} : ${milisecond}`;



    // Render
    document.querySelector(".clock").innerHTML = currentTime;

    setTimeout(getCurrentTime, 1)
}

const checkLeadingZero = (paramTime) => {
    paramTime < 10
    ? paramTime = `0${paramTime}`
    :null
    return paramTime;
}