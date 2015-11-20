/**
 * 
 */
Ext.define("Testprok.view.scheduleconfiguration.tab.ScheduleConfigTab", {
	extend : 'Ext.tab.Panel',
	xtype : 'schedulerConfigTab',
	requires : [ 'Testprok.view.scheduleconfiguration.tab.ScheduleConfigTabController' ],
	controller : 'schedulerConfigTabController'
});