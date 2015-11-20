Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.SurveyQuestionGroupMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SurveyQuestionGroupMainController",
     "restURL": "/SurveyQuestionGroup",
     "defaults": {
          "split": true
     },
     "requires": ["Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel", "Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyQuestionGroupMainController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.SurveyQuestionGroupViewModel", "Ext.form.field.CustomDateField"],
     "communicationLog": [],
     "tabPosition": "bottom",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "defaults": {
               "split": true
          },
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "customWidgetType": "vdTabLayout",
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "Survey Question Group",
               "name": "SurveyQuestionGroupTreeContainer",
               "itemId": "SurveyQuestionGroupTreeContainer",
               "restURL": "/SurveyQuestionGroup",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "title": "Browse",
                    "useArrows": true,
                    "rootVisible": false,
                    "itemId": "SurveyQuestionGroupTree",
                    "listeners": {
                         "select": "treeClick"
                    },
                    "tbar": [{
                         "xtype": "triggerfield",
                         "customWidgetType": "vdTriggerField",
                         "emptyText": "Search",
                         "triggerCls": "",
                         "listeners": {
                              "change": "onTriggerfieldChange",
                              "buffer": 250
                         }
                    }, "->", {
                         "xtype": "tool",
                         "type": "refresh",
                         "tooltip": "Refresh Tree Data",
                         "handler": "onTreeRefreshClick"
                    }]
               }, {
                    "title": "Advance Search",
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "itemId": "queryPanel",
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "handler": "onFilterClick"
                         }]
                    }],
                    "items": []
               }],
               "region": "west",
               "width": "20%"
          }, {
               "region": "center",
               "layout": "border",
               "defaults": {
                    "split": true
               },
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "SurveyQuestionGroupViewModel",
                    "xtype": "form",
                    "displayName": "Survey Question Group",
                    "title": "Survey Question Group",
                    "name": "SurveyQuestionGroup",
                    "itemId": "SurveyQuestionGroup",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "surveyQuestionGroupName",
                         "itemId": "surveyQuestionGroupName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Survey Question Group",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Question Group<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "F809278F-E93A-4845-8721-7FDD740B555C",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{surveyQuestionGroupName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "surveyQuestionGroupDesc",
                         "itemId": "surveyQuestionGroupDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Survey Question Group Desc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Question Group Desc",
                         "fieldId": "A4CE954E-C46E-4497-999E-BD55C211D74C",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{surveyQuestionGroupDesc}",
                         "columnWidth": 0.5
                    }],
                    "layout": "column",
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "ui": "footer",
                         "isDockedItem": true,
                         "parentId": 1,
                         "customId": 768,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 768,
                              "customId": 299
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 768,
                              "customId": 300,
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "parentId": 768,
                              "customId": 301,
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {}
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "tools": [{
                         "type": "help",
                         "tooltip": "Console",
                         "handler": "onConsoleClick"
                    }],
                    "extend": "Ext.form.Panel",
                    "region": "center"
               }, {
                    "xtype": "gridpanel",
                    "customWidgetType": "vdGrid",
                    "displayName": "Survey Question Group",
                    "title": "Details Grid",
                    "name": "SurveyQuestionGroupGrid",
                    "itemId": "SurveyQuestionGroupGrid",
                    "restURL": "/SurveyQuestionGroup",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "surveyQuestionGroupId",
                         "dataIndex": "surveyQuestionGroupId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryDisplay",
                         "dataIndex": "primaryDisplay",
                         "hidden": true
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Survey Question Group",
                         "dataIndex": "surveyQuestionGroupName",
                         "flex": 1
                    }, {
                         "header": "Survey Question Group Desc",
                         "dataIndex": "surveyQuestionGroupDesc",
                         "flex": 1
                    }, {
                         "header": "createdBy",
                         "dataIndex": "createdBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "createdDate",
                         "dataIndex": "createdDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedBy",
                         "dataIndex": "updatedBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedDate",
                         "dataIndex": "updatedDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "versionId",
                         "dataIndex": "versionId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "activeStatus",
                         "dataIndex": "activeStatus",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "txnAccessCode",
                         "dataIndex": "txnAccessCode",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "xtype": "actioncolumn",
                         "customWidgetType": "vdActionColumn",
                         "width": 30,
                         "sortable": false,
                         "menuDisable": true,
                         "items": [{
                              "icon": "images/delete.gif",
                              "tooltip": "Delete Record",
                              "handler": "onDeleteActionColumnClickMainGrid"
                         }]
                    }],
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "tools": [{
                         "type": "refresh",
                         "tooltip": "Refresh Grid Data",
                         "handler": "onGridRefreshClick"
                    }],
                    "collapsible": true,
                    "titleCollapse": true,
                    "collapseMode": "header",
                    "region": "south",
                    "height": "40%"
               }]
          }]
     }, {
          "title": "Add New",
          "itemId": "addNewForm",
          "layout": "border",
          "customWidgetType": "vdBorderLayout",
          "autoScroll": false,
          "items": [{
               "customWidgetType": "vdFormpanel",
               "viewModel": "SurveyQuestionGroupViewModel",
               "xtype": "form",
               "displayName": "Survey Question Group",
               "title": "Survey Question Group",
               "name": "SurveyQuestionGroup",
               "itemId": "SurveyQuestionGroup",
               "bodyPadding": 10,
               "items": [{
                    "name": "surveyQuestionGroupName",
                    "itemId": "surveyQuestionGroupName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Survey Question Group",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Question Group<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "F809278F-E93A-4845-8721-7FDD740B555C",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{surveyQuestionGroupName}",
                    "columnWidth": 0.5
               }, {
                    "name": "surveyQuestionGroupDesc",
                    "itemId": "surveyQuestionGroupDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Survey Question Group Desc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Question Group Desc",
                    "fieldId": "A4CE954E-C46E-4497-999E-BD55C211D74C",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{surveyQuestionGroupDesc}",
                    "columnWidth": 0.5
               }],
               "layout": "column",
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "ui": "footer",
                    "isDockedItem": true,
                    "parentId": 1,
                    "customId": 768,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 768,
                         "customId": 299
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 768,
                         "customId": 300,
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "parentId": 768,
                         "customId": 301,
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {}
               }],
               "listeners": {
                    "scope": "controller"
               },
               "tools": [{
                    "type": "help",
                    "tooltip": "Console",
                    "handler": "onConsoleClick"
               }],
               "extend": "Ext.form.Panel",
               "region": "center"
          }]
     }]
});