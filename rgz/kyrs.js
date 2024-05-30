document.addEventListener('DOMContentLoaded', updateExchangeRate); // При полной загрузке страницы (DOMContentLoaded) вызывается функция updateExchangeRate
function convertToRub() { // Конвертация из гривны в рубли
    const uah = document.getElementById('uah').value; // По id uah находится поле ввода гривны и берётся значение, которое сейчас введено
    const rub = (uah * fx(Number(1)).from("UAH").to("RUB")).toFixed(4); // Число гривен умножается на курс. Получаем значение
    document.getElementById('rub').value = rub; // В поле ввода с id rub ставим только что вычисленное значение
}

function convertToUah() { // Аналогично из гривны в рубли
    const rub = document.getElementById('rub').value;
    const uah = (rub / fx(Number(1)).from("UAH").to("RUB")).toFixed(4);
    document.getElementById('uah').value = uah;
}

function changeVal() { // Кнопка для изменения валют местами
	const container1 = document.getElementById('container1'); // Надпись над полем + само поле ввода заключены в контейнеры container1 и container2. Как раз они и будут меняться местами
    const container2 = document.getElementById('container2'); // Находятся контейнеры
    const tempHTML = container1.innerHTML; // Запоминается во временную переменную html код первого контейнера
    container1.innerHTML = container2.innerHTML; // В первый контейнер записывает html код второго
    container2.innerHTML = tempHTML; // А во второй из временной переменной.
}
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time)); // Создаётся таймер на указанное время
}

function updateExchangeRate() { // Если сайт полностью загружен
	sleep(200).then(() => { // Вызываем функцию слип, она выше, а затем выполняет код ниже
		const rate = fx(1).from("UAH").to("RUB").toFixed(4); // Получается текущий курс гривны к рублю с помощью функции fx 
		document.getElementById('exchangeValue').innerHTML = `<strong>Текущий курс: 1 UAH = ${rate} RUB</strong>`; // Находится элемент с id exchangeValue - нижняя надпись и туда записывается указанный html код
	});
}