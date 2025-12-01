'use client'
import RentForm from './RentForm'

export default function MotorCard({ motor }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{motor.name}</h5>
          <p className="mb-1">Plat: {motor.plate || '-'}</p>
          <p className="mb-1">Harga/hari: Rp {motor.price?.toLocaleString() || '-'}</p>
          <p className="mb-2">Status: 
            <span className={`badge ms-2 ${motor.status === 'available' ? 'bg-success' : 'bg-danger'}`}>
              {motor.status === 'available' ? 'Tersedia' : 'Disewa'}
            </span>
          </p>

          <div className="mt-auto">
            {motor.status === 'available' ? <RentForm motor={motor} /> : <button className="btn btn-secondary w-100" disabled>Sedang Disewa</button>}
          </div>
        </div>
      </div>
    </div>
  )
}
