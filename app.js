$(document).ready(function() {
	var color = '#fff'
	var colors = 'red blue green yellow white'
	var isDown = false;
	$(document).mousedown(function() {
		isDown = true;
	})
	.mouseup(function() {
		isDown = false;
	});
	$('.box').on('mouseover', function() {
		if(isDown) {
			$(this).addClass(color);
		}
	})
	$('.box').on('click', function() {
		$(this).addClass(color);
	})
	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	})
	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	})
	$('#red').on('click', function() {
		color = 'red';
	})
	$('#blue').on('click', function() {
		color = 'blue';
	})
	$('#green').on('click', function() {
		color = 'green';
	})
	$('#yellow').on('click', function() {
		color = 'yellow';
	})
	$('#white').on('click', function() {
		color = 'white';
	})
})