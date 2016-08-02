/**
 *author: spq 
 */
// 
Ext.define('core.DataViewReact', {
	extend: 'core.DataView', 
	
	constructor: function(o) {
		var me = this;
		
		var o = this.getCustomerFn();
		
		this.callParent();
		
		var config = {
			getInitialState: function() {
				me.react = this;	// 建立引用方便调用
				this.owner = me;
				return me.getInitialState.call(me, this);
			},
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
			},
			render: function() {
				return me.template.call(this);
			}
		};
		
		Ext.override(o, config);
		
		var F = React.createClass(o);
		
		ReactDOM.render(React.createElement(F, null), this.el);
		
	},
	getInitialState: function() {
		return this.data;
	},
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
	
	getCustomerFn: function() {
		var me = this;
		var p = ['setState', 'self', 'superclass','config','initConfigList','initConfigMap','configMap','renderTo','template','data','constructor','$className','onRender','requires','initData','refresh','render','initRoles','substitute','show','hide','afterRender','destroy','onDestroy','getId','filterOptRe','fireEvent','addListener','removeListener','purgeListeners','addEvents','hasListener','suspendEvents','resumeEvents','on','un','isInstance','configClass','statics','callParent','callSuper','initConfig','hasConfig','setConfig','getConfig','getInitialConfig','onConfigUpdate','callOverridden'];
		
		var o = {};
		for(var k in this) {
			p.indexOf(k) == -1 && (o[k] = this[k]);
		}
		return o;
	},
	
	
});


