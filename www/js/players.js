// JavaScript Document

function getPlayers() {
	$.getJSON("players.json", function(players){
		$('#playerList li').remove(); /*Remove list items, then run for loop */
		
	for (var i=0; i<players.length; i++)
	{
		document.getElementById('playerList').innerHTML +=
		'<li>' + '<a href="'+players[i].page+'">' + 
		'<h1>'+'Name:&nbsp;<span class="info">' + players[i].name + '</h1>'+'</span>'+
		'<h1>'+'Number:&nbsp;<span class="info">' + players[i].number + '</h1>'+'</span>'+
		'<img src="'+players[i].image+'">' + 
		'<h1>'+'Position:&nbsp;<span class="info">' + players[i].position + '</h1>'+'</span>'+'</a>' + '</li>'	
	}
	
	$('#playerList').listview('refresh');
	
	});
}