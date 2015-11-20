Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.LifestyleHabits', {
     "xtype": "lifestyleHabits",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "lifestyle",
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
               "url": "secure/LifestyleHabiteServiceWS/lifestyleHabits",
               "requestMethodType": "POST"
          },
          "title": "Lifestyle Habits",
          "padding": 0,
          "margin": 5,
          "itemId": "famompi",
          "dockedItems": []
     }],
     "border": true,
     "title": "Lifestyle Habits",
     "margin": 5,
     "itemId": "gbepjdi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "oefohli"
          }, {
               "xtype": "button",
               "name": "lifestyleSubmit",
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "ilodoei",
               "listeners": {
                    "click": "onlifestyleSubmitclick"
               }
          }],
          "itemId": "oeacmoi",
          "dockedItems": []
     }],
     "extend": "Ext.form.Panel",
     "layout": "fit",
     "requires": ["Surveyportal.surveyportal.web.com.survey.controller.healthcare.LifestyleHabitsController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.LifestyleHabitsViewModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.LifestyleHabitsModel", "Surveyportal.view.fw.component.ListViewBaseView"],
     "viewModel": "LifestyleHabitsViewModel",
     "controller": "LifestyleHabitsController"
});