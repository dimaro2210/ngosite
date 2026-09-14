import React, { useState, useEffect } from 'react';

const WEB3FORMS_KEY = '073e0963-fd22-4886-8a40-5ccd11749be3';

export function openDonateModal(initiative = '') {
  window.dispatchEvent(new CustomEvent('open-donate-modal', { detail: { initiative } }));
}

export default function DonateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [initiative, setInitiative] = useState('');
  const [activeTab, setActiveTab] = useState('bank'); // 'bank' | 'pledge'
  const [copied, setCopied] = useState(false);

  // Pledge form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '25000',
    frequency: 'one-time',
    notes: ''
  });
  const [sending, setSending] = useState(false);
  const [pledgeSuccess, setPledgeSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      setInitiative(e.detail?.initiative || '');
      setIsOpen(true);
      setPledgeSuccess(false);
      setCopied(false);
    };

    window.addEventListener('open-donate-modal', handleOpen);
    return () => window.removeEventListener('open-donate-modal', handleOpen);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('1204859302');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePledgeSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const data = new FormData();
      data.append('access_key', WEB3FORMS_KEY);
      data.append('subject', `Saferplace Initiative Pledge: ${form.name} (₦${Number(form.amount).toLocaleString() || form.amount})`);
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('pledge_amount', `NGN ${form.amount}`);
      data.append('frequency', form.frequency);
      data.append('targeted_initiative', initiative || 'General Support');
      data.append('notes', form.notes || 'Direct donation commitment');

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setPledgeSuccess(true);
      } else {
        alert('Pledge submission could not be sent. Please try direct bank transfer.');
      }
    } catch {
      alert('Network error. Please make a direct transfer using our bank details.');
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="donate-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="donate-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button 
          className="donate-modal-close" 
          onClick={() => setIsOpen(false)}
          aria-label="Close donation modal"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Modal Header */}
        <div className="donate-modal-header">
          <div className="donate-header-icon">
            <i className="fas fa-heart"></i>
          </div>
          <h3>Support Saferplace Initiative</h3>
          <p>
            {initiative 
              ? `You are directly powering: "${initiative}"`
              : 'Empowering children, women & vulnerable communities across 6 states.'}
          </p>
          <div className="donate-cac-pill">
            <i className="fas fa-certificate"></i> CAC/IT/NO 7571193 · Sokoto, Nigeria
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="donate-tabs">
          <button 
            type="button" 
            className={`donate-tab-btn ${activeTab === 'bank' ? 'active' : ''}`}
            onClick={() => setActiveTab('bank')}
          >
            <i className="fas fa-building-columns"></i> Direct Bank Transfer
          </button>
          <button 
            type="button" 
            className={`donate-tab-btn ${activeTab === 'pledge' ? 'active' : ''}`}
            onClick={() => setActiveTab('pledge')}
          >
            <i className="fas fa-hand-holding-dollar"></i> Make a Pledge
          </button>
        </div>

        {/* Tab 1: Direct Bank Transfer */}
        {activeTab === 'bank' && (
          <div className="donate-tab-content">
            <div className="donate-bank-box">
              <div className="donate-bank-header">
                <span className="donate-bank-type">Official Non-Profit Account</span>
                <span className="donate-bank-verified">
                  <i className="fas fa-shield-check"></i> Verified
                </span>
              </div>

              <div className="donate-bank-grid">
                <div className="donate-bank-item">
                  <span className="lbl">Account Name</span>
                  <span className="val bold">Saferplace Initiative</span>
                </div>
                <div className="donate-bank-item">
                  <span className="lbl">Partner Banks</span>
                  <span className="val">Access Bank PLC / Zenith Bank PLC</span>
                </div>
                <div className="donate-bank-item full-width">
                  <span className="lbl">Account Number (NUBAN)</span>
                  <div className="donate-account-row">
                    <span className="account-number">1204859302</span>
                    <button 
                      type="button" 
                      className={`donate-copy-btn ${copied ? 'copied' : ''}`}
                      onClick={handleCopy}
                    >
                      <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="donate-instructions">
                <p>
                  <i className="fas fa-info-circle"></i>
                  <span>
                    After transfer, send your receipt via WhatsApp to <strong>+234-9117622762</strong> or email <strong>saferplaceinitiativeng@gmail.com</strong> for an official acknowledgement letter.
                  </span>
                </p>
              </div>

              <div className="donate-quick-links">
                <a 
                  href={`https://wa.me/2349117622762?text=${encodeURIComponent(
                    `Hello Saferplace Initiative, I just transferred a donation ${initiative ? `for "${initiative}"` : ''} to Account 1204859302. Here is my receipt:`
                  )}`}
                  target="_blank" 
                  rel="noreferrer" 
                  className="donate-whatsapp-btn"
                >
                  <i className="fab fa-whatsapp"></i> Confirm Transfer on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Pledge / Sponsorship Form */}
        {activeTab === 'pledge' && (
          <div className="donate-tab-content">
            {pledgeSuccess ? (
              <div className="donate-pledge-success">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Thank You For Your Commitment!</h4>
                <p>
                  We have received your pledge. Our field director will follow up with official documentation and transfer guidelines.
                </p>
                <button 
                  type="button" 
                  className="btn-primary" 
                  onClick={() => setIsOpen(false)}
                  style={{ marginTop: '1.2rem', width: '100%', justifyContent: 'center' }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handlePledgeSubmit} className="donate-pledge-form">
                <div className="pledge-amounts">
                  {[10000, 25000, 50000, 100000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`pledge-chip ${Number(form.amount) === amt ? 'active' : ''}`}
                      onClick={() => setForm({ ...form, amount: String(amt) })}
                    >
                      ₦{amt.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="form-group-modal">
                  <label>Pledge Amount (NGN)</label>
                  <input
                    type="number"
                    required
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    placeholder="Enter amount"
                  />
                </div>

                <div className="form-row-modal">
                  <div className="form-group-modal">
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group-modal">
                    <label>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-modal">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={sending} 
                  className="donate-submit-btn"
                >
                  {sending ? (
                    <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                  ) : (
                    <><i className="fas fa-paper-plane"></i> Record My Pledge</>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="donate-modal-footer">
          <span><i className="fas fa-lock"></i> 100% Secure &amp; Direct Non-Profit Delivery</span>
        </div>
      </div>
    </div>
  );
}
