(function () {
	//获取监听元素
	function get (element) {
		if (typeof element === 'string') {
			return document.querySelector(element);
		} else {
			return element;
		}
	}
	//轮播函数
	function lunbo (element, duration) {
		var elems = getChildNodes(element),
			len = elems.length,
			i = 0,
			width = parseInt(getComputedStyle(elems[0], null).width),
			inter;
			inter = setInterval(move, duration);
		function move () {
			i++;
			if (i == len) {
				element.style.transition = "0s";
				element.style.left = "0px";
				i = 0;
				setTimeout(move, 0);   //关键
			} else {
				element.style.transition = "0.5s";
				element.style.left = -i * width + 'px';
			}					
		}
	}
	//获取子元素
	function getChildNodes (element) {
		var childNodes = element.childNodes,
			len = childNodes.length,
			i = 0,
			arr = [];
		for (; i < len; i++) {
			if (childNodes[i].nodeType == 1) {
				arr.push(childNodes[i]);
			}
		}
		return arr;
	}
	var api = {
		on: function (element, duration) {
			if (arguments.length == 2) {
				if (typeof duration === 'number') {
					lunbo(element, duration);
				}
			} else {
				lunbo(element, 1000);
			}
			var elem = get(element);
		},
		config: function () {
		}
	}
	this.lunbo = api;
})();