package com.survey.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.survey.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.survey.app.server.repository.SurveyQuestionRepository;
import com.survey.app.shared.healthcare.SurveyQuestion;
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
import com.survey.app.shared.healthcare.SurveyQuestionGroup;
import com.survey.app.server.repository.SurveyQuestionGroupRepository;
import com.survey.app.shared.healthcare.SurveyAnswer;
import com.survey.app.server.repository.SurveyAnswerRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class SurveyQuestionTestCase {

    @Autowired
    private SurveyQuestionRepository<SurveyQuestion> surveyquestionRepository;

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
            SurveyQuestionGroup surveyquestiongroup = new SurveyQuestionGroup();
            surveyquestiongroup.setSurveyQuestionGroupDesc("MBmuTvqLYqzPQnoXa2nVSdRonwTpDRBfb8WkaeuP7phOy3GIQX");
            surveyquestiongroup.setSurveyQuestionGroupName("dBzjhN5RFGYHJjL3nyzgUDKUgQw9nQweqTb4I95f3bU5YB9TsL");
            SurveyQuestionGroup SurveyQuestionGroupTest = surveyquestiongroupRepository.save(surveyquestiongroup);
            map.put("SurveyQuestionGroupPrimaryKey", surveyquestiongroup._getPrimarykey());
            SurveyQuestion surveyquestion = new SurveyQuestion();
            surveyquestion.setSurveyQuestionDesc("iDtSVM3fRAh1bteh3xcAE8aKfO8mWwIDABfU0MSAy3RVoooB3J");
            surveyquestion.setSurveyQuestionGroupId((java.lang.Integer) SurveyQuestionGroupTest._getPrimarykey());
            surveyquestion.setSurveyQuestionName("bQok9qNvp59KtXlN74wYyOBRPbuV2z0VSX1RScqftWTrbz1VWf");
            java.util.List<SurveyAnswer> listOfSurveyAnswer = new java.util.ArrayList<SurveyAnswer>();
            SurveyAnswer surveyanswer = new SurveyAnswer();
            surveyanswer.setSurveyAnswerDesc("VJEDjUREchdZEOuRlj6zQk4Ub8KnVd01RgxDYeBmh0sGdTx9aD");
            surveyanswer.setSurveyAnswerName("KfKiTPRyBgSG7eIDjtQKNQ7KHFHKRuk1xPZHZ0xwhWr0QYydBv");
            listOfSurveyAnswer.add(surveyanswer);
            surveyquestion.addAllSurveyAnswer(listOfSurveyAnswer);
            surveyquestion.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            surveyquestion.setEntityValidator(entityValidator);
            surveyquestion.isValid();
            surveyquestionRepository.save(surveyquestion);
            map.put("SurveyQuestionPrimaryKey", surveyquestion._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private SurveyQuestionGroupRepository<SurveyQuestionGroup> surveyquestiongroupRepository;

    @Autowired
    private SurveyAnswerRepository<SurveyAnswer> surveyanswerRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyQuestionPrimaryKey"));
            SurveyQuestion surveyquestion = surveyquestionRepository.findById((java.lang.String) map.get("SurveyQuestionPrimaryKey"));
            surveyquestion.setSurveyQuestionDesc("9iBAkw5tLX927Mzc0Fejz72DJJD63MXHWHis8lbyZgyhzzkael");
            surveyquestion.setSurveyQuestionName("IwdhBt1lNUtho9DKxDho2NOf5lHgVl6HCafz3fEgYIS8gEhjyf");
            surveyquestion.setVersionId(1);
            surveyquestion.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            surveyquestionRepository.update(surveyquestion);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBysurveyQuestionGroupId() {
        try {
            java.util.List<SurveyQuestion> listofsurveyQuestionGroupId = surveyquestionRepository.findBySurveyQuestionGroupId((java.lang.Integer) map.get("SurveyQuestionGroupPrimaryKey"));
            if (listofsurveyQuestionGroupId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("SurveyQuestionPrimaryKey"));
            surveyquestionRepository.findById((java.lang.String) map.get("SurveyQuestionPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void testNQGeneralHealth() {
        try {
            surveyquestionRepository.GeneralHealth();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQBehaviouralReadlinessToChanges() {
        try {
            surveyquestionRepository.BehaviouralReadlinessToChanges();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQLifeStyleQuestions() {
        try {
            surveyquestionRepository.LifeStyleQuestions();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQCHDRisk() {
        try {
            surveyquestionRepository.CHDRisk();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyQuestionPrimaryKey"));
            surveyquestionRepository.delete((java.lang.String) map.get("SurveyQuestionPrimaryKey")); /* Deleting refrenced data */
            surveyquestiongroupRepository.delete((java.lang.Integer) map.get("SurveyQuestionGroupPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
