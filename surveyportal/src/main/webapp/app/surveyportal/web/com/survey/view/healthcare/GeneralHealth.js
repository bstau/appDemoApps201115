Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.GeneralHealth', {
     "xtype": "generalHealth",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "gh",
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
               "url": "secure/GeneralHealthServiceWS/genralHealth",
               "requestMethodType": "POST"
          },
          "title": "General Health",
          "padding": 0,
          "margin": 5,
          "itemId": "chkdeji",
          "dockedItems": []
     }],
     "border": true,
     "title": "General Health",
     "margin": 5,
     "itemId": "goflbbi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "ojpajpi"
          }, {
               "xtype": "button",
               "name": "ghSubmit",
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "falbpbi",
               "listeners": {
                    "click": "onghSubmitclick"
               }
          }],
          "itemId": "olfgphi",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "layout": "fit",
     "requires": ["Surveyportal.surveyportal.web.com.survey.controller.healthcare.GeneralHealthController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.GeneralHealthViewModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.GeneralHealthModel", "Surveyportal.view.fw.component.ListViewBaseView"],
     "viewModel": "GeneralHealthViewModel",
     "controller": "GeneralHealthController"
});