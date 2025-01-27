const btnSum = document.querySelector(".btn");
alert("login=1 pass=1")
const boys = [
  { ismt: "1", id: "1", pasvort: 1 },
  { ism: "Boyismon", id: 12345, pasvort: 1111 },
  { ism: "Murot", id: 12345, pasvort: 2222 },
  { ism: "Ibroh", id: 12345, pasvort: 3333 },
  { ism: "Saidakbar", id: 12345, pasvort: 4444 },
];

btnSum.addEventListener("click", function (e) {
  e.preventDefault();

  const parolInput = document.querySelector(".inp__id").value.trim();
  const pasvortInput = Number(
    document.querySelector(".inp__psvrt").value.trim()
  );

  const user = boys.find(
    (element) => element.ism === parolInput && element.pasvort === pasvortInput
  );

  if (user) {
    window.location.href = "about.html";
  } else {
    alert("Xatolik! Parol yoki ID noto'g'ri!");
  }
});
