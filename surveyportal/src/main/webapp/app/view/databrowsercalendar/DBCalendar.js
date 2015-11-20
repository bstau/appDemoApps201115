Ext.define('Surveyportal.view.databrowsercalendar.DBCalendar', {
	extend : 'Surveyportal.view.databrowsercalendar.DBCalendarView',
	requires : [ 'Surveyportal.view.databrowsercalendar.DBCalendarController',
	             'Surveyportal.view.databrowsercalendar.DBCalendarView'],
	controller : 'databrowsercalendar',
	items : [ ],
	listeners : {
		afterrender : 'loadData',
		scope : "controller"
	}
});
