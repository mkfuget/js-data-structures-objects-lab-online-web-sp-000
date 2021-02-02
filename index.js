// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value)
{
  let hash = {
    kay: value
  }
  driver = Object.assign(driver, hash)
  return driver
}
