let DOM = new Object();
const catchDom = function GetElementonDOM() {
    DOM = {
        txtName:document.getElementById("txtName"),
        dateInput:document.getElementById("datePicker"),
        btn:document.getElementById("btn-get"),
        nameVal:"",
        dayVal:"",
        dateVal:"",
        monthVal:"",
        yearVal:""
    }
    addEventsListener()
}
const addEventsListener = function addEvents() {
    DOM.btn.addEventListener("click",getValue,false);
}
const getValue = function getValueonDOM() {
    DOM.nameVal = DOM.txtName.value;
    DOM.dayVal = new Date(DOM.dateInput.value);
    DOM.dateVal = DOM.dayVal.getDate();
    DOM.monthVal = DOM.dayVal.getMonth() + 1;
    DOM.yearVal = DOM.dayVal.getFullYear();
    getData();
}
const getData = function getDataFromDB() {
    var http = new XMLHttpRequest();
    
    http.open("GET","getData.php",true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(http.responseText.toString());
           console.log(data)
        }
    };
    http.send();
    
}
catchDom();
