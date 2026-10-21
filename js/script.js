"use strict";
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  setupMenu();
  setupTheme();
  setupContactForm();
});

function setupMenu() {
  var button = document.getElementById("menu-toggle");
  var menu = document.getElementById("site-menu");
  if (!button || !menu) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  }
  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });
}

function setupTheme() {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) { saved = null; }
  var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = saved === "dark" || saved === "light" ? saved : (systemDark ? "dark" : "light");

  function apply(value) {
    root.setAttribute("data-theme", value);
    if (button) button.setAttribute("aria-pressed", String(value === "dark"));
  }
  apply(theme);
  if (!button) return;
  button.addEventListener("click", function () {
    theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable: theme still changes */ }
  });
}

function setupContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var fields = [
    { id: "name", missing: "Enter your full name.", min: 2, short: "Name must be at least 2 characters." },
    { id: "email", missing: "Enter your email address.", invalid: "Enter a valid email, for example name@example.com." },
    { id: "subject", missing: "Enter a subject.", min: 3, short: "Subject must be at least 3 characters." },
    { id: "message", missing: "Enter your message.", min: 10, short: "Message must be at least 10 characters." }
  ];

  function check(field) {
    var input = document.getElementById(field.id);
    var error = document.getElementById(field.id + "-error");
    var value = input.value.trim();
    var text = "";
    if (value === "") text = field.missing;
    else if (input.type === "email" && !input.checkValidity()) text = field.invalid;
    else if (field.min && value.length < field.min) text = field.short;
    error.textContent = text;
    if (text) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
    return text === "";
  }

  fields.forEach(function (field) {
    document.getElementById(field.id).addEventListener("blur", function () { check(field); });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstBad = null;
    fields.forEach(function (field) {
      if (!check(field) && !firstBad) firstBad = document.getElementById(field.id);
    });
    status.className = "status";
    if (firstBad) {
      status.classList.add("error-status");
      status.textContent = "The form has errors. Fix the highlighted fields and try again.";
      firstBad.focus();
      return;
    }
    status.classList.add("success");
    status.textContent = "Thank you. Your entries are valid. This demo has no server, so nothing was sent.";
    form.reset();
  });
}
