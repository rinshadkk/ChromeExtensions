//$("body").append('Test');

var headID = document.getElementsByTagName("head")[0];

var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = '//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css';
//cssNode.media = 'screen';
headID.appendChild(cssNode);



var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'http://scripts.logicflux.net/myScript.js';
headID.appendChild(newScript);

newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = '//code.jquery.com/jquery-1.10.2.js';
headID.appendChild(newScript);

newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = '//code.jquery.com/ui/1.11.4/jquery-ui.js';
headID.appendChild(newScript);

newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'http://scripts.logicflux.net/contextMenu.js';
headID.appendChild(newScript);


var headID = document.getElementsByTagName("head")[0];
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://scripts.logicflux.net/myCss.css';
//cssNode.media = 'screen';
headID.appendChild(cssNode);

cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://scripts.logicflux.net/contextMenu.css';
//cssNode.media = 'screen';
headID.appendChild(cssNode);

//alert(document.body.innerHTML);
//alert(document.getElementById('dood'));
$('document').ready(function(){
	//alert('Hello');
	//alert(document.getElementById('logocont'));
	//alert(document.body.innerHTML);
	//$("body").append('<script>function TestFunction(){ alert("Hello");}</script>');
	$("body").append('<div class="triggerButton" onclick="TestFunction();">O</div>');
	});

