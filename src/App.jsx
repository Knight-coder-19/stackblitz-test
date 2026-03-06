import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      background: '#f8fafc',
      gap: '24px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>
          AgenceTrack Preview
        </h1>
        <p style={{ color: '#64748b', marginTop: '8px' }}>
          This is a live preview of the project via StackBlitz
        </p>
      </div>

      <div style={{
        background: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '32px 48px',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}>
        <p style={{ color: '#64748b', marginBottom: '16px' }}>Counter</p>
        <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>{count}</p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <button
            onClick={() => setCount(c => c - 1)}
            style={{
              padding: '10px 24px', borderRadius: '8px', border: 'none',
              background: '#f1f5f9', color: '#475569', cursor: 'pointer', fontWeight: '600',
            }}
          >−</button>
          <button
            onClick={() => setCount(c => c + 1)}
            style={{
              padding: '10px 24px', borderRadius: '8px', border: 'none',
              background: '#3b82f6', color: 'white', cursor: 'pointer', fontWeight: '600',
            }}
          >+</button>
        </div>
      </div>

      <p style={{ fontSize: '12px', color: '#94a3b8' }}>
        Powered by StackBlitz WebContainers
      </p>
    </div>
  )
}
