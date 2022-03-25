$(function(){
	function load(){
		$("#loading").html('<img src="img/loading.gif">');
		$.ajax({
			type: 'post',
			url: 'php/read.php',
			data:{				
				
			}
		}).done(function(data){			
			$("#main").html(data)
			$("#loading").empty()
		})
	}
 
 
    load()
	$(document).on('click','#tbl1', function(){
	alert('');
	})
	//$("#tbl1").fadeToggle(1000).fadeToggle(1000);
})













