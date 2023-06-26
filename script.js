// References the search container div
const input = document.querySelector('#fruit');
// References the unordered list within the search container div
const suggestions = document.querySelector('.suggestions ul');
// Suggested fruit types for unordered list
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.onkeyup = function search(str) {
	let results = [];
	let word = input.value;
	if(word.length){
		results = fruit.filter((keyword) => {
		return keyword.toLowerCase().includes(word.toLowerCase());
		});
		console.log(results);
	}
	showSuggestions(results);
}

function showSuggestions(results) {
	const content = results.map((list) => {
		return "<li onclick = useSuggestion(this)>" + list + "</li>";
	});
	suggestions.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function useSuggestion(list) {
	input.value = list.innerHTML;
	suggestions.innerHTML = '';
}

suggestions.addEventListener('click', useSuggestion);

// function searchHandler(e) {
	
// }
// input.addEventListener('keyup', searchHandler);




