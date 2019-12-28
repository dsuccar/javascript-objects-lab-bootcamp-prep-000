var obj = { prop: 1 }
function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)


function deleteFromObjectByKey(obj, key){
  return Object.assign({}, obj)
  delete obj.key;
consoleLog obj
}
