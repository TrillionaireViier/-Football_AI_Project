'use client';

export default function OwnerDashboardPage() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Top Nav */}
      <div style={{ background: 'white', padding: '1rem 2rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', background: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
            D
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '800', letterSpacing: '-0.02em' }}>Presidential Suite</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Last updated: Just now</span>
          <button style={{ background: '#0f172a', color: 'white', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '4px', fontWeight: 'bold' }}>Export PDF</button>
        </div>
      </div>

      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Top KPI Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total Franchise Valuation</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' }}>€485M</div>
            <div style={{ color: '#16a34a', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '500' }}>↑ +4.2% YTD</div>
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Squad Market Value (AI)</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' }}>€152M</div>
            <div style={{ color: '#16a34a', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '500' }}>↑ +12.5% (Youth Academy Boost)</div>
          </div>

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Operating Profit Margin</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' }}>14%</div>
            <div style={{ color: '#dc2626', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '500' }}>↓ -2% (High Wage Bill)</div>
          </div>

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Staff Performance Rating</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#2563eb' }}>A-</div>
            <div style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem' }}>Exceeding xPoints expectations</div>
          </div>
        </div>

        {/* Second Row: Sponsorship & Brand */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          
          {/* Sponsorship ROI */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0 0 1.5rem 0' }}>Sponsorship Exposure ROI (AI Analysis)</h2>
            <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Our AI scans live match broadcasts to calculate the exact screen time of sponsor logos.</p>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ textAlign: 'left', padding: '1rem 0', color: '#64748b' }}>Sponsor</th>
                  <th style={{ textAlign: 'left', padding: '1rem 0', color: '#64748b' }}>Placement</th>
                  <th style={{ textAlign: 'right', padding: '1rem 0', color: '#64748b' }}>TV Screen Time</th>
                  <th style={{ textAlign: 'right', padding: '1rem 0', color: '#64748b' }}>Estimated Value</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>New Balance</td>
                  <td style={{ padding: '1rem 0', color: '#64748b' }}>Kit Manufacturer</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', fontWeight: '500' }}>42m 15s</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', color: '#16a34a', fontWeight: 'bold' }}>€1.2M</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>Favbet</td>
                  <td style={{ padding: '1rem 0', color: '#64748b' }}>Front of Shirt</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', fontWeight: '500' }}>28m 40s</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', color: '#16a34a', fontWeight: 'bold' }}>€850k</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>Mastercard</td>
                  <td style={{ padding: '1rem 0', color: '#64748b' }}>Stadium Boards</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', fontWeight: '500' }}>08m 12s</td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', color: '#16a34a', fontWeight: 'bold' }}>€310k</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Transfer Value Projection */}
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
             <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0 0 1.5rem 0' }}>Top Asset Projections</h2>
             <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>AI projected market values over the next 12 months based on current form and age curve.</p>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>M. Shaparenko</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Current: €18M</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#16a34a', fontWeight: 'bold' }}>→ €25M</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Peak Age (26)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>V. Brazhko</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Current: €12M</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#16a34a', fontWeight: 'bold' }}>→ €22M</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>High Potential (22)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fef2f2', padding: '1rem', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>A. Yarmolenko</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Current: €2M</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#dc2626', fontWeight: 'bold' }}>→ €500k</div>
                    <div style={{ fontSize: '0.8rem', color: '#dc2626' }}>Age Decline (34)</div>
                  </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
