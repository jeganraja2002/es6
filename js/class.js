
													

		// var p={
		// 		name:"e6",a:1,b:4,add:function() {return this.a+ this.b}
		// 	}


		// let d=p.add(this)

		// console.log(d)


		var p={
				name:"ES6",a:1,b:4
			}

		var p2={add:function(c) {return this.a+ this.b+c}}


		// let d=p2.add.apply(p,[12])
		// let d=p2.add.call(p,12)
		let d=p2.add.bind(p,12)

		console.log(d())



		class Details{
			constructor(name,batch,village){
				this.a=name
				this.b=batch
				this.c=village
			}

			getDetails(){

				return `${this.a},${this.b}`
			}
		}


		let f=new Details("jegan","fed-12","alangulam")
		console.log(f)
		console.log(f.getDetails())







{
    class First{
        constructor(value){
            this.a=value
     
        }
        send(){
            return "Hello" + this.a
        }
    }

    class Second extends First{
        constructor(value,b){
            super(value)
            this.role=b
        }
        hi(){
            return this.send() + " and am a " + this.role
        }
    }

    let view=new Second(" jegan","Good morning")

    console.log(view)

    
    console.log(view.hi())
}