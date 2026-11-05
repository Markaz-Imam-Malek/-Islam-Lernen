/* =========================
   MARKAZ IMAM MALIK V2
========================= */

(function () {

  /* Himmel-Hintergrund */
  const stars = document.createElement("div");

  stars.innerHTML = `
    <style>

      body{
        background:
        linear-gradient(
        180deg,
        #07111f 0%,
        #102544 40%,
        #183b66 70%,
        #08111d 100%) !important;
      }

      .markaz-stars{
        position:fixed;
        inset:0;
        pointer-events:none;
        z-index:-1;
        overflow:hidden;
      }

      .markaz-stars span{
        position:absolute;
        width:2px;
        height:2px;
        background:#fff;
        border-radius:50%;
        animation:twinkle 4s infinite;
      }

      @keyframes twinkle{
        0%,100%{opacity:.2;}
        50%{opacity:1;}
      }

      .markaz-dashboard{
        max-width:1100px;
        margin:25px auto;
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
        gap:15px;
      }

      .markaz-widget{
        background:rgba(255,255,255,.08);
        backdrop-filter:blur(12px);
        border:1px solid rgba(255,255,255,.15);
        border-radius:20px;
        padding:20px;
        color:white;
        text-align:center;
        box-shadow:0 10px 25px rgba(0,0,0,.25);
      }

      .markaz-widget h3{
        margin:0 0 10px;
        color:#F3D38C;
      }

      .markaz-widget strong{
        font-size:28px;
      }

    </style>

    <div class="markaz-stars"></div>
  `;

  document.body.prepend(stars);

  const starContainer = document.querySelector(".markaz-stars");

  for(let i=0;i<120;i++){
      let s=document.createElement("span");
      s.style.left=Math.random()*100+"%";
      s.style.top=Math.random()*100+"%";
      s.style.animationDelay=Math.random()*4+"s";
      starContainer.appendChild(s);
  }

  /* Dashboard */

  const dashboard = document.createElement("section");

  dashboard.className="markaz-dashboard";

  dashboard.innerHTML=`

   <div class="markaz-widget">
     <h3>🕌 Nächstes Gebet</h3>
     <strong id="nextPrayerName">...</strong>
     <div id="nextPrayerTimer">--:--</div>
   </div>

   <div class="markaz-widget">
     <h3>🌙 Islamischer Monat</h3>
     <strong id="islamicDate">...</strong>
   </div>

   <div class="markaz-widget">
     <h3>📅 Ramadan</h3>
     <strong id="ramadanCountdown">...</strong>
   </div>

   <div class="markaz-widget">
     <h3>🎉 Nächstes Fest</h3>
     <strong id="nextEvent">...</strong>
   </div>

  `;

  document.body.insertBefore(
    dashboard,
    document.body.firstChild.nextSibling
  );

  /* Islamisches Datum */

  const islamicFormatter =
  new Intl.DateTimeFormat(
      "de-TN-u-ca-islamic",
      {
        day:"numeric",
        month:"long",
        year:"numeric"
      }
  );

  document.getElementById("islamicDate")
  .textContent =
  islamicFormatter.format(new Date());

  /* Ramadan Countdown */

  const ramadan =
  new Date("2027-02-08");

  function updateRamadan(){

      const now = new Date();

      const diff =
      Math.ceil(
        (ramadan-now)/
        (1000*60*60*24)
      );

      if(diff>0){
          document.getElementById(
          "ramadanCountdown"
          ).textContent=
          diff+" Tage";
      } else {
          document.getElementById(
          "ramadanCountdown"
          ).textContent=
          "Ramadan läuft";
      }
  }

  updateRamadan();

  /* Islamische Feste */

  const events = [

   {
    name:"🌙 Ramadan",
    date:new Date("2027-02-08")
   },

   {
    name:"🎉 Eid al-Fitr",
    date:new Date("2027-03-10")
   },

   {
    name:"🕋 Eid al-Adha",
    date:new Date("2027-05-17")
   },

   {
    name:"🌹 Mawlid",
    date:new Date("2027-09-14")
   },

   {
    name:"📖 1 Muharram",
    date:new Date("2027-06-07")
   }

  ];

  function updateEvent(){

      const now = new Date();

      const next =
      events.find(
      e=>e.date>now
      );

      if(next){
          document.getElementById(
          "nextEvent"
          ).textContent=
          next.name;
      }
  }

  updateEvent();

  /* Nächstes Gebet */

  async function getPrayerTimes(){

   try{

    const url =
    "https://api.aladhan.com/v1/timingsByCity?city=Dortmund&country=Germany&method=3";

    const response =
    await fetch(url);

    const result =
    await response.json();

    const t =
    result.data.timings;

    const prayers = [
      ["Fajr",t.Fajr],
      ["Dhuhr",t.Dhuhr],
      ["Asr",t.Asr],
      ["Maghrib",t.Maghrib],
      ["Isha",t.Isha]
    ];

    const now = new Date();

    const current =
    now.getHours()*60+
    now.getMinutes();

    let next = prayers[0];

    prayers.forEach(p => {

      const parts =
      p[1].split(":");

      const minutes =
      parseInt(parts[0])*60+
      parseInt(parts[1]);

      if(minutes>current && !next.found){

         next=p;
         next.found=true;
      }

    });

    document.getElementById(
    "nextPrayerName"
    ).textContent=
    next[0]+" "+next[1];

   }catch(err){
      console.log(err);
   }
  }

  getPrayerTimes();

  /* Notification */

  if(
    "Notification" in window &&
    Notification.permission !== "granted"
  ){
      Notification.requestPermission();
  }

})();
