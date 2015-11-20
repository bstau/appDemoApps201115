Ext.define('Testprok.view.databrowsercalendar.DBCalendar', {
	extend : 'Testprok.view.databrowsercalendar.DBCalendarView',
	requires : [ 'Testprok.view.databrowsercalendar.DBCalendarController',
	             'Testprok.view.databrowsercalendar.DBCalendarView'],
	controller : 'databrowsercalendar',
	items : [ ],
	listeners : {
		afterrender : 'loadData',
		scope : "controller"
	}
});
