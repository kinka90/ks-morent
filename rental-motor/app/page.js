'use client'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import MotorCard from '../components/MotorCard'

export default function Home() {
  const [motors, setMotors] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'motors'), (snap) => {
      setMotors(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return () => unsub()
  }, [])

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Aplikasi Rental Motor</h2>
      <div className="row">
        {motors.map(m => <MotorCard key={m.id} motor={m} />)}
      </div>
    </div>
  )
}
