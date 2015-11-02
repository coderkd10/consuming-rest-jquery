document.getElementById(test).innerHTML = "Test passed!";

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});