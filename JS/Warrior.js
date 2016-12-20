function Warrior(name, dmg) {

    //Deklarera egenskaper
    this.name = name;
    this.dmg = dmg;
    this.hp = 100;

    // Definiera metoder
    this.hurt = function (damage) {
        this.hp = this.hp - damage;
        console.log(this.name + "skadar sig. Hen blöder lite och får ont. Hen förlorar " + damage + " hp och har nu " + this.hp);
    }

    this.attack = function (opponent) {
        console.log(this.name + "attackerar " + opponent.name + " med ett vildsint skrik!")
        opponent.hurt(this.dmg);

    }

    console.log("En krigare är född! Han kallas " + this.name + ". Hen är stark, mycket stark! Hen har " + this.dmg + " i styrka. ");

}