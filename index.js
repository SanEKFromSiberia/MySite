$(function() {

function main() {

	function SetThemeClass(themeName) {
		let tegForTheme = document.querySelector("body");
		switch(themeName) {
			case 'warm':  
	    		tegForTheme.classList.add('classWarmTheme');
	    		tegForTheme.classList.remove('classCoolTheme');
	    		break;

	  		case 'cool':  
	  			tegForTheme.classList.add('classCoolTheme');
	  			tegForTheme.classList.remove('classWarmTheme');
	  	  		break;
		}
	}
	warmTheme.onclick = function() {SetThemeClass('warm');}
	coolTheme.onclick = function() {SetThemeClass('cool');}
	/*Menu links*/

	function setVisibleActivPage(page) {		
		let activePageClass;

		while (true) {
			activePageClass = $("div.activePage")[0];
			if (!activePageClass) {break};
			activePageClass.style.display = 'none';
			if (activePageClass == $("div."+ page)[0]) {break}
			activePageClass.classList.remove('activePage');
			activePageClass.classList.add('nonActivePage');			
		}

		let pageToActive = $("div."+ page)[0];
		pageToActive.style.display = 'block';
		pageToActive.classList.add('activePage');
		pageToActive.classList.remove('nonActivePage');			


	}

$("a.firstPageLink")[0].onclick = function (){setVisibleActivPage("firstPage");};
$("a.entreePageLink")[0].onclick = function (){setVisibleActivPage("entreePage");};


}
main();





});