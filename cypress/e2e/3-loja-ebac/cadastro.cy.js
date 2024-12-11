

describe('Funcionalidade: Cadastro', () => {

    const { faker } = require('@faker-js/faker');

    beforeEach(() => {
        //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.visit('minha-conta/')
    });

    it('Deve completar o cadastro com sucesso - usando variaveis', () => {

        var email= faker.internet.email()
        var nome= faker.person.firstName()
        var sobrenome=faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('lgsmteste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)

        cy.wait(5000)
        
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });


    it.only('Deve completar cadastro com sucesso - utilizando commandos customizados', () => {
    cy.preCadastro(faker.internet.email(),'lgsmteste@123',faker.person.firstName(),faker.person.lastName()  )
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
   
    });
});