Ext.define('Testprok.view.querybuildernewmodel.queryentitiesjoins.EntityJoinStore', {
    extend: 'Ext.data.Store',
    requires:['Testprok.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel'],
    autoSync: false,
    model: 'Testprok.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel',
    data:[]
});
