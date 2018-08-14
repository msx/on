(function() {
	var input=document.querySelector(".header form input");
	var button=document.querySelector(".header form button");
	var test=document.createElement("input");
	var nativeSupport=test.placeholder !==void 0;
	if (!nativeSupport) {
		input.value="Cari...";
		input.style.color="#888";
		input.onfocus=function() {
			if (input.value=="Cari...") {
				input.value="";
				input.style.color="#333";
			}
		}
		input.onblur=function() {
			if (input.value==="") {
				input.value="Cari...";
				input.style.color="#888";
			}
		}
	}
	input.onkeyup = function() {
		button.style.display = (this.value.length) ? "block" : "none";
	}
	button.onclick = function() {
		button.style.display = "none";
		input.value = "Cari...";
		input.focus();
	}
	function reset() {
		var r = document.querySelector(".header form input").value="";
		r.focus();
	}
	var toggle=document.querySelector(".header .more");
	var checkbox=document.querySelector(".header #more");

	document.onclick=function(e) {
		var target=e.target;
		if( !checkbox.checked || toggle.contains(target) || (target===checkbox || target===toggle)) return;
		checkbox.checked=false;
	}
})();
