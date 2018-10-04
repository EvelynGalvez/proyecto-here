import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

    private ui: any;

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    private platform: any;

    public latitud: any;
    public longitud: any;
    public map: any;

    public constructor() {
        this.platform = new H.service.Platform({
            "app_id": this.appId,
            "app_code": this.appCode
        });
    }

    public ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res) => {
                this.latitud = res.coords.latitude;
                this.longitud = res.coords.longitude;
                let latitud = this.latitud;
                let longitud = this.longitud;
                this.centerMap(latitud, longitud);
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
        this.markerCurrentPosition(latitud, longitud);
        let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    }

    markerCurrentPosition(latitud, longitud){
        let icon = new H.map.Icon('../../../assets/img/marker.jpg'),
          coords = {
            lat: latitud,
            lng: longitud
          },
          marker = new H.map.Marker(coords, {
            icon: icon
          });
        this.map.addObject(marker);
    }

}