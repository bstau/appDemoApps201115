Ext.define('Surveyportal.view.mobileview.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Surveyportal.view.mobileview.reportui.querycriteria.QueryCriteriaView',
			'Surveyportal.view.mobileview.reportui.datachart.DataChartViewTab',
			'Surveyportal.view.mobileview.reportui.datachart.DataChartViewPanel',
			'Surveyportal.view.mobileview.reportui.ReportViewController' ,
			'Surveyportal.view.mobileview.fw.DataPointPanel',
			'Surveyportal.view.mobileview.googlemaps.map.MapPanel'
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
