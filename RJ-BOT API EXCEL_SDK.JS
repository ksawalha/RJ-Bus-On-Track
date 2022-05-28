var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

var file = "<file contents here>";//to use excel processing

var requestOptions = {
  method: 'POST',
  headers: myHeaders,//send request without headers
  body: file,
  redirect: 'follow'
};

fetch("https://personal-awxiatyw.outsystemscloud.com/RJ_BOT/rest/RJBOT/RJBOT?PICKUP%20LATITUDE=32.000478&PICKUP%20LONGTUDE=35.867367&BUS%20LATITUDE=32.00047&BUS%20LONGTUDE=35.86736&USER%20ID=7&BUS%20ID=207", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
