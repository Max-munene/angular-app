import { Component } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  map!: Map;

  ngOnInit() {
    this.initializeMap();
  }

  public initializeMap(): void {
    // Create a map view centered at a specific location and with an initial zoom level
    const view = new View({
      center: fromLonLat([36.907054, -1.158751]),
      zoom: 10,
    });

    // Create a map instance
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view,
    });

    // Add a marker to the map
    const marker = new Feature({
      geometry: new Point(fromLonLat([36.907054, -1.158751])),
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'assets/home.png', // Replace with your marker image path
          scale: 0.1,
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    this.map.addLayer(vectorLayer);
  }
}
