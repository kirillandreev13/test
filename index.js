$(function(){
	
	$('#form button').click( function() {
		var group = $('#form select').val();
		if (group=='') {
			$('#data').html('');
		} else {
			$.getJSON('https://frontend-test-api.alex93.now.sh/api/languages?group='+group,function(json) {
			var data = json.data;
			if (!data) return;
			var html = '';
			
			for (let item of data) if (item.logo) {
				html+='<div><img src="'+item.logo+'" alt="">';
				html+='<p><strong>'+item.name+'</strong><br>Основан в '+item.year+'<br>';
				if(item.projectsCount) html+=item.projectsCount+' проектов на GitHub<br>';
				if(item.docs) html+='<a href="'+item.docs+'" target="_blank">Документация</a>';
				html+='</p></div>';
			}
			$('#data').html(html);
			
			});
		}
	});
	
});