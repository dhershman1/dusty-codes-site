export default ({ route, redirect }) => {
  const nameList = ['/kyanite', '/phone-fns', '/simply_valid', '/simple-card']

  if (route.path === '/documentation/dusty-fns' || route.path === '/dusty-fns') {
    return redirect('/documentation/kyanite')
  }

  if (nameList.indexOf(route.path) !== -1) {
    return redirect(`/documentation${route.path}`)
  }

  return false
}
