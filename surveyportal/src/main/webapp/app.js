/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'Surveyportal',

    extend: 'Surveyportal.Application',
    
/**AppPathDetails**/autoCreateViewport: (Ext.os.deviceType=='Desktop')?'Surveyportal.view.mainleftmenutree.MainPanel':'Surveyportal.view.mobileview.login.Login',
    //autoCreateViewport: (Ext.os.deviceType=='Desktop')?'Surveyportal.view.login.LoginPage':'Surveyportal.view.mobileview.login.LoginPage',//'Surveyportal.view.login.Login'
    	
    //-------------------------------------------------------------------------
    // Most customizations should be made to Surveyportal.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
