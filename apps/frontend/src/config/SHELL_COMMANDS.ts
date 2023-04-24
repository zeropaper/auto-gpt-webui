export const SHELL_COMMANDS = {
  installRequirements: 'pip install -r requirements.txt',
  startAutoGPT: './run.sh',
  testLsLa: 'ls -la',
  testMockSpinner: `bash ../scripts/mock-spinner.sh`,
  testMockUserInput: `bash ../scripts/mock-user-input.sh`,
} satisfies Record<string, string>;
