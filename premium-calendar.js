
/* MARKAZ IMAM MALIK – ISLAMISCHER KALENDER V3 */
(() => {
  "use strict";

  const old = document.querySelector(".markaz-dashboard");
  if (old) old.remove();

  const section = document.createElement("details");
  section.className = "markaz-calendar-section";

  const summary = document.createElement("summary");
  summary.textContent = "🌙 التقويم الإسلامي · Islamischer Kalender";
summary.style.setProperty("color", "#FFFFFF", "important");
summary.style.setProperty("-webkit-text-fill-color", "#FFFFFF", "important");
  const content = document.createElement("div");
  content.className = "markaz-calendar-content";

  section.append(summary, content);

  const prayerCard = document.querySelector("#markaz-prayer-card");

  if (prayerCard) {
    prayerCard.before(section);
  } else {
    document.body.prepend(section);
  }

  const hijriFormatter = new Intl.DateTimeFormat(
    "ar-SA-u-ca-islamic-umalqura",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const germanDate = new Intl.DateTimeFormat(
    "de-DE",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  const events = [
    { name: "🌙 رمضان · Ramadan", month: 9, day: 1 },
    { name: "🎉 عيد الفطر · Eid al-Fitr", month: 10, day: 1 },
    { name: "🕋 بداية الحج · Beginn des Hajj", month: 12, day: 8 },
    { name: "🏔️ يوم عرفة · Tag von Arafah", month: 12, day: 9 },
    { name: "🕋 عيد الأضحى · Eid al-Adha", month: 12, day: 10 },
    { name: "📖 رأس السنة الهجرية · Islamisches Neujahr", month: 1, day: 1 },
    { name: "⭐ عاشوراء · Ashura", month: 1, day: 10 },
    { name: "🌹 المولد النبوي · Mawlid", month: 3, day: 12 }
  ];

  function hijriParts(date) {
    const parts = new Intl.DateTimeFormat(
      "en-u-ca-islamic-umalqura",
      { year: "numeric", month: "numeric", day: "numeric" }
    ).formatToParts(date);

    const get = type => Number(
      parts.find(p => p.type === type)?.value
    );

    return {
      year: get("year"),
      month: get("month"),
      day: get("day")
    };
  }

  function dateAtNoon(date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12
    );
  }

  function findNextDate(month, day) {
    const today = dateAtNoon(new Date());

    // Search the next 400 Gregorian days.
    for (let i = 0; i <= 400; i++) {
      const candidate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + i,
        12
      );

      const hijri = hijriParts(candidate);

      if (hijri.month === month && hijri.day === day) {
        return candidate;
      }
    }

    return null;
  }

  function remainingDays(target) {
    const now = new Date();
    const todayUTC = Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const targetUTC = Date.UTC(
      target.getFullYear(),
      target.getMonth(),
      target.getDate()
    );

    return Math.round(
      (targetUTC - todayUTC) / 86400000
    );
  }

  function createCard(name, date) {
    const card = document.createElement("div");
    card.className = "markaz-calendar-card";

    const heading = document.createElement("h4");
    heading.textContent = name;

    const dateLine = document.createElement("div");
    dateLine.className = "markaz-calendar-date";

    const daysLine = document.createElement("div");
    daysLine.className = "markaz-calendar-days";

    if (date) {
      const days = remainingDays(date);

      dateLine.textContent =
        "📅 " + germanDate.format(date);

      daysLine.textContent = days === 0
        ? "اليوم · Heute"
        : `باقي ${days} يوم · Noch ${days} Tage`;
    } else {
      dateLine.textContent = "Datum nicht verfügbar";
    }

    card.append(heading, dateLine, daysLine);
    return card;
  }

  function render() {
    content.replaceChildren();

    const todayCard = document.createElement("div");
    todayCard.className = "markaz-calendar-today";

    const todayTitle = document.createElement("h3");
    todayTitle.textContent = "📅 التاريخ الهجري اليوم";

    const todayDate = document.createElement("strong");
    todayDate.textContent = hijriFormatter.format(new Date());

    todayCard.append(todayTitle, todayDate);
    content.appendChild(todayCard);

    const upcoming = events.map(event => ({
      ...event,
      date: findNextDate(event.month, event.day)
    }));

    upcoming.sort((a, b) =>
      (a.date?.getTime() ?? Infinity) -
      (b.date?.getTime() ?? Infinity)
    );

    upcoming.forEach(event => {
      content.appendChild(
        createCard(event.name, event.date)
      );
    });

    const note = document.createElement("p");
    note.className = "markaz-calendar-note";
    note.textContent =
      "Hinweis: Die Daten basieren auf dem Umm-al-Qura-Kalender. " +
      "Religiöse Termine können je nach Mondsichtung um einen Tag abweichen.";

    content.appendChild(note);
  }

  render();
})();
