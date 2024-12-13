
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        
        produtosPage.visitarUrl()
        //cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto na lista', () => {

        //cy.get('.products > .row') //the whole display of images is selected
          //.first()  
          //.last()
          //.eq(2)
          //.contains('Ariel Roll Sleeve Sweatshirt')
          //.click()
          //cy.get('#tab-title-description > a').should('contain','Descrição')

          produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
          cy.get('#tab-title-description > a').should('contain','Descrição')


    });


it('deve buscar um produto com sucesso', () => {
    let produto ='Aether Gym Pant'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain',produto)
});

it('deve visitar a página do produto', () => {

    produtosPage.visitarProduto('Aether Gym Pant')
    cy.get('.product_title').should('contain','Aether Gym Pant')
    
});

it('deve adicionar o produto ao carrinho', () => {
    let qtd=7
    produtosPage.buscarProduto('Aero Daily Fitness Tee')
    produtosPage.addProdutoCarrinho('M','Brown', qtd)
    cy.get('.woocommerce-message').should('contain', qtd +' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

    
});

it.only('deve adicionar o produto ao carrinho', () => {
    cy.fixture('produtos').then(dados =>{

        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[1].tamanho,dados[1].cor, dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
    



    })
   
    
});




});