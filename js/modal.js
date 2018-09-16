var write = document.querySelector(".write-button"),
  modal = document.querySelector(".modal"),
  close = document.querySelector(".modal-button-close"),
  formModal = document.querySelector(".modal-form"),
  username = document.querySelector("[name=username]"),
  email = document.querySelector("[name=email]"),
  message = document.querySelector("[name=message]"),
  isStorageSupport = !0,
  storage = "";
try {
  storage = localStorage.getItem("username")
} catch (e) {
  isStorageSupport = !1
}
write.addEventListener("click", function (e) {
  e.preventDefault(), modal.classList.add("modal-show"), storage ? (username.value = storage, email.focus()) : username.focus()
}), close.addEventListener("click", function (e) {
  e.preventDefault(), modal.classList.remove("modal-show"), modal.classList.remove("modal-error")
}), formModal.addEventListener("submit", function (e) {
  e.preventDefault(), username.value && email.value && message.value ? isStorageSupport && localStorage.setItem("username", username.value) : (e.preventDefault(), modal.classList.remove("modal-error"), modal.offsetWidth = modal.offsetWidth, modal.classList.add("modal-error"))
}), window.addEventListener("keydown", function (e) {
  27 === e.keyCode && (e.preventDefault(), modal.classList.contains("modal-show") && (modal.classList.remove("modal-show"), modal.classList.remove("modal-error")))
});
