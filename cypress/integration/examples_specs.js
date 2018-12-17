  describe("sample test", () => {
    it("Gets, types and asserts", function() {
      cy.visit("http://localhost:3000/");
      cy.get('h1')               
      .should('contain', 'You have 10 actions items to complete!')
    });
  });