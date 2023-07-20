package com.example.train.service.impl;

import com.example.train.model.Donation;
import com.example.train.model.Parent;
import com.example.train.repository.DonationRepository;
import com.example.train.service.DonationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class DonationServiceImpl implements DonationService {
    private final DonationRepository donationRepository;

    public Donation saveDonation(Donation donation){
        log.info("Saving donation {} to the database",donation.getDonationId());
        return donationRepository.save(donation);
    }
    public List<Donation> getDonations(){
        log.info("Get all donations from database");
        return donationRepository.findAll();
    }
    public Donation getDonation(Long id){
        log.info("Get {} donation from database",id);
        return donationRepository.findById(id).get();
    }
}
