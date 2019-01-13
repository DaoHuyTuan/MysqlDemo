const getDateByUser = function getDateByOneUser(name,datePick) {
    var http = new XMLHttpRequest();
    var url = "getDateByUser.php?dates=" + datePick;

    http.open("POST",url,true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            datas.dateID = JSON.parse(http.responseText);
           
            getUserByDateID(name,datas.dateID[0].dateID) 
        }
    };
    http.send();
}
const getUserByDateID = function getDataUserFromDateID(name,dateID) {
    var http = new XMLHttpRequest();
    
    var url = "getUserByDateID.php"+ "?dateIDs=" + dateID + "&name=" + name;
   
    http.open("POST",url,true)
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            datas.data = JSON.parse(http.responseText);
           
            DOM.detailPage.style.display = "block";
            getUserIDCase2();
        }
    };
    http.send();
}
const getUserIDCase2 = function getUserIDFromNameCase2() {

    var http = new XMLHttpRequest();
    var url = "getUserID.php" + "?name=" + datas.data[0].name;
    http.open("POST",url,true);
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            datas.userID = JSON.parse(http.responseText)
            getDateNameCase2(datas.data[0].dayID)
        }
    }
    http.send();
}
getDateNameCase2 = function getDateNameForCase2(dayID) {
    var http = new XMLHttpRequest();
    var url = "getDayNameCase2.php" + "?dayID=" + dayID;
    http.open("POST",url,true);
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            datas.dayName = JSON.parse(http.responseText);
            createTableCase2(datas.dayName);
        }
    }
    http.send();
}
const createTableCase2 = function createNewTableForCase2(dayName) {
    DOM.dP_txtUsername.innerHTML = datas.data[0].name;
    DOM.dP_txtUserID.innerHTML = datas.userID[0].userID;
    var strDay =  '<tr id="tr"><td>Day: </td></tr>';
    var strWorkHour = '<tr id="trWorkHour"><td>Worked Hours: </td></tr>';
    var strResearch = '<tr id="trResearch"><td>Research Hours: </td></tr>';
    var ca  = '<tr id="trCalam"><td>Ca Làm: </td></tr>';


    DOMTable.DTable.innerHTML += strDay + strWorkHour + strResearch + ca;
    var trDay = document.getElementById("tr");
    var domDay = '<td>'+ dayName[0].dayName +'</td>'
    trDay.innerHTML += domDay;

    var trWorkHour = document.getElementById("trWorkHour");
    var domWorkHour = '<td>'+ datas.data[0].workingHoursDay +'</td>'
    trWorkHour.innerHTML += domWorkHour;

    var trResearch = document.getElementById("trResearch");
    var domResearch = '<td>'+ datas.data[0].researchHoursDay +'</td>'
    trResearch.innerHTML += domResearch;

    var trCa = document.getElementById("trCalam");
    
    var calam = datas.data[0].ca == 0 ? calam = "Sáng" : calam = "Tối";
    var domCalam = '<td>'+ calam +'</td>';
    trCa.innerHTML += domCalam;
}