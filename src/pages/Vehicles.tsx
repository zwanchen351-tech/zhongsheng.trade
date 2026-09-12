import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone, ChevronRight, CheckCircle, Settings, Star, Truck,
  ShieldCheck, CalendarCheck, Languages, Wrench, Camera, MapPin,
} from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import minibusPair from '../assets/images/minibus-white-pair.jpg'
import minibusFleet from '../assets/images/minibus-white-fleet.jpg'

/**
 * 车型展示栏目 —— 新增车型只需两步：
 * 1. 把图片放进 src/assets/images/，在下面 showcaseImages 里加一条 { key: 图片 }
 * 2. 在 src/i18n/translations.ts 的 showcase.items（中文 + 法语）各加一条同 key 的车型数据
 */
const showcaseImages: Record<string, string> = {
  joylongA4: minibusPair,
  joylongA5: minibusFleet,
}

export default function Vehicles() {
  const { t, lang } = useI18n()
  const s = t.showcase
  const items = s.items

  return (
    <div className="text-[color:var(--color-ink-900)]">

      {/* ========================================================= */}
      {/* HERO                                                       */}
      {/* ========================================================= */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={minibusFleet}
            alt={lang === 'zh' ? '中盛贸易塔马塔夫园区现车队列实拍' : 'File de véhicules dans notre parc à Toamasina II'}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-ink-900)]/92 via-[color:var(--color-ink-900)]/60 to-[color:var(--color-amber-500)]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-warm)] via-[color:var(--color-warm)]/25 to-transparent" />
          <div className="absolute inset-0 bg-mesh-ink opacity-60" />
          <div className="absolute inset-0 bg-grain-overlay" />
        </div>

        {/* 左上编号 */}
        <div className="hidden md:block absolute top-28 left-8 lg:left-14 text-white/50 font-mono text-xs tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-white/35" />
            N° / {lang === 'zh' ? '车型展示 · SHOWROOM' : 'VÉHICULES · SHOWROOM'}
          </div>
        </div>
        {/* 右下水印 */}
        <div className="pointer-events-none hidden lg:block absolute -right-4 bottom-12 font-display font-black leading-none select-none">
          <span className="block text-[200px] text-white/[0.045]">STOCK</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 md:pt-44 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative p-6 sm:p-8 md:p-10 glass-dark rounded-[32px] overflow-hidden shine-sweep"
              >
                <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[color:var(--color-amber-500)]/20 blur-3xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[color:var(--color-amber-500)]/40 bg-[color:var(--color-amber-500)]/10 backdrop-blur-sm text-[color:var(--color-amber-500)] text-[11px] sm:text-xs md:text-sm font-bold mb-5 md:mb-7">
                    <span className="w-2 h-2 rounded-full bg-[color:var(--color-amber-500)] animate-pulse" />
                    {s.badge}
                  </div>

                  <h1 className="font-display text-white font-black leading-[0.98] tracking-tight">
                    <span className="block text-[12px] sm:text-[15px] md:text-[19px] font-bold text-gradient-amber mb-2 sm:mb-3 md:mb-5 tracking-[0.22em] uppercase">
                      {t.common.companyShort} · {t.home.location}
                    </span>
                    <span className="block text-[32px] sm:text-[48px] md:text-[76px] lg:text-[86px]">
                      {t.nav.vehicles}
                    </span>
                    <span className="block text-[18px] sm:text-[26px] md:text-[38px] lg:text-[44px] text-white/85 mt-1 sm:mt-2">
                      {s.sub}
                    </span>
                  </h1>

                  <p className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-white/75 text-[13.5px] sm:text-[15px] md:text-[17px] leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                    <a
                      href={`tel:${t.contact.phones[0].tel}`}
                      className="btn-ripple btn btn-amber text-sm sm:text-base justify-center"
                    >
                      <Phone className="w-4 h-4" strokeWidth={2.5} />
                      {t.common.consultPrice}
                    </a>
                    <Link
                      to="/contact"
                      className="btn-ripple btn btn-outline !text-white !border-white/60 hover:!bg-white hover:!text-[color:var(--color-ink-900)] text-sm sm:text-base justify-center"
                    >
                      {s.onSite}
                      <ChevronRight className="w-4 h-4" strokeWidth={3} />
                    </Link>
                  </div>

                  {/* 三格速览 */}
                  <div className="mt-7 sm:mt-9 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
                    {s.meta.map((m, i) => (
                      <div key={i} className="rounded-[16px] border border-white/15 bg-white/[0.05] px-3 py-3 sm:px-4 sm:py-4 backdrop-blur-md">
                        <div className="font-display font-black text-[16px] sm:text-[20px] md:text-[24px] leading-none text-[color:var(--color-amber-500)]">
                          {m.value}
                        </div>
                        <div className="mt-1.5 text-[10px] sm:text-[11px] text-white/65 font-semibold tracking-wide leading-snug">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 现车卡片展示区                                              */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-wake">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-16">
            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink-500)] font-black mb-3 sm:mb-4">
                SHOWROOM · N° 01
              </div>
              <h2 className="font-display text-[28px] sm:text-[32px] md:text-[52px] font-black leading-[1.05] tracking-tight">
                {s.sectionTitle}
              </h2>
              <p className="mt-2 sm:mt-3 text-[13px] sm:text-[15px] text-[color:var(--color-ink-600)] max-w-2xl">
                {s.sectionSub}
              </p>
              <span className="hr-heavy mt-4 sm:mt-5" />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="badge-ink text-[10px] sm:text-xs">
                {lang === 'zh' ? `现车 ${items.length} 款` : `${items.length} MODÈLES`}
              </div>
            </div>
          </div>

          {/* 车型大卡 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {items.map((v, idx) => {
              const img = showcaseImages[v.id]
              return (
                <motion.article
                  key={v.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  /* 注意：不要同时给非替换元素设置 aspect-ratio + min-height ——
                     min-height 会被按比例折算成"最小宽度"（320×16/11≈465px），
                     手机上把卡片撑出屏幕。窄屏用显式高度，lg 起才用比例。 */
                  className="group relative bg-black overflow-hidden border border-white/10 shine-sweep tilt-lift h-[430px] sm:h-[470px] md:h-[580px] lg:h-auto lg:aspect-[4/3.4]"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={v.name}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/40">
                      <Truck className="w-16 h-16" aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

                  {/* 顶部：价格 + 标签 */}
                  <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/95 via-black/80 to-transparent pb-3">
                    <div className="text-center py-2 sm:py-2.5 border-b-2 border-amber-500/60">
                      <span className="text-[15px] sm:text-[17px] md:text-[20px] font-black tracking-wider text-[color:var(--color-amber-500)] drop-shadow-[0_0_8px_rgba(232,164,0,0.5)]">
                        {v.priceShort}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] text-white/50">
                        {String(idx + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                      </span>
                      <span className={`px-2 py-0.5 text-[9px] sm:text-[10px] font-black tracking-[0.15em] ${
                        v.hot
                          ? 'bg-red-600 text-white ring-1 ring-amber-400 animate-pulse'
                          : 'bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)]'
                      }`}>
                        {v.tag}
                      </span>
                    </div>
                  </div>

                  {/* 底部内容 */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1 sm:mb-2">
                      {v.brand}
                    </div>
                    <h3 className="font-display text-[19px] sm:text-[23px] md:text-[29px] font-black text-white leading-[1.2] tracking-tight line-clamp-2">
                      {v.name}
                    </h3>

                    {/* 参数格 */}
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2 max-w-md">
                      {v.specs.slice(0, 4).map((sp) => (
                        <div key={sp} className="px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] md:text-[13px] text-white/80 border border-white/15 bg-white/[0.04]">
                          {sp}
                        </div>
                      ))}
                    </div>

                    {/* 简述（大屏才显示，避免手机端卡片过高） */}
                    <p className="hidden md:block mt-3 sm:mt-4 text-[13px] md:text-[14px] text-white/65 leading-relaxed line-clamp-2">
                      {v.desc}
                    </p>

                    <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                      <div className={`text-[12px] sm:text-[13px] font-bold px-2 py-0.5 rounded ${
                        v.hot ? 'bg-red-600/90 text-white animate-pulse' : 'text-[color:var(--color-amber-500)]'
                      }`}>
                        {v.highlight}
                      </div>
                      <a
                        href={`tel:${t.contact.phones[0].tel}`}
                        className="text-xs sm:text-sm font-bold text-white/85 flex items-center gap-1 group-hover:text-[color:var(--color-amber-500)] group-hover:gap-2 transition-all"
                      >
                        {s.consult}
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* 价格说明 */}
          <div className="mt-6 sm:mt-8 flex items-start gap-3 p-4 sm:p-5 card-paper">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[color:var(--color-amber-500)] fill-[color:var(--color-amber-500)] flex-shrink-0 mt-0.5" />
            <p className="text-[12.5px] sm:text-[14px] text-[color:var(--color-ink-600)] leading-relaxed">
              {s.priceNote}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 到店实拍图集                                                */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-[color:var(--color-warm)]/50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="mb-8 sm:mb-10 md:mb-14">
            <div className="flex items-center gap-4 mb-3">
              <span className="font-mono text-[color:var(--color-amber-500)] font-bold text-sm tracking-[0.3em]">— N° 02</span>
              <span className="h-px w-12 md:w-20 bg-[color:var(--color-ink-900)]/30" />
            </div>
            <h2 className="font-display text-[28px] sm:text-[32px] md:text-[52px] font-black leading-[1.05] tracking-tight">
              {s.galleryTitle}
            </h2>
            <p className="mt-2 sm:mt-4 text-[13px] sm:text-[15px] text-[color:var(--color-ink-600)] max-w-2xl">
              {s.gallerySub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[minibusPair, minibusFleet].map((src, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group rounded-[22px] sm:rounded-[26px] overflow-hidden ring-1 ring-[color:var(--color-ink-900)]/10 shadow-[0_30px_80px_-30px_rgba(15,26,45,0.35)]"
              >
                <img
                  src={src}
                  alt={s.galleryCaptions[i] ?? t.nav.vehicles}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/92 backdrop-blur text-[color:var(--color-ink-900)] text-[11px] sm:text-xs font-bold shadow-lg">
                  <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                  {lang === 'zh' ? '实景拍摄' : 'PHOTO RÉELLE'}
                </div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[color:var(--color-amber-500)] mb-1">
                    N° {String(i + 1).padStart(2, '0')}
                  </div>
                  <figcaption className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-snug">
                    {s.galleryCaptions[i]}
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>

          {/* 提示卡 */}
          <div className="mt-6 sm:mt-8 card-paper p-5 sm:p-7 grid md:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)]">
                <MapPin className="w-5 h-5" strokeWidth={2.2} aria-hidden="true" />
              </div>
              <div className="font-display font-black text-lg sm:text-xl leading-tight">
                {s.noticeTitle}
              </div>
            </div>
            <p className="text-[13px] sm:text-[14.5px] text-[color:var(--color-ink-600)] leading-relaxed">
              {s.noticeDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 购车服务保障                                                */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-[color:var(--color-ink-900)] text-white overflow-hidden">
        <div className="pointer-events-none absolute -right-16 top-10 font-display text-[180px] sm:text-[260px] leading-none font-black text-white/[0.04] select-none">
          SERVICE
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-amber-500)] font-black mb-3 sm:mb-4">
              SERVICE · N° 03
            </div>
            <h2 className="font-display text-[26px] sm:text-[32px] md:text-[44px] font-black leading-[1.08] tracking-tight">
              {s.serviceTitle}
              <span className="block text-white/50 text-[15px] sm:text-[17px] md:text-[20px] font-bold mt-1.5 sm:mt-2 tracking-normal">
                {s.serviceSub}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {s.services.map((item, i) => {
              const Icon = [ShieldCheck, Truck, Languages, Wrench][i] ?? CheckCircle
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="tilt-lift rounded-[20px] border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors p-5 sm:p-6 relative overflow-hidden"
                >
                  <div className="font-mono text-[11px] font-black text-[color:var(--color-amber-500)]/80 tracking-widest mb-4">
                    0{i + 1}
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] mb-4">
                    <Icon className="w-5 h-5" strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <div className="font-display font-black text-[17px] sm:text-[19px] leading-tight mb-2">
                    {item.title}
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-[color:var(--color-amber-500)]" />
                </motion.div>
              )
            })}
          </div>

          {/* 规格明细：把每台车的完整参数列出来（手机端更易读） */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {items.map((v, i) => (
              <div key={v.id} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-5">
                  <Settings className="w-4 h-4 text-[color:var(--color-amber-500)]" aria-hidden="true" />
                  <span className="font-bold text-[12px] sm:text-[13px] tracking-[0.18em] text-white/70">
                    {lang === 'zh' ? '完整参数 / FICHE TECHNIQUE' : 'FICHE TECHNIQUE COMPLÈTE'}
                  </span>
                  <span className="flex-1 h-px bg-white/10" />
                </div>
                <div className="font-display font-black text-[18px] sm:text-[21px] leading-tight mb-1">
                  {v.name}
                </div>
                <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-amber-500)]/90 font-bold mb-4">
                  {v.brand}
                </div>
                <p className="text-[13.5px] sm:text-[14.5px] text-white/70 leading-[1.85] mb-5">
                  {v.desc}
                </p>
                {/* 完整参数表（中/法随语言切换，数据见 translations.ts） */}
                <div className="rounded-xl border border-white/10 overflow-hidden">
                  <div className="hidden sm:grid grid-cols-[minmax(150px,240px)_1fr] text-[11px] font-black tracking-[0.15em] uppercase text-white/45 bg-white/[0.06]">
                    <div className="px-4 py-2.5">{lang === 'zh' ? '参数项' : 'Paramètre'}</div>
                    <div className="px-4 py-2.5">{lang === 'zh' ? '规格' : 'Valeur'}</div>
                  </div>
                  {v.params.map((p, pi) => (
                    <div
                      key={p.label}
                      className={`grid sm:grid-cols-[minmax(150px,240px)_1fr] gap-x-4 gap-y-0.5 px-4 py-2.5 border-t border-white/[0.07] ${pi % 2 === 1 ? 'bg-white/[0.025]' : ''}`}
                    >
                      <div className="text-[12px] sm:text-[12.5px] font-bold text-white/55 leading-snug">
                        {p.label}
                      </div>
                      <div className="text-[13px] sm:text-[13.5px] font-semibold text-white/90 leading-snug">
                        {p.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="font-display font-black text-[20px] sm:text-[24px] text-[color:var(--color-amber-500)]">
                    {v.priceShort}
                  </span>
                  <a
                    href={`tel:${t.contact.phones[0].tel}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] text-sm font-extrabold hover:bg-[#FFBD1F] transition-colors"
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                    {s.onSite}
                  </a>
                </div>
                <div className="mt-3 font-mono text-[11px] text-white/35 tracking-widest">
                  — MODÈLE {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA 条                                                      */}
      {/* ========================================================= */}
      <section className="relative bg-[color:var(--color-amber-500)] text-[color:var(--color-ink-900)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ backgroundImage: `url(${minibusFleet})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 md:py-18 lg:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          <div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-black opacity-70 mb-2 sm:mb-3">
              {lang === 'zh' ? 'GET IN TOUCH · CONTACT' : 'CONTACTEZ-NOUS'}
            </div>
            <h2 className="font-display text-[24px] sm:text-[28px] md:text-[40px] font-black leading-tight max-w-3xl">
              {s.ctaTitle}
            </h2>
            <p className="mt-2 sm:mt-3 text-[13px] sm:text-[15px] md:text-[17px] opacity-80 font-medium">
              {s.ctaDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
            <a
              href={`tel:${t.contact.phones[0].tel}`}
              className="btn btn-primary text-sm sm:text-base !py-3 sm:!py-[14px] justify-center"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              {t.common.hotline} · {t.contact.phones[0].display}
            </a>
            <Link
              to="/contact"
              className="btn btn-outline !text-[color:var(--color-ink-900)] !border-[color:var(--color-ink-900)] hover:!bg-[color:var(--color-ink-900)] hover:!text-white text-sm sm:text-base !py-3 sm:!py-[14px] justify-center"
            >
              <CalendarCheck className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
              {s.ctaBtn}
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
