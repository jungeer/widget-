(function() {
   //默认参数
    var options = {
        bgColor1: 'yellow',
        bgColor2: 'red'
    };
    
    function get(node) {
    	if (typeof node === 'string') {
    		return document.querySelectorAll(node);
    	} else {
    		return node;
    	}
    }

    var api = {
        config: function(ops) {
        	
        	if (typeof ops !== 'object') {
        		
        		throw ('请传入一个配置对象');
        	} else {
        		for (key in ops) {
        			options[key] = ops[key];
        		}

        	}
            return options;
        },
        listen: function(element) {
        	var elems = get(element),
        		length = elems.length,
        		i = 0,
        		forEach = Array.prototype.forEach; 
        	//Array.prototype.forEach.call(...) 可以用 [].forEach.call();代替 
        	//如果支持 forEach 方法则使用，不然使用循环 for
        	if (forEach) {

        		forEach.call(elems, function(item, index, value) {
        			if (index % 2 == 0) {
        				
        				item.style.backgroundColor = options.bgColor1;
        			} else {
        				item.style.backgroundColor = options.bgColor2;
        			}
        		});
        	} else {
        		for (; i < length; i++) {
        			if (i % 2 == 0) {
        				elems[i].style.backgroundColor = options.bgColor1;
        			} else {
        				elems[i].style.backgroundColor = options.bgColor2;
        			}
        		}
        	}
            return this;
        }
    };

    this.zebra = api;
})();