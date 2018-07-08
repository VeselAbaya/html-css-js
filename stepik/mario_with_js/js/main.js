const input_size = document.querySelector('.input_size')
let pyramid_size = document.querySelector('#p_size').textContent = input_size.value;
const input_symbol = document.querySelector('.input_symbol')
let brickSymbol = input_symbol.value;
drowPyramid(pyramid_size, brickSymbol);

input_size.addEventListener('input', function() {
	pyramid_size = document.querySelector('#p_size').textContent = input_size.value;
	drowPyramid(pyramid_size, brickSymbol);
})

input_symbol.addEventListener('input', function() {
	brickSymbol = input_symbol.value;
	drowPyramid(pyramid_size, brickSymbol);
})

function drowPyramid(pyramid_size, brickSymbol) {
	let pyramid = document.querySelector('.painting');
	while (pyramid.firstChild) 
    	pyramid.removeChild(pyramid.firstChild);
	
	for (let i = 0; i != pyramid_size; ++i) {
		let p = document.createElement('p')
		p.style.height = '20px';
		p.style.padding = '0';
		p.style.margin = '0';
		p.style.color = 'violet';
		p.style.fontSize = '20px';
		p.style.textAlign = 'center';
		for (let j = 0; j != pyramid_size - 1 - i; ++j) 
	    	p.textContent += '\u00A0'
        for (let j = pyramid_size; j != pyramid_size - 2 - i; --j)
	    	p.textContent += brickSymbol
		pyramid.appendChild(p);
    }
}

