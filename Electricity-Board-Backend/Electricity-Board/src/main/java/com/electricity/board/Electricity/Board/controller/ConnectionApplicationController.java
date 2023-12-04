package com.electricity.board.Electricity.Board.controller;

import com.electricity.board.Electricity.Board.dto.ConnectionApplicationDto;
import com.electricity.board.Electricity.Board.model.ConnectionApplication;
import com.electricity.board.Electricity.Board.service.ConnectionApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/api/applications")
public class ConnectionApplicationController {

    @Autowired
    private ConnectionApplicationService service;

    @GetMapping
    public List<ConnectionApplication> getAllApplications() {
        return service.getAllApplications();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConnectionApplication> getApplicationById(@PathVariable Long id) {
        ConnectionApplication application = service.getApplicationById(id);
        return application != null ?
                ResponseEntity.ok(application) :
                ResponseEntity.notFound().build();
    }

    @GetMapping("/applicant/{applicantName}")
    public List<ConnectionApplication> getApplicationsByApplicantName(@PathVariable String applicantName) {
        return service.getApplicationsByApplicantName(applicantName);
    }

    @PostMapping("/add")
    public ResponseEntity<ConnectionApplication> saveApplication(@RequestBody ConnectionApplication application) {
        ConnectionApplication savedApplication = service.saveApplication(application);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedApplication);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        service.deleteApplication(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ConnectionApplication> updateApplication(@PathVariable Long id, @RequestBody ConnectionApplication application) {
        ConnectionApplication updatedApplication = service.updateApplication(id, application);
        return ResponseEntity.ok(updatedApplication);
    }

    @GetMapping("/monthly-connection-counts")
    public ResponseEntity<Map<String, Long>> getMonthlyConnectionCounts() {
        Map<String, Long> counts = service.getMonthlyConnectionCounts();
        return ResponseEntity.ok(counts);
    }

}






