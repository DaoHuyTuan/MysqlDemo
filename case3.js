const case3GetDayName = function getDayNameCase3(dayname) {
    var http = new XMLHttpRequest();
    var url = "case3GetDayName.php" + "?dayName=" + dayname;
    http.open("POST",url,true);
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            datas.dateName = JSON.parse(http.responseText)[0].dayName;
            datas.dateID = JSON.parse(http.responseText)[0].dateID;
            //console.log(datas.dateID)
            getDataCase3(datas.dateID);
        }
    }
    http.send();
}
const getDataCase3 = function getDateFromDateIDCase3(dayID) {
    var http = new XMLHttpRequest();
   
    var url = "case3GetData.php" + "?dayID=" + dayID;
    http.open("POST",url,true);
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            datas.data = JSON.parse(http.responseText);
            DOM.detailPage.style.display = "block";
            
            renderDataCase3();
        }
    }
    http.send();
}
const renderDataCase3 = function renderDatacase3FromDateID() {
    var userIDLabel = document.getElementById("detail__labelID").style.display = "none";
    var userNameLabel = document.getElementById("dP__labelUsername").style.display = "none";
    DOM.dP_txtUsername.style.display = "none";
    DOM.dP_txtUserID.style.display = "none";
    var strDay = "<tr><td>Day: "+ datas.dateName +" </td></tr>"
    DOMTable.DTable.innerHTML += strDay;
    var firstRow = "<tr><td>UserName</td><td>Working Hours/day</td><td>Research Hours/day</td><td>Ca Làm</td></tr>";
    DOMTable.DTable.innerHTML += firstRow;
    
    for(var i =0;i< datas.data.length;i++) {
        var caLam;
        console.log(datas.data[i])
        if(datas.data[i].ca == "0"){
            caLam = "Ca Sáng";
        }else {
            caLam = "Ca Tối";
        }
        var rows = "<tr><td>" + datas.data[i].name+ "</td><td>"+ datas.data[i].workingHoursDay+"h"+ "</td><td> "+datas.data[i].researchHoursDay+"h"+ "</td><td>" + caLam+ "</td></tr>";
        DOMTable.DTable.innerHTML += rows;
    }

}