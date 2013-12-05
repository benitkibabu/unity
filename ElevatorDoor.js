//this code refers to the elevator door 
//needs some improvement but for the meantime it works just fine.

var open : boolean;
var OpenDistance : float = 1.0;
private var OriginalPos : Vector3;
var Opposite : boolean;
private var openSpeed : float = 0.5;
var isAnimating : boolean;
var DoorFloorID : int;

private var travelDistance : float = 1.0;

function Start(){
  OriginalPos = transform.position;
}

function Open(){
  isAnimating = true;
  if(Opposite){
    travelDistance = OriginalPos.x - OpenDistance;
    while(travelDistance < transform.position.x){
      transform.position.x -= openSpeed * Time.deltaTime;
      yield;
    }
    if(transform.position.x <= travelDistance){
      transform.position.x = travelDistance;
    }
  }
  else{
    travelDistance = OriginalPos.x + OpenDistance;
    while(travelDistance > transform.position.x){
      transform.position.x += openSpeed * Time.deltaTime;
      yield;
    }
    if(transform.position.x >= travelDistance){
        transform.position.x = travelDistance;
    }
  }
    isAnimating = false;
  open = true;
}

function Close(){
  isAnimating = true;
  if(Opposite){
    travelDistance = OriginalPos.x;
    while(travelDistance > transform.position.x){
      transform.position.x += openSpeed * Time.deltaTime;
      yield;
    }
    if(transform.position.x >= travelDistance){
    transform.position.x = travelDistance;
    }
  }
  else{
    travelDistance = OriginalPos.x;
    while(travelDistance < transform.position.x){
      transform.position.x -= openSpeed * Time.deltaTime;
      yield;
    }
    if(transform.position.x <= travelDistance){
    transform.position.x = travelDistance;
    }
  }
  isAnimating = false;
  open = false;
}
