import '../../../src/index';

describe('rdp', () => {
    before(() => {
        cy.visit('https://www.google.com/');
    });
    
    it('test rdp', () => {
        cy.get('a').first().invoke('text').then(current => {
            cy.task('getCdpClient').then(client => {
                console.log(client);
            });
        });
    });
});

