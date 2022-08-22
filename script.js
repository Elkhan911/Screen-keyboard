const buttons = document.querySelectorAll(".buttons");
const textarea1 = document.querySelector("#_textarea1");
const span1 = document.querySelector("#span1");

const spaceBtn = document.querySelector("#spaceButton");
const enterBtn = document.querySelector("#enterButton");
const capsLockBtn = document.querySelector("#capsLockButton");
const deleteSymbBtn = document.querySelector("#deleteSymbol");
const ClearBtn = document.querySelector("#clearAll");

let isCapsLockOn = false;

for (let button of buttons) {
  button.addEventListener("click", function () {
    console.log("Button click");
    textarea1.value += isCapsLockOn
      ? button.textContent.toUpperCase()
      : button.textContent.toLowerCase();
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

ClearBtn.addEventListener("click", function () {
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
  console.log(isCapsLockOn);
});
