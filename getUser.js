const getUserByID = function getUserByIDFromDB(param) {
    var http = new XMLHttpRequest();
    var url = "getUser.php?users=" + param;
    console.log(url)
    http.open("POST",url,true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            datas.name = JSON.parse(http.responseText);
            console.log(datas.name[0].name)
            renderData();
        }
    };
    http.send();
}
