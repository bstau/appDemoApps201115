Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.BehaviouralChanges', {
     "xtype": "behaviouralChanges",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "benv",
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
               "url": "secure/BehaviouralReadlinessToChangesServiceWS/behaviouralReadlinessToChanges",
               "requestMethodType": "POST"
          },
          "title": "Behavioural Chnages",
          "padding": 0,
          "margin": 5,
          "itemId": "oogpgdi",
          "dockedItems": []
     }],
     "border": true,
     "title": "Behavioural Changes",
     "margin": 5,
     "itemId": "aagfiii",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "maokhki"
          }, {
               "xtype": "button",
               "name": "BehaviouralCh",
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "ndmopki",
               "listeners": {
                    "click": "onBehaviouralChclick"
               }
          }],
          "itemId": "mnkflbi",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "layout": "fit",
     "requires": ["Surveyportal.surveyportal.web.com.survey.controller.healthcare.BehaviouralChangesController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.BehaviouralChangesViewModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.BehaviouralChangesModel", "Surveyportal.view.fw.component.ListViewBaseView"],
     "viewModel": "BehaviouralChangesViewModel",
     "controller": "BehaviouralChangesController"
});