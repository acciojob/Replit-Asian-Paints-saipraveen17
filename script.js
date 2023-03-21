const gridItems = document.querySelectorAll(".grid-item");

function resetColors() {
  gridItems.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
}

function changeColor() {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("color_id").value;
  
  const block = document.getElementById(blockId);
  if (block) {
    resetColors();
    block.style.backgroundColor = color;
  } else {
    alert("Invalid block ID!");
  }
}

document.getElementById("change_button").addEventListener("click", changeColor);
document.getElementById("reset_button").addEventListener("click", resetColors);
