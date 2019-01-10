let DOM = new Object();
let datas = new Object();
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
        date: new Array()
    }
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
    }else {

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
            datas.userID = datas.data[0].userID;
            console.log(datas.data)
            for(var i =0;i<datas.data.length;i++) {
                getDateByID(datas.data[i].dayID);
                getUserByID(datas.userID)
                
            }
        }
    };
    http.send();
}
const renderDetail = function renderDetailPage() {
    // DOM.formPage.style.display = "none";
    // DOM.detailPage.style.display = "block";
    renderData();
}
const renderData = function passDataIntoDetailPage(workingHoursDay,researchHoursDay,ca) {
    //console.log(datas.data[0].name)
    DOM.dP_txtUsername.innerHTML = datas.name[0].name;
    DOM.dP_txtUserID.innerHTML = datas.data[0].userID;
    // var trWorkHour = '<tr id="trWorkHour"><td>Worked Hours: </td></tr>';
    // console.log(datas.data);
    
    // var trResearch = '<tr id="trResearch"><td>Research Hours: </td></tr>';
    // var tables = document.getElementById("tables");
    // tables.innerHTML += trWorkHour;
    // tables.innerHTML += trResearch;

}

catchDom();
