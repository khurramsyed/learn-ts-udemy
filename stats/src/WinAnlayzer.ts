import { MatchData } from './MatchData';
import { MATCH_RESULT } from './MatchData';
import { MatchRecordIndices } from './MatchData';
import { Analyzer } from './Summary';

export class WinAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const filteredMatches = matches.filter(
      (match) =>
        (match[MatchRecordIndices.HOME_TEAM] === this.team &&
          match[MatchRecordIndices.MATCH_RESULT] === MATCH_RESULT.HOME_WIN) ||
        (match[MatchRecordIndices.AWAY_TEAM] === this.team &&
          match[MatchRecordIndices.MATCH_RESULT] === MATCH_RESULT.AWAY_WIN)
    );

    return `Team ${this.team} won ${filteredMatches.length} home matches.`;
  }
}
