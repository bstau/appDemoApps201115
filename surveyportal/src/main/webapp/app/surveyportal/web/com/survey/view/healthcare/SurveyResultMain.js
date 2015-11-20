Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.SurveyResultMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "controller": "SurveyResultMainController",
     "restURL": "/SurveyResult",
     "defaults": {
          "split": true
     },
     "requires": ["Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyResultMainController", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyAnswerModel", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.SurveyResultViewModel", "Ext.form.field.CustomDateField"],
     "tabPosition": "bottom",
     "communicationLog": [],
     "itemId": "SurveyResultFormGridContainer",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "region": "center",
               "layout": "border",
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "SurveyResultViewModel",
                    "xtype": "form",
                    "displayName": "SurveyResult",
                    "title": "SurveyResult",
                    "name": "SurveyResult",
                    "itemId": "SurveyResult",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "surveyQuestionId",
                         "itemId": "surveyQuestionId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Question",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Question<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "42FC5D83-5C65-4A7B-A459-8F4C93FE75FB",
                         "restURL": "SurveyQuestion",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionModel"
                         },
                         "forceSelection": true,
                         "bind": "{surveyQuestionId}"
                    }, {
                         "name": "surveyAnswerId",
                         "itemId": "surveyAnswerId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "surveyAnswerId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "surveyAnswerId<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "0FCF781D-A621-4A0A-AE7A-00FF03EA21C5",
                         "restURL": "SurveyAnswer",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyAnswerModel"
                         },
                         "forceSelection": true,
                         "bind": "{surveyAnswerId}"
                    }, {
                         "name": "contactId",
                         "itemId": "contactId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Contact Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Contact Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "304CADFC-D957-4E2C-8576-00EA9CA94896",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{contactId}"
                    }, {
                         "name": "surveyDate",
                         "itemId": "surveyDate",
                         "xtype": "customDateField",
                         "customWidgetType": "vdDatefield",
                         "displayName": "Date",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Date<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "FD62D1B5-C6DC-47CC-B660-BF22F9F00DF8",
                         "bind": "{surveyDate}"
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
                         "customId": 998,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 998,
                              "customId": 774
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 998,
                              "customId": 775,
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
                              "parentId": 998,
                              "customId": 776,
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
                    "xtype": "panel",
                    "layout": "border",
                    "customWidgetType": "vdPanel",
                    "title": "Details Grid",
                    "columns": [{
                         "header": "id",
                         "dataIndex": "surveyResultId",
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
                         "header": "Question",
                         "dataIndex": "surveyQuestionId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "surveyAnswerId",
                         "dataIndex": "surveyAnswerId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Contact Name",
                         "dataIndex": "contactId",
                         "flex": 1
                    }, {
                         "header": "Date",
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
                    "items": [{
                         "region": "center",
                         "xtype": "gridpanel",
                         "customWidgetType": "vdGrid",
                         "displayName": "SurveyResult",
                         "name": "SurveyResultGrid",
                         "itemId": "SurveyResultGrid",
                         "restURL": "/SurveyResult",
                         "store": [],
                         "bodyPadding": 10,
                         "dockedItems": [{
                              "xtype": "toolbar",
                              "dock": "top",
                              "items": [{
                                   "xtype": "triggerfield",
                                   "emptyText": "search",
                                   "triggerCls": "",
                                   "listeners": {
                                        "change": "onTriggerfieldChange",
                                        "buffer": 250
                                   }
                              }]
                         }],
                         "columns": [{
                              "header": "id",
                              "dataIndex": "surveyResultId",
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
                              "header": "Question",
                              "dataIndex": "surveyQuestionId",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "surveyAnswerId",
                              "dataIndex": "surveyAnswerId",
                              "renderer": "renderFormValue",
                              "flex": 1
                         }, {
                              "header": "Contact Name",
                              "dataIndex": "contactId",
                              "flex": 1
                         }, {
                              "header": "Date",
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
                         }
                    }],
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
               "viewModel": "SurveyResultViewModel",
               "xtype": "form",
               "displayName": "SurveyResult",
               "title": "SurveyResult",
               "name": "SurveyResult",
               "itemId": "SurveyResult",
               "bodyPadding": 10,
               "items": [{
                    "name": "surveyQuestionId",
                    "itemId": "surveyQuestionId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Question",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Question<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "42FC5D83-5C65-4A7B-A459-8F4C93FE75FB",
                    "restURL": "SurveyQuestion",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionModel"
                    },
                    "forceSelection": true,
                    "bind": "{surveyQuestionId}"
               }, {
                    "name": "surveyAnswerId",
                    "itemId": "surveyAnswerId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "surveyAnswerId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "surveyAnswerId<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "0FCF781D-A621-4A0A-AE7A-00FF03EA21C5",
                    "restURL": "SurveyAnswer",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyAnswerModel"
                    },
                    "forceSelection": true,
                    "bind": "{surveyAnswerId}"
               }, {
                    "name": "contactId",
                    "itemId": "contactId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Contact Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Contact Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "304CADFC-D957-4E2C-8576-00EA9CA94896",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{contactId}"
               }, {
                    "name": "surveyDate",
                    "itemId": "surveyDate",
                    "xtype": "customDateField",
                    "customWidgetType": "vdDatefield",
                    "displayName": "Date",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Date<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "FD62D1B5-C6DC-47CC-B660-BF22F9F00DF8",
                    "bind": "{surveyDate}"
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
                    "customId": 998,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 998,
                         "customId": 774
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 998,
                         "customId": 775,
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
                         "parentId": 998,
                         "customId": 776,
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