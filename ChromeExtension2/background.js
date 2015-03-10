//$("body").append('Test');

var headID = document.getElementsByTagName("head")[0];
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'http://scripts.logicflux.net/myScript.js';
headID.appendChild(newScript);

var headID = document.getElementsByTagName("head")[0];
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://scripts.logicflux.net/myCss.css';
//cssNode.media = 'screen';
headID.appendChild(cssNode);


//alert(document.body.innerHTML);
//alert(document.getElementById('dood'));
$('document').ready(function(){
	//alert('Hello');
	//alert(document.getElementById('logocont'));
	//alert(document.body.innerHTML);
	//$("body").append('<script>function TestFunction(){ alert("Hello");}</script>');
	$("body").append('<button type="button" onclick="TestFunction();">Click You!</button>');
	});

