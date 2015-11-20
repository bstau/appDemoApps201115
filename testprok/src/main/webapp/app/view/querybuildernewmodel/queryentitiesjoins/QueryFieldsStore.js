Ext.define('Testprok.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsStore', {
    extend: 'Ext.data.Store',
    requires:['Testprok.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel'],
    autoSync: false,
    model: 'Testprok.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel',
    filters: []
  
});
