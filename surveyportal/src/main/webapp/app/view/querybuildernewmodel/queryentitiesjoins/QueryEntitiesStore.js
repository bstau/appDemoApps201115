Ext.define('Surveyportal.view.querybuildernewmodel.queryentitiesjoins.QueryEntitiesStore', {
    extend: 'Ext.data.Store',
   // requires:['Surveyportal.view.querybuildernewmodel.queryentitiesjoins.QueryEntitiesModel'],
    autoSync: false,
    model: 'Surveyportal.view.querybuildernewmodel.queryentitiesjoins.QueryEntitiesModel',
    data:[]
});
