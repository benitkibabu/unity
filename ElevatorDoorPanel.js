var FloorID : int;

var door : RDLLiftDoor[] = new RDLLiftDoor[4];
var myElevator : RDLLiftController;
private var isColiding : boolean = false;
private var rec : Rect;

function Start () {
rec = new Rect(Screen.width / 2 - 80, Screen.height/2 - 25, 150, 50);
}

function OnTriggerEnter(){
isColiding = true;
}
function OnTriggerExit(){
isColiding = false;
}


function OnTriggerStay() {
if(Input.GetKeyDown(KeyCode.E) && !myElevator.isMoving){
if(myElevator.currentFloor == FloorID && !myElevator.isMoving){
if(!door[0].open && !door[1].open &&!door[2].open &&!door[3].open 
&& !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating){
door[0].Open();
door[1].Open();
door[2].Open();
door[3].Open();
}
if(door[0].open && door[1].open && door[2].open && door[3].open 
&& !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating){
door[0].Close();
door[1].Close();
door[2].Close();
door[3].Close();
}
}
else if(myElevator.currentFloor != FloorID && !myElevator.isMoving){
if(FloorID == 0){
myElevator.Move(FloorID, false);
}
else if(FloorID == 1){
if(myElevator.currentFloor > FloorID){
myElevator.Move(FloorID, false);
}
else{
myElevator.Move(FloorID, true);
}
}
else if(FloorID == 2){
if(myElevator.currentFloor > FloorID){
myElevator.Move(FloorID, false);
}
else{
myElevator.Move(FloorID, true);
}
}
else if(FloorID == 3){
if(myElevator.currentFloor > FloorID){
myElevator.Move(FloorID, false);
}
else{
myElevator.Move(FloorID, true);
}
}
else if(FloorID == 4){
if(myElevator.currentFloor > FloorID){
myElevator.Move(FloorID, false);
}
else{
myElevator.Move(FloorID, true);
}
}
else if(FloorID == 5){
if(myElevator.currentFloor < FloorID){
myElevator.Move(FloorID, true);
}
}
}	
}
}

function OnGUI(){
if(isColiding){
switch (Event.current.type)
   {
       case EventType.Repaint:
           HudFunction();
           break;
           case EventType.MouseDown:
if (rec.Contains (Event.current.mousePosition))
{
                   if(myElevator.currentFloor == FloorID && !myElevator.isMoving){
           if(!door[0].open && !door[1].open &&!door[2].open &&!door[3].open 
           && !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating){
           door[0].Open();
           door[1].Open();
           door[2].Open();
           door[3].Open();
           }
           if(door[0].open && door[1].open && door[2].open && door[3].open 
           && !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating){
           door[0].Close();
           door[1].Close();
           door[2].Close();
           door[3].Close();
           }
           }
           else if(myElevator.currentFloor != FloorID && !myElevator.isMoving){
           if(FloorID == 0){
           myElevator.Move(FloorID, false);
           }
           else if(FloorID == 1){
           if(myElevator.currentFloor > FloorID){
           myElevator.Move(FloorID, false);
           }
           else{
           myElevator.Move(FloorID, true);
           }
           }
           else if(FloorID == 2){
           if(myElevator.currentFloor > FloorID){
           myElevator.Move(FloorID, false);
           }
           else{
           myElevator.Move(FloorID, true);
           }
           }
           else if(FloorID == 3){
           if(myElevator.currentFloor > FloorID){
           myElevator.Move(FloorID, false);
           }
           else{
           myElevator.Move(FloorID, true);
           }
           }
           else if(FloorID == 4){
           if(myElevator.currentFloor > FloorID){
           myElevator.Move(FloorID, false);
           }
           else{
           myElevator.Move(FloorID, true);
           }
           }
           else if(FloorID == 5){
           if(myElevator.currentFloor < FloorID){
           myElevator.Move(FloorID, true);
           }
           }
           }
Event.current.Use ();
}
break;
   }
   }
}

function HudFunction()
{
   GUI.Button(rec,"touch to Interact" );    
}
