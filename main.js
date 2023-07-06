function showTime () {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let session = "AM";

    if(h === 0){
        h = 12;
    };

    if(h > 12){
        h = h-12;
        session = "PM"
    };

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    let clock = `${h}:${m}:${s} ${session}`;

    document.querySelector(".clock").innerText = clock;
};

setInterval(showTime, 1000);
