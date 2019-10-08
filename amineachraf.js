 /*
function somme(){
let x;let y;
 x = prompt(); 
  y= prompt(); 

let z=parseInt(x) + parseInt (y);
return z;
}
alert (somme());
*/

/*
function vect(x,y){
	this.x=x;
	this.y=y;

};
vect.prototype.module=function(){

return Math.sqrt(this.x*this.x+this.y*this.y) ;
}
vect.prototype.egale=function(v){
return (this.x==v.x+this.y==v.y);
	
}

let v1 = new vect (2,4);
let v1 = new vect (3,4);
console.log(v1 module());
console.log(v1 module());
console.log(v1 egale(v2));
*/

class vect{

constructor(x,y){
	this.x=x;
	this.y=y;
}

module(){
return Math.sqrt(this.x*this.x+this.y*this.y) ;

}

egale(v){
return (this.x==v.x+this.y==v.y);

}

}

let v1 = new vect (2,4);
let v1 = new vect (3,4);
console.log(v1 module());
console.log(v1 module());
console.log(v1 egale(v2));