import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Github, 
  Linkedin, 
  ChevronDown, 
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, FAQS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Proyek Web / Aplikasi Baru',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentTimeWIB, setCurrentTimeWIB] = useState<string>('');

  // Live WIB Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTimeWIB(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Proyek Web / Aplikasi Baru',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="kontak" className="space-y-16 py-4">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
          Mari Terhubung
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Hubungi Irfan Nabil Makarim
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Punya ide proyek yang ingin direalisasikan, membutuhkan bantuan arsitektur software, atau ingin berdiskusi mengenai peluang karir? Pintu komunikasi selalu terbuka.
        </p>
      </div>

      {/* Main Grid: Direct Contacts + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Action Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm dark:shadow-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Alamat Email Resmi</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold">Email Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Halo%20Irfan%20-%20Diskusi%20Proyek`}
                className="py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Buka Mail</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Time Widget Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm dark:shadow-none">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Lokasi & Domisili</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Waktu Lokal (WIB):</span>
              </div>
              <span className="text-sky-700 dark:text-sky-300 font-bold tabular-nums">
                {currentTimeWIB || '14:30:00'} WIB
              </span>
            </div>
          </div>

          {/* Social Channels List */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm dark:shadow-none">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Kanal Sosial & Kode
            </div>
            
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                  <span className="font-semibold">GitHub Repository</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">@irfannabilmakarim</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300" />
                  <span className="font-semibold">LinkedIn Profile</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">in/irfannabilmakarim</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300" />
                  <span className="font-semibold">WhatsApp Chat</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Chat Langsung</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-6 transition-colors">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Kirim Pesan Langsung
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Isi formulir di bawah ini. Saya biasanya merespons dalam waktu 1x24 jam kerja.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-300 dark:border-sky-500/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pesan Anda Berhasil Terkirim!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Terima kasih telah menghubungi. Notifikasi pesan telah diteruskan ke inbox Irfan Nabil Makarim.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400 transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Nama Lengkap <span className="text-sky-600 dark:text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Alamat Email <span className="text-sky-600 dark:text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="budi@perusahaan.com"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Kategori Keperluan
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  >
                    <option value="Proyek Web / Aplikasi Baru">Pengembangan Proyek Web / Aplikasi Baru</option>
                    <option value="Tawaran Kerjasama / Full-time">Tawaran Kerja Full-Time / Kontrak</option>
                    <option value="Konsultasi Arsitektur Perangkat Lunak">Konsultasi Arsitektur & UI/UX</option>
                    <option value="Diskusi Teknis Lainnya">Diskusi Teknis & Networking</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Pesan Detail <span className="text-sky-600 dark:text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran singkat proyek Anda, timeline, atau kebutuhan spesifik..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-md shadow-sky-500/20 transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <div className="space-y-6 pt-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
            Informasi Tambahan
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm dark:shadow-none transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
