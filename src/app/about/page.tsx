import fs from 'fs';

export default
function About() {
  return <div>{fs.readFileSync('/Users/jimao/next-0/package.json', 'utf8')}</div>;
}
