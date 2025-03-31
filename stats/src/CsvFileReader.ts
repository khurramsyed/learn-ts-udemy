import fs from 'fs';
import { dataStringToDate } from './utils';

export interface DataReader {
  read(): void;
  data: string[][];
}

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync('football.csv', { encoding: 'UTF-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
