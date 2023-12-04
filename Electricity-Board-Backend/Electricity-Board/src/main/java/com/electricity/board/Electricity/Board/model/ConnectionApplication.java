package com.electricity.board.Electricity.Board.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "Connection_Application")
public class ConnectionApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "applicant_name")
    private String applicantName;

    private String gender;
    private String district;
    private String state;
    private String pincode;
    private String ownership;

    @Column(name = "govt_id_type")
    private String govtIdType;

    @Column(name = "id_number")
    private String idNumber;

    private String category;

    @Column(name = "load_applied")
    private double loadApplied;

    @Column(name = "date_of_application")
    private LocalDate dateOfApplication;

    @Column(name = "date_of_approval")
    private LocalDate dateOfApproval;

    @Column(name = "modified_date")
    private LocalDate modifiedDate;

    private String status;

    @Column(name = "reviewer_id")
    private String reviewerId;

    @Column(name = "reviewer_name")
    private String reviewerName;

    @Column(name = "reviewer_comments")
    private String reviewerComments;

}

