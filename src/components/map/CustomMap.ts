export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color:string;
}

export default class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(
        divId
      ) as HTMLElement,
      {
        zoom: 2,
        center: {
          lat: 0,
          lng: 0,
        },
        disableDoubleClickZoom:true,
        fullscreenControl:false,
        isFractionalZoomEnabled:false,
        panControl:false,
        mapTypeControl:false,
        rotateControl:false,
        scaleControl:false,
        scrollwheel:false,
        streetViewControl:false
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      icon:{
        fillColor:mappable.color,
        path:'m 12,2.4000002 c -2.7802903,0 -5.9650002,1.5099999 -5.9650002,5.8299998 0,1.74375 1.1549213,3.264465 2.3551945,4.025812 1.2002732,0.761348 2.4458987,0.763328 2.6273057,2.474813 L 12,24 12.9825,14.68 c 0.179732,-1.704939 1.425357,-1.665423 2.626049,-2.424188 C 16.809241,11.497047 17.965,9.94 17.965,8.23 17.965,3.9100001 14.78029,2.4000002 12,2.4000002 Z',
        fillOpacity: 1.0,
        strokeColor: '#000000',
        strokeWeight: 1,
        scale: 2,
      }
    });

    marker.addListener('click', () => {
      const infoWindow =
        new google.maps.InfoWindow({
          content: mappable.markerContent(),
        });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
