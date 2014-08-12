window.onload = function() {

    result_div = $("#roll");

    function rollDie(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    $(".die-icon").click(function() {
        sides = $(this).attr("data-sides");
        result_div.html("Rolling a d" + sides + " => " + rollDie(sides));
    });

}
