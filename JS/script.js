var canvas,
    ctx,
    w1 = new Warrior("Glenn", 66, 0, 0),
    w2 = new Warrior("Rupert", 66, 2, 5),
    w3 = new Warrior("Ada", 66, 7, 5);

function start() {

    // Tilldela variabler för canvas.
    canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");

    // Skapa rutmönster
    for (var i = 1; i <= 7; i++) {
        ctx.fillRect(100 * i, 0, 1, 600);
    }
    for (var i = 1; i <= 5; i++) {
        ctx.fillRect(0, 100 * i, 800, 1);
    }
    w1.render();
    w2.render();
    w3.render();

    window.setInterval()
}

function keyDown(e) {
    //Vänster
    if (e.keyCode == 37) {
        w2.xPos = w2.xPos - 1;
        console.log(w2.xPos);
    }

}