import fs from 'fs';
import { MatchRecordIndices, MatchData, MATCH_RESULT } from './MatchData';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const reader = new MatchReader(new CsvFileReader('football.csv'));
let matchData: MatchData[] = reader.load();
let htmlSummary = Summary.withHTMLReport('Aston Villa');
htmlSummary.buildAndPrintReport(matchData);
