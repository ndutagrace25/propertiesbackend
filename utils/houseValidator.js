const validHouse = (house) => {
  const hasName = typeof house.name == "string" && house.name.trim() != "";
  const hasImages = typeof house.images == "string" && house.images.trim() != "";
 

  return hasName && hasImages ;
};

module.exports = validHouse;
