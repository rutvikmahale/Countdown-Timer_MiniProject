
let button = document.getElementById("submit-date");
button.addEventListener('click',timer);

function timer() {

    const stDate = document.getElementById("sDate").value;
    const edDate = document.getElementById("eDate").value;

    if(stDate == "" | edDate == "") {
        document.getElementById("input").style.display = "none";
        document.getElementById("2nd-page").style.display = "none";
        document.getElementById("third-page").style.display = "block";
    }
    else{
        document.getElementById("input").style.display = "none";
        document.getElementById("2nd-page").style.display = "block";
    }


    const startDate = new Date(stDate).getTime();
    const endDate = new Date(edDate).getTime();

    let now = startDate;

    let x = setInterval(function updateTimer() {

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //calcuate pending days, hours, minutes and seconds

    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hours = Math.floor((distancePending % (24*60*60*1000) / (60*60*1000)));
    const minutes = Math.floor((distancePending % (60*60*1000) / (60*1000)));
    const seconds = Math.floor((distancePending % (60*1000) / (1000))); 

    //show on UI
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    const bar = (distanceCovered / (endDate-startDate))*100;

    document.querySelector(".progress-bar").style.width = bar + "%";

    now+=1000;

    if(distancePending <= 0){
        clearInterval(x);
        document.querySelector(".progress-bar").style.width = "100%";
        document.querySelector(".countdown").innerHTML = "<h2>EXPIRED</h2>";
    }
}, 1000);

}