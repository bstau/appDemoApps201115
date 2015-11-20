Ext.define('Testprok.view.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Testprok.view.reportui.querycriteria.QueryCriteriaView',
			'Testprok.view.reportui.datachart.DataChartViewTab',
			'Testprok.view.reportui.datachart.DataChartViewPanel',
			'Testprok.view.reportui.ReportViewController' ,
			'Testprok.view.fw.MainDataPointPanel',
			'Testprok.view.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',
	height:500,
	width:1000,
	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
