import fs from 'fs';

export class HTMLOutputTarget {
  constructor(public filename: string) {}

  print(report: string): void {
    const fs = require('fs');
    const html = `
      <html>
        <head>
          <title>Football Match Report</title>
        </head>
        <body>
          <h1>Football Match Report</h1>
          <div>${report}</div>
        </body>
      </html>
    `;
    fs.writeFileSync(this.filename, html);
  }
}
