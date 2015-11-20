Ext.define('Testprok.view.mobileview.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Testprok.view.mobileview.reportui.querycriteria.QueryCriteriaView',
			'Testprok.view.mobileview.reportui.datachart.DataChartViewTab',
			'Testprok.view.mobileview.reportui.datachart.DataChartViewPanel',
			'Testprok.view.mobileview.reportui.ReportViewController' ,
			'Testprok.view.mobileview.fw.DataPointPanel',
			'Testprok.view.mobileview.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',

	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
