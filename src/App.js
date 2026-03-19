import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useState } from "react"

// create an array to store all snorkel spots
const spots = [
  {
    id: 1,
    name: 'Phil Foster Park',
    location: 'Riviera Beach, FL',
    lat: 26.7845,
    lng: -80.0427,
    difficulty: 'Beginner',
    description: 'Home to the famous Blue Heron Bridge & Floridas own critter capital for marine life living throughout a trail of artifical reefs',
  }
]

function App() {

  // create memory for snorkel spot selection
  const [selectedSpot, setSelectedSpot] = useState(null)

  return (
    // flex is sidebyside, h-screen is full screen height
    <div className="flex h-screen">

      {/* create map container, center on current snorkel spot */}
      {/* flex-1 lets map take all remaining space after panel takes its space */}
      <div className="flex-1">
        <MapContainer
          center={[spots[0].lat, spots[0].lng]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
        >
          {/* get all map tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {/* create a snorkel spot map marker */}
          <Marker 
            position={[spots[0].lat, spots[0].lng]}
            
            // when clicked set it as selected spot in memory
            eventHandlers={{
              click: () => setSelectedSpot(spots[0])
            }}
          >
            <Popup>Phil Foster Park</Popup>
          </Marker>

        </MapContainer>
      </div>

      {/* create side panel */}
      {/* overflow y auto lets scroll happen */}
      <div className="w-96 bg-white border-1 border-slate-200 p-6 overflow-y-auto">
        {/* header */}
        <div className="mb-6 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            {/* logo */}
            <span className="text-2xl">🌊</span>
            {/* tracking-tight puts letters slightly closer */}
            <h1 className="text-2xl font-medium text-slate-800 tracking-tight">
              Splash
            </h1>
          </div>
          {/* tagline */}
          <p className="text-xs text-slate-400 mt-1">
            Florida Snorkel Explorer
          </p>
        </div>

        {/* if a spot is selected show the info else show placeholder */}
        {selectedSpot ? (
          <div>
            <div className="mb-4">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                Snorkel Spot
              </p>
              
              <h2 className="text-xl font-medium text-slate-800">
                {selectedSpot.name}
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                📍 {selectedSpot.location}
              </p>
            </div>

            <span className="bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full px-3 py-1 inline-block mt-1 mb-4">
              {selectedSpot.difficulty}
            </span>

            {/* leading relaxed is for lineheight */}
            {/* <p className="text-sm text-slate-600 mt-3 leading-relaxed">{selectedSpot.description}</p> */}
            <div className="mt-4">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">
                About
              </p>

              <p className="text-sm text-slate-600 leading-relaxed"> 
                {selectedSpot.description}
              </p>
            </div>

            <div className="mt-4">
              <img src="https://static.wixstatic.com/media/93b048_d22e599dac9a40a28a6b4c14525d8737~mv2.jpg/v1/fill/w_640,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/93b048_d22e599dac9a40a28a6b4c14525d8737~mv2.jpg"></img>
            </div>

            <div className="mt-8">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">
                Top Sightings
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                ⭐ Spotted Eagle Ray <br />
                ⭐ Atlantic Long Armed Octopus <br />
                ⭐ Sea Turtle <br />
              </p>

              <p className="text-[0.7rem] tracking-widest text-slate-400 mt-1 text-center">
                See All Sightings
              </p>
            </div>
            

          </div>
        ) : (
          <p className="text-center text-slate-400 text-sm mt-10">Click a marker to see spot details</p>
        )}
      </div>

    </div>
  )
}

export default App