describe("Handling Js Alerts", () => {

    it("Confirms Js alerts contains the correct texts", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.contain('I am an alert box!')

        })
    })

    it("Validate js confirm alert box works correctly when clicking OK", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.contain('Press a button!')

        })

        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it("Handling Modal popup", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button2').click()

        cy.on('window:alert', (str) => {
            expect(str).to.contain('It’s that Easy!! Well I think it is.....')
        })
        cy.get('.modal-footer > .btn').click()
    })

    //Challenge
    it("Validate js confirm alert box works correctly when clicking CANCEL", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button4').click()

        cy.on('window:', (str) => {
            expect(str).to.contain('Press a button!')

        })
        cy.on('window:confirm', () => false)
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it("Validate js confirm alert box works correctly using stub", () => {
        cy.visit("http://www.webdriveruniversity.com");

        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({ force: true });

        cy.window().then((win) => {
            const stub = cy.stub(win, 'confirm').returns(false);

            cy.get('#button4').click().then(() => {
                expect(stub).to.be.calledWith('Press a button!');
            });

            cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!');
        });
    })

    it.only('should validate AJAX loader and alert box', () => {
        cy.visit('http://www.webdriveruniversity.com');

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button3').click();  
      
        cy.intercept('GET', 'http://www.webdriveruniversity.com/Popup-Alerts/index.html').as('ajaxRequest'); // Replace 'your-ajax-url' with the actual AJAX URL
        cy.wait('@ajaxRequest', { timeout: 5000 })
      
        cy.get('#button1').click();      
        cy.on('window:alert', (message) => {
          expect(message).to.contain('Alert message');
        });
      });      

})