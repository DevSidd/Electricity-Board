package com.electricity.board.Electricity.Board.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ConnectionApplicationDto {

    private Long id;

    private String applicantName;
    private String gender;
    private String district;
    private String state;
    private String pincode;
    private String ownership;
    private String govtIdType;
    private String idNumber;
    private String category;
    private double loadApplied;
    private LocalDate dateOfApplication;
    private LocalDate dateOfApproval;
    private LocalDate modifiedDate;
    private String status;
    private String reviewerId;
    private String reviewerName;
    private String reviewerComments;

}
