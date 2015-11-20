Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.SurveyAnswerMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SurveyAnswerMainController",
     "restURL": "/SurveyAnswer",
     "defaults": {
          "split": true
     },
     "requires": ["Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyAnswerModel", "Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyAnswerMainController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.SurveyAnswerViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Survey Answer",
               "name": "SurveyAnswerTreeContainer",
               "itemId": "SurveyAnswerTreeContainer",
               "restURL": "/SurveyAnswer",
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
                    "itemId": "SurveyAnswerTree",
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
                    "viewModel": "SurveyAnswerViewModel",
                    "xtype": "form",
                    "displayName": "Survey Answer",
                    "title": "Survey Answer",
                    "name": "SurveyAnswer",
                    "itemId": "SurveyAnswer",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "surveyAnswerName",
                         "itemId": "surveyAnswerName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Survey Answer",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Answer<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "2A439D54-8AFE-4024-BC7E-C10E4326EA8E",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{surveyAnswerName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "surveyAnswerDesc",
                         "itemId": "surveyAnswerDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Survey Answer Desc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Answer Desc",
                         "fieldId": "95DFB2F8-7397-42C8-B7BB-3A80B74FC816",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{surveyAnswerDesc}",
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
                         "customId": 828,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 828,
                              "customId": 910
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 828,
                              "customId": 911,
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
                              "parentId": 828,
                              "customId": 912,
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
                    "displayName": "Survey Answer",
                    "title": "Details Grid",
                    "name": "SurveyAnswerGrid",
                    "itemId": "SurveyAnswerGrid",
                    "restURL": "/SurveyAnswer",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "surveyAnswerId",
                         "dataIndex": "surveyAnswerId",
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
                         "header": "Survey Answer",
                         "dataIndex": "surveyAnswerName",
                         "flex": 1
                    }, {
                         "header": "Survey Answer Desc",
                         "dataIndex": "surveyAnswerDesc",
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
               "viewModel": "SurveyAnswerViewModel",
               "xtype": "form",
               "displayName": "Survey Answer",
               "title": "Survey Answer",
               "name": "SurveyAnswer",
               "itemId": "SurveyAnswer",
               "bodyPadding": 10,
               "items": [{
                    "name": "surveyAnswerName",
                    "itemId": "surveyAnswerName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Survey Answer",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Answer<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "2A439D54-8AFE-4024-BC7E-C10E4326EA8E",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{surveyAnswerName}",
                    "columnWidth": 0.5
               }, {
                    "name": "surveyAnswerDesc",
                    "itemId": "surveyAnswerDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Survey Answer Desc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Answer Desc",
                    "fieldId": "95DFB2F8-7397-42C8-B7BB-3A80B74FC816",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{surveyAnswerDesc}",
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
                    "customId": 828,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 828,
                         "customId": 910
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 828,
                         "customId": 911,
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
                         "parentId": 828,
                         "customId": 912,
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