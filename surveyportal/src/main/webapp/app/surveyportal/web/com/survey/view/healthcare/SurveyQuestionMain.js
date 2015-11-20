Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.SurveyQuestionMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SurveyQuestionMainController",
     "restURL": "/SurveyQuestion",
     "defaults": {
          "split": true
     },
     "requires": ["Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionModel", "Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyQuestionMainController", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.SurveyQuestionViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "Survey Question",
               "name": "SurveyQuestionTreeContainer",
               "itemId": "SurveyQuestionTreeContainer",
               "restURL": "/SurveyQuestion",
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
                    "itemId": "SurveyQuestionTree",
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
                    "items": [{
                         "name": "surveyQuestionGroupId",
                         "itemId": "surveyQuestionGroupId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Survey Question Group ",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Question Group ",
                         "fieldId": "E9E00A2E-B100-480E-818D-9ECCFD89D259",
                         "restURL": "SurveyQuestionGroup",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel"
                         }
                    }]
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
                    "viewModel": "SurveyQuestionViewModel",
                    "xtype": "form",
                    "displayName": "Survey Question",
                    "title": "Survey Question",
                    "name": "SurveyQuestion",
                    "itemId": "SurveyQuestion",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "surveyQuestionName",
                         "itemId": "surveyQuestionName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Survey Question ",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Question <font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "C1ED71BB-14C8-4D84-A1C9-205C52445081",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{surveyQuestionName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "surveyQuestionDesc",
                         "itemId": "surveyQuestionDesc",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Survey Question Desc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Question Desc",
                         "fieldId": "D7D3C498-426C-428A-A16B-8816BC601A39",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{surveyQuestionDesc}",
                         "columnWidth": 0.5
                    }, {
                         "name": "surveyQuestionGroupId",
                         "itemId": "surveyQuestionGroupId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Survey Question Group ",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Survey Question Group <font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E9E00A2E-B100-480E-818D-9ECCFD89D259",
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
                         "bind": "{surveyQuestionGroupId}",
                         "columnWidth": 0.5
                    }, {
                         "customWidgetType": "vdFormpanel",
                         "viewModel": "Survey AnswerViewModel",
                         "xtype": "form",
                         "displayName": "Survey Answer",
                         "title": "Survey Answer",
                         "name": "SurveyAnswer",
                         "itemId": "SurveyAnswerForm",
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
                              "columnWidth": 0.5
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 187,
                              "text": "Add SurveyAnswer",
                              "handler": "addSurveyAnswer"
                         }, {
                              "xtype": "grid",
                              "customWidgetType": "vdGrid",
                              "title": "SurveyAnswer",
                              "columnWidth": 1,
                              "itemId": "SurveyAnswerGrid",
                              "fieldLabel": "List",
                              "bindLevel": "surveyAnswer",
                              "listeners": {
                                   "select": "onSurveyAnswerGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "surveyAnswerId",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "surveyAnswerId",
                                   "dataIndex": "surveyAnswerId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Survey Answer",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "Survey Answer",
                                   "dataIndex": "surveyAnswerName",
                                   "flex": 1
                              }, {
                                   "header": "Survey Answer Desc",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "Survey Answer Desc",
                                   "dataIndex": "surveyAnswerDesc",
                                   "flex": 1
                              }, {
                                   "header": "createdBy",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "createdBy",
                                   "dataIndex": "createdBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "createdDate",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "createdDate",
                                   "dataIndex": "createdDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedBy",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "updatedBy",
                                   "dataIndex": "updatedBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedDate",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "updatedDate",
                                   "dataIndex": "updatedDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "versionId",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "versionId",
                                   "dataIndex": "versionId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "activeStatus",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "activeStatus",
                                   "dataIndex": "activeStatus",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "txnAccessCode",
                                   "customWidgetType": "vdGridColumn",
                                   "text": "txnAccessCode",
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
                                        "handler": "onDeleteActionColumnClick"
                                   }]
                              }]
                         }],
                         "columnWidth": 1,
                         "layout": "column"
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
                         "customId": 449,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 449,
                              "customId": 606
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 449,
                              "customId": 607,
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
                              "parentId": 449,
                              "customId": 608,
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
                    "displayName": "Survey Question",
                    "title": "Details Grid",
                    "name": "SurveyQuestionGrid",
                    "itemId": "SurveyQuestionGrid",
                    "restURL": "/SurveyQuestion",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "surveyQuestionId",
                         "dataIndex": "surveyQuestionId",
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
                         "header": "Survey Question ",
                         "dataIndex": "surveyQuestionName",
                         "flex": 1
                    }, {
                         "header": "Survey Question Desc",
                         "dataIndex": "surveyQuestionDesc",
                         "flex": 1
                    }, {
                         "header": "Survey Question Group ",
                         "dataIndex": "surveyQuestionGroupId",
                         "renderer": "renderFormValue",
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
               "viewModel": "SurveyQuestionViewModel",
               "xtype": "form",
               "displayName": "Survey Question",
               "title": "Survey Question",
               "name": "SurveyQuestion",
               "itemId": "SurveyQuestion",
               "bodyPadding": 10,
               "items": [{
                    "name": "surveyQuestionName",
                    "itemId": "surveyQuestionName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Survey Question ",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Question <font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "C1ED71BB-14C8-4D84-A1C9-205C52445081",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{surveyQuestionName}",
                    "columnWidth": 0.5
               }, {
                    "name": "surveyQuestionDesc",
                    "itemId": "surveyQuestionDesc",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Survey Question Desc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Question Desc",
                    "fieldId": "D7D3C498-426C-428A-A16B-8816BC601A39",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{surveyQuestionDesc}",
                    "columnWidth": 0.5
               }, {
                    "name": "surveyQuestionGroupId",
                    "itemId": "surveyQuestionGroupId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Survey Question Group ",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Survey Question Group <font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E9E00A2E-B100-480E-818D-9ECCFD89D259",
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
                    "bind": "{surveyQuestionGroupId}",
                    "columnWidth": 0.5
               }, {
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "Survey AnswerViewModel",
                    "xtype": "form",
                    "displayName": "Survey Answer",
                    "title": "Survey Answer",
                    "name": "SurveyAnswer",
                    "itemId": "SurveyAnswerForm",
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
                         "columnWidth": 0.5
                    }, {
                         "columnWidth": 1,
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "maxWidth": 187,
                         "text": "Add SurveyAnswer",
                         "handler": "addSurveyAnswer"
                    }, {
                         "xtype": "grid",
                         "customWidgetType": "vdGrid",
                         "title": "SurveyAnswer",
                         "columnWidth": 1,
                         "itemId": "SurveyAnswerGrid",
                         "fieldLabel": "List",
                         "bindLevel": "surveyAnswer",
                         "listeners": {
                              "select": "onSurveyAnswerGridItemClick"
                         },
                         "store": {
                              "fields": [],
                              "data": []
                         },
                         "columns": [{
                              "header": "surveyAnswerId",
                              "customWidgetType": "vdGridColumn",
                              "text": "surveyAnswerId",
                              "dataIndex": "surveyAnswerId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "Survey Answer",
                              "customWidgetType": "vdGridColumn",
                              "text": "Survey Answer",
                              "dataIndex": "surveyAnswerName",
                              "flex": 1
                         }, {
                              "header": "Survey Answer Desc",
                              "customWidgetType": "vdGridColumn",
                              "text": "Survey Answer Desc",
                              "dataIndex": "surveyAnswerDesc",
                              "flex": 1
                         }, {
                              "header": "createdBy",
                              "customWidgetType": "vdGridColumn",
                              "text": "createdBy",
                              "dataIndex": "createdBy",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "createdDate",
                              "customWidgetType": "vdGridColumn",
                              "text": "createdDate",
                              "dataIndex": "createdDate",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "updatedBy",
                              "customWidgetType": "vdGridColumn",
                              "text": "updatedBy",
                              "dataIndex": "updatedBy",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "updatedDate",
                              "customWidgetType": "vdGridColumn",
                              "text": "updatedDate",
                              "dataIndex": "updatedDate",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "versionId",
                              "customWidgetType": "vdGridColumn",
                              "text": "versionId",
                              "dataIndex": "versionId",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "activeStatus",
                              "customWidgetType": "vdGridColumn",
                              "text": "activeStatus",
                              "dataIndex": "activeStatus",
                              "hidden": true,
                              "flex": 1
                         }, {
                              "header": "txnAccessCode",
                              "customWidgetType": "vdGridColumn",
                              "text": "txnAccessCode",
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
                                   "handler": "onDeleteActionColumnClick"
                              }]
                         }]
                    }],
                    "columnWidth": 1,
                    "layout": "column"
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
                    "customId": 449,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 449,
                         "customId": 606
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 449,
                         "customId": 607,
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
                         "parentId": 449,
                         "customId": 608,
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