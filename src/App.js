import { MapContainer, TitleLayer, Marker, Popup, TileLayer } from "react-leaflet"

const PHIL_FOSTER = { lat: 26.7845, lng: -80.0427 }

function App() {
  return (
    <div style={{height: '100vh', width: '100%' }}>
      <MapContainer
        center={[PHIL_FOSTER.lat, PHIL_FOSTER.lng]}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Marker position={[PHIL_FOSTER.lat, PHIL_FOSTER.lng]}>
          <Popup>Phil Foster Park</Popup>
        </Marker>
        
      </MapContainer>
    </div>
  )
}

export default App