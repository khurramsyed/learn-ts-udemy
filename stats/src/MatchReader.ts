import { MatchData } from './MatchData';
import { MATCH_RESULT } from './MatchData';
import { CsvFileReader, DataReader } from './CsvFileReader';

export class MatchReader {
  static withCsvReader(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(public reader: DataReader) {}

  load(): MatchData[] {
    this.reader.read();
    return this.reader.data.map((row: string[]): MatchData => {
      return [
        new Date(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MATCH_RESULT,
        row[6],
      ];
    });
  }
}
