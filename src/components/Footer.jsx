import React from 'react'

function Footer({ year }) {
  return (
    <footer
      style={{
        // width: '100%',
        backgroundColor: '#b3cde0',
        color: '#fff',
        textAlign: 'center',
        // padding: '1rem',
        marginTop: '2rem',
        fontSize: '0.9rem',
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem' 
      }}>
        <p>&copy; {year} My App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer