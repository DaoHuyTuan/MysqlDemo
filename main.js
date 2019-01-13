let DOM = new Object();
let datas = new Object();
let DOMTable = new Object();
const catchDom = function GetElementonDOM() {
    DOM = {
        //form Page
        txtName:document.getElementById("txtName"),
        dateInput:document.getElementById("datePicker"),
        btn:document.getElementById("btn-get"),
        detailPage: document.getElementById("detail"),
        formPage: document.getElementById("form"),
        //detail Page
        dP_txtUserID: document.getElementById("dP_txtUserID"),
        dP_txtUsername: document.getElementById("dP_txtUsername")
    };
    datas = {
        nameVal:"",
        dayVal:"",
        dateVal:"",
        monthVal:"",
        yearVal:"",
        data:"",
        name:"",
        userID:"",
        dateID:"",
        dayName:"",
        date: new Array()
    }
    DOMTable = {
        DTable: document.getElementById("tables"),
    };
    addEventsListener()
}
const addEventsListener = function addEvents() {
    DOM.btn.addEventListener("click",getValue,false);
}
const getValue = function getValueonDOM() {
    datas.nameVal = DOM.txtName.value;
    datas.dayVal = new Date(DOM.dateInput.value);
    datas.dateVal = datas.dayVal.getDate();
    datas.monthVal = datas.dayVal.getMonth() + 1;
    datas.yearVal = datas.dayVal.getFullYear();
    if(datas.dayVal == "Invalid Date"){
        getIDUser();
    }
    if ((datas.dayVal != "Invalid Date") && (datas.nameVal == "")) {
        var fullDate = datas.dateVal +"/" + datas.monthVal +"/"+ datas.yearVal;
        case3GetDayName(fullDate)
    }
    else {
        var fullDate = datas.dateVal +"/" + datas.monthVal +"/"+ datas.yearVal;
        getDateByUser(datas.nameVal,fullDate);
    }
}
const getIDUser = function getIDUserFromDB() {
    var http = new XMLHttpRequest();
    var url = "getData.php?name=" + datas.nameVal;
    http.open("POST",url,true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            datas.data = JSON.parse(http.responseText);
           
            
            datas.name = datas.data[0].name;
           
            for(var i =0;i<datas.data.length;i++) {
                
                getDateByID(datas.data[i].dayID);
            }
        }
    };
    http.send();
}

const renderData = function passDataIntoDetailPage(userID) {

    //console.log(datas.data[0].name)
    DOM.dP_txtUsername.innerHTML = datas.data[0].name;
    DOM.dP_txtUserID.innerHTML = userID[0].userID;
    var strWorkHour = '<tr id="trWorkHour"><td>Worked Hours: </td></tr>';
    var strResearch = '<tr id="trResearch"><td>Research Hours: </td></tr>';
    var ca  = '<tr id="trCalam"><td>Ca Làm: </td></tr>';


    DOMTable.DTable.innerHTML += strWorkHour + strResearch + ca;
    var trWorkHour = document.getElementById("trWorkHour");
    var trResearch = document.getElementById("trResearch");
    var trCa = document.getElementById("trCalam");

    for(var i = 0;i < datas.data.length;i++) {
       var tdWorkHours = '<td>'+ datas.data[i].workingHoursDay +"h"+ '</td>';
       var tdResearchHours = '<td>'+ datas.data[i].researchHoursDay+"h" +'</td>';
       var calam = datas.data[i].ca == 0 ? calam = "Sáng" : calam = "Tối";
    //    if(datas.data[i].ca == 0) {
    //       calam = "Sáng";
    //    }else {
    //        calam = "Tối"
    //    }
       var tdCalam = '<td>' + calam + '</td>';
       trWorkHour.innerHTML += tdWorkHours;
       trResearch.innerHTML += tdResearchHours;
       trCa.innerHTML += tdCalam;
    }

    // console.log(datas.data);
    
  
    
    // tables.innerHTML += trWorkHour;
    // tables.innerHTML += trResearch;

}

catchDom();
