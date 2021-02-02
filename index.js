// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value)
{
  const hash = {
    key: value
  }
  out = Object.assign(driver, hash)
  return out
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  return driver[key] = value;
}
