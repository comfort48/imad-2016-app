
var button=document.getElementById('counter');
button.onclick=function(){
	var request=new XMLHttpRequest();
	request.onreadystatechange=function()
	{
		if(request.readyState===XMLHttpRequest.DONE){
			if(request.status===100){
				var counter=request.responseText;
				var span=document.getElementById('count');
				span.innerHTML=counter.toString();
			}
		}
	};
request.open('GET','http://comfort48.imad.hasura-app.io/ui/counter',true);
request.send(null);
};