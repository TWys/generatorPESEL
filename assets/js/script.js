document.getElementById("generate_basic").addEventListener("click", generateBasic);
document.getElementById("generate_advanced").addEventListener("click", generateAdvanced);


function check() {

}

function generateBasic() {
	var pesel;
	var tmp;
	var suma;
	var pesel_tab =[];
	
	tmp = rand(0,99)	//rok
	if (tmp < 10) {
		tmp='0'+tmp;
	}
	pesel=tmp.toString();
	
	tmp = rand(1,12)	//miesiac
	if (tmp < 10) {
		tmp='0'+tmp;
	}
	pesel=pesel+tmp.toString();
	
	tmp = rand(1,31)	//dzien
	if (tmp < 10) {
		tmp='0'+tmp;
	}
	pesel=pesel+tmp.toString();
	tmp = rand(1000,9999)	//4 kolejne cyfry
	pesel=pesel+tmp.toString();
		
	for (var i=0;i<pesel.length;i++) {		//suma kontrolna
	pesel_tab.push(parseInt(pesel.charAt(i),10));
	}
	suma=(9*pesel_tab[0]+7*pesel_tab[1]+3*pesel_tab[2]+pesel_tab[3]+9*pesel_tab[4]+7*pesel_tab[5]+3*pesel_tab[6]+pesel_tab[7]+9*pesel_tab[8]+7*pesel_tab[9])%10;	//suma kontrolna
	pesel=pesel+suma.toString();
	console.log(pesel);
	document.getElementById("basic_pesel_box").innerHTML = pesel;
}

function generateAdvanced() {
	var pesel;
	var tmp;
	var suma;
	var pesel_tab =[];
	var rok = document.getElementById("rok").value;
	var mies = document.getElementById("miesiac").value;
	var dzien = document.getElementById("dzien").value;
	
	tmp = rok%100;	//rok
	if (rok<1900 || rok>2018) {
		tmp = rand(0,99)
		document.getElementById("rok").value=parseInt('19'+tmp,10);
		if (tmp < 10) {
			tmp='0'+tmp;
		}
	}
	if (tmp<10) {
		tmp='0'+tmp;
	}
	pesel=tmp.toString();
	
	mies=parseInt(mies,10);	//miesiac
	if (mies>12) {
		mies=12;
	}
	if (rok>1999) {
		mies = mies+20;
	}
	if (mies<10) {
		mies = '0'+mies;
	}
	pesel=pesel+mies.toString();
	
	dzien=parseInt(dzien,10);	//dzien
	if (dzien>31) {
		dzien=31;
	}
	if (dzien<10) {
		dzien = '0'+dzien;
	}
	pesel=pesel+dzien.toString();
	
	tmp = rand(0,999)	//3 kolejne cyfry
	if (tmp<10) {
		tmp='00'+tmp.toString();
	}
	if (tmp>9 && tmp<100) {
		tmp='0'+tmp.toString();
	}
	pesel=pesel+tmp.toString();
	
	var kobieta = [0,2,4,6,8];	// płeć
	var mezczyzna = [1,3,5,7,9];
	if (document.getElementById("kobieta").checked == true) {
		tmp = kobieta[rand(0,4)];
	}
	else if (document.getElementById("mezczyzna").checked == true) {
		tmp = mezczyzna[rand(0,4)]; 
	}
	else {
		tmp = rand(0,9);
	}
	pesel=pesel+tmp.toString();
	
	for (var i=0;i<pesel.length;i++) {		//suma kontrolna
	pesel_tab.push(parseInt(pesel.charAt(i),10));
	}
	suma=(9*pesel_tab[0]+7*pesel_tab[1]+3*pesel_tab[2]+pesel_tab[3]+9*pesel_tab[4]+7*pesel_tab[5]+3*pesel_tab[6]+pesel_tab[7]+9*pesel_tab[8]+7*pesel_tab[9])%10;	//suma kontrolna
	pesel=pesel+suma.toString();
	console.log(pesel);
	document.getElementById("advanced_pesel_box").innerHTML = pesel;
}


function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function copyToClipboard(el_id) {
	var range = document.createRange();
    range.selectNode(document.getElementById(el_id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}