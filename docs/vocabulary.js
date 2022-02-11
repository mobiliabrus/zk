var vocabulary = ["able", "about", "absorb", "absent", "academic"];
function vueDictionToday() {
  var component = vueDictionExtend({
    word: vocabulary[Math.floor(new Date().valueOf() / (1000 * 60 * 60 * 24)) % vocabulary.length],
    autoLoad: true,
  });
  component.template = '<div class="vocabulary-today">' + component.template + '</div>';
  return component;
}
