$(function() {
    var imglink = ["/assets/img/b1.png", "/assets/img/b2.png", "/assets/img/b2.png", "/assets/img/b3.png", "/assets/img/b4.jpg", "/assets/img/b5.jpg", "/assets/img/b6.jpg"]
    var num = Math.floor(Math.random() * imglink.length);
    $(".mydiv").prepend(`<img id="myimg" src=${imglink[num]}>`)
    $("#add").on("click", function() {
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
            p.text(data + ". " + burgerName.name);
            var div = $(`<div class="mydiv" id="div${data}"></div>`)
            var button = $(`<button data-id=${data} class="mybtn new${data}">Divour it</button>`)
            div.append(`<img id="myimg" src=${imglink[num]}>`).append(p).append(button);
            $("#new").append(div);
            div.css("margin-left", "-86px")

        })
    });
    $(document).on("click", ".mybtn", function() {
        var id = $(this).attr("data-id");
        var pId = $(this).attr("data-id")
        console.log(pId)
        $("#devoured").append($(`#${pId}`).clone());
        $(`#div${id}`).remove();
        $(`.new${id}`).remove();

        $.ajax("/api/burger/" + pId, {
            type: "PUT",
            data: {}
        }).then(function(result) {
            console.log(result)
        })
    })

})