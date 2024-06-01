package com.its24a8.lmsrenew.data;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Attendance {
    public Attendance(
    		User user,
            LocalDateTime attendance_date,
            long index,
            AttendanceType type,
            @NonNull String memo
    ) {
        this.user = user;
        this.attendance_date = attendance_date;
        this.type = type;
        this.memo = memo;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @CreatedDate
    LocalDateTime attendance_date = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    AttendanceType type;

    @NonNull
    String memo = "";
    
    
}
