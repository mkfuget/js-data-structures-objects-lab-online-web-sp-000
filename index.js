// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value)
{
  const newObj = { ...driver };
  newObj[key] = value;

  return newObj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  const newObj = { ...obj };
  newObj[key]
  return driver[key] = value;
}
