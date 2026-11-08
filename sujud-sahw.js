
/* MARKAZ IMAM MALIK
   سجود السهو عند المالكية
   Sujud as-Sahw nach der malikitischen Rechtsschule
*/

(function () {
  "use strict";

  if (document.getElementById("markaz-sahw")) return;

  const style = document.createElement("style");
  style.textContent = `
    #markaz-sahw {
      background:#FFFDF8 !important;
      border:2px solid #C6A66B;
      border-radius:18px;
      padding:18px;
      margin:20px auto;
      max-width:1000px;
      color:#244936 !important;
      font-family:'Cairo',sans-serif;
      line-height:1.9;
    }
    #markaz-sahw, #markaz-sahw * {
      box-sizing:border-box;
      -webkit-text-fill-color:initial;
    }
    #markaz-sahw h2 {
      color:#315640 !important;
      text-align:center;
      font-size:25px;
    }
    #markaz-sahw h3 {
      color:#315640 !important;
      font-size:20px;
      margin:10px 0;
    }
    #markaz-sahw p,
    #markaz-sahw li,
    #markaz-sahw td,
    #markaz-sahw th {
      color:#244936 !important;
    }
    #markaz-sahw .sahw-de {
      display:block;
      direction:ltr;
      text-align:left;
      font-size:14px;
      color:#53665A !important;
      margin-top:5px;
      line-height:1.7;
    }
    #markaz-sahw .sahw-ar {
      direction:rtl;
      text-align:right;
      font-size:17px;
    }
    #markaz-sahw details {
      background:#FBF7ED !important;
      border:1px solid #E4D8C5;
      border-radius:12px;
      margin:12px 0;
      padding:12px;
    }
    #markaz-sahw summary {
      color:#315640 !important;
      -webkit-text-fill-color:#315640 !important;
      font-size:18px;
      font-weight:700;
      cursor:pointer;
    }
    #markaz-sahw .sahw-poem {
      background:#F4EBD9;
      border-right:4px solid #C6A66B;
      padding:16px;
      text-align:center;
      direction:rtl;
      font-size:19px;
      line-height:2.4;
      color:#244936 !important;
      border-radius:8px;
    }
    #markaz-sahw .sahw-table {
      width:100%;
      border-collapse:collapse;
      font-size:14px;
    }
    #markaz-sahw .sahw-table th,
    #markaz-sahw .sahw-table td {
      border:1px solid #E4D8C5;
      padding:9px;
      text-align:right;
    }
    #markaz-sahw .sahw-table th {
      background:#EDE4D2;
    }
    #markaz-sahw .sahw-choice {
      display:block;
      width:100%;
      text-align:right;
      padding:12px;
      margin:8px 0;
      background:#FFFFFF;
      color:#244936 !important;
      -webkit-text-fill-color:#244936 !important;
      border:1px solid #C6A66B;
      border-radius:10px;
      cursor:pointer;
      font-size:15px;
    }
    #markaz-sahw .sahw-choice:disabled {
      opacity:1;
      cursor:default;
    }
    #markaz-sahw .sahw-correct {
      background:#E0F1E4 !important;
      border-color:#398451;
    }
    #markaz-sahw .sahw-wrong {
      background:#FBE4E4 !important;
      border-color:#BA5555;
    }
    #markaz-sahw .sahw-button {
      background:#315640;
      color:#FFFFFF !important;
      -webkit-text-fill-color:#FFFFFF !important;
      border:0;
      border-radius:10px;
      padding:12px 20px;
      font-size:16px;
      cursor:pointer;
    }
    #markaz-sahw .sahw-question {
      padding:14px 0;
      border-bottom:1px solid #E4D8C5;
    }
    #markaz-sahw .sahw-result {
      font-weight:bold;
      text-align:center;
      margin:15px 0;
      font-size:19px;
    }
    #markaz-sahw .sahw-scroll {
      overflow-x:auto;
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement("section");
  section.id = "markaz-sahw";

  section.innerHTML = `
    <h2>🕌 سجود السهو عند المالكية</h2>
    <p class="sahw-de" style="text-align:center">
      Sujud as-Sahw – Die Niederwerfungen
      bei Gebetsfehlern nach der malikitischen Rechtsschule
    </p>

    <details open>
      <summary>📖 المقدمة · Einführung</summary>
      <p class="sahw-ar">
        سجود السهو سجدتان يجبر بهما المصلي بعض ما وقع
        في صلاته من زيادة أو نقصان أو شك بسبب النسيان،
        وفق أحكام المذهب المالكي.
      </p>
      <p class="sahw-de">
        Sujud as-Sahw besteht aus zwei Niederwerfungen,
        mit denen bestimmte versehentliche Fehler im Gebet
        ausgeglichen werden. Dazu gehören das Auslassen
        bestimmter Sunna-Handlungen, unbeabsichtigte
        Zusätze und bestimmte Zweifel.
      </p>
    </details>

    <details>
      <summary>📜 ابن عاشر · Ibn Aschir</summary>
      <div class="sahw-poem">
        فَصْلٌ لِنَقْصِ سُنَّةٍ سَهْوًا يُسَنْ<br>
        قَبْلَ السَّلَامِ سَجْدَتَانِ أَوْ سُنَنْ<br><br>
        إِنْ أُكِّدَتْ وَمَنْ يَزِدْ سَهْوًا سَجَدْ<br>
        بَعْدُ كَذَا وَالنَّقْصَ غَلِّبْ إِنْ وَرَدْ<br><br>
        وَاسْتَدْرِكِ الْقَبْلِيَّ مَعْ قُرْبِ السَّلَامْ<br>
        وَاسْتَدْرِكِ الْبَعْدِي وَلَوْ مِنْ بَعْدِ عَامْ
      </div>
      <p class="sahw-ar">
        يبين ابن عاشر أن السجود القبلي يكون لنقص
        السنة المؤكدة أو سنتين خفيفتين فأكثر،
        والبعدي للزيادة، وإذا اجتمعت الزيادة
        والنقصان غُلِّب جانب النقص.
      </p>
      <p class="sahw-de">
        Ibn Aschir erklärt: Bei bestimmten ausgelassenen
        Sunna-Handlungen erfolgt die Niederwerfung vor
        dem Salam. Bei unbeabsichtigten Zusätzen erfolgt
        sie danach. Treffen beide Fehlerarten zusammen,
        hat die Regel für das Auslassen Vorrang.
      </p>
    </details>

    <details>
      <summary>🟢 السجود القبلي · Vor dem Salam</summary>
      <p class="sahw-ar">
        يكون قبل السلام عند نقص سنة مؤكدة أو سنتين
        خفيفتين فأكثر مما يوجب سجود السهو.
      </p>
      <p class="sahw-de">
        Die zwei Niederwerfungen erfolgen vor dem
        abschließenden Salam, wenn bestimmte
        Sunna-Handlungen versehentlich ausgelassen wurden.
      </p>
      <h3>أمثلة · Beispiele</h3>
      <ul>
        <li>
          نسيان السورة بعد الفاتحة في موضعها.
          <span class="sahw-de">
            Die zusätzliche Sure nach der Fatiha
            an ihrer vorgesehenen Stelle vergessen.
          </span>
        </li>
        <li>
          نسيان التشهد الأوسط والجلوس له.
          <span class="sahw-de">
            Das mittlere Taschahhud und das Sitzen
            dafür vergessen.
          </span>
        </li>
        <li>
          الإسرار في موضع الجهر المسنون.
          <span class="sahw-de">
            An einer Stelle leise rezitiert,
            an der die laute Rezitation vorgesehen ist.
          </span>
        </li>
        <li>
          نسيان تكبيرتين من تكبيرات الانتقال.
          <span class="sahw-de">
            Zwei Übergangstakbire vergessen.
          </span>
        </li>
      </ul>
    </details>

    <details>
      <summary>🟡 السجود البعدي · Nach dem Salam</summary>
      <p class="sahw-ar">
        يكون بعد السلام عند الزيادة سهواً في الصلاة،
        إذا لم تكن الزيادة مما يبطل الصلاة.
      </p>
      <p class="sahw-de">
        Die Niederwerfungen erfolgen nach dem Salam,
        wenn im Gebet versehentlich etwas hinzugefügt
        wurde und das Gebet dadurch nicht ungültig ist.
      </p>
      <ul>
        <li>
          زيادة ركعة سهواً ثم تذكرها.
          <span class="sahw-de">
            Versehentlich eine zusätzliche Rak'a begonnen
            oder gebetet und den Fehler bemerkt.
          </span>
        </li>
        <li>
          زيادة ركوع سهواً.
          <span class="sahw-de">
            Eine zusätzliche Verbeugung versehentlich
            ausgeführt.
          </span>
        </li>
        <li>
          الجهر في موضع السر.
          <span class="sahw-de">
            An einer Stelle laut rezitiert,
            an der leise rezitiert werden soll.
          </span>
        </li>
      </ul>
    </details>

    <details>
      <summary>⚖️ اجتماع الزيادة والنقصان · Beide Fehlerarten</summary>
      <p class="sahw-ar">
        إذا اجتمع في الصلاة نقص موجب لسجود السهو
        مع زيادة سهواً، فإن السجود يكون قبلياً.
      </p>
      <p class="sahw-de">
        Wenn ein Fehler, der die Niederwerfung vor dem
        Salam erfordert, zusammen mit einem
        unbeabsichtigten Zusatz auftritt, werden
        die zwei Niederwerfungen vor dem Salam ausgeführt.
      </p>
    </details>

    <details>
      <summary>🤲 كيفية سجود السهو · Durchführung</summary>
      <h3>السجود القبلي</h3>
      <ol>
        <li>إتمام الصلاة والتشهد الأخير.</li>
        <li>التكبير والسجود سجدتين قبل السلام.</li>
        <li>الجلوس وإعادة التشهد.</li>
        <li>السلام لإنهاء الصلاة.</li>
      </ol>
      <p class="sahw-de">
        Vor dem Salam: Das Gebet und das letzte
        Taschahhud abschließen, zwei Niederwerfungen
        ausführen, erneut das Taschahhud sprechen
        und mit dem Salam beenden.
      </p>
      <h3>السجود البعدي</h3>
      <ol>
        <li>إتمام الصلاة والسلام.</li>
        <li>التكبير والسجود سجدتين.</li>
        <li>الجلوس والتشهد.</li>
        <li>السلام مرة أخرى.</li>
      </ol>
      <p class="sahw-de">
        Nach dem Salam: Das Gebet mit dem Salam
        abschließen, zwei Niederwerfungen ausführen,
        das Taschahhud sprechen und erneut den Salam geben.
      </p>
    </details>

    <details>
      <summary>⏳ نسيان سجود السهو · Vergessene Niederwerfungen</summary>
      <p class="sahw-ar">
        إذا نسي المصلي السجود القبلي وتذكر قريباً
        من السلام تداركه. وإذا طال الفصل، فات تداركه،
        وتبطل الصلاة في بعض حالات النقص، ومنها
        ما كان عن ثلاث سنن فأكثر، وفق تفصيل المذهب.
      </p>
      <p class="sahw-de">
        Wird die Niederwerfung vor dem Salam vergessen,
        kann sie bei kurzer Unterbrechung nachgeholt werden.
        Nach längerer Zeit gelten besondere Regeln.
        In bestimmten Fällen kann das Gebet ungültig sein.
      </p>
      <p class="sahw-ar">
        أما السجود البعدي فيُتدارك ولو بعد مدة طويلة.
      </p>
      <p class="sahw-de">
        Die Niederwerfungen nach dem Salam können
        auch nach längerer Zeit nachgeholt werden.
      </p>
    </details>

    <details>
      <summary>❓ الشك في الركعات · Zweifel an der Rak'a-Zahl</summary>
      <p class="sahw-ar">
        من شك هل صلى ثلاث ركعات أم أربعاً،
        ولم يكن عنده يقين بالرابعة، بنى على الأقل
        المتيقن وهو ثلاث، وأتى بالرابعة،
        ثم سجد للسهو قبلياً.
      </p>
      <p class="sahw-de">
        Wer zweifelt, ob er drei oder vier Rak'at
        gebetet hat, geht von der sicher erreichten
        niedrigeren Zahl aus, ergänzt die fehlende
        Rak'a und führt die Niederwerfungen vor
        dem Salam aus.
      </p>
      <p class="sahw-ar">
        أما الشكوك الوسواسية المتكررة فلها أحكام
        خاصة، ولا يُلتفت إلى الوسواس المستمر.
      </p>
      <p class="sahw-de">
        Für ständig wiederkehrende zwanghafte Zweifel
        gelten besondere Regeln. Solche Zweifel sollen
        nicht ständig beachtet werden.
      </p>
    </details>

    <details>
      <summary>📌 نسيان ركن · Vergessen einer Pflicht</summary>
      <p class="sahw-ar">
        لا يجبر سجود السهو ترك ركن من أركان الصلاة
        كالفاتحة أو الركوع أو السجود الأصلي.
        بل يجب تدارك الركن أو إصلاح الركعة
        بحسب موضع التذكر وأحكام المذهب.
      </p>
      <p class="sahw-de">
        Das Auslassen eines wesentlichen Gebetspfeilers,
        etwa der Verbeugung oder einer vorgeschriebenen
        Niederwerfung, wird nicht allein durch
        Sujud as-Sahw ausgeglichen.
        Der Fehler muss nach den jeweiligen Regeln
        korrigiert werden.
      </p>
    </details>

    <details>
      <summary>📋 جدول الأحكام · Übersicht</summary>
      <div class="sahw-scroll">
        <table class="sahw-table" dir="rtl">
          <thead>
            <tr><th>الحالة · Fall</th><th>الحكم · Regel</th></tr>
          </thead>
          <tbody>
            <tr><td>نسيان السورة<br>Zusätzliche Sure vergessen</td><td>قبلي · Vor Salam</td></tr>
            <tr><td>نسيان التشهد الأوسط<br>Mittleres Taschahhud vergessen</td><td>قبلي · Vor Salam</td></tr>
            <tr><td>الجهر بدل السر<br>Laut statt leise</td><td>بعدي · Nach Salam</td></tr>
            <tr><td>السر بدل الجهر<br>Leise statt laut</td><td>قبلي · Vor Salam</td></tr>
            <tr><td>نسيان تكبيرة انتقال واحدة<br>Ein Übergangstakbir vergessen</td><td>لا سجود · Kein Sujud</td></tr>
            <tr><td>زيادة ركعة سهواً<br>Zusätzliche Rak'a</td><td>بعدي · Nach Salam</td></tr>
            <tr><td>اجتماع النقص والزيادة<br>Auslassen und Zusatz</td><td>قبلي · Vor Salam</td></tr>
            <tr><td>نسيان القنوت في الصبح<br>Qunut im Fajr vergessen</td><td>لا سجود · Kein Sujud</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details>
      <summary>📚 الإمام الجنيد وابن عاشر · Al-Dschunaid und Ibn Aschir</summary>
      <p class="sahw-ar">
        يجمع متن ابن عاشر بين العقيدة الأشعرية،
        والفقه المالكي، والتزكية على طريقة الإمام الجنيد.
        وأحكام سجود السهو المذكورة هنا هي من
        الفقه المالكي.
      </p>
      <p class="sahw-de">
        Das Lehrgedicht von Ibn Aschir verbindet
        die asch'aritische Glaubenslehre,
        die malikitische Rechtslehre und die
        spirituelle Erziehung nach Imam al-Dschunaid.
        Die Regeln zu Sujud as-Sahw gehören
        zum malikitischen Fiqh.
      </p>
    </details>

    <details id="markaz-sahw-quiz">
      <summary>🎓 اختبار سجود السهو · Wissenstest</summary>
      <p class="sahw-ar">
        اختر الإجابة الصحيحة واختبر معلوماتك.
      </p>
      <p class="sahw-de">
        Wähle die richtige Antwort und teste dein Wissen.
      </p>
      <div id="sahw-questions"></div>
      <div id="sahw-score" class="sahw-result"
           aria-live="polite"></div>
      <button type="button" class="sahw-button"
              id="sahw-reset">
        🔄 إعادة الاختبار · Test wiederholen
      </button>
    </details>

    <p class="sahw-de">
      Lernmaterial: Al-Murschid al-Mu'in von Ibn Aschir,
      Kapitel Sujud as-Sahw. Bei besonderen Fällen
      gelten weitere Einzelregeln der malikitischen
      Rechtsschule.
    </p>
  `;

  /* Quiz mit arabischen und deutschen Fragen */

  const questions = [
    {
      ar:"نسيت السورة بعد الفاتحة في محلها، ماذا تفعل؟",
      de:"Du hast die zusätzliche Sure vergessen. Was tust du?",
      answers:[
        ["أسجد قبلياً","Vor dem Salam"],
        ["أسجد بعدياً","Nach dem Salam"],
        ["أعيد الصلاة","Gebet wiederholen"]
      ],
      correct:0,
      explanation:"نقص السنة المؤكدة يجبر بالسجود القبلي.",
      explanationDe:"Das Auslassen dieser Sunna wird durch Sujud vor dem Salam ausgeglichen."
    },
    {
      ar:"نسيت تكبيرة انتقال واحدة، ما الحكم؟",
      de:"Du hast einen Übergangstakbir vergessen.",
      answers:[
        ["سجود قبلي","Vor dem Salam"],
        ["لا سجود","Kein Sujud"],
        ["إعادة الصلاة","Gebet wiederholen"]
      ],
      correct:1,
      explanation:"لا يسجد لمجرد نسيان تكبيرة انتقال واحدة.",
      explanationDe:"Ein einzelner vergessener Übergangstakbir erfordert keinen Sujud."
    },
    {
      ar:"زدت ركوعاً سهواً، ما الأصل في الحكم؟",
      de:"Du hast versehentlich eine zusätzliche Verbeugung gemacht.",
      answers:[
        ["سجود قبلي","Vor dem Salam"],
        ["سجود بعدي","Nach dem Salam"],
        ["لا سجود","Kein Sujud"]
      ],
      correct:1,
      explanation:"الأصل في الزيادة سهواً السجود البعدي.",
      explanationDe:"Bei einem unbeabsichtigten Zusatz erfolgt Sujud grundsätzlich nach dem Salam."
    },
    {
      ar:"اجتمع نقص موجب للسجود مع زيادة سهواً، ما الحكم؟",
      de:"Ein Auslassen und ein Zusatz treten zusammen auf.",
      answers:[
        ["سجود قبلي","Vor dem Salam"],
        ["سجود بعدي","Nach dem Salam"],
        ["أربع سجدات","Vier Niederwerfungen"]
      ],
      correct:0,
      explanation:"يُغلّب جانب النقص عند اجتماع الزيادة والنقصان.",
      explanationDe:"Beim Zusammentreffen beider Fehlerarten hat das Auslassen Vorrang."
    },
    {
      ar:"نسيت التشهد الأوسط والجلوس له، ما الحكم؟",
      de:"Du hast das mittlere Taschahhud und das Sitzen vergessen.",
      answers:[
        ["سجود بعدي","Nach dem Salam"],
        ["سجود قبلي","Vor dem Salam"],
        ["لا سجود","Kein Sujud"]
      ],
      correct:1,
      explanation:"يُجبر هذا النقص بالسجود القبلي.",
      explanationDe:"Dieser Fehler wird durch Sujud vor dem Salam ausgeglichen."
    },
    {
      ar:"شككت هل صليت ثلاثاً أو أربعاً دون يقين بالرابعة، ماذا تفعل؟",
      de:"Du weißt nicht, ob du drei oder vier Rak'at gebetet hast.",
      answers:[
        ["أبني على ثلاث وأكمل وأسجد قبلياً","Von drei ausgehen und Sujud vor Salam"],
        ["أبني على أربع دائماً","Immer von vier ausgehen"],
        ["أترك الصلاة","Gebet abbrechen"]
      ],
      correct:0,
      explanation:"يُبنى على الأقل المتيقن وتُستكمل الصلاة.",
      explanationDe:"Man geht von der sicher erreichten niedrigeren Zahl aus."
    },
    {
      ar:"نسيت السجود البعدي وتذكرته بعد مدة طويلة، ما الحكم؟",
      de:"Du erinnerst dich viel später an den vergessenen Sujud nach Salam.",
      answers:[
        ["لا يمكن تداركه","Nicht mehr nachholbar"],
        ["أتداركه","Nachholen"],
        ["أعيد الصلاة دائماً","Gebet immer wiederholen"]
      ],
      correct:1,
      explanation:"يُتدارك السجود البعدي ولو بعد مدة طويلة.",
      explanationDe:"Sujud nach dem Salam kann auch später nachgeholt werden."
    },
    {
      ar:"هل سجود السهو يجبر ترك ركن من أركان الصلاة؟",
      de:"Kann Sujud as-Sahw einen ausgelassenen Gebetspfeiler allein ersetzen?",
      answers:[
        ["نعم دائماً","Ja, immer"],
        ["لا، يجب إصلاح الركن أو الركعة","Nein, der Fehler muss korrigiert werden"],
        ["نعم إذا كان الركن سجوداً","Ja, bei Niederwerfungen"]
      ],
      correct:1,
      explanation:"الركن لا يجبر بمجرد سجود السهو.",
      explanationDe:"Ein ausgelassener Gebetspfeiler muss nach den entsprechenden Regeln korrigiert werden."
    }
  ];

  const answers = {};
  const quiz = section.querySelector("#sahw-questions");
  const score = section.querySelector("#sahw-score");

  function renderQuiz() {
    quiz.replaceChildren();
    score.textContent = "";

    questions.forEach((q, index) => {
      const box = document.createElement("div");
      box.className = "sahw-question";

      const heading = document.createElement("h3");
      heading.textContent = (index + 1) + ". " + q.ar;
      box.appendChild(heading);

      const german = document.createElement("p");
      german.className = "sahw-de";
      german.textContent = q.de;
      box.appendChild(german);

      const feedback = document.createElement("p");
      feedback.className = "sahw-ar";

      q.answers.forEach((choice, choiceIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "sahw-choice";
        button.textContent = choice[0] + " · " + choice[1];

        button.addEventListener("click", () => {
          if (answers[index] !== undefined) return;

          answers[index] = choiceIndex;

          const buttons = box.querySelectorAll(".sahw-choice");
          buttons.forEach((b, j) => {
            b.disabled = true;
            if (j === q.correct) b.classList.add("sahw-correct");
            if (j === choiceIndex && j !== q.correct)
              b.classList.add("sahw-wrong");
          });

          feedback.textContent =
            (choiceIndex === q.correct ? "✅ صحيح! " : "❌ ") +
            q.explanation;

          const detail = document.createElement("span");
          detail.className = "sahw-de";
          detail.textContent = q.explanationDe;
          feedback.appendChild(detail);

          if (Object.keys(answers).length === questions.length) {
            const total = questions.filter(
              (item, i) => answers[i] === item.correct
            ).length;

            score.textContent =
              "النتيجة: " + total + " / " + questions.length +
              " · Ergebnis: " + total + " / " + questions.length;
          }
        });

        box.appendChild(button);
      });

      box.appendChild(feedback);
      quiz.appendChild(box);
    });
  }

  section.querySelector("#sahw-reset")
    .addEventListener("click", () => {
      Object.keys(answers).forEach(k => delete answers[k]);
      renderQuiz();
    });

  renderQuiz();

  /* القسم يُنشأ مرة واحدة، ثم يمكن نقله لموضعه المطلوب */
  const target = document.getElementById("markaz-sahw-position");

if (target) {
  target.appendChild(section);
} else {
  document.body.appendChild(section);
}
})();
