// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value)
{
  let hash = {
    key: value
  }
  out = Object.assign(driver, hash)
  return out
}
