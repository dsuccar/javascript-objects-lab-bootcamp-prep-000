var obj = { prop: 1 }
function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

deleteFromObjectByKey(obj, key)
