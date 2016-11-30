window.onload = function() {

    var itemList = document.getElementById("itemList");
    var modal = document.getElementById("modalTag");
    var inputTag = modal.getElementsByTagName("input");
    var selectTag = modal.getElementsByTagName("select");
    var modalClose = document.getElementById("modalLeave");
    var tagSave = document.getElementById("tagSave");

    var sync = document.getElementById("sync");
    var down = document.getElementById("down");

    var socket = io('127.0.0.1:357');
    socket.on('connected', function() {
        var name = prompt("Nom de l'utilisateur: ");
        socket.emit("@CO", name);
    });
    socket.on('@CO', function(data) {
        switch (data) {
            case "OK":
                {
                    sync.style.display = "inline";
                    break;
                }
            case "NO":
                {
                    alert("Utilisateur inconnu...");
                    var name = prompt("Nom de l'utilisateur: ");
                    socket.emit("@CO", name);
                    break;
                }
        }
    });
    socket.on('@SYR', function(data) {
        itemList.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            addItem(data[i]);
        }
        socket.emit("@SY", "pull");
    });
    socket.on('@SYP', function(data) {
        if (data == "OK") {
            down.style.display = "inline";
        }
    });
    socket.on('@CH', function(data) {
        data = data.split("|:|");
        var nameDiv = document.getElementById("#" + data[0]).getElementsByClassName("name")[0];
        nameDiv.innerHTML = data[1];
    });
    socket.on('@TAR', function(data) {
        console.log(data);
        inputTag[0].value = data.title;
        inputTag[1].value = data.tagTitle;
        inputTag[2].value = data.tagAuthor;
        inputTag[3].value = data.tagAlbum;
        inputTag[4].value = data.tagYear;
        selectTag[0].value = data.tagStyle;
    });
    socket.on('@TAS', function(data) {
        if (data == "OK") {
            modal.style.display = "none";
        }
    });


    sync.onclick = function() {
        socket.emit("@SY", "request");
    }
    down.onclick = function() {
        socket.emit("@DL", "request");
    }

    modalClose.onclick = function() {
        modal.style.display = "none";
    }

    tagSave.onclick = function() {
        var data = new Object;
        data.title = inputTag[0].value;
        data.tagTitle = inputTag[1].value;
        data.tagAuthor = inputTag[2].value;
        data.tagAlbum = inputTag[3].value;
        data.tagYear = inputTag[4].value;
        data.tagStyle = selectTag[0].value;
        data.videoID = modal.getAttribute("videoID");
        socket.emit("@TAS", data);
    }

    function stop(videoID) {
        socket.emit("@TAR", videoID);
        modal.setAttribute("videoID", videoID);
        modal.style.display = "block";
    }

    function addItem(videoID) {
        var item = document.createElement("div");
        item.setAttribute("class", "item");
        item.setAttribute("id", "#" + videoID);

        item.innerHTML =
            '<a href="https://www.youtube.com/watch?v=' + videoID + '" target="_blank"><img src="https://img.youtube.com/vi/' + videoID + '/mqdefault.jpg"></a>' +
            '<div class="name">Waiting for name...</div>' +
            '<div class="progressStatut">' +
            '<div class="bar">' +
            '<div class="progress_bar"></div>' +
            '<div class="status">En attente...</div>' +
            '</div>' +
            '</div>';
        var name = item.getElementsByClassName('name')[0];
        name.addEventListener("click", function() {
            stop(videoID);
        }, true);
        itemList.appendChild(item);
    }
}