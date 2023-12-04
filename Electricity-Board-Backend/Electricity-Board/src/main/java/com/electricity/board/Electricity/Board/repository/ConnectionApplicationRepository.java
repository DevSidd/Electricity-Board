package com.electricity.board.Electricity.Board.repository;

import com.electricity.board.Electricity.Board.model.ConnectionApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface ConnectionApplicationRepository extends JpaRepository<ConnectionApplication, Long> {

    List<ConnectionApplication> findByApplicantName(String applicantName);

    List<ConnectionApplication> findByDateOfApplicationBetween(LocalDate startDate, LocalDate endDate);

    List<ConnectionApplication> findByStatus(String status);

    @Query("SELECT MONTH(dateOfApplication) as month, COUNT(id) as count FROM ConnectionApplication GROUP BY month")
    List<Object[]> findMonthlyConnectionCounts();

}

