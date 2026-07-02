package com.example.tddusingjunit5andmockito;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {
    Calculator cal;
    @Before
    public void setUp() {
        System.out.println("Before Test");
        cal = new Calculator();
    }
    @After
    public void tearDown() {
        System.out.println("After Test");
    }
    @Test
    public void testAddition() {
        int a = 5;
        int b = 6;
        int result = cal.add(a,b);
        assertEquals(11,result);
    }
}