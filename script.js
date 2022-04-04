const grid = document.querySelector(".grid")
const resetBtn = document.querySelector(".reset-btn")
const rangeSlider = document.querySelector(".rangeSlider")
const colorPicker = document.querySelector(".colorPicker")

const fillGrid = (cellsPerSide) => {
  grid.innerHTML = ""
  for(let i = 0; i < cellsPerSide * cellsPerSide; i++){
    const cell = document.createElement("div")
    cell.classList.add("cell")
    let newCellSize = 1 / cellsPerSide * 100;
    cell.style.width = `${newCellSize}%`
    cell.style.height = `${newCellSize}%`
    cell.addEventListener("mouseover", changeColor)
    grid.appendChild(cell)
  }
}
const changeColor = (e) => {
  e.target.style.backgroundColor = colorPicker.value
}

resetBtn.addEventListener("click", () => {
  fillGrid(rangeSlider.value)
})



fillGrid(16)