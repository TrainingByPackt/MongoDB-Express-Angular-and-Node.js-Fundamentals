import { Welcome } from './welcome';

xdescribe('Welcome class tests', () => {
    let welcome: Welcome = null;

    beforeEach(() => {
        welcome = new Welcome();
    });

    xit('should have a valid constuctor', () => {
        expect(welcome).not.toBeNull();
    });

    xit('should set name properly through constructor', () => {
        welcome = new Welcome();
        expect(welcome.note).toEqual('Welcome to MEANStack class');
    });
    
    xit('should get and set id properly', () => {
        welcome.studentId = 1;
        expect(welcome.studentId).toEqual(1);
      });
 
      xit('should get and set name properly', () => {
        welcome.studentName = 'Paul Oluyege';
        expect(welcome.studentName).toEqual('Paul Oluyege');
      });

    afterEach(() => {
        welcome = null;
    });
});
