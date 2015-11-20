Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.SurveyScoreMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SurveyScoreMainController",
     "restURL": "/SurveyScore",
     "defaults": {
          "split": true
     },
     "requires": ["Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyScoreModel", "Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyScoreMainController", "Surveyportal.surveyportal.shared.com.survey.model.authentication.UserModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.SurveyScoreViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Survey Score",
               "name": "SurveyScoreTreeContainer",
               "itemId": "SurveyScoreTreeContainer",
               "restURL": "/SurveyScore",
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
                    "itemId": "SurveyScoreTree",
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
                    "viewModel": "SurveyScoreViewModel",
                    "xtype": "form",
                    "displayName": "Survey Score",
                    "title": "Survey Score",
                    "name": "SurveyScore",
                    "itemId": "SurveyScore",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "userId",
                         "itemId": "userId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "user ",
                         "margin": "5 5 5 5",
                         "fieldLabel": "user <font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "EC697A37-D297-4353-89FB-C79A4EA10134",
                         "restURL": "User",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Surveyportal.surveyportal.shared.com.survey.model.authentication.UserModel"
                         },
                         "forceSelection": true,
                         "bind": "{userId}",
                         "columnWidth": 0.5
                    }, {
                         "name": "groupType",
                         "itemId": "groupType",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "groupType",
                         "margin": "5 5 5 5",
                         "fieldLabel": "groupType<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "B818D07F-FCD5-4378-AEAD-F1FD6F808636",
                         "restURL": "SurveyQuestionGroup",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel"
                         },
                         "forceSelection": true,
                         "bind": "{groupType}",
                         "columnWidth": 0.5
                    }, {
                         "name": "score",
                         "itemId": "score",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Score",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Score<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E6CCC50E-3D08-4B0D-A227-7F117D66D669",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{score}",
                         "columnWidth": 0.5
                    }, {
                         "name": "points",
                         "itemId": "points",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "points",
                         "margin": "5 5 5 5",
                         "fieldLabel": "points<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "058789C1-2713-4D51-BC14-6B13960F1F28",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{points}",
                         "columnWidth": 0.5
                    }, {
                         "name": "surveyDate",
                         "itemId": "surveyDate",
                         "xtype": "customDateField",
                         "customWidgetType": "vdDatefield",
                         "displayName": "Survey Date",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Date<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "5070D876-2BD2-45B8-ADD4-B6F8814F0476",
                         "bind": "{surveyDate}",
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
                         "customId": 507,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 507,
                              "customId": 210
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 507,
                              "customId": 211,
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
                              "parentId": 507,
                              "customId": 212,
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
                    "displayName": "Survey Score",
                    "title": "Details Grid",
                    "name": "SurveyScoreGrid",
                    "itemId": "SurveyScoreGrid",
                    "restURL": "/SurveyScore",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "surveyScoreId",
                         "dataIndex": "surveyScoreId",
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
                         "header": "user ",
                         "dataIndex": "userId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "groupType",
                         "dataIndex": "groupType",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Score",
                         "dataIndex": "score",
                         "flex": 1
                    }, {
                         "header": "points",
                         "dataIndex": "points",
                         "flex": 1
                    }, {
                         "header": "Survey Date",
                         "dataIndex": "surveyDate",
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
               "viewModel": "SurveyScoreViewModel",
               "xtype": "form",
               "displayName": "Survey Score",
               "title": "Survey Score",
               "name": "SurveyScore",
               "itemId": "SurveyScore",
               "bodyPadding": 10,
               "items": [{
                    "name": "userId",
                    "itemId": "userId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "user ",
                    "margin": "5 5 5 5",
                    "fieldLabel": "user <font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "EC697A37-D297-4353-89FB-C79A4EA10134",
                    "restURL": "User",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Surveyportal.surveyportal.shared.com.survey.model.authentication.UserModel"
                    },
                    "forceSelection": true,
                    "bind": "{userId}",
                    "columnWidth": 0.5
               }, {
                    "name": "groupType",
                    "itemId": "groupType",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "groupType",
                    "margin": "5 5 5 5",
                    "fieldLabel": "groupType<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "B818D07F-FCD5-4378-AEAD-F1FD6F808636",
                    "restURL": "SurveyQuestionGroup",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel"
                    },
                    "forceSelection": true,
                    "bind": "{groupType}",
                    "columnWidth": 0.5
               }, {
                    "name": "score",
                    "itemId": "score",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Score",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Score<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E6CCC50E-3D08-4B0D-A227-7F117D66D669",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{score}",
                    "columnWidth": 0.5
               }, {
                    "name": "points",
                    "itemId": "points",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "points",
                    "margin": "5 5 5 5",
                    "fieldLabel": "points<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "058789C1-2713-4D51-BC14-6B13960F1F28",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{points}",
                    "columnWidth": 0.5
               }, {
                    "name": "surveyDate",
                    "itemId": "surveyDate",
                    "xtype": "customDateField",
                    "customWidgetType": "vdDatefield",
                    "displayName": "Survey Date",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Date<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "5070D876-2BD2-45B8-ADD4-B6F8814F0476",
                    "bind": "{surveyDate}",
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
                    "customId": 507,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 507,
                         "customId": 210
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 507,
                         "customId": 211,
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
                         "parentId": 507,
                         "customId": 212,
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