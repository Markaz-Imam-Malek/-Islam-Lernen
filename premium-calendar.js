/* ===========================================
   MARKAZ IMAM MALIK
   ISLAMIC CALENDAR V2
=========================================== */

(function(){

const container = document.createElement("section");

container.className = "markaz-dashboard";

container.innerHTML = `

<div class="markaz-widget">
  <h3>📅 Heute</h3>
  <strong id="todayIslamicDate">...</strong>
</div>

<div class="markaz-widget">
  <h3>🌙 Ramadan</h3>
  <strong id="ramadanInfo">...</strong>
</div>

<div class="markaz-widget">
  <h3>🎉 Eid al-Fitr</h3>
  <strong id="fitrInfo">...</strong>
</div>

<div class="markaz-widget">
  <h3>🕋 Eid al-Adha</h3>
  <strong id="adhaInfo">...</strong>
</div>

<div class="markaz-widget">
  <h3>🌹 Mawlid</h3>
  <strong id="mawlidInfo">...</strong>
</div>

<div class="markaz-widget">
  <h3>📖 1 Muharram</h3>
  <strong id="muharramInfo">...</strong>
</div>

<div class="markaz-widget">
  <h3>⭐ Ashura</h3>
  <strong id="ashuraInfo">...</strong>
</div>

<div class="markaz-widget">
  <h3>🕋 Hajj Saison</h3>
  <strong id="hajjInfo">...</strong>
</div>

`;

const prayerCard =
document.querySelector("#markaz-prayer-card");

if(prayerCard){
  prayerCard.parentNode.insertBefore(
    container,
    prayerCard
  );
}else{
  document.body.prepend(container);
}

/* ---------- Islamisches Datum ---------- */

const islamic =
new Intl.DateTimeFormat(
'de-TN-u-ca-islamic',
{
 day:'numeric',
 month:'long',
 year:'numeric'
}
);

document
.getElementById("todayIslamicDate")
.textContent=
islamic.format(new Date());

/* ---------- Hilfsfunktion ---------- */

function countdown(target){

const now = new Date();

const diff =
target.getTime() -
now.getTime();

if(diff <= 0){

return "Läuft";

}

const days =
Math.floor(
diff /
(1000*60*60*24)
);

return days + " Tage";

}

/* ==================================
   DATEN 2027
================================== */

/*
Diese Daten später jährlich anpassen.
*/

const ramadan =
new Date("2027-02-08");

const fitr =
new Date("2027-03-10");

const adha =
new Date("2027-05-17");

const mawlid =
new Date("2027-09-14");

const muharram =
new Date("2027-06-07");

const ashura =
new Date("2027-06-16");

const arafah =
new Date("2027-05-16");

const hajj =
new Date("2027-05-13");

/* ---------- RAMADAN ---------- */

document
.getElementById("ramadanInfo")
.textContent =
countdown(ramadan);

/* ---------- FITR ---------- */

document
.getElementById("fitrInfo")
.textContent =
countdown(fitr);

/* ---------- ADHA ---------- */

document
.getElementById("adhaInfo")
.textContent =
countdown(adha);

/* ---------- MAWLID ---------- */

document
.getElementById("mawlidInfo")
.textContent =
countdown(mawlid);

/* ---------- MUHARRAM ---------- */

document
.getElementById("muharramInfo")
.textContent =
countdown(muharram);

/* ---------- ASHURA ---------- */

document
.getElementById("ashuraInfo")
.textContent =
countdown(ashura);

/* ---------- HAJJ ---------- */

document
.getElementById("hajjInfo")
.textContent =
countdown(hajj);

/* ==================================
   FREITAG ERKENNEN
================================== */

const friday =
document.createElement("div");

friday.className =
"markaz-widget";

if(new Date().getDay() === 5){

friday.innerHTML = `
<h3>🌙 Freitag</h3>
<strong>
Sure Al-Kahf lesen
</strong>
`;

container.appendChild(friday);

}

/* ==================================
   ARAFAH INFO
================================== */

const arafahCard =
document.createElement("div");

arafahCard.className =
"markaz-widget";

arafahCard.innerHTML = `
<h3>🏔️ Tag von Arafah</h3>
<strong>
${countdown(arafah)}
</strong>
`;

container.appendChild(arafahCard);

})();
