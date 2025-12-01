'use client'
import { useState } from 'react'
import { doc, updateDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default function RentForm({ motor }) {
  const [name, setName] = useState('')
  const [days, setDays] = useState(1)
  const [loading, setLoading] = useState(false)

  const total = Number(days) * Number(motor.price || 0)

  const rent = async () => {
    if (!name) return alert('Masukkan nama penyewa')
    setLoading(true)
    try {
      await addDoc(collection(db, 'transactions'), {
        name,
        motor: motor.name,
        plate: motor.plate || '',
        days: Number(days),
        total,
        date: new Date().toLocaleString(),
        createdAt: serverTimestamp()
      })
      await updateDoc(doc(db, 'motors', motor.id), { status: 'rented' })
      const waMessage = `Halo, saya ${name} ingin menyewa motor ${motor.name} (${motor.plate || '-'}) selama ${days} hari. Total: Rp ${total.toLocaleString()}`
      window.open(`https://wa.me/?text=${encodeURIComponent(waMessage)}`, '_blank')
    } catch (e) {
      console.error(e)
      alert('Terjadi kesalahan. Cek console.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <input className="form-control mb-2" placeholder="Nama Penyewa" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" min="1" className="form-control mb-2" value={days} onChange={e => setDays(e.target.value)} />
      <p>Total: <strong>Rp {total.toLocaleString()}</strong></p>
      <button className="btn btn-primary w-100" onClick={rent} disabled={loading}>
        {loading ? 'Memproses...' : 'Sewa Sekarang'}
      </button>
    </>
  )
}
