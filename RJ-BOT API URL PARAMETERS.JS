function RJ_BOT(p_lat, p_lng, b_lat, b_lng, userid, busid ){
    const Http = new XMLHttpRequest();
    const url='https://personal-awxiatyw.outsystemscloud.com/RJ_BOT/rest/RJBOT/RJBOT?PICKUP%20LATITUDE='+p_lat+'&PICKUP%20LONGTUDE='+p_lng+'&BUS%20LATITUDE='+b_lat+'&BUS%20LONGTUDE='+b_lng+'&USER%20ID='+userid+'&BUS%20ID='+busid+'';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    }
}
