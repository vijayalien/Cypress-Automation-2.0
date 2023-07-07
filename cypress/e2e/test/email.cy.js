// Cypress test
describe('Fetch email from Outlook', () => {
    it('Should fetch an email from Outlook', () => {
      // Perform the necessary authentication steps to get an access token
      // Replace the placeholders with your actual values
      cy.request({
        method: 'POST',
        url: 'https://login.microsoftonline.com/{your_tenant_id}/oauth2/v2.0/token',
        form: true,
        body: {
          grant_type: 'client_credentials',
          client_id: '{your_client_id}',
          client_secret: '{your_client_secret}',
          scope: 'https://graph.microsoft.com/.default'
        }
      }).then((response) => {
        const accessToken = response.body.access_token;
  
        // Use the access token to make requests to the Microsoft Graph API
        cy.request({
          method: 'GET',
          url: 'https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then((response) => {
          // Process the response and extract the email data as needed
          const email = response.body.value[0]; // Assuming you want the first email in the Inbox
  
          // Assert or perform further actions with the email data
          cy.wrap(email).should('exist');
          cy.wrap(email.subject).should('be.a', 'string');
          cy.wrap(email.sender.emailAddress.address).should('include', '@');
  
          // ... Additional assertions or actions with the email data
        });
      });
    });

    it('email test',()=>{
        cy.task('checkEmail', {username: 'testuser@example.com', password: 'testpassword'}).then(emails => {
            const email = emails[0]
            const emailContent = email.html
            // Use Cheerio to extract and verify the email content
            const $ = cheerio.load(emailContent)
            const messageBody = $('body').text()
            expect(messageBody).to.contain('Welcome to our app!')
            })
    })

    it.only('Should fetch an email from Outlook', () => {
        // Authenticate and fetch an access token
        cy.request({
          method: 'POST',
          url: 'https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token',
          form: true,
          body: {
            grant_type: 'password',
            client_id: '{client_id}',
            client_secret: '{client_secret_value}',
            username: '{username}',
            password: '{password}',
            scope: 'https://graph.microsoft.com/.default'
          }
        }).then((response) => {
          const accessToken = response.body.access_token;
    
          // Use the access token to make requests to the Microsoft Graph API
          cy.request({
            method: 'GET',
            url: 'https://graph.microsoft.com/v1.0/me/mailFolders/Inbox/messages',
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }).then((response) => {
            // Process the response and extract the email data as needed
            const emails = response.body.value; // Array of email objects
    
            // Assert or perform further actions with the email data
            cy.wrap(emails).should('have.length', 1); // Assuming you want to assert that at least one email is present
            cy.wrap(emails[0]).should('have.property', 'subject').and('be.a', 'string');
            cy.wrap(emails[0]).should('have.nested.property', 'sender.emailAddress.address').and('include', '@');
    
            // ... Additional assertions or actions with the email data
          });
        });
      });
  });
  