Ext.define('Surveyportal.view.querybuildernewmodel.querystructure.QueryStructureStore', {
    extend: 'Ext.data.Store',
    requires:['Surveyportal.view.querybuildernewmodel.querystructure.QueryStructureModel'],
    autoSync: false,
    model: 'Surveyportal.view.querybuildernewmodel.querystructure.QueryStructureModel',
    filters: []
  
});
