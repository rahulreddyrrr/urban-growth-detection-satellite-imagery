// ===============================
// Urban Growth Detection
// Sentinel-2 Monthly Composites
// 2017 - Present
// ===============================

// 1. Define Area of Interest (DRAW POLYGON in GEE & rename as geometry)
var aoi = geometry;
Map.centerObject(aoi, 11);
Map.addLayer(aoi, {color: 'red'}, 'Study Area');

// 2. Date range
var startYear = 2017;
var endYear = new Date().getFullYear();

// 3. Sentinel-2 Collection
var s2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(aoi)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// 4. Function to create monthly composites
var monthlyComposite = function(year, month) {
  var start = ee.Date.fromYMD(year, month, 1);
  var end = start.advance(1, 'month');

  var image = s2
    .filterDate(start, end)
    .median()
    .clip(aoi)
    .set('year', year)
    .set('month', month)
    .set('system:time_start', start.millis());

  return image;
};

// 5. Generate monthly images
var years = ee.List.sequence(startYear, endYear);
var months = ee.List.sequence(1, 12);

var monthlyImages = ee.ImageCollection(
  years.map(function(y) {
    return months.map(function(m) {
      return monthlyComposite(y, m);
    });
  }).flatten()
);

// 6. Visualization
var rgbVis = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000
};

// Show one sample image
var sample = ee.Image(monthlyImages.first());
Map.addLayer(sample, rgbVis, 'Sample Monthly Image');

// 7. Print collection info
print('Monthly Sentinel-2 Collection:', monthlyImages);
