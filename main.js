var textarea = document.querySelector('#d')
var kb = new Keyboard()
// var cs = () => console.log("a")

document.querySelector('button').addEventListener("click", () => {
    kb.press('Alt')
    textarea.innerText = 'a'
})

var keydiv = document.querySelector(".key")

var doc = new Keyboard()

doc.keyup(["b", "s", "a", "j"], () => {
    keydiv.innerHTML += doc.key + "<br>"
})