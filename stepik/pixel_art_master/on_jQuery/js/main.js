function drowCanvas() {
	for (let i = 0; i != 50; ++i) {
		for (let j = 0; j != 35; ++j) {
			$('.canvas').append($('<div>').css({
				'width': '15px',
				'height': '15px',
				'padding': '0',
				'margin': '0',
				'border': 'solid lightgrey 0.1px',
				'display': 'inline-block',
				'background-color': 'white'
			}).addClass('pixel'));
		}
	}
}

let hexColors = ['#b23232', '#ff4848', '#ff6c6c', '#e59b40', '#ffad48',
    			 '#ffc57e', '#e5de40', '#fff748', '#fffa91', '#39cc4b',
    			 '#48ff5e', '#91ff9e', '#3248b2', '#4867ff', '#91a3ff', 
    			 '#6432b2', '#8f48ff', '#bb91ff', '#7c2b99', '#cf48ff',
    			 '#e291ff', '#000000', '#323232', '#666666', '#999999',
    			 '#cccccc', '#ffffff', '#3a2119', '#512e23', '#754233', 
    			 '#90675b', '#ac8d84'];

let brush = 'black';
function drowPallete() {
	for (let i = 0; i != hexColors.length; ++i) {
		$('.pallete').append($('<div>').css({
			'width': '30px',
			'height': '30px',
			'padding': '0',
			'margin': '0',
			'border': 'solid white 1px',
			'display': 'inline-block',
			'background-color': hexColors[i],
			'border-radius': '100%'
		}).addClass('pallete-color'));
	}

	let pCurColor = $('<p>CURRENT COLOR \u00A0\u00A0\u00A0\u00A0\u00A0</p>').css({
		'margin': '0',
		'margin-right': '30px',
		'color': 'grey'
	})

	let curColor = $('<input type="color">').addClass('cur-color')
	
	let divCurColor = $('<div>').css({
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		'padding-left': '160px'
	}).append(pCurColor, curColor)

	$('.pallete').append(divCurColor)
}

$('.pallete').change(function(event) {
	if (event.target.tagName = 'INPUT') {
		brush = event.target.value;
	}
})

$('.pallete').click(function(event) {
	function colorToHex(color) {
	    if (color.substr(0, 1) === '#')
	        return color
	    let digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color)
	    
	    let red = parseInt(digits[2])
	    let green = parseInt(digits[3])
	    let blue = parseInt(digits[4])
	    
	    let rgb = blue | (green << 8) | (red << 16)
	    return digits[1] + '#' + rgb.toString(16)
	};

	if (event.target.tagName === 'DIV' && event.target.className === 'pallete-color') {
		brush = event.target.style.backgroundColor;
		$('.cur-color').val(colorToHex(brush));
	}
})

let mousemoveHandler = function(event) {
	if (event.target.tagName === 'DIV' && event.target.className === 'pixel')
		event.target.style.backgroundColor = brush
}

$('.canvas').mousedown(function(event) {
	if (event.target.tagName === 'DIV' && event.target.className === 'pixel')
		event.target.style.backgroundColor = brush
	$('.canvas').on('mousemove', mousemoveHandler)
})

$('.canvas').mouseup(function(event) {
	$('.canvas').off('mousemove', mousemoveHandler)
})

drowCanvas();
drowPallete();