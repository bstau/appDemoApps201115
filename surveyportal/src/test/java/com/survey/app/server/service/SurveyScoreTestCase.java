package com.survey.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.survey.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.survey.app.server.repository.SurveyScoreRepository;
import com.survey.app.shared.healthcare.SurveyScore;
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
import com.survey.app.shared.authentication.User;
import com.survey.app.server.repository.UserRepository;
import com.survey.app.shared.authentication.UserAccessDomain;
import com.survey.app.server.repository.UserAccessDomainRepository;
import com.survey.app.shared.authentication.UserAccessLevel;
import com.survey.app.server.repository.UserAccessLevelRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class SurveyScoreTestCase {

    @Autowired
    private SurveyScoreRepository<SurveyScore> surveyscoreRepository;

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
            surveyquestiongroup.setSurveyQuestionGroupDesc("ETX8tNUt9xsOGKT0FVD0sBSMyktsJAiQmMzpjEFbXF42eyAeql");
            surveyquestiongroup.setSurveyQuestionGroupName("VQFqgJJzSuowrXK5oFpUBFgqbuGn1Uf7KK8W5AIM8EeoFLEJxU");
            SurveyQuestionGroup SurveyQuestionGroupTest = surveyquestiongroupRepository.save(surveyquestiongroup);
            map.put("SurveyQuestionGroupPrimaryKey", surveyquestiongroup._getPrimarykey());
            User user = new User();
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(0);
            user.setPasswordAlgo("U5HHov9z5B2XSg5a8T8dxPHembS5j7OstfBc8KehMCL5sv9KU9");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(756);
            user.setUserAccessCode(3);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("jhregIX9sOu4551S3FfWFErGpLyaQn7LFv6eb3xeDaXJ488lye");
            useraccessdomain.setDomainHelp("b8PUaP5NOo1MOw56RVIkBSADYTGeFofhFeBHCYhfDRdlZhRv5s");
            useraccessdomain.setDomainIcon("Eh1Nz6HQ58jtBls945BBbrOVxWHYioq10Wmp2z5tZN0827eUeC");
            useraccessdomain.setDomainName("duxDXJwQKNkmyNhH9cZ5nlRE068IuBDJQ0PW6hp6bdM3mTh9c4");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("GZlStjSrTlX1CG43Fw8zwaoIWmFn10FoSQVX1dQrX0XrIdUHLK");
            useraccesslevel.setLevelHelp("6VeHxf2YXFXevxo5q1zKoPgQ09ue8WGf5YEb1YanRGGeLzqCVq");
            useraccesslevel.setLevelIcon("l25ZsencfWK2p8LDP8vFYEcimM7jtcELyPy9X0rlNPtH4C4bJZ");
            useraccesslevel.setLevelName("vU1Gslc5Pgm2mheWTy10GWVogzOyNWtCL5V6PclPNfF7p7XHUo");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(0);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("vnyxw3VJgeBkg6FKDR3iF8VDBma4O46ime3HkoJvZYnPJ9HUEg");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(3448);
            user.setUserAccessCode(2);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey()); /* ******Adding refrenced table data */
            User UserTest = userRepository.save(user);
            map.put("UserPrimaryKey", user._getPrimarykey());
            SurveyScore surveyscore = new SurveyScore();
            surveyscore.setGroupType((java.lang.Integer) SurveyQuestionGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            surveyscore.setPoints(2147483647);
            surveyscore.setScore(2147483647);
            surveyscore.setSurveyDate(new java.sql.Date(123456789));
            surveyscore.setUserId((java.lang.String) UserTest._getPrimarykey());
            surveyscore.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            surveyscore.setEntityValidator(entityValidator);
            surveyscore.isValid();
            surveyscoreRepository.save(surveyscore);
            map.put("SurveyScorePrimaryKey", surveyscore._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private SurveyQuestionGroupRepository<SurveyQuestionGroup> surveyquestiongroupRepository;

    @Autowired
    private UserRepository<User> userRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyScorePrimaryKey"));
            SurveyScore surveyscore = surveyscoreRepository.findById((java.lang.String) map.get("SurveyScorePrimaryKey"));
            surveyscore.setPoints(2147483647);
            surveyscore.setScore(2147483647);
            surveyscore.setSurveyDate(new java.sql.Date(123456789));
            surveyscore.setVersionId(1);
            surveyscore.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            surveyscoreRepository.update(surveyscore);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBygroupType() {
        try {
            java.util.List<SurveyScore> listofgroupType = surveyscoreRepository.findByGroupType((java.lang.Integer) map.get("SurveyQuestionGroupPrimaryKey"));
            if (listofgroupType.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("SurveyScorePrimaryKey"));
            surveyscoreRepository.findById((java.lang.String) map.get("SurveyScorePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByuserId() {
        try {
            java.util.List<SurveyScore> listofuserId = surveyscoreRepository.findByUserId((java.lang.String) map.get("UserPrimaryKey"));
            if (listofuserId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("SurveyScorePrimaryKey"));
            surveyscoreRepository.delete((java.lang.String) map.get("SurveyScorePrimaryKey")); /* Deleting refrenced data */
            userRepository.delete((java.lang.String) map.get("UserPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
            surveyquestiongroupRepository.delete((java.lang.Integer) map.get("SurveyQuestionGroupPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
