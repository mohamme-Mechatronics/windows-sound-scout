// صور حقيقية لأصناف «طلب صنف محدد» — مصدر كل صورة هو صور الكتالوج الرسمية المستخدمة في «تعرف على منتجاتنا».
// لا تُضاف صورة إلا لصنف يطابق موديلاً موثقاً في الكتالوج؛ لا صور للقوائم/الفئات ولا صور تقريبية.
import p3Asset from "@/assets/imported/src/assets/products/p3.webp.asset.json";
const p3 = p3Asset.url;
import p8Asset from "@/assets/imported/src/assets/products/p8.webp.asset.json";
const p8 = p8Asset.url;
import p9Asset from "@/assets/imported/src/assets/products/p9.webp.asset.json";
const p9 = p9Asset.url;
import p11Asset from "@/assets/imported/src/assets/products/p11.webp.asset.json";
const p11 = p11Asset.url;
import p12Asset from "@/assets/imported/src/assets/products/p12.webp.asset.json";
const p12 = p12Asset.url;
import p13Asset from "@/assets/imported/src/assets/products/p13.webp.asset.json";
const p13 = p13Asset.url;
import p15Asset from "@/assets/imported/src/assets/products/p15.webp.asset.json";
const p15 = p15Asset.url;
import p16Asset from "@/assets/imported/src/assets/products/p16.webp.asset.json";
const p16 = p16Asset.url;
import p18Asset from "@/assets/imported/src/assets/products/p18.webp.asset.json";
const p18 = p18Asset.url;
import p19Asset from "@/assets/imported/src/assets/products/p19.webp.asset.json";
const p19 = p19Asset.url;
import p2Asset from "@/assets/imported/src/assets/products/p2.webp.asset.json";
const p2 = p2Asset.url;
import lithium12v314ah from "@/assets/products/lithium-12v-314ah.png.asset.json";
import fidus16Asset from "@/assets/imported/src/assets/products/pylontech-fidus-battery-plus.png.asset.json";
const fidus16 = fidus16Asset.url;

/** صورة كل صنف، بحسب اسمه كما يظهر في القائمة (بدون كود الموديل بين قوسين). */
const ITEM_IMAGES: Record<string, string> = {
  "لوح سنتك N-Type 595 وات": p8,
  "لوح سنتك N-Type 720 وات": p9,

  "إنفرتر 1.6 كيلو سنجل فاز": p15,
  "إنفرتر 6.2 كيلو سنجل فاز": p16,
  "إنفرتر 8 كيلو سنجل فاز": p13,
  "إنفرتر 12 كيلو سنجل فاز": p13,
  "إنفرتر 12 كيلو ثري فاز": p18,
  "إنفرتر 16 كيلو ثري فاز": p11,
  "إنفرتر 20 كيلو ثري فاز": p11,
  "إنفرتر دايا هايبرد 50 كيلو ثري فاز": p12,
  "إنفرتر سوليز هايبرد 50 كيلو ثري فاز": p19,

  "بطارية ليثيوم 1.28 كيلو": p2,
  "بطارية ليثيوم 2.56 كيلو": p3,
  "بطارية ليثيوم 4 كيلو": lithium12v314ah.url,
  "بطارية ليثيوم 16 كيلو": fidus16,
};


const TASHKEEL = /[\u064B-\u0652]/g;

function normalize(text: string): string {
  return text
    .replace(TASHKEEL, "")
    .replace(/\s*\([^)]*\)\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** صورة الصنف إن وُجدت صورة حقيقية معتمدة له، وإلا undefined (لا صور للقوائم/الفئات). */
export function itemImage(title: string): string | undefined {
  return ITEM_IMAGES[normalize(title)];
}

