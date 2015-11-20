/**
 * 
 */
Ext.define('Testprok.view.logalarm.LogAlarmMainView', {
	extend : 'Ext.form.Panel',
	xtype : 'logAlarmMainView',
	requires : [ 'Testprok.view.logalarm.LogAlarmMainViewController',
			'Testprok.view.logalarm.tree.LogAlarmTreePanel',
			'Testprok.view.logalarm.mainscreen.LogAlarmMainViewTabPanel',
			'Ext.layout.container.Column','Ext.form.field.Hidden' ],

	controller : 'logAlarmMainViewController',

	layout : 'column',
	autoScroll : true,
	defaults : {
		margin : 10,
	},
	items : [ {
		columnWidth : '0.3',
		xtype : 'logAlarmTreePanel',
		itemId : 'logAlarmTreePanel',
	}, {
		columnWidth : '0.7',
		xtype :  'logAlarmMainViewTabPanel',
		itemId : 'logAlarmMainViewTabPanel'
	}],
	buttons : [ {
		text : 'Clear',
		itemId : 'clearButton',
		handler : 'onClearButton',
	}, {
		text : 'Update Module',
		itemId : 'saveButton',
		formBind : true,
		handler : 'onSaveButton',
	} ]
});
