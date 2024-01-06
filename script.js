//your JS code here. If required.
let line  =  document.getElementById('line');
let rotateAngle = 0 ; 
function rotateLine(){
	 rotateAngle+= 2 ;
	line.style.transform = `rotate(${rotateAngle}deg)`;
	requestAnimationFrame(rotateLine);
}
rotateLine()