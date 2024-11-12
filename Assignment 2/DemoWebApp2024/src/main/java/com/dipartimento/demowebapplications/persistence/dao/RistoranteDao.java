package com.dipartimento.demowebapplications.persistence.dao;

import com.dipartimento.demowebapplications.model.Piatto;
import com.dipartimento.demowebapplications.model.Ristorante;

import java.util.List;

public interface RistoranteDao {
    public List<Ristorante> findAll();
    public Ristorante findByPrimaryKey(String nome);
    //Implementato
    public List<Ristorante> findAllByPiattoName(String piattoName);
    public void save(Ristorante ristorante);
    public void delete(Ristorante ristorante);
}