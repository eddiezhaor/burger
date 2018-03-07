$(function() {

    $("#add").on("click", function() {
        var imglink = ["/assets/img/b1.png", "/assets/img/b2.png", "/assets/img/b2.png", "/assets/img/b3.png", "/assets/img/b4.jpg", "/assets/img/b5.jpg", "/assets/img/b6.jpg"]
        var num = Math.floor(Math.random() * imglink.length);
        var burgerName = {
            name: $("#text").val().trim(),
            devoured: 0
        }
        $("#text").val("");
        $.ajax("/api/burger", {
            type: "POST",
            data: burgerName
        }).then(function(data) {
            console.log(data)
            var p = $(`<p id="${data}"></p>`);
            p.css({
                "border-color": "black",
                "border-width": "1px",
                "border-style": "solid",
                "text-align": "center",
                "width": "250px",
                "display": "inline-block",
                "padding-bottom": "4px",

            });
            p.text(data + ". " + burgerName.name);
            var div = $(`<div id="div${data}"></div>`)
            var button = $(`<button id="new${data}">Divour it</button>`)
            div.append(`<img id="myimg" src=${imglink[num]}>`).append(p).append(button);
            $("#new").append(div);
            div.css("margin-left", "-50px")
            $(`#new${data}`).on("click", function() {
                $(`#div${data}`).css("display", "none");
                $("#devoured").append(p)
                $.ajax("/api/burger/" + data, {
                    type: "PUT",
                    data: {}
                }).then(function(result) {
                    console.log(result)
                })
            })
        })
    });


})