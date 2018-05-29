export default ({ route, redirect }) => {
  const nameList = ['/kyanite', '/phone-fns', '/simply_valid', '/simple-card']

  if (nameList.indexOf(route.path) !== -1) {
    return redirect(`/documentation${route.path}`)
  }

  return false
}
