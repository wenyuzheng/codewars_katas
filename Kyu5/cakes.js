function cakes(recipe, available) {
  let maxCanMake = Infinity;
  for (const key in recipe) {
    if (!available[key]) return 0;

    maxCanMake = Math.min(Math.floor(available[key] / recipe[key]), maxCanMake);
  }
  return maxCanMake;
}
