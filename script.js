const buttons = document.querySelectorAll(".keyboard__button");
const textarea1 = document.querySelector("#_textarea1");
const spaceBtn = document.querySelector("#_spaceButton");
const enterBtn = document.querySelector("#_enterButton");
const capsLockBtn = document.querySelector("#_capsLockButton");
const deleteSymbBtn = document.querySelector("#_deleteSymbol");
const clearBtn = document.querySelector("#_clearAll");

let isCapsLockOn = false;

for (let button of buttons) {
  button.addEventListener("click", function () {
    if (isCapsLockOn == true) {
      textarea1.value += button.textContent.toUpperCase();
    } else textarea1.value += button.textContent.toLowerCase();
  });
}

spaceBtn.addEventListener("click", function () {
  textarea1.value += " ";
});

enterBtn.addEventListener("click", function () {
  textarea1.value += "\n";
});

deleteSymbBtn.addEventListener("click", function () {
  let str = String(textarea1.value);
  textarea1.value = str.slice(0, -1);
});

clearBtn.addEventListener("click", function () {
  textarea1.value = "";
});

capsLockBtn.addEventListener("click", function () {
  if (isCapsLockOn == true) {
    isCapsLockOn = false;
    capsLockBtn.classList.remove("capsLockOn");
  } else {
    isCapsLockOn = true;
    capsLockBtn.classList.add("capsLockOn");
  }
});
