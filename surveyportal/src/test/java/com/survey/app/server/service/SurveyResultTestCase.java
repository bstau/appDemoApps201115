package com.survey.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.survey.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.survey.app.server.repository.SurveyResultRepository;
import com.survey.app.shared.healthcare.SurveyResult;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.survey.app.shared.healthcare.SurveyAnswer;
import com.survey.app.server.repository.SurveyAnswerRepository;
import com.survey.app.shared.healthcare.SurveyQuestion;
import com.survey.app.server.repository.SurveyQuestionRepository;
import com.survey.app.shared.healthcare.SurveyQuestionGroup;
import com.survey.app.server.repository.SurveyQuestionGroupRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class SurveyResultTestCase {

    @Autowired
    private SurveyResultRepository<SurveyResult> surveyresultRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            SurveyAnswer surveyanswer = new SurveyAnswer();
            surveyanswer.setSurveyAnswerDesc("FypNl8uOPvL7cYXNEquqceHfCKKW5cl67r0zgtz0APoQSDBbxx");
            surveyanswer.setSurveyAnswerName("SgCSAJvKxnPY9me6UMoOfnARdpLQlyZELGUq275cMe8OR3XjuJ");
            SurveyAnswer SurveyAnswerTest = surveyanswerRepository.save(surveyanswer);
            map.put("SurveyAnswerPrimaryKey", surveyanswer._getPrimarykey());
            SurveyQuestion surveyquestion = new SurveyQuestion();
            surveyquestion.setSurveyQuestionDesc("kMk6YqYJRQobR5tPhZIWBicnJjlCheUAWX0F9o3OQ8V4T9zCfX");
            SurveyQuestionGroup surveyquestiongroup = new SurveyQuestionGroup();
            surveyquestiongroup.setSurveyQuestionGroupDesc("IRCN3ysawOKBrLt4MOWkta8uhUPszZSvIISV7BUjkPOhTLgUWE");
            surveyquestiongroup.setSurveyQuestionGroupName("dq10T07uPkskpyrycgOLoBy1gkxadFZwmRW7jbj36JsCofBNlK");
            SurveyQuestionGroup SurveyQuestionGroupTest = surveyquestiongroupRepository.save(surveyquestiongroup);
            map.put("SurveyQuestionGroupPrimaryKey", surveyquestiongroup._getPrimarykey());
            surveyquestion.setSurveyQuestionDesc("ylTkQaIPwYHZUltq8dKyGiwTC0Ig0YhHxEQ66DY03PkDhFDQbb");
            surveyquestion.setSurveyQuestionGroupId((java.lang.Integer) SurveyQuestionGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            surveyquestion.setSurveyQuestionName("G2kUDGmIhPPvEHbtChrUJIpqa0g3XepK5m7jYMTCOEU7CTs7jO");
            SurveyQuestion SurveyQuestionTest = surveyquestionRepository.save(surveyquestion);
            map.put("SurveyQuestionPrimaryKey", surveyquestion._getPrimarykey());
            SurveyResult surveyresult = new SurveyResult();
            surveyresult.setContactId("0jKsHR7OPGsbMomproF7TwlAXKA9xOiLZxIhRULd4tujbG0tk9");
            surveyresult.setSurveyAnswerId((java.lang.String) SurveyAnswerTest._getPrimarykey()); /* ******Adding refrenced table data */
            surveyresult.setSurveyDate(new java.sql.Date(123456789));
            surveyresult.setSurveyQuestionId((java.lang.String) SurveyQuestionTest._getPrimarykey());
            surveyresult.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            surveyresult.setEntityValidator(entityValidator);
            surveyresult.isValid();
            surveyresultRepository.save(surveyresult);
            map.put("SurveyResultPrimaryKey", surveyresult._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private SurveyAnswerRepository<SurveyAnswer> surveyanswerRepository;

    @Autowired
    private SurveyQuestionRepository<SurveyQuestion> surveyquestionRepository;

    @Autowired
    private SurveyQuestionGroupRepository<SurveyQuestionGroup> surveyquestiongroupRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyResultPrimaryKey"));
            SurveyResult surveyresult = surveyresultRepository.findById((java.lang.String) map.get("SurveyResultPrimaryKey"));
            surveyresult.setContactId("ly2HflNXSjjp0fbv83E6DjcQNugcrZuwulMul2X8Blo4Bh6HHB");
            surveyresult.setSurveyDate(new java.sql.Date(123456789));
            surveyresult.setVersionId(1);
            surveyresult.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            surveyresultRepository.update(surveyresult);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBysurveyAnswerId() {
        try {
            java.util.List<SurveyResult> listofsurveyAnswerId = surveyresultRepository.findBySurveyAnswerId((java.lang.String) map.get("SurveyAnswerPrimaryKey"));
            if (listofsurveyAnswerId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBysurveyQuestionId() {
        try {
            java.util.List<SurveyResult> listofsurveyQuestionId = surveyresultRepository.findBySurveyQuestionId((java.lang.String) map.get("SurveyQuestionPrimaryKey"));
            if (listofsurveyQuestionId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyResultPrimaryKey"));
            surveyresultRepository.findById((java.lang.String) map.get("SurveyResultPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyResultPrimaryKey"));
            surveyresultRepository.delete((java.lang.String) map.get("SurveyResultPrimaryKey")); /* Deleting refrenced data */
            surveyquestionRepository.delete((java.lang.String) map.get("SurveyQuestionPrimaryKey")); /* Deleting refrenced data */
            surveyquestiongroupRepository.delete((java.lang.Integer) map.get("SurveyQuestionGroupPrimaryKey")); /* Deleting refrenced data */
            surveyanswerRepository.delete((java.lang.String) map.get("SurveyAnswerPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
