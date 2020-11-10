module.exports = `<!DOCTYPE html>
<html>
	<head>
		<title>Box Game!</title>
    <link rel="SHORTCUT ICON" href="https://media.discordapp.net/attachments/771278268220833793/775610865817747456/unknown.png">
    <meta property="og:title" content="Box Game!">
    <meta property="og:description" content="Play the box game created by Haru#2342">
    <meta property="og:image" content="https://media.discordapp.net/attachments/771278268220833793/775610865817747456/unknown.png">
	</head>
	<body>
		<h1 id="h"></h1>
		<p id="b"></p>
		<p id="b2"></p>
		<p id="b3"></p>
		<p id="b4"></p>
		<p id="b5"></p>
    <button class="pc" id="w">UP</button>
    <button class="pc" id="s">DOWN</button>
    <button class="pc" id="a">LEFT</button>
    <button class="pc" id="d">RIGHT</button>
    <h1 id="win"></h1>
		<button onclick="myFunction()">RESTART</button>
		<script>
      			let e = "⬛"; let p = "😁"; let b = "🟫"; let g = "✅";
			let won = false;
			let pos = Math.floor(Math.random() * 50)
			let boxPos = Math.floor(Math.random() * 50)
			let goalPos = Math.floor(Math.random() * 50)
			while (boxPos == pos) {
				boxPos = Math.floor(Math.random() * 50)
			}
			while (goalPos == pos || goalPos == boxPos) {
				goalPos = Math.floor(Math.random() * 50)
			}
			let board = [e,e,e,e,e,e,e,e,e,e,
				     e,e,e,e,e,e,e,e,e,e,
				     e,e,e,e,e,e,e,e,e,e,
				     e,e,e,e,e,e,e,e,e,e,
				     e,e,e,e,e,e,e,e,e,e]
			board[pos] = p;
			board[boxPos] = b;
			board[goalPos] = g;
			fixBoard()
			function fixBoard() {
				document.getElementById("b").innerHTML = ""
				document.getElementById("b2").innerHTML = ""
				document.getElementById("b3").innerHTML = "" 
				document.getElementById("b4").innerHTML = "" 
				document.getElementById("b5").innerHTML = ""  
				for (let i = 0; i < board.length; i++) {
					if (i < 10) {
						document.getElementById("b").innerHTML += board[i] 
					} else if (i < 20) {
						document.getElementById("b2").innerHTML += board[i]
					} else if (i < 30) {
						document.getElementById("b3").innerHTML += board[i]
					} else if (i < 40) {
						document.getElementById("b4").innerHTML += board[i]
					} else if (i < 50) {
						document.getElementById("b5").innerHTML += board[i]
					}
				}
			}
      function myFunction() {
        location.reload()
      }
      function checkMobile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera
        if (/windows phone/i.test(userAgent) || /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return true;
        }
        return false;
      }
      if (checkMobile()) {
        document.getElementById("h").innerHTML = "Use the buttons to move around."
        let buttons = document.getElementsByTagName("BUTTON")
        for (let j = 0; j < 5; j++) {
          if (buttons[j].innerHTML != "RESTART") {
            buttons[j].className = "mobile"
          }
        }
        function setButton(id, func) {
          return document.getElementById(id).addEventListener("click", func);
        }
        setButton("a", () => {
          board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos -= 1;
              if (pos < 0) {
                pos = 49
              }
              if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos -= 1;
                if (boxPos < 0) {
                  boxPos = 49;
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              } 
        })
        setButton("d", () => {
           board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos += 1;
              if (pos > 49) {
                pos = 0
              }
              if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos += 1;
                if (boxPos > 49) {
                  boxPos = 0;
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              }
        })
        setButton("w", () => {
          board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos -= 10;
              if (pos < 0) {
                let x = pos;
                let y = 50;
                pos = x + y
              }
                if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos -= 10;
                if (boxPos < 0) {
                  let x = boxPos;
                  let y = 50;
                  boxPos = x + y
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              } 
        })
        setButton("s", () => {
          board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos += 10;
              if (pos > 49) {
                let x = pos;
                let y = 50;
                pos = x - y
              }
              if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos += 10;
                if (boxPos > 49) {
                  let x = boxPos;
                  let y = 50;
                  boxPos = x - y
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              }
            })
      } else {
        document.getElementById("h").innerHTML = "Use arrow keys to move around." 
        document.addEventListener("keydown", (args) => {
          if (!won) {
            const key = args.key.toLowerCase();
            if (key == "arrowleft") {
              board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos -= 1;
              if (pos < 0) {
                pos = 49
              }
              if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos -= 1;
                if (boxPos < 0) {
                  boxPos = 49;
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              } 
            } else if (key == "arrowright") {
              board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos += 1;
              if (pos > 49) {
                pos = 0
              }
              if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos += 1;
                if (boxPos > 49) {
                  boxPos = 0;
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              }
            } else if (key == "arrowup") {
              board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos -= 10;
              if (pos < 0) {
                let x = pos;
                let y = 50;
                pos = x + y
              }
                if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos -= 10;
                if (boxPos < 0) {
                  let x = boxPos;
                  let y = 50;
                  boxPos = x + y
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              } 
            } else if (key == "arrowdown") {
              board[pos] = e;
              if (pos == goalPos) {
                board[pos] = g;
              }
              pos += 10;
              if (pos > 49) {
                let x = pos;
                let y = 50;
                pos = x - y
              }
              if (pos == boxPos) {
                if (boxPos == goalPos) {
                  board[boxPos] = g;
                }
                boxPos += 10;
                if (boxPos > 49) {
                  let x = boxPos;
                  let y = 50;
                  boxPos = x - y
                }
              }
              board[boxPos] = b;
              board[pos] = p;
              fixBoard()
              if (boxPos == goalPos) {
                won = true;
                document.getElementById("win").innerHTML = "GG! You managed to push the box to the green tick!"
              }
            }
          }
        })
      }
		</script>
    <style>
			p {
    			display: block;
   				margin-block-start: 0em;
    			margin-block-end: 0em;
    			margin-inline-start: 0px;
    			margin-inline-end: 0px;
			    font-size: 67px;
			}
      .pc {
        opacity: 0;
      }
      .mobile {
        opacity: 1;
        padding: 50px 50px;
      }
		</style>
	</body>
</html>`