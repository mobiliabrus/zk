window.vocabulary = [
  'able',
  'about',
  'absorb',
  'absent',
  'academic',
  'accent',
  'accident',
  'according',
  'account',
  'accurate',
  'accuse',
  'ache',
  'achieve',
  'achievement',
  'act',
  'action',
  'activity',
  'actor',
  'actress',
  'actual',
];

function vueDictionToday() {
  const component = vueDictionExtend({
    word: vocabulary[Math.floor(new Date().valueOf() / (1000 * 60 * 60 * 24)) % vocabulary.length],
    autoLoad: true,
  });
  component.template = '<div class="vocabulary-today">' + component.template + '</div>';
  return component;
}
