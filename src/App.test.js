function resize(param) {
  if (param > 600) {
    return false;
  } else {
    return true;
  }
}
// function handleSort(param) {}

test('isMobile = false', () => {
  expect(resize(700)).toBe(false);
});

test('isMobile = true', () => {
  expect(resize(500)).toBe(true);
});
