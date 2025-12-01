'use client'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'
import jsPDF from 'jspdf'

export default function AdminPage() {
  const [trx, setTrx] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'transactions'), (s) => {
      setTrx(s.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return () => unsub()
  }, [])

  const exportPDF = () => {
    const pdf = new jsPDF()
    pdf.setFontSize(14)
    pdf.text('Laporan Transaksi Rental Motor', 10, 12)
    pdf.setFontSize(11)
    trx.forEach((t, i) => {
      const line = `${i+1}. ${t.name} — ${t.motor} (${t.plate || '-'}) — ${t.days} hari — Rp ${t.total}`
      pdf.text(line, 10, 22 + i*8)
    })
    pdf.save('laporan-rental.pdf')
  }

  return (
    <div className="container mt-4">
      <h2>Dashboard Admin</h2>
      <div className="mb-3">
        <button className="btn btn-success" onClick={exportPDF}>Export PDF</button>
      </div>

      <ul className="list-group">
        {trx.map(t => (
          <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{t.name}</strong> — {t.motor} — {t.days} hari
              <div><small>{t.date}</small></div>
            </div>
            <div>Rp {t.total.toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
