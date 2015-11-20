package com.survey.app.server.service;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.survey.app.server.businessservice.SurveyQuestionBusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.sprinkler.core.Sprinkler;
import com.survey.app.server.repository.SurveyQuestionRepository;
import com.survey.app.shared.healthcare.SurveyQuestion;
import org.springframework.web.bind.annotation.RequestMapping;
import com.athena.framework.server.bean.ResponseBean;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.lang.Override;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.RequestMethod;
import com.athena.framework.server.exception.repository.SpartanTransactionException;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Map;
import com.athena.framework.server.bean.FindByBean;

@RestController
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "2", comments = "Service for SurveyQuestion Master table Entity", complexity = Complexity.LOW)
@RequestMapping("/SurveyQuestion")
public class SurveyQuestionServiceImpl extends SurveyQuestionService {

    @Autowired
    private SurveyQuestionBusinessService surveyquestionbz;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private Sprinkler sprinkler;

    @Autowired
    private SurveyQuestionRepository<SurveyQuestion> surveyQuestionrepo;

    @RequestMapping(value = "/findAll", consumes = "application/json", method = RequestMethod.GET)
    @Override
    public HttpEntity<ResponseBean> findAll() throws SpartanPersistenceException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        java.util.List<com.survey.app.shared.healthcare.SurveyQuestion> lstsurveyquestion = surveyQuestionrepo.findAll();
        responseBean.add("success", true);
        responseBean.add("message", "Successfully retrived ");
        responseBean.add("data", lstsurveyquestion);
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(consumes = "application/json", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> save(@RequestBody SurveyQuestion entity) throws SpartanPersistenceException, SpartanTransactionException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.CREATED;
        try {
            surveyQuestionrepo.save(entity);
            responseBean.add("success", true);
            responseBean.add("message", "Successfully Created");
            responseBean.add("data", entity);
            httpStatus = org.springframework.http.HttpStatus.CREATED;
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not save", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(consumes = "application/json", headers = { "isArray" }, method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> save(@RequestBody List<SurveyQuestion> entity, @RequestHeader("isArray") boolean request) throws SpartanPersistenceException, SpartanTransactionException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.CREATED;
        try {
            surveyQuestionrepo.save(entity);
            responseBean.add("success", true);
            responseBean.add("message", "Successfully Created");
            httpStatus = org.springframework.http.HttpStatus.CREATED;
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not save", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/{cid}", consumes = "application/json", method = RequestMethod.DELETE)
    @Override
    public HttpEntity<ResponseBean> delete(@PathVariable("cid") String entity) throws SpartanPersistenceException, SpartanTransactionException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        try {
            surveyQuestionrepo.delete(entity);
            httpStatus = org.springframework.http.HttpStatus.OK;
            responseBean.add("success", true);
            responseBean.add("message", "Successfully deleted ");
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not delete", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(consumes = "application/json", method = RequestMethod.PUT)
    @Override
    public HttpEntity<ResponseBean> update(@RequestBody SurveyQuestion entity) throws SpartanPersistenceException, SpartanTransactionException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        try {
            surveyquestionbz.update(entity);
            responseBean.add("success", true);
            responseBean.add("message", "Successfully updated ");
            responseBean.add("data", entity._getPrimarykey().toString());
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not update", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(consumes = "application/json", headers = { "isArray" }, method = RequestMethod.PUT)
    @Override
    public HttpEntity<ResponseBean> update(@RequestBody List<SurveyQuestion> entity, @RequestHeader("isArray") boolean request) throws SpartanPersistenceException, SpartanTransactionException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        try {
            surveyquestionbz.update(entity);
            responseBean.add("success", true);
            responseBean.add("message", "Successfully updated entities");
            httpStatus = org.springframework.http.HttpStatus.OK;
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not update", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/search", consumes = "application/json", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> search(@RequestBody Map<String, Object> fieldData) throws SpartanPersistenceException, Exception {
        ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        List<java.lang.Object> lstsurveyquestion = surveyQuestionrepo.search("SurveyQuestion.DefaultFinders", fieldData, getFieldMetaData());
        responseBean.add("success", true);
        responseBean.add("message", "Successfully retrived ");
        responseBean.add("data", lstsurveyquestion);
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    private Map<String, String> getFieldMetaData() {
        java.util.Map<java.lang.String, java.lang.String> fieldMetaData = new java.util.HashMap<java.lang.String, java.lang.String>();
        fieldMetaData.put("surveyQuestionGroupId", "integer");
        return fieldMetaData;
    }

    @RequestMapping(value = "/findBySurveyQuestionGroupId", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> findBySurveyQuestionGroupId(@RequestBody FindByBean findByBean) throws SpartanPersistenceException, Exception {
        com.athena.framework.server.bean.ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        try {
            List<com.survey.app.shared.healthcare.SurveyQuestion> lstsurveyquestion = surveyQuestionrepo.findBySurveyQuestionGroupId((java.lang.Integer) findByBean.getFindKey());
            responseBean.add("success", true);
            responseBean.add("message", "Successfully retrived ");
            responseBean.add("data", lstsurveyquestion);
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not find ID", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/findById", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> findById(@RequestBody FindByBean findByBean) throws SpartanPersistenceException, Exception {
        com.athena.framework.server.bean.ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        try {
            com.survey.app.shared.healthcare.SurveyQuestion lstsurveyquestion = surveyQuestionrepo.findById((String) findByBean.getFindKey());
            responseBean.add("success", true);
            responseBean.add("message", "Successfully retrived ");
            responseBean.add("data", lstsurveyquestion);
        } catch (org.springframework.transaction.TransactionException e) {
            throw new com.athena.framework.server.exception.repository.SpartanTransactionException("can not find ID", e.getRootCause());
        }
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/GeneralHealth", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> GeneralHealth() throws SpartanPersistenceException, Exception {
        com.athena.framework.server.bean.ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        java.util.List<com.survey.app.shared.healthcare.SurveyQuestion> lstsurveyquestion = surveyQuestionrepo.GeneralHealth();
        responseBean.add("success", true);
        responseBean.add("message", "Successfully retrived ");
        responseBean.add("data", lstsurveyquestion);
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/BehaviouralReadlinessToChanges", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> BehaviouralReadlinessToChanges() throws SpartanPersistenceException, Exception {
        com.athena.framework.server.bean.ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        java.util.List<com.survey.app.shared.healthcare.SurveyQuestion> lstsurveyquestion = surveyQuestionrepo.BehaviouralReadlinessToChanges();
        responseBean.add("success", true);
        responseBean.add("message", "Successfully retrived ");
        responseBean.add("data", lstsurveyquestion);
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/LifeStyleQuestions", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> LifeStyleQuestions() throws SpartanPersistenceException, Exception {
        com.athena.framework.server.bean.ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        java.util.List<com.survey.app.shared.healthcare.SurveyQuestion> lstsurveyquestion = surveyQuestionrepo.LifeStyleQuestions();
        responseBean.add("success", true);
        responseBean.add("message", "Successfully retrived ");
        responseBean.add("data", lstsurveyquestion);
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }

    @RequestMapping(value = "/CHDRisk", method = RequestMethod.POST)
    @Override
    public HttpEntity<ResponseBean> CHDRisk() throws SpartanPersistenceException, Exception {
        com.athena.framework.server.bean.ResponseBean responseBean = new ResponseBean();
        org.springframework.http.HttpStatus httpStatus = org.springframework.http.HttpStatus.OK;
        java.util.List<com.survey.app.shared.healthcare.SurveyQuestion> lstsurveyquestion = surveyQuestionrepo.CHDRisk();
        responseBean.add("success", true);
        responseBean.add("message", "Successfully retrived ");
        responseBean.add("data", lstsurveyquestion);
        return new org.springframework.http.ResponseEntity<ResponseBean>(responseBean, httpStatus);
    }
}
