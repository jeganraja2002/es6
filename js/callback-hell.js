						function name(argument) {
							console.log("1")
							name1()
						}

						function name1(argument) {
							console.log("2")
							name3()
						}

						function name2(argument) {
							console.log("3")
						}

						function name3(argument) {
							console.log("4")
							name2()
						}

						function name4(argument) {
							console.log("5")
							name()
						}

						name4()