module.exports = `<html>
	<head>
		<title>LOL</title>
	</head>
	<body>
		<canvas id="canvas" height="620" width="1345">No canvas lol</canvas>
		<script>
			let ctx = document.getElementById("canvas").getContext("2d")
			ctx.stroke()
			ctx.fillStyle = "#ff00ff"
			ctx.font = "50px sans-serif"
			setTimeout(() => newLol(), 20)
	
			
			function newLol() {
				let x = Math.floor(Math.random() * 1360)
				let y = Math.floor(Math.random() * 750)
				ctx.fillText("lol", x, y)
				setTimeout(() => newLol(), 20)
			}
		</script>
	</body>
</html>`
