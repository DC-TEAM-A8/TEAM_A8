package com.its24a8.lmsrenew.data;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Attendance {
    public Attendance(
            long user_id,
            LocalDate attendance_date,
            long index,
            AttendanceType type,
            @NonNull String memo
    ) {
        this.user_id = user_id;
        this.attendance_date = attendance_date;
        this.index = index;
        this.type = type;
        this.memo = memo;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    long user_id;

    @CreatedDate
    LocalDate attendance_date = LocalDate.now();

    @Column(name = "attendance_index")
    long index;

    @Enumerated(EnumType.STRING)
    AttendanceType type;

    @NonNull
    String memo = "";
}
