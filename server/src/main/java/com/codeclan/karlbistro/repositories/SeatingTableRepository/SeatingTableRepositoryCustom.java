package com.codeclan.karlbistro.repositories.SeatingTableRepository;

import com.codeclan.karlbistro.models.SeatingTable;

import java.util.List;

public interface SeatingTableRepositoryCustom {
    List<SeatingTable> getAvailableTables(int partysize);
    List<SeatingTable> getAvailableTablesNow(int partysize);
}
