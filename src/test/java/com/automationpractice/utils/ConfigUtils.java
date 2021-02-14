package com.automationpractice.utils;

public class ConfigUtils {

    private static final String BASE_URL = "http://automationpractice.com/";
    private static final String DRIVER_PATH = "src/test/resources/driver/chromedriver/";

    public static String getBaseURL() {
        return BASE_URL;
    }

    public static String getDriverPath() {
        return DRIVER_PATH;
    }
}