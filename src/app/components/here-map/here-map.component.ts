import { Component } from '@angular/core';


@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent {
    public constructor() {
    }

    public ngOnInit() {
     }

    /*markerCurrentPosition(latitud, longitud){
        let icon = new H.map.Icon('../../../assets/img/marker.jpg'),
          coords = {
            lat: latitud,
            lng: longitud
          },
          marker = new H.map.Marker(coords, {
            icon: icon
          });
        this.map.addObject(marker);
    }*/

}