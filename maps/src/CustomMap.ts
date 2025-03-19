/// <reference types="@types/google.maps" />


export interface Mappable {
  location:{
   lat: number,
   lng: number,
  },
  getMarkerContent(): string
}

export class CustomMap{

  private googleMap: google.maps.Map;

  constructor(divID : string){
    const mapElement = document.getElementById(divID) as HTMLElement;
    this.googleMap = new google.maps.Map(mapElement, { zoom: 1, center:{ lat: 0, lng: 0} });
  }

  addMarker(mappable: Mappable): void {
    const pos = {lat: mappable.location.lat, lng: mappable.location.lng};
    const marker = new google.maps.Marker({map: this.googleMap, position: pos})
    
    const contentString = mappable.getMarkerContent()
    const infoWindow = new google.maps.InfoWindow({content: contentString})
    marker.addListener('click', ()=> {infoWindow.open({map: this.googleMap, anchor: marker})})
  }

}



