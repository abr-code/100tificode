const resolveRouets = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `${route}`;
};

export default resolveRouets;
