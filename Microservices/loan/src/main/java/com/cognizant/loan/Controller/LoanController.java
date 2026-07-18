package com.cognizant.loan.Controller;

import com.cognizant.loan.Model.Loan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {
    @GetMapping("/loans/{number}")
    public Loan getLoan(@PathVariable String number){
        return new Loan(number,"Car",500000,3500,18);
    }
}