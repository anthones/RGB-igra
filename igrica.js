var brojKocki = 9;
var boi = [];
var izbranaBoja;
var kocki = document.querySelectorAll(".kvadrat");
var prikaziBoja = document.getElementById('PrikaziBoja');
var prikazanaPoraka = document.querySelector("#poraka");
var h1 = document.querySelector("h1");
var resetKopce = document.querySelector("#reset");
var opcijaKopce = document.querySelectorAll(".opcija");

init();

function init(){
	glavnaKopcinja();
	glavnaKocki();
	reset();
}

function glavnaKopcinja() {
	for(var i = 0; i < opcijaKopce.length; i++) {
		opcijaKopce[i].addEventListener("click", function(){
			opcijaKopce[0].classList.remove("selektirano");
			opcijaKopce[1].classList.remove("selektirano");
			this.classList.add("selektirano");
			this.textContent === "Лесно" ? brojKocki = 6 : brojKocki = 9;
			reset();
		});
	}
}

function glavnaKocki() {
	for (var i = 0; i < kocki.length; i++) {
		kocki[i].addEventListener("click", function(){
			var kliknataBoja = this.style.backgroundColor;
			if (kliknataBoja === izbranaBoja) {
				prikazanaPoraka.textContent = "Браво!";
				smeniBoja(kliknataBoja);
				h1.style.background = kliknataBoja;
				resetKopce.textContent = "Уште еднаш?";
			} else {
				this.style.background = "#777";
				prikazanaPoraka.textContent = "Уште еднаш?";
			}
		});
	}
}

function reset() {
	boi = generirajRandomBoja(brojKocki);
	izbranaBoja = izberiBoja();
	prikaziBoja.textContent = izbranaBoja;
	resetKopce.textContent = "Нови Бои";
	prikazanaPoraka.textContent = "";
	for (var i = 0; i < kocki.length; i++) {
		if(boi[i]) {
			kocki[i].style.display = "block";
			kocki[i].style.background = boi[i];
		} else {
			kocki[i].style.display = "none";
		}
	}
	h1.style.background = "maroon";
}

resetKopce.addEventListener("click", function(){
	reset();
});
	
for (var i = 0; i < kocki.length; i++) {
	kocki[i].addEventListener("click", function(){
		var kliknataBoja = this.style.backgroundColor;
		if (kliknataBoja === izbranaBoja) {
			prikazanaPoraka.textContent = "Браво!";
			smeniBoja(kliknataBoja);
			h1.style.background = kliknataBoja;
			resetKopce.textContent = "Уште Еднаш?";
		} else {
			this.style.background = "#777";
			prikazanaPoraka.textContent = "Погрешен Избор";
		}
	});
}

function smeniBoja(boja){
	for (var i = 0; i < boi.length; i++) {
		kocki[i].style.background = boja;
	}
}

function izberiBoja(){
	var random = Math.floor(Math.random() *  boi.length); 
	return boi[random];
}

function generirajRandomBoja(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomBoja())
	}
	return arr;
}

function randomBoja(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}