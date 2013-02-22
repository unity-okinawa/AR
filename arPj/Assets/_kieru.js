#pragma strict

function Start () {

}

function Update () {
	if (this.transform.position.x > 100) {
		Destroy(this.gameObject);
	}else
	if (this.transform.position.y > 100) {
		Destroy(this.gameObject);
	}else
	if (this.transform.position.z > 100) {
		Destroy(this.gameObject);
	}else
	if (this.transform.position.y < -10) {
		Destroy(this.gameObject);
	}
}