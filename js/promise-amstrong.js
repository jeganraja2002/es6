		

		var x=153	
		var y=x
		var z=y
		var sum=0		
		var count=0


		function first() {

			return new Promise((p,rej)=>{	
			
				while(x!=0){
					let rem=x%10
					x=(x-rem)/10
					count++
				}			
				p(count)
			})
		}
		
		function second(a) {
			return new Promise((q,rejected)=>{

				while(y!=0){
					let rem=y%10
					y=(y-rem)/10
					sum+=(rem**a)
				}			
				q(sum)
			})
		
		}


		function check(b) {
			

			return new Promise((r,h)=>{

				if (z==b) {
					r(b)
				} 
				
				else {
					h("z")
				}
			})
		}



// first().then((p)=>{
// console.log(p)
	
// 	return second(p).then((q)=>{
// 	console.log(q)
		
// 		return check(q).then((r)=>{
// 		console.log(`${r}is amtrong`)
		
// 		})
// 	})
// })

// .catch((h)=>{

// 	console.log("not amstrong")
// })


async function name() {
	try{

		let sri=await first()
		let guna=await second(sri)
		let anbu=await check(guna)

		console.log(anbu)
	}
	catch{
		console.log("error")
	}

}

name()

