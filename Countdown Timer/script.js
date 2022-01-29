const countDown = () => {
    const countDate = new Date("Nov 23, 2022 00:00:00").getTime();
    const currentDate = new Date().getTime();
    let time = (countDate - currentDate);

    // time 
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const months = days * 30;

    document.querySelector("#Months").innerHTML = Math.floor(time / months);
    document.querySelector("#Days").innerHTML = Math.floor((time % months) / days);
    document.querySelector("#Hours").innerHTML = Math.floor((time % days) / hours);
    document.querySelector("#Minutes").innerHTML = Math.floor((time % hours) / minutes);
    document.querySelector("#Seconds").innerHTML = Math.floor((time % minutes) / seconds);
}
countDown();
setInterval(countDown, 1000);