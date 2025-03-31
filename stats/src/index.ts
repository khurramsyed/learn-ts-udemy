import fs from 'fs';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { MatchData } from './MatchData';

let matchData: MatchData[] = MatchReader.withCsvReader('football.csv').load();
let htmlSummary = Summary.withHTMLReport('Arsenal');
htmlSummary.buildAndPrintReport(matchData);
