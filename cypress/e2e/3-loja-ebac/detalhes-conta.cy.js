
describe('Funcionalidade: Detalhes da Conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        //cy.login('lgsm.teste@teste.com.br','lgsmteste@123')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha)
        })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('luis','marques','luis.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });
    
});