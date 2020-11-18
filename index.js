
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
