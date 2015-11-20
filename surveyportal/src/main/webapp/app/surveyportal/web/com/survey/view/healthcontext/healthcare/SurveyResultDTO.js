Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcontext.healthcare.SurveyResultDTO', {
     "parentId": "3d11995b-03e1-41f6-9eb9-aa222ae593d9",
     "customId": "c9d02ba4-7e07-42ed-930c-393743e7412c",
     "uniqueId": "0755ad21-83d1-4297-9100-ff88979ab68e",
     "title": "",
     "name": "SurveyResultDTO",
     "xtype": "SurveyResultDTO",
     "extend": "Ext.form.Panel",
     "customWidgetType": "vdColumnLayout",
     "itemId": "SurveyResultDTO",
     "bodyPadding": 10,
     "layout": "column",
     "defaults": {
          "columnWidth": 0.5,
          "labelAlign": "left",
          "labelWidth": 200,
          "margin": "5 5 5 5"
     },
     "autoScroll": true,
     "requires": ["Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcontext.healthcare.SurveyResultDTOViewModel", "Surveyportal.surveyportal.web.com.survey.controller.healthcontext.healthcare.SurveyResultDTOController", "Surveyportal.surveyportal.shared.com.survey.model.healthcontext.healthcare.SurveyResultDTOModel.SurveyResultDTOModel"],
     "controller": "SurveyResultDTOController",
     "viewModel": "SurveyResultDTOViewModel",
     "items": [{
          "parentId": "c9d02ba4-7e07-42ed-930c-393743e7412c",
          "customId": "6935b2c9-529c-4781-a59e-f7c851e131c3",
          "uniqueId": "20a90b7e-1c8f-452b-8023-a3a61003eed9",
          "name": "surveyQuestionId",
          "itemId": "surveyQuestionId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "Question",
          "allowBlank": false,
          "bind": "{surveyQuestionId}",
          "errorMessage": ""
     }, {
          "parentId": "c9d02ba4-7e07-42ed-930c-393743e7412c",
          "customId": "a9e2b4a2-74db-4c43-bca0-0363cd6e71b5",
          "uniqueId": "a0c80f01-b8ad-403e-a42e-b25c1e97439f",
          "name": "surveyAnswerId",
          "itemId": "surveyAnswerId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "surveyAnswerId",
          "allowBlank": false,
          "bind": "{surveyAnswerId}",
          "errorMessage": ""
     }],
     "dockedItems": [{
          "parentId": "c9d02ba4-7e07-42ed-930c-393743e7412c",
          "customId": "325c2a53-91c2-4b20-9eb9-4bc372c8d7c6",
          "uniqueId": "40427826-5565-47d7-9050-4bd1fd4ce7bb",
          "xtype ": "toolbar",
          "customWidgetType": "vdBBar",
          "dock": "bottom",
          "ui": "footer",
          "isDockedItem": true,
          "items": [{
               "parentId": "325c2a53-91c2-4b20-9eb9-4bc372c8d7c6",
               "customId": "95e77c20-c650-4b02-b412-b0a68936aea9",
               "uniqueId": "a961e6bd-2e41-402c-a86a-10af986c5da3",
               "xtype": "tbfill",
               "customWidgetType": "vdTbFill"
          }, {
               "parentId": "325c2a53-91c2-4b20-9eb9-4bc372c8d7c6",
               "customId": "e5ddabb2-b2a6-4731-8add-a0c3e9bce1b0",
               "uniqueId": "997e18c1-608d-483f-b83c-05bff22a2e3f",
               "customWidgetType": "vdButton",
               "xtype": "button",
               "margin": "0 5 0 5",
               "text": "Save",
               "hiddenName": "button",
               "canHaveParent": false,
               "itemId": "saveFormButton",
               "listeners": {
                    "click": "saveForm"
               }
          }, {
               "parentId": "325c2a53-91c2-4b20-9eb9-4bc372c8d7c6",
               "customId": "b3ece99b-4555-476b-92a1-e8927ffe308b",
               "uniqueId": "e3734569-d376-46cc-a574-64b9b10edbff",
               "customWidgetType": "vdButton",
               "xtype": "button",
               "margin": "0 5 0 5",
               "text": "Reset",
               "hiddenName": "button",
               "canHaveParent": false,
               "itemId": "resetFormButton",
               "listeners": {
                    "click": "resetForm"
               }
          }],
          "defaults": {}
     }]
});