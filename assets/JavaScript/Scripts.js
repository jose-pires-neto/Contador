var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

let btn_subtrair = document.getElementById("btn_subtrair");
let btn_adicionar = document.getElementById("btn_adicionar");

function validaValor(){
	//Desabilitar botão de Incrementar quando currentNumber chegar a 10;
	if (currentNumber >= 10 )
	{
		document.querySelector('#btn_adicionar').disabled = true;
	}
	else
	{
		document.querySelector('#btn_adicionar').disabled = false;
	}

	//Desabilitar botão de Decrementar quando currentNumber chegar a -10;
	if (currentNumber <= -10 )
	{
		document.querySelector('#btn_subtrair').disabled = true;
	}
	else
	{
		document.querySelector('#btn_subtrair').disabled = false;
	}

	if (currentNumber < 0 )
	{
		currentNumberWrapper.style.color = 'red';
	}
	else
	{
		currentNumberWrapper.style.color = 'black';
	}
}

function decrement(){
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	validaValor();
}

function increment(){
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
	validaValor();
}

btn_subtrair.addEventListener("click", () => {
	decrement();
});

btn_adicionar.addEventListener("click", () => {
	increment();
});

currentNumberWrapper.addEventListener()