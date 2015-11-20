Ext.define('Testprok.view.reportui.datachart.DataChartViewTab', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Testprok.view.reportui.datachart.DataChartTController',
			'Testprok.view.reportui.datachart.datagrid.DataGridView','Testprok.view.reportui.datachart.chart.ChartTabView','Testprok.view.reportui.datachart.ChartPointView' ],
	controller : 'datacharttController',
	xtype : 'datachart-tabpanel',
	tabPosition : 'bottom',
	bodyStyle : 'background:#D8D8D8',

	margin : '0 0 0 0',
	initComponent : function() {
		/*this.items */

		this.callParent(arguments);
	},
	listeners : {
		scope : "controller",
		tabchange : 'tabchange',
		afterrender:function(me){
        	me.setActiveTab(me.items.items[0]);
        }
	}

});