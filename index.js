// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value)
{
  const hash = {}
  hash[key] = value
  
  out = Object.assign(driver, hash)
  return out
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  return driver[key] = value;
}
