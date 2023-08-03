		

		//I/P a=123                O/P=14

		
			var a=123
			var sum=0
		function name(jegan) {
				console.log(jegan)
			
			}

			function res(e) {
		
				while(e!=0){
					let rem=e%10
					e=(e-rem)/10
					sum+=rem*rem
				}
				name(sum)
			}


			res(a)
			