var array = [];
var team = [];

console.log("работает")
/*https://apiv2.apifootball.com/?action=get_standings&league_id=48&lang=ru&APIkey=ee205a72644d8e5efeb3cab18204e53d1413f6491e0272256f287bb67f085bf8*/
fetch('./standing.json')
    .then(response => response.json())
    .then(data => {
        console.log('enter')
        console.log(data)
        for(var i = 0; i < 15; i++) {
            array[i] = data[i].team_name;
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td1.innerHTML = i+1;
            td2.innerHTML = data[i].team_name;
            td3.innerHTML = data[i].overall_league_payed;
            td4.innerHTML = data[i].overall_league_PTS;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table = document.getElementsByClassName('table')[0];
            table.appendChild(tr);
        }
    })

function f() {
    if(document.getElementById('burger_menu').style.display !== 'block') {
        document.getElementById('burger_menu').style.display = 'block';
    } else {
        document.getElementById('burger_menu').style.display = 'none';
    }

}