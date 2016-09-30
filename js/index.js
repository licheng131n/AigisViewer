'use strict';
const fs = require('fs');
const currentwindow = require('electron').remote.getCurrentWindow();
const app = require('electron').remote.app;

function viewerReady() {
	//app关闭按钮
	var closeButton = document.getElementById("closeButton");
	closeButton.addEventListener('click',function(event){
		app.exit(0);
	});
}
