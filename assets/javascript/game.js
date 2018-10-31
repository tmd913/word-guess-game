// pokemon word game

const pokemonNumbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    , 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    , 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    , 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    , 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
    , 61, 62, 63, 64, 65, 66, 67, 68, 69, 70
    , 71, 72, 73, 74, 75, 76, 77, 78, 79, 80
    , 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
    , 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
    , 101, 102, 103, 104, 105, 106, 107, 108, 109, 110
    , 111, 112, 113, 114, 115, 116, 117, 118, 119, 120
    , 121, 122, 123, 124, 125, 126, 127, 128, 129, 130
    , 131, 132, 133, 134, 135, 136, 137, 138, 139, 140
    , 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151
];

const pokemonNames = [
      "Bulbasaur"
    , "Ivysaur"
    , "Venusaur"
    , "Charmander"
    , "Charmeleon"
    , "Charizard"
    , "Squirtle"
    , "Wartortle"
    , "Blastoise"
    , "Caterpie"
    , "Metapod"
    , "Butterfree"
    , "Weedle"
    , "Kakuna"
    , "Beedrill"
    , "Pidgey"
    , "Pidgeotto"
    , "Pidgeot"
    , "Rattata"
    , "Raticate"
    , "Spearow"
    , "Fearow"
    , "Ekans"
    , "Arbok"
    , "Pikachu"
    , "Raichu"
    , "Sandshrew"
    , "Sandslash"
    , "Nidoran" // non-letter
    , "Nidorina"
    , "Nidoqueen"
    , "Nidoran" // non-letter
    , "Nidorino"
    , "Nidoking"
    , "Clefairy"
    , "Clefable"
    , "Vulpix"
    , "Ninetales"
    , "Jigglypuff"
    , "Wigglytuff"
    , "Zubat"
    , "Golbat"
    , "Oddish"
    , "Gloom"
    , "Vileplume"
    , "Paras"
    , "Parasect"
    , "Venonat"
    , "Venomoth"
    , "Diglett"
    , "Dugtrio"
    , "Meowth" // new pic
    , "Persian"
    , "Psyduck"
    , "Golduck"
    , "Mankey"
    , "Primeape"
    , "Growlithe"
    , "Arcanine"
    , "Poliwag"
    , "Poliwhirl"
    , "Poliwrath"
    , "Abra"
    , "Kadabra"
    , "Alakazam"
    , "Machop"
    , "Machoke"
    , "Machamp"
    , "Bellsprout"
    , "Weepinbell"
    , "Victreebel"
    , "Tentacool"
    , "Tentacruel"
    , "Geodude"
    , "Graveler"
    , "Golem"
    , "Ponyta"
    , "Rapidash"
    , "Slowpoke"
    , "Slowbro"
    , "Magnemite"
    , "Magneton"
    , "Farfetchd"
    , "Doduo"
    , "Dodrio"
    , "Seel"
    , "Dewgong"
    , "Grimer"
    , "Muk"
    , "Shellder"
    , "Cloyster"
    , "Gastly"
    , "Haunter"
    , "Gengar"
    , "Onix"
    , "Drowzee"
    , "Hypno"
    , "Krabby"
    , "Kingler"
    , "Voltorb"
    , "Electrode"
    , "Exeggcute"
    , "Exeggutor"
    , "Cubone"
    , "Marowak"
    , "Hitmonlee"
    , "Hitmonchan"
    , "Lickitung"
    , "Koffing"
    , "Weezing"
    , "Rhyhorn"
    , "Rhydon"
    , "Chansey"
    , "Tangela"
    , "Kangaskhan"
    , "Horsea"
    , "Seadra"
    , "Goldeen"
    , "Seaking"
    , "Staryu"
    , "Starmie"
    , "MrMime" // non-letter
    , "Scyther"
    , "Jynx"
    , "Electabuzz"
    , "Magmar"
    , "Pinsir"
    , "Tauros"
    , "Magikarp"
    , "Gyrados"
    , "Lapras"
    , "Ditto"
    , "Eevee"
    , "Vaporeon"
    , "Jolteon"
    , "Flareon"
    , "Porygon"
    , "Omanyte"
    , "Omastar"
    , "Kabuto"
    , "Kabutops"
    , "Aerodactyl"
    , "Snorlax"
    , "Articuno"
    , "Zapdos"
    , "Moltres"
    , "Dratini"
    , "Dragonair"
    , "Dragonite"
    , "Mewtwo"
    , "Mew"
];

/*
-- first page (pokemon 1-100) --
var imgs = document.querySelectorAll(".imgboxart img");
for (var i = 0; i < imgs.length; i++) {
	console.log(imgs[i].getAttribute(src)); 
}
var pokemon = [];
for (var i = 3; i < imgs.length; i++) {
	pokemon[i-3] = imgs[i].src; 
}
pokemon;

-- second page (remaining pokemon) --
imgs = document.querySelectorAll(".imgboxart img");
for (var i = 0; i < imgs.length; i++) {
	console.log(imgs[i].getAttribute(src)); 
}
pokemon = [];
for (var i = 3; i < imgs.length; i++) {
	pokemon[i-3] = imgs[i].src; 
}
pokemon;
*/
const pokemonImages = [
    "https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891759-002ivysaur.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891760-003venusaur.png", "https://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891762-005charmeleon.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891763-006charizard.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891764-007squirtle.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891809-008wartortle.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891810-009blastoise.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892132-010caterpie.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1895815-011metapod.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892298-012butterfree.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891817-013weedle.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891818-014kakuna.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891819-015beedrill.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891631-016pidgey.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891820-017pidgeotto.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891821-018pidgeot.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898244-019rattata.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898245-020raticate.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898246-021spearow.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898247-022fearow.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898239-023ekans.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1895870-024arbok.png", "https://static.giantbomb.com/uploads/scale_small/0/6087/2437349-pikachu.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898248-026raichu.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891822-027sandshrew.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891682-028sandslash.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898252-029nidoran.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898253-030nidorina.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898254-031nidoqueen.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898249-032nidoran.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898250-033nidorino.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898251-034nidoking.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898255-035clefairy.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898256-036clefable.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891638-037vulpix.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891823-038ninetales.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892299-039jigglypuff.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891680-040wigglytuff.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891824-041zubat.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891826-042golbat.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891711-043oddish.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898257-044gloom.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898258-045vileplume.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898259-046paras.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898260-047parasect.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892300-048venonat.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892301-049venomoth.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892133-050diglett.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1894634-051dugtrio.png", "https://upload.wikimedia.org/wikipedia/en/a/aa/Pok%C3%A9mon_Meowth_art.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898262-053persian.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892134-054psyduck.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892302-055golduck.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892135-056mankey.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892055-057primeape.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891827-058growlithe.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891828-059arcanine.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891829-060poliwag.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891830-061poliwhirl.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891831-062poliwrath.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891834-063abra.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891835-064kadabra.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891836-065alakazam.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892303-066machop.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892304-067machoke.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892305-068machamp.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898263-069bellsprout.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898264-070weepinbell.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898265-071victreebel.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892306-072tentacool.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892307-073tentacruel.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898243-074geodude.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898242-075graveler.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892308-076golem.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892309-077ponyta.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892310-078rapidash.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892136-079slowpoke.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892311-080slowbro.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892312-081magnemite.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892313-082magneton.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891838-083farfetch_d.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892314-084doduo.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892315-085dodrio.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892316-086seel.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892317-087dewgong.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898266-088grimer.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892056-089muk.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892137-090shellder.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892318-091cloyster.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891839-092gastly.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891840-093haunter.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891841-094gengar.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891842-095onix.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898267-096drowzee.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898268-097hypno.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891843-098krabby.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891844-099kingler.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892678-100voltorb.png",
    "https://static.giantbomb.com/uploads/scale_small/13/135472/1892679-101electrode.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898269-102exeggcute.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898270-103exeggutor.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891845-104cubone.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891846-105marowak.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892680-106hitmonlee.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892681-107hitmonchan.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898271-108lickitung.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892138-109koffing.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898274-110weezing.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892682-111rhyhorn.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892683-112rhydon.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892684-113chansey.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898275-114tangela.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898276-115kangaskhan.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891847-116horsea.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891849-117seadra.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898280-118goldeen.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898282-119seaking.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892685-120staryu.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892686-121starmie.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898289-122mr._mime.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891850-123scyther.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898290-124jynx.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892687-125electabuzz.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1895802-126magmar.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891851-127pinsir.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891852-128tauros.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898291-129magikarp.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891635-130gyarados.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891870-131lapras.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891871-132ditto.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891681-133eevee.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891872-134vaporeon.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891873-135jolteon.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891874-136flareon.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1898292-137porygon.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892688-138omanyte.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892689-139omastar.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891959-140kabuto.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891960-141kabutops.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891961-142aerodactyl.png", "https://static.giantbomb.com/uploads/scale_small/0/4986/406919-143snorlax.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892690-144articuno.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892691-145zapdos.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891710-146moltres.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1910790-147dratini_ag_anime.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1891876-148dragonair.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1892692-149dragonite.png", "https://static.giantbomb.com/uploads/scale_small/13/135472/1895869-150mewtwo.png", "https://vignette.wikia.nocookie.net/deathbattle/images/2/20/Mew_%28anime_AG%29.png/revision/latest?cb=20160122230745"
]

const themeSounds = [
    "./assets/sounds/101-opening.mp3",
    "./assets/sounds/111-pokemon\ recovery.mp3",
    "./assets/sounds/110-pokemon\ center.mp3",
    "./assets/sounds/107-battle\ \(vs\ wild\ pokemon\).mp3",
    "./assets/sounds/108-victory\ \(vs\ wild\ pokemon\).mp3",
    "./assets/sounds/115-battle\ \(vs\ trainer\).mp3",
    "./assets/sounds/116-victory\ \(vs\ trainer\).mp3",
    "./assets/sounds/128-battle\ \(vs\ gym\ leader\).mp3",
    "./assets/sounds/129-victory\ \(vs\ gym\ leader\).mp3",
    "./assets/sounds/143-last\ battle\ \(vs\ rival\).mp3",
    "./assets/sounds/145-ending.mp3"
]

/*
// display all 151 pokemon images in html
for (let i = 0; i < pokemonImages.length; i++) {
    // create html element
    var img = document.createElement("img");

    // set attributes for html element
    img.src = pokemonImages[i];
    img.style.height = "200px";
    img.style.width = "200px";

    // add images to html
    var src = document.getElementById("content");
    src.appendChild(img);
}
*/

// =======================================================
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
// =======================================================

// =======================================================
let easy = document.querySelector("#easy");
let normal = document.querySelector("#normal");
let hard = document.querySelector("#hard");
let master = document.querySelector("#master");

easy.onclick = function () {
    numGuesses = 7;
    currentBattle = 3;
    currentVictory = 4;
    containerLanding.classList.add("displayNone");
    containerGameplay.classList.remove("displayNone");
    currentGame.playSong();
}

normal.onclick = function () {
    numGuesses = 5;
    currentBattle = 5;
    currentVictory = 6;
    containerLanding.classList.add("displayNone");
    containerGameplay.classList.remove("displayNone");
    currentGame.playSong();
}

hard.onclick = function () {
    numGuesses = 3;
    currentBattle = 7;
    currentVictory = 8;
    containerLanding.classList.add("displayNone");
    containerGameplay.classList.remove("displayNone");
    currentGame.playSong();
}

master.onclick = function () {
    numGuesses = 1;
    currentBattle = 9;
    currentVictory = 10;
    containerLanding.classList.add("displayNone");
    containerGameplay.classList.remove("displayNone");
    currentGame.playSong();
}
// =======================================================

// =======================================================
let currentSong = document.querySelector("audio");
let body = document.querySelector("body");
let containerGameplay = document.querySelector("#container-gameplay");
let containerLanding = document.querySelector("#container-landing");
let headerDisplay = document.querySelector("#whoDat");
let pokemonImage = document.querySelector(".pokemonImage");
let keyDisplay = document.querySelector("#key");
let messageDisplay = document.querySelector("#message");
let guessesRemainingDisplay = document.querySelector("#guessesRemaining");
let guessesRemainingParagraphDisplay = document.querySelector(".guessesRemainingParagraph");
let mysteryPokemonDisplay = document.querySelector(".mysteryPokemon");
let winsDisplay = document.querySelector("#wins");
let winsParagraphDisplay = document.querySelector(".winsParagraph");
let gbaContainer = document.querySelector("#gba");
let resultDisplay = document.querySelector("#result");
// =======================================================

// =======================================================
let pokemonArray = [];

// creates array of pokemon objects for each of the 151 pokemon
for (let index = 0; index < pokemonNumbers.length; index++) {
    const number = pokemonNumbers[index];
    const name = pokemonNames[index];
    const img = pokemonImages[index];
    pokemonArray[index] = new Pokemon(number, name, img);
}
// =======================================================

// =======================================================
let newButton = document.querySelector("#newButton");
let newBall = document.querySelector("#newBall");
let pauseButton = document.querySelector("#pauseButton");

newButton.style.outline = "none !important";
newButton.style.boxShadow = "none";

newBall.style.outline = "none !important";
newBall.style.boxShadow = "none";

pauseButton.style.outline = "none !important";
pauseButton.style.boxShadow = "none";

newButton.onclick = function () {
    currentGame.newGame(numGuesses);
}

newBall.onclick = function () {
    window.location.reload();
}

pauseButton.onclick = function () {
    currentGame.pauseSong();
}
// =======================================================

// =======================================================
let startingPokemon = generatePokemon();
let currentGame = new Game(startingPokemon, 5);
let numGuesses;
let currentBattle;
let currentVictory;
// =======================================================

// constructor for pokemon object
function Pokemon(number, name, img) {
    this.number = number,
    this.name = name,
    this.img = img
}

// add functions to object
// constructor for game object
function Game(pokemon, guesses) {
    this.pokemon = pokemon,
    this.currentLetter = "",
    this.isCorrectGuess = false,
    this.lettersGuessedArray = [],
    this.hint = "",
    this.remainingWord = this.pokemon.name.toLowerCase(),
    this.lettersGuessed = 0,
    this.guessesRemaining = guesses,
    this.isWinner = false,
    this.gameStarted = false,
    this.scrolled = false,
    this.gameOver = false,
    this.wins = 0,
    /*
    generates new pokemon by calling generatePokemon()
    resets lettersGuessed, guessesRemaining, gameOver, lettersGuessedArray
    starts intro song
    */
    this.newGame = function (guesses) {
        this.pokemon = generatePokemon();
        this.currentLetter = "";
        this.isCorrectGuess = false;
        this.lettersGuessed = 0;
        this.lettersGuessedArray = [];
        this.hint = "";
        this.remainingWord = this.pokemon.name.toLowerCase();
        this.guessesRemaining = guesses;
        this.isWinner = false;
        this.gameStarted = true;
        this.gameOver = false;
        this.changeSong(themeSounds[currentBattle]);
        this.playSong();
        pokemonImage.src = this.pokemon.img;
        pokemonImage.classList.remove("displayNone");
        pokemonImage.classList.remove("bright");
        gbaContainer.classList.remove("displayNone");
        guessesRemainingDisplay.innerHTML = this.guessesRemaining;
        keyDisplay.innerHTML = "";
        messageDisplay.innerHTML = "";
        resultDisplay.innerHTML = "";
        this.generateHint();
        headerDisplay.innerHTML = "Who's that Pok&eacute;mon?"
    },
    this.generateHint = function () {
        let nameLength = this.pokemon.name.length;
        mysteryPokemonDisplay.innerHTML = "";

        for (let i = 0; i < nameLength; i++) {
            this.hint += "_";
        }

        if (this.pokemon.number === 29) {
            mysteryPokemonDisplay.innerHTML = this.hint + "&#9792;";
        } else if (this.pokemon.number === 32) {
            mysteryPokemonDisplay.innerHTML = this.hint + "&#9794;";
        } else if (this.pokemon.number === 122) {
            mysteryPokemonDisplay.innerHTML = this.hint.substring(0, 2) + ". " + this.hint.substring(2);
        } else {
            mysteryPokemonDisplay.innerHTML = this.hint;
        }
    },
    /*
    checks the pokemon name of interest for the letter guessed by the user
    calls update()
    */
    this.checkGuess = function (letter) {
        this.currentLetter = letter.toLowerCase();
        let currentWord = this.pokemon.name.toLowerCase();
        this.isCorrectGuess = false;

        if (this.lettersGuessedArray.indexOf(this.currentLetter) < 0) {
            if (currentWord.indexOf(this.currentLetter) >= 0) {
                messageDisplay.innerHTML = "Correct";
                this.isCorrectGuess = true;
                this.update(this.isCorrectGuess, this.currentLetter);
            } else {
                messageDisplay.innerHTML = "Incorrect";
                this.update(this.isCorrectGuess);
            }
        } else {
            messageDisplay.innerHTML = "You already guessed " + this.currentLetter;
        }

        if (this.lettersGuessedArray.indexOf(this.currentLetter) < 0) {
            this.lettersGuessedArray.push(this.currentLetter);
        }
    },
    /*
    increments lettersGuessed
    decrements guessesRemaing
    checks if game is over (correctly guessed or out of guesses)
    assigns boolean value to winner property
    calls endGame(winner)
    */
    this.update = function (isCorrect, letter) {
        this.lettersGuessed++;
        this.isCorrectGuess = isCorrect;

        if (isCorrect) {
            this.removeCorrectLetter();
            this.updateHint(letter);
        } else {
            this.guessesRemaining--;
            guessesRemainingDisplay.innerHTML = this.guessesRemaining;
        }

        if (this.remainingWord.length === 0 || this.guessesRemaining === 0) {
            this.endGame(isCorrect);
        }
    },
    this.removeCorrectLetter = function () {
        let replace = this.currentLetter;
        let re = new RegExp(replace, "g");
        this.remainingWord = this.remainingWord.replace(re, "");
    },
    this.updateHint = function (letter) {
        let name = this.pokemon.name.toLowerCase();
        let nameLength = name.length;

        for (let i = 0; i < nameLength; i++) {
            if (name[i] === letter) {
                this.hint = this.hint.replaceAt(i, letter);
            } 
        }

        if (this.pokemon.number === 29) {
            mysteryPokemonDisplay.innerHTML = this.hint + "&#9792;";
        } else if (this.pokemon.number === 32) {
            mysteryPokemonDisplay.innerHTML = this.hint + "&#9794;";
        } else if (this.pokemon.number === 122) {
            mysteryPokemonDisplay.innerHTML = this.hint.substring(0, 2) + ". " + this.hint.substring(2);
        } else {
            mysteryPokemonDisplay.innerHTML = this.hint;
        }
    },
    this.playSong = function () {
        currentSong.currentTime = 0;
        currentSong.play();
    },
    this.pauseSong = function () {
        currentSong.pause();
    },
    this.changeSong = function (newSong) {
        currentSong.src = newSong;
    },
    // function endGame(winner)
    /*
    adds pokemon name, number, and image to html
    provides user with feedback dependent on whether or not they won
    song played changes depending on whether or not the player won
    if winner is true then increment wins
    */
    this.endGame = function (winner) {
        this.gameOver = true;
        pokemonImage.classList.add("bright");

        if (winner) {
            messageDisplay.innerHTML = "You win";
            resultDisplay.innerHTML = "You're a Pok&eacute;mon Master!";
            this.isWinner = true;
            this.wins++;
            winsDisplay.innerHTML = this.wins;
            this.changeSong(themeSounds[currentVictory]);
            this.playSong();
        } else {
            containerGameplay.classList.add("displayNone");
            body.classList.add("blackout");
            messageDisplay.innerHTML = "You lose";
            resultDisplay.innerHTML = "You need more training!";
            this.pauseSong();
            this.changeSong(themeSounds[1]);
            this.playSong();
            setTimeout( function () {
                containerGameplay.classList.remove("displayNone");
                body.classList.remove("blackout");
                currentGame.changeSong(themeSounds[2]);
                currentGame.playSong();
            }, 5000);
            // setTimeout(this.changeSong, 5000, themeSounds[4])
        }

        if (this.pokemon.number === 29) {
            headerDisplay.innerHTML = "It's " + this.pokemon.name + "&#9792;" + "!";
        } else if (this.pokemon.number === 32) {
            headerDisplay.innerHTML = "It's " + this.pokemon.name + "&#9794;" + "!";
        } else if (this.pokemon.number === 122) {
            headerDisplay.innerHTML = "It's " + this.pokemon.name.substring(0, 2) + ". " + this.pokemon.name.substring(2) + "!";
        } else {
            headerDisplay.innerHTML = "It's " + this.pokemon.name + "!";
        }
    }
}

/*
generates random number between 0 and 150 corresponding to each pokemon object
assigns relevant values to game object's name, number, and image properties
*/
function generatePokemon () {
    let rand = Math.floor(Math.random() * 151);
    return pokemonArray[rand];
};

// handles key up events
document.onkeyup = function (event) {
    // determines which key was pressed.
    var keyPressed = event.key;
    var keyCode = event.keyCode;

    if (currentGame.gameStarted == true && currentGame.gameOver == false) {

        // keyDisplay.innerHTML = lettersGuessedArray;
        console.log(keyPressed.keyCode);

        if (keyCode >= 65 && keyCode <= 90) {
            currentGame.checkGuess(keyPressed, currentGame.pokemon.name);
            keyDisplay.innerHTML = currentGame.lettersGuessedArray;
        } else {
            messageDisplay.innerHTML = "Please enter a letter";
        }
    }
};

