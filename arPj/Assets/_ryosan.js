#pragma strict

function Start () {

}

function Update () {
	if((0 < Input.touchCount && Input.GetTouch(0).phase == TouchPhase.Began) || Input.GetKeyUp(KeyCode.Space)){
		var boll = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		boll.name = this.name + "_boll";
		boll.gameObject.AddComponent("Rigidbody");
		boll.gameObject.AddComponent(_kieru);
		boll.transform.rigidbody.mass = 10000;
		boll.transform.localScale = Vector3(1, 0.5, 1);
		var intTime : int = Time.time;
		intTime = Time.time % 4;
		if (intTime == 1) {
			boll.transform.position = Vector3(0.5, 10, 0);
		} else if (intTime == 2) {
			boll.transform.position = Vector3(-0.5, 10, 0);
		} else if (intTime == 3) {
			boll.transform.position = Vector3(0, 10, 0.5);
		} else if (intTime == 4) {
			boll.transform.position = Vector3(0, 10, -0.5);
		}

	}
}