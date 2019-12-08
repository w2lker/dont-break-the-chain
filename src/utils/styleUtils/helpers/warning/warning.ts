export function bonWarning(message: string, errorType?: string): void {
  if (message === undefined) {
    throw new Error('Message is required to execute bonWarning function');
  }
  if (console !== undefined) {
    const typeOutput = errorType ? ` - ${errorType}` : '';
    const output = `BON-JSS${typeOutput}: ${message}`;
    // tslint:disable-next-line:no-console
    console.warn(output);
  }
}
