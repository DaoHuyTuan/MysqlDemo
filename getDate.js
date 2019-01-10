const getDateByID = function getDateByIDFromDB(param) {
    var http = new XMLHttpRequest();
    var url = "getDate.php?dates=" + param;
    console.log(url)
    http.open("POST",url,true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            datas.date.push(JSON.parse(http.responseText));
            DOM.detailPage.style.display = "block";
            if(datas.date.length == datas.data.length){
                var DOMTables = document.getElementById("tables");
                var trDay =  '<tr id="tr"><td>Day: </td></tr>';
                
                DOMTables.innerHTML += trDay;
                var tr = document.getElementById("tr");
                for(var i = 0;i < datas.date.length;i++){
                   
                    var td = '<td>' + datas.date[i][0].dayName + '</td>'
                    tr.innerHTML +=td;
                }
            }
        }
    };
    http.send();
}
