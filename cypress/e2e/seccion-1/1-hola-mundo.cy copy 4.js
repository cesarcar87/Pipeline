describe('Bienvenidos al curso de Cypress seccion 1', () => {
    it('Mi primer test -> Hola mundo', () => {
        cy.log("Hola mundo");
        cy.wait(1500);
    });
    it('Segundo Test -> Campo name', () => {
        cy.visit("https://demoqa.com/text-box");
    
        //Exception para que páginas de mierda como "ToolsQA" funcionen y no fallen antes de correr los tests
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false
        });
        cy.get("#userName").type("César");
        cy.wait(1500);
    });
})//Cierre del describe
