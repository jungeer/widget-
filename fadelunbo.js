	
(function(d) {
	var d = document;
	//配置默认参数
	var options = {
			changeSpeed: 1000,
			fadeSpeed: 10
		};

	//获取传入元素
	function get (node) {
		if (typeof node === 'string') {
			 return d.querySelectorAll(node);
		} else {
			return node;
		}
	}
	//呈现元素
	function show (node) {
		node.style.opacity = 1;
	}

	function fadeIn (node, speed) {
		var i = 0,
			interval;
		
		interval = setInterval(function () {
			i += 0.01;
			if (i > 1) {
				clearInterval(interval);
			}
			node.style.opacity = i;
		}, speed);	
	}

	function fadeOut (node, speed) {
		var i = 1,
			interval;

		interval = setInterval(function () {
			i -= 0.01;
			if (i < 0) {
				clearInterval(interval);
			}
			node.style.opacity = i;
		}, speed);
	}
	//	查找相邻元素节点
	function siblings (currentNode) {
			var parent = currentNode.parentNode,
				children = parent.childNodes,
				length = children.length,
				i = 0,
				arr = [];
			for (; i < length; i++) {
				if (children[i].nodeType == 1) {
					arr.push(children[i])
				}
			}
			return arr;
		}

	// 主函数
	function mainFade (element) {
		var elems = get(element),
			length = elems.length,
			curIndex = 0,
			forEach = Array.prototype.forEach;
			show(elems[0]);   // 初始展示第一张图
		
		var autoChange = setInterval(function(){ 
	    	changeTo(curIndex); 
	    	if (curIndex == length-1) {
	    		curIndex = -1;
	    	}
	    	curIndex++;
		},2000);

		function changeTo(num){ 
		    fadeOut(elems[num]); //淡出当前 image
		    if (num == length-1) {
		    	num = -1;
		    }
		    fadeIn(elems[num+1]); //淡入目标 image
		   }
		}
	
	var api = {
		//监听元素
		listen: function (element) {
			mainFade(element);
		},
		//配置
		config: function (obj) {
			
		}		
	};

	this.fade = api;
})(document);
