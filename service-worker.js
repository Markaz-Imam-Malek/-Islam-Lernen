

/* MARKAZ IMAM MALIK
   Daily Hadith Push Notifications
*/

self.addEventListener("push", function(event) {
  let data = {};

  if (event.data) {
    try {
      data = event.data.json();
    } catch (error) {
      data = { body: event.data.text() };
    }
  }

  const title = data.title || "🌙 حديث اليوم";

  const options = {
    body: data.body || "حديث جديد من مركز الإمام مالك",
    icon: "./8A5E51CB-E6F3-444A-9ACF-87675CED666F.png",
    badge: "./8A5E51CB-E6F3-444A-9ACF-87675CED666F.png",
    tag: "markaz-daily-hadith",
    data: {
      url: self.registration.scope
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

