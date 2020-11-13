module.exports = `<html>
	<head>
		<title>LOL</title>
		<link rel="SHORTCUT ICON" href="https://media.discordapp.net/attachments/708740034429190164/776819824067346482/download.jpg">
    		<meta property="og:title" content="LOL">
    		<meta property="og:description" content="It's not even a game. It's just a screensaver that spams lol around ur screen.">
    		<meta property="og:image" content="https://media.discordapp.net/attachments/708740034429190164/776819824067346482/download.jpg">
	</head>
	<body>
		<canvas id="canvas" height="620" width="1345">No canvas lol</canvas>
		<script>
			let ctx = document.getElementById("canvas").getContext("2d")
			ctx.stroke()
			ctx.fillStyle = "#ff00ff"
			ctx.font = "50px sans-serif"
			setTimeout(() => newLol(), 200)
	
			
			function newLol() {
				let x = Math.floor(Math.random() * 1360)
				let y = Math.floor(Math.random() * 750)
				ctx.fillText("lol", x, y)
				setTimeout(() => newLol(), 200)
			}
		</script>
	</body>
</html>`
