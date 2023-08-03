						console.log("1")

						setTimeout(()=>{

							console.log("2")

						},3000)

						console.log("3")
						

						setTimeout(()=>{

							console.log("4")

						},0)




						let a=setInterval(()=>{
								console.log("setInterval")
								clearInterval(a,3000)
						},1000)