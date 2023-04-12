const getCurrentTime = () => {

const options = {
    timeZone: "Asia/seoul",
    hour12: true,
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}

const currentTime = new Date().toLocaleString("ja-JP", options)

    

    // Render
    document.querySelector(".clock").innerHTML = currentTime;
    document.querySelector("h1").innerHTML = "時計";
    setTimeout(getCurrentTime, 1)
}