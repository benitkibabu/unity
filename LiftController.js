private var floorHeights : float[] = new float[6];
var isMoving : boolean;
var moveSpeed : float = 1.0;
var currentFloor : int = 1;
private var moveThis : boolean;
var door : RDLLiftDoor[] = new RDLLiftDoor[14];
private var floorID: int; private var goingUp: boolean;
var start : AudioClip;
var end : AudioClip;

function Start () {
        floorHeights[0] = transform.position.y - 3.05f;
        floorHeights[1] = transform.position.y;
        floorHeights[2] = transform.position.y + 3.1f;
        floorHeights[3] = transform.position.y + 6.3f;
        floorHeights[4] = transform.position.y + 9.6f;
        floorHeights[5] = transform.position.y + 12.7f;
}

function Update(){
        if(moveThis && !isMoving){
                if(!door[0].open && !door[1].open &&!door[2].open &&!door[3].open 
                        && !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating &&
                        
                        !door[4].open && !door[5].open &&!door[6].open &&!door[7].open 
                        && !door[4].isAnimating && !door[5].isAnimating && !door[6].isAnimating && !door[7].isAnimating &&
                        
                        !door[8].open && !door[9].open &&!door[10].open &&!door[11].open 
                        && !door[8].isAnimating && !door[9].isAnimating && !door[10].isAnimating && !door[11].isAnimating&&
                        
                        !door[12].open && !door[13].open && !door[12].isAnimating && !door[13].isAnimating){
                        
                        MoveElvator();
                        moveThis = false;
                }
        }
}

function OnTriggerEnter(col : Collider){
        if(col.gameObject.CompareTag("Player")){
                //GameObject.FindGameObjectWithTag("Player").transform.parent = transform;
        }
}
function OnTriggerExit(col : Collider){
        if(col.gameObject.CompareTag("Player")){
                //GameObject.FindGameObjectWithTag("Player").transform.parent = null;
        }
}

function MoveElvator(){
        isMoving = true;
        audio.PlayOneShot(start);
        if(goingUp){
                //play audio
                while(floorHeights[floorID] > transform.position.y)
                {
                        transform.position.y += moveSpeed * Time.deltaTime;
                        yield;
                }
                if( transform.position.y >= floorHeights[floorID]){
                        transform.position.y = floorHeights[floorID];
                        //open door and play stop audio
                        audio.Stop();
                        audio.PlayOneShot(end);
                        
                        currentFloor = floorID;
                        OpenDoor();
                }
        }
        else{
                while(floorHeights[floorID] < transform.position.y)
                {
                        transform.position.y -= moveSpeed * Time.deltaTime;
                        yield;
                }
                if( transform.position.y <= floorHeights[floorID]){
                        transform.position.y = floorHeights[floorID];
                        //open door and play stop audio
                        audio.Stop();
                        audio.PlayOneShot(end);
                        
                        currentFloor = floorID;
                        OpenDoor();
                }
        }
        
        isMoving = false;
}

function Move(targetFloor: int, gUp: boolean){
        
        if(currentFloor == targetFloor){
        
        }
        else{
                floorID = targetFloor;
                goingUp = gUp;
                CloseDoor();
        }
        
}

function OpenDoor(){
        if(currentFloor == 0 && !door[0].open && !door[1].open &&!door[2].open &&!door[3].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating){
                door[0].Open();
                door[1].Open();
                door[2].Open();
                door[3].Open();
        }
        else if(currentFloor == 1 && !door[0].open && !door[1].open &&!door[4].open &&!door[5].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[4].isAnimating && !door[5].isAnimating){
                door[0].Open();
                door[1].Open();
                door[4].Open();
                door[5].Open();
        }
        else if(currentFloor == 2 && !door[0].open && !door[1].open &&!door[6].open &&!door[7].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[6].isAnimating && !door[7].isAnimating){
                door[0].Open();
                door[1].Open();
                door[6].Open();
                door[7].Open();
        }
        else if(currentFloor == 3 && !door[0].open && !door[1].open &&!door[8].open &&!door[9].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[8].isAnimating && !door[9].isAnimating){
                door[0].Open();
                door[1].Open();
                door[8].Open();
                door[9].Open();
        }
        else if(currentFloor == 4 && !door[0].open && !door[1].open &&!door[10].open &&!door[11].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[10].isAnimating && !door[11].isAnimating){
                door[0].Open();
                door[1].Open();
                door[10].Open();
                door[11].Open();
        }
        else if(currentFloor == 5 && !door[0].open && !door[1].open &&!door[12].open &&!door[13].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[12].isAnimating && !door[13].isAnimating){
                door[0].Open();
                door[1].Open();
                door[12].Open();
                door[13].Open();
        }
        moveThis = false;

}

function CloseDoor(){
        if(currentFloor == 0 && door[0].open && door[1].open && door[2].open && door[3].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[2].isAnimating && !door[3].isAnimating){
                door[0].Close();
                door[1].Close();
                door[2].Close();
                door[3].Close();
        }
        else if(currentFloor == 1 && door[0].open && door[1].open && door[4].open && door[5].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[4].isAnimating && !door[5].isAnimating){
                door[0].Close();
                door[1].Close();
                door[4].Close();
                door[5].Close();
        }
        else if(currentFloor == 2 && door[0].open && door[1].open && door[6].open && door[7].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[6].isAnimating && !door[7].isAnimating){
                door[0].Close();
                door[1].Close();
                door[6].Close();
                door[7].Close();
        }
        else if(currentFloor == 3 && door[0].open && door[1].open && door[8].open && door[9].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[8].isAnimating && !door[9].isAnimating){
                door[0].Close();
                door[1].Close();
                door[8].Close();
                door[9].Close();
        }
        else if(currentFloor == 4 && door[0].open && door[1].open && door[10].open && door[11].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[10].isAnimating && !door[11].isAnimating){
                door[0].Close();
                door[1].Close();
                door[10].Close();
                door[11].Close();
        }
        else if(currentFloor == 5 && door[0].open && door[1].open && door[12].open && door[13].open 
                && !door[0].isAnimating && !door[1].isAnimating && !door[12].isAnimating && !door[13].isAnimating){
                door[0].Close();
                door[1].Close();
                door[12].Close();
                door[13].Close();
        }
        moveThis = true;
}
