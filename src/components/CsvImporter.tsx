'use client';
import { useState } from 'react';
import Papa from 'papaparse';

export default function CsvImporter({ onImport }: { onImport: (data: unknown[]) => void }) {
  const [error, setError] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          setError('Error parsing CSV file');
        } else {
          setError('');
          onImport(results.data);
        }
      },
    });
  };

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px dashed var(--surface-border)', borderRadius: '8px' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Bulk Import Players (CSV)</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
        CSV should include columns: firstName, lastName, position, team, dateOfBirth
      </p>
      <input type="file" accept=".csv" onChange={handleFileUpload} style={{ color: 'var(--text-muted)' }} />
      {error && <p style={{ color: '#f87171', marginTop: '0.5rem' }}>{error}</p>}
    </div>
  );
}
