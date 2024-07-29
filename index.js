const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("The Clipboard API is not available.");
};

document.querySelector("#js_copy_link").addEventListener("click", function (e) {
  copyToClipboard("sloy.io");
  e.target.textContent = "Скопировать ссылку sloy.io ✓";
});
