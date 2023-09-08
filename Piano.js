let whiteKeys = document.querySelector(".white-keys").children
let blackKeys = document.querySelector(".black-keys").children

console.log(blackKeys)
console.log(whiteKeys)

function calistir() {
    for (let i = 0;i < whiteKeys.length;i++) {
    whiteKeys[i].addEventListener("click", function() {
        if (i == 0) {
            new Audio("../Piano/Audios/key1.mp3").play()
            console.log(i)
        }
        new Audio(`../Piano/Audios/key${i}.mp3`).play()
        console.log(i)
    })
    }
    for (let j = 0;j < blackKeys.length;j++) {
        blackKeys[j].addEventListener("click", add)

        function add() {
            new Audio(`../Piano/Audios/key${j + 10}.mp3`).play()
            console.log(j)
        }
    }
}

calistir()