/// < reference types="cypress" />

import Chance from 'chance';
import elements from '../support/registerElements'


const chance = new Chance();
const email = chance.email({ domain: "gmail.com" });

describe('Realizar Cadastro de Usuário no Fã-Clube da Joelma', () => {

    beforeEach(() => {

        cy.visit('https://central.joelmaoficial.com.br/faclube/cadastro');
    });

    it('Realizar o cadastro completo do usuário', function () {

        cy.fixture('registerPersonalData').as('user').then(() => {
        cy.registerFanClub(
            chance.company(),
            chance.name(),
            email,
            email,
            chance.phone({ country: 'uk', mobile: true }),
            this.user.password,
            this.user.passwordConfirmation
        )
        cy.get(elements.register.alerts).should('contain', 'Sucesso');
    })
});

    it('Realizar o cadastro com um Fã-Clube que já existe', function() {

        cy.fixture('registerPersonalData').as('user').then(() => {
        cy.registerFanClub(
            this.user.fanClubName,
            chance.name(),
            email,
            email,
            chance.phone({ country: 'uk', mobile: true }),
            this.user.password,
            this.user.passwordConfirmation
        )
        cy.get(elements.register.alerts).should('have.text', '×    Alerta !  Já existe clube com esse nome. Tente outro');
    })
});

    it('Realizar o cadastro com um e-mail que já existe', function () {

        cy.fixture('registerPersonalData').as('user').then(() => {
        cy.registerFanClub(
            chance.company(),
            chance.name(),
            this.user.fanClubEmail,
            this.user.emailConfirmation,
            chance.phone({ country: 'uk', mobile: true }),
            this.user.password,
            this.user.passwordConfirmation
        )
        cy.get(elements.register.alerts).should('have.text', '×    Alerta !  Este e-mail já esta sendo ultilizado. Se você esqueceu sua senha clique -> aqui ou caso contrário faça o login em sua conta');
    })

});

})

