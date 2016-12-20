var canvas,
    ctx,
    w1 = new Warrior("Glenn", 66, 2, 5);

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
}