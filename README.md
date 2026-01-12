# Detection of Urban Growth Using Multi-Temporal Satellite Imagery

## Overview
This project focuses on detecting and analyzing urban growth using multi-temporal Sentinel-2 satellite imagery
from 2017 to present. Monthly and yearly composites are generated to study long-term urban expansion patterns.

## Study Area
Urban regions selected using a defined Area of Interest (AOI) in Google Earth Engine.

## Data Source
- Sentinel-2 Surface Reflectance (Harmonized)
- Platform: Google Earth Engine (GEE)

## Methodology
1. Cloud masking using QA60 band
2. Monthly and yearly median composite generation
3. Spectral index calculation:
   - NDVI for vegetation
   - NDBI for built-up area detection
4. Change detection to analyze urban growth
5. Visualization using maps and graphs

## Tools & Technologies
- Google Earth Engine (JavaScript)
- Python (NumPy, Pandas, Rasterio, Matplotlib)
- GitHub for version control

## Folder Structure
- `data/` : Raw and processed data references
- `gee/` : Google Earth Engine scripts
- `scripts/` : Python processing scripts
- `notebooks/` : Jupyter notebooks
- `results/` : Output maps and graphs
- `docs/` : Project documents

## Contributors
- Rahul Reddy
- Sri Charan
