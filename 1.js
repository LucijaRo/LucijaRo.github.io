const meni = document.querySelector('#meni')
const meniLink = document.querySelector('.navigacija__meni')

meni.addEventListener('click', function() {
    meni.classList.toggle("is-active"); /* ko kliknemo na crtice*/
    meniLink.classList.toggle("active"); /* se aktivira meni*/
});

/*SLIKE TAB*/
const tab = document.querySelector('.locen-tab_dela')
const izbrana = document.querySelector('.izbrana_slika')
const zapri = document.querySelector('.zapreti_tab')
const naslednja = document.querySelector('.naslednja')
const prejsnja = document.querySelector('.prejsnja')
const gumb = document.querySelector('.ven_iz_slike')
const slike = document.querySelectorAll('.dela img') /*All zato, da dobimo array vseh naših slikc!!*/
const stran = document.body; /*celotna stran, aka vse pod <body>*/
let trenutnaSlikaIndeks = 0;
let pozicijaStran = 0;

/*klikneš na eno sliko*/
slike.forEach((slika, indeks) => { /* => da mi ni treba pisat function(...)*/  /*vsaka slikca ma svoj indeks - 1. ma indeks 0*/ /*forEach loopa skozi vse slikce*/
    slika.addEventListener('click', function ()   {
        pozicijaStran = window.scrollY; /*ne gre spet gor na stran, ko klikneš exit*/
        console.log(slike); /*debugging :(*/
        console.log(slika.src); /*debugging :(*/
        stran.classList.add('prikazi'); /*naredi nov class v CSSju*/
        stran.classList.add('skrij_ostalo'); /*naredi nov class v CSSju*/
        tab.classList.add('prikazi');
        izbrana.src = slika.src; /*izbere našo <img src="slikce/x.jpg", kjer je x indeks+1/*/
        trenutnaSlikaIndeks = indeks; /*sprav to kliknjeno slikco v indeks*/
    });
});

/*zapreš tab, ko klikneš na x*/
zapri.addEventListener('click', function() {
    stran.classList.remove('prikazi'); /*znebi novega classa v CSSju*/
    stran.classList.remove('skrij_ostalo'); /*znebi novega classa v CSSju*/
    gumb.classList.toggle("kliknemo"); /* ko kliknemo na x*/
    tab.classList.remove('prikazi');
    window.scrollTo({ top: pozicijaStran, behavior: 'auto' });
});

/*naslednja slika*/
naslednja.addEventListener('click', function() {
    trenutnaSlikaIndeks = (trenutnaSlikaIndeks + 1) % slike.length /*kokr pri pythonu je % modulo --> k delimo indeks gre nazaj na prvo sliko*/
    izbrana.src = slike[trenutnaSlikaIndeks].src;
});

/*prejšnja slika*/
prejsnja.addEventListener('click', function() {
    trenutnaSlikaIndeks = (trenutnaSlikaIndeks - 1 + slike.length) % slike.length /*kokr pri pythonu je % modulo --> k delimo indeks gre nazaj na prvo sliko*/
    izbrana.src = slike[trenutnaSlikaIndeks].src;
});

/*audio*/
const audio = document.querySelector('.player')
const button = document.querySelector(".audio_btn");
const sparkle = button.querySelector(".sparkle");
const dot = document.createElement('span');
dot.classList.add('dot');
dot.style.setProperty('--s', '8px');
playing = false;

    button.addEventListener("click", function() {
        if (!playing) { /*ko je playing false*/
            audio.play();
            playing = true;
        } else {
            audio.pause();
            playing = false;
        }
        sparkle.classList.remove("sparkle"); /*odstranimo .sparkle v cssju*/
        void sparkle.offsetWidth; /*basically prisiliš browser, da pregleda state sparklea ; izognes batch spreminjanju*/
        sparkle.classList.add("sparkle"); /*pojavi .sparkle v cssju*/

        dot.classList.remove("dot"); /*odstranimo .sparkle v cssju*/
        void dot.offsetWidth; /*basically prisiliš browser, da pregleda state sparklea ; izognes batch spreminjanju*/
        dot.classList.add("dot"); /*pojavi .sparkle v cssju*/
});
