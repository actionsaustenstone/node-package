const demoPackage = require('../src/index');

describe('printMsg', () => {
  it('should log a message to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    demoPackage.printMsg();
    expect(consoleSpy).toHaveBeenCalledWith('This is a message from the demo package');
    consoleSpy.mockRestore();
  });
});