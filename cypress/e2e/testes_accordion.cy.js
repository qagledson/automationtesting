/// <reference types="cypress"/>

import AccordionPage from '../pages/AccordionPage';
import '../support/index'


describe('Funcionalidade - Interagir com Accordions', () => {
    const accordionPage = new AccordionPage()
    
    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('Accordion.html')
        // cy.viewport(1280, 900);
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('O site deve estar online para acesso', () => {
        cy.title().should('eq', 'Accordion')
    });

    //Observação: O accordion 1 já está aberto no site.
    it('Abrir e fechar todos os Accordions', () => {
        const accordion_2 = "Collapsible Group 2 - Single Line Coding"
        const accordion_3 = "Collapsible Group 3 - Methhod Chaining"
        const accordion_4 = "Collapsible Group 4 - Cross Browser Testing"

        //Abrindo e em seguida, fechando o accordion 3
        accordionPage.expandirAccordion(accordion_2)
        cy.wait(1000);
        accordionPage.expandirAccordion(accordion_2)

        //Abrindo e em seguida, fechando o accordion 1
        accordionPage.expandirAccordion(accordion_3)
        cy.wait(1000);
        accordionPage.expandirAccordion(accordion_3)

        //Abrindo e em seguida, fechando o accordion 2
        accordionPage.expandirAccordion(accordion_4)
        cy.wait(1000);
        accordionPage.expandirAccordion(accordion_4)
        
    });
   
    it('Abrir e fechar Accordions em diferentes ordens', () => {
        const accordion_2 = "Collapsible Group 2 - Single Line Coding"
        const accordion_3 = "Collapsible Group 3 - Methhod Chaining"
        const accordion_4 = "Collapsible Group 4 - Cross Browser Testing"

        //Abrindo e em seguida, fechando o accordion 3
        accordionPage.expandirAccordion(accordion_3)
        cy.wait(1000);
        accordionPage.expandirAccordion(accordion_3)

        //Abrindo e em seguida, fechando o accordion 4
        accordionPage.expandirAccordion(accordion_4)
        cy.wait(1000);
        accordionPage.expandirAccordion(accordion_4)

        //Abrindo e em seguid, fechando o accordion 2
        accordionPage.expandirAccordion(accordion_2)
        cy.wait(1000);
        accordionPage.expandirAccordion(accordion_2)
        
    });

    it('Tentar fechar um Accordion já fechado', () => {
        const accordion_2 = "Collapsible Group 2 - Single Line Coding"

        //Fechando o accordion 2
        accordionPage.expandirAccordion(accordion_2)
        cy.wait(1000);

    });

    it('Tentar abrir um Accordion já aberto', () => {
        const accordion_1 = "Collapsible Group 1 - Readability"

        //Fechando o accordion 2
        accordionPage.expandirAccordion(accordion_1)
        cy.wait(1000);

        
    });

    });