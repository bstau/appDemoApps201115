Ext.define('Surveyportal.view.querybuildernewmodel.queryentitiesjoins.EntityJoinStore', {
    extend: 'Ext.data.Store',
    requires:['Surveyportal.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel'],
    autoSync: false,
    model: 'Surveyportal.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel',
    data:[]
});
