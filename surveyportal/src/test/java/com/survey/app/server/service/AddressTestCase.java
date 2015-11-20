package com.survey.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.survey.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.survey.app.server.repository.AddressRepository;
import com.survey.app.shared.location.Address;
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
import com.survey.app.shared.location.AddressType;
import com.survey.app.server.repository.AddressTypeRepository;
import com.survey.app.shared.location.City;
import com.survey.app.server.repository.CityRepository;
import com.survey.app.shared.location.Country;
import com.survey.app.server.repository.CountryRepository;
import com.survey.app.shared.location.State;
import com.survey.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase {

    @Autowired
    private AddressRepository<Address> addressRepository;

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
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("Zgy1pZKsykwtejPKGu9vrawsbwhNxTt2a7uRxgUEuZSjsqOrJO");
            addresstype.setAddressTypeDesc("p8rIwjKCw7FxONtzz78pQN1UIuat2kwlWZXWNJOgWUPWTI8cmd");
            addresstype.setAddressTypeIcon("gx6uYRRJhu5kDppQHHvY26t2TjnULsNA6UbZEHXlFCLJ5bIvvG");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(1);
            city.setCityCodeChar2("2kTWdzOzl6ri4KNHYJtM3dxD8yRZBDcz");
            city.setCityDescription("pjQ0icumPZses5xQi9OCMSTTqQG3Ghg2DelWw3CUXhouFlVRj7");
            city.setCityFlag("t0LhY8uxDpLhcqiHKGOf2esAKwaLEax2JMjD6Uui1lUVwpB8Tl");
            city.setCityLatitude(0);
            city.setCityLongitude(2);
            city.setCityName("byfyF3q0SnQJhPGoXX70HUrcP1HGbQ8t663ZYJ7Z7X6v64HIZg");
            Country country = new Country();
            country.setCapital("sq9Gm41gawWHH4PYI17CnXkrlBblrWfG");
            country.setCapitalLatitude(1);
            country.setCapitalLongitude(9);
            country.setCountryCode1("9iP");
            country.setCountryCode2("ZKG");
            country.setCountryFlag("Zg4ZB2OkJYyBo6f0IacYml6tV30nCHkcplkNb6BvWyV2HZSXUU");
            country.setCountryName("0pRPMkqCw5mpUSZ4AEHWGuxQDOz0TOsJJm1Q4nG6vxid0LhH0k");
            country.setCurrencyCode("388");
            country.setCurrencyName("zkb6roMnG1dLsGDGEQvtJ8md2w2Bpy12NwBSK68ypHWQR7sJ7T");
            country.setCurrencySymbol("3Vliln2nLFoEd2V2OuMZNWSL4MBO0OSi");
            country.setIsoNumeric(2);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("ui0iRLUhAeYqellbylLOLIQIYIh6XFDLIkQB5sewYi3Kow6U5X");
            state.setStateCapitalLatitude(8);
            state.setStateCapitalLongitude(9);
            state.setStateCode(2);
            state.setStateCodeChar2("v7Vxl1SfjAbv6LxlfVkWdFJTB8PR3YW8");
            state.setStateCodeChar3("gfy6wX86r4pSP0WBTLgRsNDpkCcoQkn7");
            state.setStateDescription("MMLTMgMAvu4mEurRiZ0ClJQymxdgIZYXer74CGGLWEkPxikYNg");
            state.setStateFlag("XM2Vq3Gofk86tqnE8CS8UdQMnNPqzAvAi9ApSxghZyvP4OMv7A");
            state.setStateName("1KmVVO32oae1Ubmez6iLbYX0JRwHjktGOKFTo6NBar6SgVJSp5");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(0);
            city.setCityCodeChar2("bekpW2IX12eWaKQdEEKlAZ384Ooy9sD5");
            city.setCityDescription("CPfCnNzwZHCGS3g5odgG0WcyANOmxCi1g6CISvYW2KmjnRS1Jn");
            city.setCityFlag("qUJadNiT4e1yDybk29S6t4KvpIC0LEHHKWDDUYMMSZXfOeTqEs");
            city.setCityLatitude(1);
            city.setCityLongitude(7);
            city.setCityName("zuF6y03aq9p8kqLVPEslzdmE4p9o6EOiSEW0J0WrvCe1OrErc1");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            Address address = new Address();
            address.setAddress1("e8hWUEYm78HeQO7cEtG9zjKi7AN1XAgqRpYQx427qWsLx96x4L");
            address.setAddress2("Evid21kYL6xhgmUkJdiHoglURWEObUyMsOdFCocrmluKv607TQ");
            address.setAddress3("aqNDMjKU8aDODtPofZdBVrVcWV6orN0BRGb028NqbeLVCMJ4CX");
            address.setAddressLabel("qI8N5tYAcok");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("m2bYI5wC7GUzXS7Pfzfk4ny4v63qQLsTwVKALopjHOlIozfxIt");
            address.setLongitude("oW46bAbNzOhJQRkS9OpmmyqhPpwuVpPMRbbilcETlpyPFKU3TV");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("Lr7eOT");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.setEntityValidator(entityValidator);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setAddress1("9AyWRymDbkJdVCs2SdRCbrLlL0UVyEXVUPOn01Yqzj7BgD6NNW");
            address.setAddress2("owMOj9w35XFTlMmECb7eLSX1SSjfwPOwiGMrS9lJWsSFF8jtkr");
            address.setAddress3("0jVvHiAHHlFuZ9Jm3d43z8Y9HA5FPBKgObi5vDzVkeMee23yrw");
            address.setAddressLabel("1cj54oo5LFY");
            address.setLatitude("enIcJnPjcE4QD818haE2ZsO8ujPTlS9DVN6GEaEBcfgq8NE6rn");
            address.setLongitude("ySqbxPmCJ8CYqxoxJnFMUs1NebCc8N4E2hue2B9NKL66EHKYpe");
            address.setVersionId(1);
            address.setZipcode("WHrD3L");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
