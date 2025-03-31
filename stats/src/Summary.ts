import { HTMLOutputTarget } from './HTMLOutputTarget';
import { MatchData } from './MatchData';
import { WinAnalyzer } from './WinAnlayzer';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static withHTMLReport(team: string): Summary {
    return new Summary(
      new WinAnalyzer('Arsenal'),
      new HTMLOutputTarget('./output.html')
    );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
