import PlayerManager from '@/components/PlayerManager';
import { useTranslations, useLocale } from 'next-intl';

export default function CoachDashboard() {
  const t = useTranslations('CoachDashboard');
  const locale = useLocale();
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1 className="title" style={{ background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t('title')}</h1>
      <p className="subtitle">{t('subtitle')}</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <a href={`/${locale}/coach/live`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #ef4444, #991b1b)', border: '2px solid #ef4444', animation: 'pulse 2s infinite' }}>{t('liveMatch')}</a>
        <a href={`/${locale}/coach/video`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #8b5cf6, #3b82f6)' }}>{t('videoAi')}</a>
        <a href={`/${locale}/coach/tactics`} className="btn-primary" style={{ textDecoration: 'none', background: '#10b981' }}>{t('tactics')}</a>
        <a href={`/${locale}/coach/reports`} className="btn-primary" style={{ textDecoration: 'none', background: '#f59e0b' }}>{t('reports')}</a>
        <a href={`/${locale}/coach/compare`} className="btn-primary" style={{ textDecoration: 'none', background: '#ec4899' }}>{t('compare')}</a>
        <a href={`/${locale}/coach/transfers`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #eab308, #d97706)' }}>{t('transfers')}</a>
        <a href={`/${locale}/coach/opponent`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #ef4444, #b91c1c)' }}>{t('opponent')}</a>
        <a href={`/${locale}/coach/chemistry`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #06b6d4, #3b82f6)' }}>{t('chemistry')}</a>
        <a href={`/${locale}/coach/medical`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #14b8a6, #10b981)' }}>{t('medical')}</a>
        <a href={`/${locale}/coach/scouting`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #6366f1, #4338ca)' }}>{t('scouting')}</a>
        <a href={`/${locale}/coach/academy`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #8b5cf6, #7c3aed)' }}>{t('academy')}</a>
        <a href={`/${locale}/coach/training`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #10b981, #059669)' }}>{t('training')}</a>
        <a href={`/${locale}/coach/contracts`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #f59e0b, #d97706)' }}>{t('contracts')}</a>
        <a href={`/${locale}/coach/finance`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #22c55e, #16a34a)' }}>{t('finance')}</a>
        <a href={`/${locale}/coach/media`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #3b82f6, #2563eb)' }}>{t('media')}</a>
        <a href={`/${locale}/coach/3d`} className="btn-primary" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #c084fc, #db2777)' }}>{t('replay3d')}</a>
        <a href={`/${locale}/player`} className="btn-primary" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6' }}>{t('playerApp')}</a>
        <a href={`/${locale}/fan`} className="btn-primary" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #f59e0b', color: '#f59e0b' }}>{t('fanApp')}</a>
        <a href={`/${locale}/scout`} className="btn-primary" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #10b981', color: '#10b981' }}>{t('fieldScout')}</a>
        <a href={`/${locale}/owner`} className="btn-primary" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #e2e8f0', color: '#f8fafc' }}>{t('ownerDash')}</a>
        <a href={`/${locale}/broadcast`} className="btn-primary" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #ef4444', color: '#ef4444' }}>{t('tvBroadcast')}</a>
        <a href={`/${locale}/parents`} className="btn-primary" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid #c084fc', color: '#c084fc' }}>{t('parentsPortal')}</a>
      </div>

      <PlayerManager />
    </div>
  );
}
