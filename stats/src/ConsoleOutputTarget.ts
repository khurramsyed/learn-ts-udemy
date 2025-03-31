import { OutputTarget } from './Summary';

export class ConsoleOutputTarget implements OutputTarget {
  constructor() {}
  print(report: string): void {
    console.log(report);
  }
}
