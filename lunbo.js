/**
*完成目标:
*1.用户可以选择轮播类型 (无缝，渐变)
*2.用户可以自定义播放速度
*
*       请设置好基本 CSS 样式
*     接收轮播图的父元素 
*    lunbo.listen(el, type, speed)
*/
	
//实现

	(function () {

		//定时器
		var inter;

		//获取传入的父级元素
		function get (element) {
			if (element) {
				if (typeof element === 'string') {
					return document.querySelector(element);
				} else {
					return element;
				}
			} else {
				console.log('请传入要监听元素')
			}
		}
		//根据传入父级元素，返回子元素数组
		function getChildNodes (element) {
			var childNodes = element.childNodes,
				len = childNodes.length,
				i = 0,
				arr = [],
				forEach = Array.prototype.forEach;
			if (forEach) {
				forEach.call(childNodes, function (item, index, value) {
					if (item.nodeType == 1) {
						arr.push(item);
					}
				})
				return arr;
			} else {
				for (; i < len; i++) {
					if (childNodes[i].nodeType == 1) {
						arr.push(childNodes[i]);
					}
				}
			}
		}

		//分支函数
		function on (element, type, speed) {
			switch (type) {
				case "wufeng": wufeng(element, speed);
				break;
				case "jianbian": jianbian(element, speed);
				break;
			};
		}
		//无缝
		function wufeng (element, speed) {
			var style = element.style;
			//接收子级元素数组
			var childNodes = getChildNodes(element);
			var width = parseInt(getComputedStyle(childNodes[0], null).width);
			
			var len = childNodes.length;
			console.log(width)
			inter = setInterval(move, speed);
			var i = 0;
			function move () {
				i++;
				if (i == len) {
					style.transition = "0s";
					style.left = "0px";
					i = 0;
					setTimeout(move, 10);
				} else {
					style.transition = "0.5s"
				}
				style.left = -i * width + "px";
			}
		}

		//渐变
		function jianbian (element, speed) {
			//接收子级元素数组
			var childNodes = childNodes(element);

		}

		var api = {
			listen: function (el, type, speed) {
				var element = get(el);
				on(element, type, speed);
			}
		};

		this.lunbo = api;

	})();
