Ext.define('Surveyportal.view.art.masterform.MasterFormPanel',
{
	extend :'Ext.form.Panel',
	xtype: 'masterFormPanel',
	itemId : 'masterFormPanel',
	
	requires: ['Surveyportal.view.art.masterform.MasterFormModel','Surveyportal.view.art.masterform.MasterFormViewModel','Surveyportal.view.art.masterform.MasterFormPanelController'],

	//viewModel: 'masterFormViewModel',
	
	controller: 'masterFormPanelController'

});
	