import I18n from "i18n-js";
import tr from "./tr";
import en from "./en";

I18n.locale = "tr-TR";
export const isRtl = false;
I18n.fallbacks = true;
I18n.locales.no = "en-US";
I18n.translations = {
	"tr-TR": tr,
	"en-US": en,
};
export default I18n;
