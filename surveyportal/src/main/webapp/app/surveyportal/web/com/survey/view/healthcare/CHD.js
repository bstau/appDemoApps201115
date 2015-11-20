Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.CHD', {
     "xtype": "cHD",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "ListPanel",
          "items": [],
          "isListPanel": true,
          "autoScroll": true,
          "border": false,
          "layout": "column",
          "defaults": {
               "columnWidth": "1.0"
          },
          "templateConfig": {
               "uiId": "A00BA830-359C-4104-AF6E-FD70F67888DB",
               "uiClass": "Surveyportal.surveyportal.web.com.survey.view.healthcare.QuestionTemplate",
               "uiType": 2,
               "url": "secure/ChdRiskServiceWS/chdRisk",
               "requestMethodType": "POST"
          },
          "title": "CHD Risk",
          "padding": 0,
          "margin": 5,
          "itemId": "mojpgni",
          "dockedItems": []
     }],
     "border": true,
     "title": "CHD Risk",
     "margin": 5,
     "itemId": "amhcbfi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "mkmeomi"
          }, {
               "xtype": "button",
               "name": "chdSubmit",
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "acknpgi",
               "listeners": {
                    "click": "onchdSubmitclick"
               }
          }],
          "itemId": "begicgi",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "layout": "fit",
     "requires": ["Surveyportal.surveyportal.web.com.survey.controller.healthcare.CHDController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.CHDViewModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.CHDModel", "Surveyportal.view.fw.component.ListViewBaseView"],
     "viewModel": "CHDViewModel",
     "controller": "CHDController"
});