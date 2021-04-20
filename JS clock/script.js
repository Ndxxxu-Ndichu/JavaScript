var wakeuptime = 7;
var noon = 12;
var lunchtime = 12
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//getting it to show the current time on the page
var showCurrentTime = function()
{
    //display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //set hours
    if (hours >= noon)
    {
        meridian = 'PM';
    }

    if (hours > noon)
    {
        hours = hours -12
    }

    //set minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes
    }

    //set seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    //put together the string that dispays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

//getting the clock to increment on its own and change out messages and pictures
var updateClock = function()
{
    var time = new Date().getHours();
    var messageText;
    var image = "https://www.motorbiscuit.com/wp-content/uploads/2020/07/2020-Dodge-Challenger-Drag-Pak-wheelie-1024x683.jpg"

    var timeEventJS = 
    document.getElementById("timeEvent");
    var raceCarImageJS = 
    document.getElementById('racerImage');

    if (time == partytime)
    {
        image = 
        "https://robbreport.com/wp-content/uploads/2019/02/rolex-24.jpg?w=1000";
        messageText = "Lets Party";
    }
    else if (time == wakeuptime)
    {
        image = 
        "https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/05/24162129/roborace_first_driverless_race.jpg"
        messageText = "Wake up!"
    }
    else if (time == lunchtime)
    {
        image =
         "https://s.abcnews.com/images/Technology/racecar-1-gty-er-190416_hpMain_4x3_992.jpg"
        messageText = "Lets have some lunch!";
    }
    else if (time == naptime)
    {
        image = 
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e1e3c02a854780006e88970%2F0x0.jpg"
        messageText = "Sleep tight!";
    }
    else if (time < noon)
    {
        image = "https://c.ndtvimg.com/2019-12/124adp6o_mclaren-620r_625x300_10_December_19.jpg"
        messageText = "Good morning!";
    }
    else if (time >= evening)
    {
        image = "https://emozzy.com/wp-content/uploads/2020/12/Top-20-Famous-Race-Car-Drivers-of-All-Time-3.jpg"
        messageText = "Good Evening"
    }
    else{
        image = "https://wallpaperaccess.com/full/1782779.jpg"
        messageText = "Good afternoon";
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    racerImage.src = image;

    showCurrentTime();

};
updateClock();

//Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//getting the party time button to work
var partyButton = 
document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0)
    {
       partytime = new Date().getHours();
       partyTimeButton.innerText = "Party Over!";
       partyTimeButton.style.backgroundcolor = "#0A8DAB"; 
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundcolor = "#222";
    }
};
partyButton.addEventListener("click", partyEvent);
partyEvent();

//activates wake-up selector
var wakeUpTimeSelector = 
document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.nodeValue;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Activates Lunch selector
var lucnTimeSelector = 
document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

//Activates Nap time selector
var napTimeSelector = 
document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent)