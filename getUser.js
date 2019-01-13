const getUserByID = function getUserByIDFromDB(param) {
    var http = new XMLHttpRequest();
    var url = "getUser.php?users=" + param;
    http.open("POST",url,true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            datas.userID = JSON.parse(http.responseText);
            console.log(datas.userID)
            renderData(datas.userID);
        }
    };
    http.send();
}
