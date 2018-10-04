import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;
@Component({
  selector: 'app-ruta-segura',
  templateUrl: './ruta-segura.component.html',
  styleUrls: ['./ruta-segura.component.css']
})
export class RutaSeguraComponent implements OnInit {

  private platform: any;
  public latitud: any;
  public longitud: any;
  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  public map: any;
  public marker: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  public constructor() {
      this.platform = new H.service.Platform({
          "app_id": "KbKafnCBtngVMwl6F2zQ",
          "app_code": "-K3tSTmhfjA5JPOhfAKU9w"
      });
  }

  public ngOnInit() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((res) => {
              this.latitud = res.coords.latitude;
              this.longitud = res.coords.longitude;
              console.log(res.coords.latitude);
              console.log(res.coords.longitude);
              let latitud = this.latitud;
              let longitud = this.longitud;
              this.centerMap(latitud, longitud);
              console.log('latitud: ' + latitud + ' longitud: ' + longitud);
          })
      }
   }

   public centerMap(latitud,longitud) {
      let platform = new H.service.Platform({
          "app_id": "KbKafnCBtngVMwl6F2zQ",
          "app_code": "-K3tSTmhfjA5JPOhfAKU9w"
      });
      let defaultLayers = platform.createDefaultLayers();
      let map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.map,
          {
              zoom: 18,
              center: { lat: latitud, lng: longitud }
          }
      );
      let mapEvents = new H.mapevents.MapEvents(map);
      map.addEventListener('tap', function(evt) {
          console.log(evt.type, evt.currentPointer.type); 
      });
        let coords = {lat: latitud, lng: longitud},
        marker = new H.map.Marker(coords);
        map.addObject(marker);
        map.setCenter(coords);
      let behavior = new H.mapevents.Behavior(mapEvents);
      //this.markerCurrentPosition(latitud, longitud);
  }

  /*markerCurrentPosition(latitud, longitud){
      let icon = new H.map.Icon('../assets/img/marker.jpg'),
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
