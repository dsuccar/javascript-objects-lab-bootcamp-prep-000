var obj = { prop: 1 }



function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)



var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');




//var obj = { foo: 'bar' }

//var newObj = Object.assign({}, obj)

//newObj // { foo: 'bar' }

//delete newObj.foo // true

//newObj // {}

//obj // { foo: 'bar' }
