import fs from 'fs';

export default
function About() {
  let state: any = { };
  try {
    const jsonText = fs.readFileSync('state.json', 'utf8');
    state = JSON.parse(jsonText);
  } catch (error) {
    console.error(error);
  }
  state.count = (state.count ?? 0) + 1;
  fs.writeFileSync('state.json', JSON.stringify(state), 'utf8');
  return <div>{state.count}</div>;
}
