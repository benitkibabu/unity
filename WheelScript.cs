using UnityEngine;
using System.Collections;

public class WheelScript : MonoBehaviour {

    public Transform wheelModel;
    public bool isPowered = false;
    public bool isSteerable = false;

    private new WheelCollider collider;

	// Use this for initialization
	void Start () {
        if (wheelModel != null)
            Debug.LogWarning("Wheel Model Not Set!");

        collider = GetComponent<WheelCollider>();
	}
	
	// Update is called once per frame
	void Update () {
	
	}


    public void ApplyMotorToqrue(float motorTorue)
    {
        if(isPowered)
            collider.motorTorque = motorTorue;
    }

    public void ApplyBrakeTorque(float brakeForce)
    {
        collider.brakeTorque = brakeForce;
    }

    public void ApplySteerAngle(float steerAngle)
    {
        if (isSteerable)
        {
            collider.steerAngle = steerAngle;
        }
    }
}
