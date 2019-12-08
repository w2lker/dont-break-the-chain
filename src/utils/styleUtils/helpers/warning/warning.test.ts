import { bonWarning } from './warning';

describe('bonWarning', () => {
  // Props to test
  const sampleErrorType = 'Pangram';
  const sampleMessage = 'The quick brown fox jumps over the lazy dog';
  // Spy instances
  let spy: jest.SpyInstance;
  let mockFunc: jest.Mock;

  beforeEach(() => {
    spy = jest.spyOn(console, 'warn').mockImplementation((message) => null);
    // tslint:disable-next-line:no-console
    mockFunc = console.warn as jest.Mock;
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('it works with message only', () => {
    bonWarning(sampleMessage);
    expect(mockFunc).toBeCalledTimes(1);
    const call = mockFunc.mock.calls[0];
    expect(call.length).toBe(1);
    expect(call[0]).toMatch(sampleMessage);
  });

  it('it works with additional argument', () => {
    bonWarning(sampleMessage, sampleErrorType);
    expect(mockFunc).toBeCalledTimes(1);
    const call = mockFunc.mock.calls[0];
    expect(call.length).toBe(1);
    expect(call[0]).toMatch(sampleMessage);
  });

  it('it throws error if there is no message', () => {
    try {
      // @ts-ignore
      bonWarning();
      // If it fails — it means bonWarning doesn't throw error with no arguments as expected;
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toMatch('Message is required');
    }
  });
});
