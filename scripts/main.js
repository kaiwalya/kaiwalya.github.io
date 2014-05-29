define([], function () {
	function reqListener () {
		console.log(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	oReq.open("get", "https://api-kaiwalya-com.azurewebsites.net/", true);
	oReq.send();
});