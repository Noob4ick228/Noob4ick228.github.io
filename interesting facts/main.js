
let popup = document.querySelector(".popup");
let text = ["Медведь — хозяин леса, это знают все. Но не всем известно, что обитают эти создания не только на севере — в южном полушарии нашей планеты они тоже водятся, правда, другие их виды. Всего сейчас насчитывается восемь видов медведей, и все они удивительны, по-настоящему удивительны. Умные, сильные, хитрые и невероятно выносливые, эти звери действительно прекрасны.","В мире обитает огромное множество разных видов кальмаров, и многие из них непохожи друг на друга. Большие и маленькие, опасные и безобидные, все они, однако, имеют ряд схожих черт, как утверждают зоологи. И не исключено, что в глубине морей и океанов обитают и новые их виды, до сих пор не изученные человечеством.","Тигров можно назвать, пожалуй, самыми узнаваемыми большими хищниками из семейства кошачьих. Чёрно-рыжая полосатая шкура этих созданий стала их своеобразной визитной карточкой. Репутация тигров, как безжалостных хищников, так же, как и их яркая полосатая окраска, словно предостерегает от встречи с этим животным на его территории. Крупные и массивные, тигры способны сразиться с любым противником.","Медузы повсеместно распространены в морях и океанах. Некоторые из них красивы, некоторые выглядят пугающе, кроме того, среди них встречаются как совершенно безобидные создания, так и смертельно опасные.","Самые крупные приматы в мире, гориллы, сейчас находятся под угрозой вымирания. Человеческая деятельность поставила этих обезьян на грань исчезновения, лишив их привычных ареалов обитания и согнав с насиженных мест. Сейчас гориллы обитают в национальных парках некоторых африканских стран, и посмотреть на них приезжает множество туристов, но им надо быть осторожными — эти животные порой бывают непредсказуемы.","Могучие бегемоты, они же гиппопотамы, только кажутся такими неуклюжими увальнями. На самом деле эти огромные животные обладают вспыльчивым характером и бывают весьма опасны, особенно если кто-то будет иметь неосторожность их побеспокоить. С другой стороны, бегемоты сами по себе никому не вредят — они лишь защищают себя и свою территорию, неуклонно сокращающуюся из-за расширения человеческой цивилизации."]
let push = document.querySelectorAll(".img");
let header = ["Медведь","Кальмар","Тигр","Медуза","Горила","Гиппопотам"];
let imgSrc = ["medved.png","osminog.png","tiger.png","meduza.png","gorila.png","gipopotam.png"];
let h2 = document.querySelector("h2");
let img = document.querySelector(".popup-img");
let p = document.querySelector(".text")
push.forEach( function(e,i) {
	e.addEventListener("click",function(){
		popup.style.display = "block";
		img.src = imgSrc[i];
		h2.textContent = header[i];
		p.textContent = text[i];

	})
	e.addEventListener("mouseover",function(){
		e.classList.add("animate__animated")
		e.classList.add("animate__wobble")
	})
	e.addEventListener("mouseout",function(){
		e.classList.remove("animate__animated")
		e.classList.remove("animate__wobble")
	})
});
window.onclick = function(e){
	if (e.target.classList.contains("popup")) {
		popup.style.display = "none";
	}
}
let close = document.querySelector(".close");
close.onclick = function(e){
	popup.style.display = "none";
}
