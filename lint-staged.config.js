module.exports = {
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix --max-warnings=0 ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
};
