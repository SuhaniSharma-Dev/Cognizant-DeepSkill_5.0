package com.example.tddusingjunit5andmockito;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    Calculator cal = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(8, cal.add(5,3));
    }

    @Test
    public void testSubtract() {
        assertEquals(2, cal.subtract(5,3));
    }

    @Test
    public void testMultiply() {
        assertEquals(15, cal.multiply(5,3));
    }

}