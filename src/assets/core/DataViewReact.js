/**
 *author: spq 
 */
// 
Ext.define('core.DataViewReact', {
	extend: 'core.DataView', 
	state: {},
	constructor: function() {
		var me = this;
		
		this.callParent(arguments);
		var o = this.getCustomerFn();
		
		var config = {
			getInitialState: function() {
				me.react = this;	// 建立引用方便调用
				this.owner = me;
				return me.getInitialState.call(me, this);
			},
			/*
			componentDidMount: function() {
				me.componentDidMount.call(me, this);
			},
			componentWillMount: function() {
				me.componentWillMount.call(me, this);
			},
			componentWillUpdate: function(nextProps, nextState) {
				me.componentWillUpdate.call(me, nextProps, nextState, this);
			},
			componentDidUpdate: function(prevProps, prevState) {
				me.componentDidUpdate.call(me, prevProps, prevState, this);
			},
			componentWillUnmount: function() {
				me.componentWillUnmount.call(me, this);
			},*/
			
			render: function() {
				return me.template.call(this);
			}
		};
		
		Ext.override(o, config);
		
		var F = React.createClass(o);
		
		ReactDOM.render(React.createElement(F, null), this.el);
		this.setState(this.data);
		
	},
	getInitialState: function() {
		return this.data;
	},
	/*
	componentDidMount: function(r){
		var me = this;
	},
	componentWillMount: function() {
		
	},
	componentWillUpdate: function(nextProps, nextState) {
		
	},
	componentDidUpdate: function() {
		
	},
	componentWillUnmount: function() {
		
	},
	*/
	setState: function(data) {
		this.data = data;
		this.react.setState(data);
	},
	
	onRender: function(container, position) {	// 重写父类
		this.widgetId = this.getId();
		
		if(container == undefined) {
			return;
		}
		
		if(container.constructor == String) {
			this.container = document.getElementById(container);
		} else {
			this.container = $(container)[0];
		}
		
		this.container.appendChild(this.el);
		
		if(typeof this.url == 'string') {
			this.load(this.url);	
		}
	},
	
	load: function(arg0) {
		
		// 判断当前this，确认指向当前类而非react
		var me = this instanceof core.DataViewReact ? this : this.owner;
		
		if(arg0 == null) {
			return;
		}
		
		if(me.fireEvent('beforeload') === false) {
			return;
		};
		if(arg0.constructor == Object || arg0.constructor == Array) {
			me.setState(arg0);
			afterLoad.call(me);
		} else if(arg0.constructor == String) {
			//setTimeout(function() {
				$.getJSON(arg0, {
					_d: new Date().getTime()
				}, function(data) {
					afterLoad.call(me, data);
				});
			//},100);
		}
		
		function afterLoad(data) {
			this.data = data;
			this.fireEvent('load', me.data);
			
			this.setState(me.data);
			this.fireEvent('afterload', me.data);
		}
	},
	
	// 获取用户自定义方法和属性，复制给react, 不包括ext本身的属性
	getCustomerFn: function() {
		var me = this;
		var p = [
			'self', 'superclass','constructor', '$className','requires',
			'config','initConfigList', 'initConfigMap','configMap','getId',
			'renderTo','onRender','render','show','hide','afterRender','destroy','onDestroy',
			'filterOptRe','fireEvent','addListener','removeListener','purgeListeners',
			'addEvents','hasListener','suspendEvents','resumeEvents','on','un','isInstance',
			'configClass','statics','callParent','callSuper','callOverridden',
			'initConfig','hasConfig','setConfig', 'getConfig', 'getInitialConfig','onConfigUpdate',
			'setState','getCustomerFn','template','data','initData','refresh','initRoles', 'substitute',
		];
		
		var o = {};
		for(var k in this) {
			p.indexOf(k) == -1 && (o[k] = this[k]);
		}
		return o;
	}
	
	
});


