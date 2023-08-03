							var x=[1,2,3,4,5]
							var y=x
							y[0]=10 //shallow copy
							console.log(x,y)


							var x=200
							var y=x
							y=100 //depp copy

							console.log(x,y)


							    var a={name:"jegan",age:"21",muthu:{name:"muthu",age:"22"}}
    
							     //var b={...a}
							    var b=JSON.parse(JSON.stringify(a))
							   // var b=Object.assign({},a)
							    
							    
							    
							    b.muthu.name="jeganraja"  
							    b.name="raja"
							    console.log(a)
							    console.log(b)

							    var jegan=[1,2,3,4,5,6,7,8,9]

 								// var raja=[...jegan]
							    var raja=JSON.parse(JSON.stringify(jegan))
							   // var raja=Object.assign([],jegan)
							    
							    
							    
							    raja[5]=35 
							    raja[3]=22
							    console.log(jegan)
							    console.log(raja)							    

    
