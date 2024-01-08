/// <reference types="cypress"/>
import AutocompletePage from '../pages/AutocompletePage';
import '../support/index'

describe('Funcionalidade - Seleção de Países com AutoComplete', () => {
    const autocompletePage = new AutocompletePage()

    
    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('AutoComplete.html')
        // cy.viewport(1280, 900);
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('O site deve estar online para acesso', () => {
        cy.title().should('eq', 'Autocomplete')
    });

    
    it('Selecionar 3 países usando AutoComplete', () => {
        const pais_1 = "Braz"
        const pais_2 = "Chin"
        const pais_3 = "Argen"

        //Selecionando o primeiro país
        autocompletePage.selecionarPais(pais_1)
        cy.get('a[class="ui-corner-all"]').contains(pais_1).click()
        cy.wait(1000);
        cy.get('div[class="ui-autocomplete-multiselect-item"]').contains(pais_1)
        
        //Selecionando o segundo país
        autocompletePage.selecionarPais(pais_2)
        cy.get('a[class="ui-corner-all"]').contains(pais_2).click()
        cy.wait(1000);
        cy.get('div[class="ui-autocomplete-multiselect-item"]').contains(pais_1)

        //Selecionando o terceiro país
        autocompletePage.selecionarPais(pais_3)
        cy.get('a[class="ui-corner-all"]').contains(pais_3).click()
        cy.wait(1000);
        cy.get('div[class="ui-autocomplete-multiselect-item"]').contains(pais_1)
    });
   
    it('Tentar selecionar um país inexistente', () => {
        const pais_1 = "Braziiiil"

        //Buscando o país
        autocompletePage.selecionarPais(pais_1)
        cy.wait(1000);
        //Como esse país não existe, o sistema não exibe o autocomplete
    });

    });