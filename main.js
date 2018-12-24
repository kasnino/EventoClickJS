



const btnclick = document.querySelector('.boton-nav');
const btndiv = document.querySelector('.mostrar');
const menu = document.querySelector('.menu-nav');

let muestremenu = false;

btnclick.addEventListener('click', toggleMenu);
console.log(btnclick);

function toggleMenu(){


	if(!muestremenu){
		btnclick.classList.add('close');
		btndiv.classList.add('close');
		menu.classList.add('cerrar');
		muestremenu = true;
	}else{
		btnclick.classList.remove('close');
		btndiv.classList.remove('close');
		menu.classList.remove('cerrar');

		muestremenu = false;
	}
}




