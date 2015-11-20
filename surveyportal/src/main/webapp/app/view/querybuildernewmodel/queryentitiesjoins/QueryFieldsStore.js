Ext.define('Surveyportal.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsStore', {
    extend: 'Ext.data.Store',
    requires:['Surveyportal.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel'],
    autoSync: false,
    model: 'Surveyportal.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel',
    filters: []
  
});
