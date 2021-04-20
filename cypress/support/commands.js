
import elements from '../support/registerElements'

Cypress.Commands.add("registerFanClub", (fanClubName, presidentsName, fanClubEmail, emailConfirmation, telephone, password, passwordConfirmation) => {
        cy.get(elements.register.fanClubName).type(fanClubName);
        cy.get(elements.register.presidentsName).type(presidentsName);
        cy.get(elements.register.fanClubEmail).type(fanClubEmail);
        cy.get(elements.register.emailConfirmation).type(emailConfirmation);
        cy.get(elements.register.telephone).type(telephone);
        cy.get(elements.register.password).type(password);
        cy.get(elements.register.passwordConfirmation).type(passwordConfirmation);
        cy.get(elements.register.termsOfConditions).click();
        cy.get(elements.register.btn_registerFanClub).click();
})



