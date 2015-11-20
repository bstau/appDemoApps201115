Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.SurveyQuestionTemplate', {
     "xtype": "surveyQuestionTemplate",
     "items": [{
          "xtype": "panel",
          "items": [{
               "xtype": "combo",
               "name": "surveyQuestionGroupId",
               "margin": 5,
               "bindable": "surveyQuestionGroupId",
               "typeAhead": true,
               "queryMode": "local",
               "minChars": 1,
               "fieldLabel": "Question Group",
               "displayField": "surveyQuestionGroupName",
               "valueField": "surveyQuestionGroupId",
               "title": "Question Group",
               "columnWidth": 0.5,
               "itemId": "khddlli",
               "store": {
                    "model": "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel",
                    "autoLoad": true,
                    "autoSync": true,
                    "sorters": [{
                         "property": "surveyQuestionGroupName",
                         "direction": "ASC"
                    }],
                    "proxy": {
                         "type": "ajax",
                         "url": "secure/SurveyQuestionGroup/findAll",
                         "actionMethods": {
                              "read": "GET"
                         },
                         "headers": {
                              "Content-Type": "application/json"
                         },
                         "extraParams": {},
                         "reader": {
                              "type": "json",
                              "rootProperty": "response.data"
                         }
                    }
               },
               "bind": "{surveyQuestionGroupId}"
          }, {
               "xtype": "textfield",
               "fieldLabel": "Question",
               "margin": 5,
               "bindable": "surveyQuestionName",
               "name": "surveyQuestionName",
               "title": "Question",
               "columnWidth": 0.5,
               "itemId": "jmlbhbi",
               "bind": "{surveyQuestionName}"
          }, {
               "xtype": "textareafield",
               "fieldLabel": "Description",
               "name": "surveyQuestionDesc",
               "margin": 5,
               "bindable": "surveyQuestionDesc",
               "title": "Description",
               "columnWidth": 0.5,
               "itemId": "pphpfbi",
               "bind": "{surveyQuestionDesc}"
          }],
          "layout": "column",
          "autoScroll": true,
          "border": true,
          "margin": 5,
          "itemId": "oggkmgi",
          "dockedItems": []
     }, {
          "xtype": "panel",
          "items": [{
               "xtype": "checkboxsgroups",
               "name": "surveyAnswer",
               "fieldLabel": "Answer",
               "columns": 2,
               "groupData": "surveyAnswer",
               "vertical": true,
               "margin": 5,
               "isDynamic": true,
               "title": "Answer",
               "columnWidth": 0.5,
               "inputValue": "surveyAnswerId",
               "boxLabel": "surveyAnswerName",
               "itemId": "oihdkfi",
               "listeners": {
                    "added": "onsurveyAnsweradded"
               },
               "bind": "{surveyAnswer}",
               "bindable": "surveyAnswer"
          }],
          "layout": "column",
          "autoScroll": true,
          "border": true,
          "title": "Possible Answers",
          "margin": 5,
          "itemId": "jacclli",
          "dockedItems": []
     }],
     "border": true,
     "autoScroll": true,
     "title": "Question Answer Mapping",
     "margin": 5,
     "itemId": "onjkgei",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "agdilhi"
          }, {
               "xtype": "button",
               "name": "Submit",
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "pdgkkji",
               "listeners": {
                    "click": "onSubmitclick"
               }
          }],
          "itemId": "jmfpkoi",
          "dockedItems": []
     }],
     "requires": ["Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyAnswerModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionGroupModel", "Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyQuestionTemplateController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.SurveyQuestionTemplateViewModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQuestionTemplateModel", "Surveyportal.view.fw.component.CheckBoxGroups"],
     "extend": "Ext.form.Panel",
     "viewModel": "SurveyQuestionTemplateViewModel",
     "controller": "SurveyQuestionTemplateController"
});