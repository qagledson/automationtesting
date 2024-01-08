/// <reference types="cypress"/>

import SliderPage from '../pages/SliderPage';
import '../support/index'

describe('Funcionalidade - Interagir com Slider', () => {
    const sliderPage = new SliderPage()

    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('Slider.html')
        // cy.viewport(1280, 900);
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('Mover o Slider para 4 posições diferentes', () => {
        const posicao_1 = '30%' //
        const posicao_2 = '50%'
        const posicao_3 = '70%'
        const posicao_4 = '100%'

        sliderPage.utilizandoSlider(posicao_1)
        cy.screenshot()
        sliderPage.utilizandoSlider(posicao_2)
        cy.screenshot()
        sliderPage.utilizandoSlider(posicao_3)
        cy.screenshot()
        sliderPage.utilizandoSlider(posicao_4)
    });


    });