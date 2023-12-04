package com.electricity.board.Electricity.Board.service;

import com.electricity.board.Electricity.Board.dto.ConnectionApplicationDto;
import com.electricity.board.Electricity.Board.model.ConnectionApplication;
import com.electricity.board.Electricity.Board.repository.ConnectionApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ConnectionApplicationService {

    @Autowired
    private ConnectionApplicationRepository repository;

    public List<ConnectionApplication> getAllApplications() {
        return repository.findAll();
    }

    public ConnectionApplication getApplicationById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<ConnectionApplication> getApplicationsByApplicantName(String applicantName) {
        return repository.findByApplicantName(applicantName);
    }

    public List<ConnectionApplication> getApplicationsByDateRange(LocalDate startDate, LocalDate endDate) {
        return repository.findByDateOfApplicationBetween(startDate, endDate);
    }

    public List<ConnectionApplication> getApplicationsByStatus(String status) {
        return repository.findByStatus(status);
    }

    public ConnectionApplication saveApplication(ConnectionApplication application) {
        return repository.save(application);
    }

    public void deleteApplication(Long id) {
        repository.deleteById(id);
    }

    public ConnectionApplication updateApplication(Long id, ConnectionApplication updatedApplication) {
        ConnectionApplication existingApplication = repository.findById(id).orElse(null);

        if (existingApplication != null) {
            // Update the fields you want to allow modification
            existingApplication.setApplicantName(updatedApplication.getApplicantName());
            existingApplication.setGender(updatedApplication.getGender());
            existingApplication.setDistrict(updatedApplication.getDistrict());
            existingApplication.setState(updatedApplication.getState());
            existingApplication.setPincode(updatedApplication.getPincode());
            existingApplication.setOwnership(updatedApplication.getOwnership());
            existingApplication.setGovtIdType(updatedApplication.getGovtIdType());
            existingApplication.setIdNumber(updatedApplication.getIdNumber());
            existingApplication.setCategory(updatedApplication.getCategory());
            existingApplication.setLoadApplied(updatedApplication.getLoadApplied());
            existingApplication.setDateOfApplication(updatedApplication.getDateOfApplication());
            existingApplication.setDateOfApproval(updatedApplication.getDateOfApproval());
            existingApplication.setModifiedDate(updatedApplication.getModifiedDate());
            existingApplication.setStatus(updatedApplication.getStatus());
            existingApplication.setReviewerId(updatedApplication.getReviewerId());
            existingApplication.setReviewerName(updatedApplication.getReviewerName());
            existingApplication.setReviewerComments(updatedApplication.getReviewerComments());

            // Save the updated application
            return repository.save(existingApplication);
        }
        return null;
    }

    public Map<String, Long> getMonthlyConnectionCounts() {
        List<Object[]> counts = repository.findMonthlyConnectionCounts();
        Map<String, Long> monthlyCounts = new HashMap<>();

        for (Object[] count : counts) {
            String month = Month.of((Integer) count[0]).toString();
            Long connectionCount = (Long) count[1];
            monthlyCounts.put(month, connectionCount);
        }

        return monthlyCounts;
    }
}

