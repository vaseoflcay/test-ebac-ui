

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('lgsm.teste@teste.com.br')
        cy.get('#password').type('lgsmteste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, lgsm.teste (não é lgsm.teste? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('.teste@teste.com.br')
        cy.get('#password').type('lgsmteste@123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it.only('Deve inserir uma mensagem de erro ao inserir uma senha inválida', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('lgsm.teste@teste.com.br')
        cy.get('#password').type('lgsmteste@')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail lgsm.teste@teste.com.br está incorreta. Perdeu a senha?	')
        cy.get('.woocommerce-error > li').should('exist')
    });
    
});