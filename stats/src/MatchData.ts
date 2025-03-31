export enum MatchRecordIndices {
  DATE = 0,
  HOME_TEAM,
  AWAY_TEAM,
  HOME_TEAM_GOALS,
  AWAY_TEAM_GOALS,
  MATCH_RESULT,
  REFREE,
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MATCH_RESULT,
  string
];

export enum MATCH_RESULT {
  HOME_WIN = 'H',
  AWAY_WIN = 'A',
  DRAW = 'D',
}
