// تحميل مسبق فوري للصور الخفيفة المستخدمة في الشاشات الأولى،
// حتى تظهر بطاقات نوع المشروع وبطاقات الخدمات بصورها بلا أي انتظار.
import { warmVideos } from "@/lib/video-source";
import residentialImageAsset from "@/assets/imported/src/assets/actes-residential.webp.asset.json";
const residentialImage = residentialImageAsset.url;
import commercialImageAsset from "@/assets/imported/src/assets/actes-commercial.webp.asset.json";
const commercialImage = commercialImageAsset.url;
import industrialImageAsset from "@/assets/imported/src/assets/actes-industrial.webp.asset.json";
const industrialImage = industrialImageAsset.url;
import agricultureImageAsset from "@/assets/imported/src/assets/actes-agriculture.webp.asset.json";
const agricultureImage = agricultureImageAsset.url;
import cardQuoteAsset from "@/assets/imported/src/assets/card-quote.webp.asset.json";
const cardQuote = cardQuoteAsset.url;
import cardEnergyAsset from "@/assets/imported/src/assets/card-energy.webp.asset.json";
const cardEnergy = cardEnergyAsset.url;
import cardSupportAsset from "@/assets/imported/src/assets/card-support.webp.asset.json";
const cardSupport = cardSupportAsset.url;
import cardProductsAsset from "@/assets/imported/src/assets/card-products.webp.asset.json";
const cardProducts = cardProductsAsset.url;
import actesLogoAsset from "@/assets/imported/src/assets/actes-logo-full.webp.asset.json";
const actesLogo = actesLogoAsset.url;
import homeHeroAsset from "@/assets/imported/src/assets/actes-home-hero.webp.asset.json";
const homeHero = homeHeroAsset.url;
import partnersStripAsset from "@/assets/imported/src/assets/partners-strip.webp.asset.json";
const partnersStrip = partnersStripAsset.url;
import startBgDesktopAsset from "@/assets/imported/src/assets/start-bg-desktop.webp.asset.json";
const startBgDesktop = startBgDesktopAsset.url;
import startBgMobileAsset from "@/assets/imported/src/assets/start-bg-mobile.webp.asset.json";
const startBgMobile = startBgMobileAsset.url;
import p2Asset from "@/assets/imported/src/assets/products/p2.webp.asset.json";
const p2 = p2Asset.url;
import p3Asset from "@/assets/imported/src/assets/products/p3.webp.asset.json";
const p3 = p3Asset.url;
import p4Asset from "@/assets/imported/src/assets/products/p4.webp.asset.json";
const p4 = p4Asset.url;
import p8Asset from "@/assets/imported/src/assets/products/p8.webp.asset.json";
const p8 = p8Asset.url;
import p9Asset from "@/assets/imported/src/assets/products/p9.webp.asset.json";
const p9 = p9Asset.url;
import p10Asset from "@/assets/imported/src/assets/products/p10.webp.asset.json";
const p10 = p10Asset.url;
import p11Asset from "@/assets/imported/src/assets/products/p11.webp.asset.json";
const p11 = p11Asset.url;
import p12Asset from "@/assets/imported/src/assets/products/p12.webp.asset.json";
const p12 = p12Asset.url;
import p13Asset from "@/assets/imported/src/assets/products/p13.webp.asset.json";
const p13 = p13Asset.url;
import p14Asset from "@/assets/imported/src/assets/products/p14.webp.asset.json";
const p14 = p14Asset.url;
import p15Asset from "@/assets/imported/src/assets/products/p15.webp.asset.json";
const p15 = p15Asset.url;
import p16Asset from "@/assets/imported/src/assets/products/p16.webp.asset.json";
const p16 = p16Asset.url;
import p17Asset from "@/assets/imported/src/assets/products/p17.webp.asset.json";
const p17 = p17Asset.url;
import p18Asset from "@/assets/imported/src/assets/products/p18.webp.asset.json";
const p18 = p18Asset.url;
import p19Asset from "@/assets/imported/src/assets/products/p19.webp.asset.json";
const p19 = p19Asset.url;
import p20Asset from "@/assets/imported/src/assets/products/p20.webp.asset.json";
const p20 = p20Asset.url;
import p21Asset from "@/assets/imported/src/assets/products/p21.webp.asset.json";
const p21 = p21Asset.url;

// الترتيب بالأولوية: صورة الغلاف وشريط الوكلاء أولاً، ثم صور شاشة نوع المشروع وبطاقات الشاشة الرئيسية،
// ثم صور المنتجات (خفيفة WebP) حتى تظهر شاشات المنتجات وطلب صنف محدد فوراً.
const IMAGES = [
  homeHero,
  partnersStrip,
  startBgDesktop,
  startBgMobile,
  residentialImage,
  commercialImage,
  industrialImage,
  agricultureImage,
  cardQuote,
  cardEnergy,
  cardSupport,
  cardProducts,
  actesLogo,
  p2, p3, p4, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21,
];

// صور شاشات الأصناف والبوت (من public/media — كلها WebP خفيفة الآن)
const PUBLIC_IMAGES = [
  "/media/items/suntech-595w.webp",
  "/media/items/suntech-720w.webp",
  "/media/items/lipower-1.6kw-12v.webp",
  "/media/items/lipower-6.2kw-48v.webp",
  "/media/items/deye-8kw-1ph.webp",
  "/media/items/deye-12kw-1ph.webp",
  "/media/items/deye-16kw-1ph.webp",
  "/media/items/deye-12kw-3ph.webp",
  "/media/items/deye-16kw-3ph.webp",
  "/media/items/deye-20kw-3ph.webp",
  "/media/items/deye-50kw-3ph.webp",
  "/media/items/deye-80kw-3ph.webp",
  "/media/items/solis-50kw-3ph.webp",
  "/media/items/solis-125kw-3ph.webp",
  "/media/items/battery-pylontech-12v-100ah.webp",
  "/media/items/battery-pylontech-12v-200ah.webp",
  "/media/items/battery-hithium-12v-314ah.webp",
  "/media/items/battery-pylontech-uf5000-5.12kwh.webp",
  "/media/items/battery-pylontech-fidus-16kwh.webp",
  "/media/items/battery-hithium-legnd-16kwh.webp",
  "/media/items/actes-112kwh-heroee.webp",
  "/media/items/actes-313kwh-pylontech.webp",
  "/media/items/actes-104kwh-powercube-m1.webp",
  "/media/items/actes-61-5kwh-powercube.webp",
];

// فيديوهات المعرض: تُجهَّز في ذاكرة المتصفح الدائمة وقت الفراغ،
// فتنطلق فوراً عند فتح أي منتج (تبقى بجودتها الأصلية 1080p بلا أي ضغط).
const SHOWROOM_VIDEOS = [
  "/videos/deye-sun-3-6k-sg04lp1.mp4",
  "/videos/deye-sun-7-6-12k-sg02lp1.mp4",
  "/videos/deye-sun-14-20k-sg05lp3.mp4",
  "/videos/deye-sun-29-9-50k-sg01hp3.mp4",
  "/videos/deye-sun-60-80k-sg02hp3.mp4",
  "/videos/solis-s6-eh2p-5-8k.mp4",
  "/videos/solis-s6-eh3p-12-20k-h.mp4",
  "/videos/solis-s6-eh3p-29-9-50k-h.mp4",
  "/videos/solis-s6-eh3p-75-125k.mp4",
  "/videos/lipower-2012emh.mp4",
  "/videos/lipower-bz4024smhgw.mp4",
  "/videos/lipower-bz6248smh.mp4",
  "/videos/pylontech-uf5000.mp4",
  "/videos/pylontech-rv12100ch.mp4",
  "/videos/pylontech-rv12200.mp4",
  "/videos/pylontech-rv12314.mp4",
  "/videos/pylontech-fidus-battery-plus.mp4",
  "/videos/pylontech-optimus-a300-hy.mp4",
  "/videos/pylontech-optimus-l260-hy.mp4",
  "/videos/pylontech-powercube-m1c.mp4",
  "/videos/pylontech-powercube-m5a.mp4",
  "/videos/hithium-heroee-maxpower-16.mp4",
  "/videos/suntech-stp595s-c72-nsh.mp4",
  "/videos/suntech-stp720s-d66-nsh.mp4",
];

let done = false;

/** يحمّل الصور في ذاكرة المتصفح مرة واحدة فور بدء التطبيق، ويجهّز فيديوهات المعرض في الخلفية. */
export function preloadAppImages() {
  if (done || typeof window === "undefined") return;
  done = true;
  for (const src of [...IMAGES, ...PUBLIC_IMAGES]) {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    void img.decode?.().catch(() => {});
  }
  // تجهيز الفيديوهات بعد اكتمال تحميل الصفحة حتى لا تنافس الصور على الإنترنت.
  const start = () => warmVideos(SHOWROOM_VIDEOS);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}
