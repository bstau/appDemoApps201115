Ext.define('Testprok.view.querybuildernewmodel.querystructure.QueryStructureStore', {
    extend: 'Ext.data.Store',
    requires:['Testprok.view.querybuildernewmodel.querystructure.QueryStructureModel'],
    autoSync: false,
    model: 'Testprok.view.querybuildernewmodel.querystructure.QueryStructureModel',
    filters: []
  
});
