/// <reference types="cypress"/>

import DatePickerPage from '../pages/DatePickerPage';
import '../support/index'

describe('Funcionalidade - Seleção de Países com AutoComplete', () => {
    const datePickerPage = new DatePickerPage()

    
    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('Datepicker.html')
        // cy.viewport(1280, 900);
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('O site deve estar online para acesso', () => {
        cy.title().should('eq', 'Datepicker')
    });

    
    it('Selecionar datas nos dois campos', () => {
        datePickerPage.selecionarDatas()
         
    });

    });