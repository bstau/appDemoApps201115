Ext.define('Surveyportal.surveyportal.web.com.survey.controller.healthcare.SurveyQuestionTemplateController', {
     extend: 'Surveyportal.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.SurveyQuestionTemplateController',
     onsurveyAnsweradded: function(me, e, eOpts) {
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/SurveyAnswer/findAll',
               method: 'GET',
               jsonData: {},
               me: me,
               success: function(response, scope) {
                    var responseData = Ext.JSON.decode(response.responseText);
                    responseData = responseData.response.data;
                    var element = scope.me;
                    for (var index = 0; index < responseData.length; index++) {
                         var component = new Ext.create('Ext.form.field.Checkbox');
                         component.boxLabel = responseData[index].surveyAnswerName;
                         component.inputValue = {
                              'surveyAnswerId': responseData[index].surveyAnswerId
                         };
                         component.name = 'surveyAnswer';
                         element.add(component);
                    }
               },
               failure: function(response, scope) {}
          }, scope);
     },
     onSubmitclick: function(me, e, eOpts) {
          var jsonData = this.getData(this.view);
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/SurveyQuestion/',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               me: me,
               success: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
                    scope.sender.reset();
               },
               failure: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               }
          }, scope);
     }
});