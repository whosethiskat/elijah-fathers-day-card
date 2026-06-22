const reasons = [
  "You always put Ava first.",
  "You make our little family feel safe and loved.",
  "You make us laugh even on hard days.",
  "You work hard for the people you love.",
  "You are patient, caring, and strong.",
  "You are growing into such an amazing father.",
  "Ava is so lucky to have you.",
  "I am so proud of the man and father you are becoming."
];

let currentReason = 0;

function openSite() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
}

function showReason() {
  document.getElementById("reasonBox").innerText = reasons[currentReason];

  currentReason++;

  if (currentReason >= reasons.length) {
    currentReason = 0;
  }
}