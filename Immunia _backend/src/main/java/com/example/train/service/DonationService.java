package com.example.train.service;

import com.example.train.model.Donation;
import com.example.train.model.Parent;

import java.util.List;

public interface DonationService {
    Donation saveDonation(Donation donation);
    List<Donation> getDonations();
    Donation getDonation(Long id);
}
