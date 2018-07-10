function drowCanvas() {
	let canvas = document.querySelector('.canvas')
	for (let i = 0; i != 50; ++i) {
		for (let j = 0; j != 35; ++j) {
			let div = document.createElement('div')
			div.style.width = '15px'
			div.style.height = '15px'
			div.style.padding = '0'
			div.style.margin = '0'
			div.style.border = 'solid lightgrey 0.1px'
			div.style.display = 'inline-block'
			div.style.backgroundColor = 'white'
			div.className = 'pixel'
			canvas.appendChild(div)
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
	let pallete = document.querySelector('.pallete')
	for (let i = 0; i != hexColors.length; ++i) {
		let div = document.createElement('div');
		div.style.width = '30px';
		div.style.height = '30px';
		div.style.padding = '0';
		div.style.margin = '0';
		div.style.border = 'solid white 1px';
		div.style.display = 'inline-block';
		div.style.backgroundColor = hexColors[i];
		div.style.borderRadius = '100%'
		div.className = 'pallete-color'
		pallete.appendChild(div);
	}

	let pCurColor = document.createElement('p')
	pCurColor.textContent = 'CURRENT COLOR \u00A0\u00A0\u00A0\u00A0\u00A0>'
	pCurColor.style.margin = '0'
	pCurColor.style.marginRight = '30px'
	pCurColor.style.color = 'grey'

    // let curColor = document.createElement('div')
	// curColor.style.backgroundColor = brush
	// curColor.style.width = '50px'
	// curColor.style.height = '25px'
	// curColor.style.borderRadius = '3px'
	// curColor.className = 'cur-color'
	let curColor = document.createElement('input')
	curColor.type = 'color';
	curColor.className = 'cur-color'
	
	let divCurColor = document.createElement('div')
	divCurColor.style.display = 'flex'
	divCurColor.style.justifyContent = 'center'
	divCurColor.style.alignItems = 'center'
	divCurColor.style.paddingLeft = '160px'
	divCurColor.appendChild(pCurColor)
	divCurColor.appendChild(curColor)
	pallete.appendChild(divCurColor)
}

document.querySelector('.pallete').addEventListener('change', function(event) {
	if (event.target.tagName = 'INPUT') {
		brush = event.target.value;
	}
})

document.querySelector('.pallete').addEventListener('click', function(event) {
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
		document.querySelector('.cur-color').value = colorToHex(brush);
	}
})

let mousemoveHandler = function(event) {
	if (event.target.tagName === 'DIV' && event.target.className === 'pixel') {
		event.target.style.backgroundColor = brush
		event.target.style.borderColor = brush
	}
}

document.querySelector('.canvas').addEventListener('mousedown', function(event) {
	if (event.target.tagName === 'DIV' && event.target.className === 'pixel') {
		event.target.style.backgroundColor = brush
		event.target.style.borderColor = brush
	}

	document.querySelector('.canvas').addEventListener('mousemove', mousemoveHandler)
})

document.querySelector('.canvas').addEventListener('mouseup', function(event) {
	document.querySelector('.canvas').removeEventListener('mousemove', mousemoveHandler)
})

drowCanvas();
drowPallete();