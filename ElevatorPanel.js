var myElevator : ElevatorController;
private var isColliding : boolean;
private var msgWindowRec : Rect;
var mySkin : GUISkin;

var B: boolean;
var G: boolean;
var F1: boolean;
var F2: boolean;
var F3: boolean;
var F4: boolean;

@HideInInspector
var targetFloor : int;
private var goingUp : boolean = false;

private var move: boolean = false;
private var hover: boolean = false;

function OnMouseEnter(){
move = false;
hover = true;
if(!move)
Hovered();
}
function OnMouseExit(){
hover = false;
if(!move)
NotHovered();
}

function Update(){

       
if(! move && !hover){
NotHovered();
}
}

function OnMouseDown(){
if(!myElevator.isMoving){
if(B){
targetFloor = 0;
if(myElevator.currentFloor > targetFloor){
goingUp = false;
}
else{
goingUp = true;
}
}
else if(G){
targetFloor = 1;
if(myElevator.currentFloor > targetFloor){
goingUp = false;
}
else{
goingUp = true;
}
}
else if(F1){
targetFloor = 2;
if(myElevator.currentFloor > targetFloor){
goingUp = false;
}
else{
goingUp = true;
}
}
else if(F2){
targetFloor = 3;
if(myElevator.currentFloor > targetFloor){
goingUp = false;
}
else{
goingUp = true;
}
}
else if(F3){
targetFloor = 4;
if(myElevator.currentFloor > targetFloor){
goingUp = false;
}
else{
goingUp = true;
}

}
else if(F4){
targetFloor = 5;
if(myElevator.currentFloor > targetFloor){
goingUp = false;
}
else{
goingUp = true;
}

}
myElevator.Move(targetFloor, goingUp);

clickedOn();
move = true;
}
}

function Hovered()
{
//play sound
renderer.material.color = Color.red;
}	
function NotHovered()	
{	
   renderer.material.color = Color.white;   
} 
function clickedOn(){
}  
