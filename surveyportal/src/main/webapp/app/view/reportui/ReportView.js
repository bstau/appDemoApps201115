Ext.define('Surveyportal.view.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Surveyportal.view.reportui.querycriteria.QueryCriteriaView',
			'Surveyportal.view.reportui.datachart.DataChartViewTab',
			'Surveyportal.view.reportui.datachart.DataChartViewPanel',
			'Surveyportal.view.reportui.ReportViewController' ,
			'Surveyportal.view.fw.MainDataPointPanel',
			'Surveyportal.view.googlemaps.map.MapPanel'
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
