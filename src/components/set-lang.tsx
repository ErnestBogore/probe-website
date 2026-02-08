/**
 * Sets the page language for locale pages via two mechanisms:
 * 1. An inline <script> that sets document.documentElement.lang synchronously
 *    during HTML parsing — crawlers that execute JS (e.g. Googlebot) see the
 *    correct <html lang> before hydration.
 * 2. A <meta http-equiv="content-language"> tag that is present in the raw
 *    server-rendered HTML, giving non-JS crawlers and audit tools a language
 *    signal without needing to execute JavaScript.
 */
export function SetLang({ lang }: { lang: string }) {
  return (
    <>
      <meta httpEquiv="content-language" content={lang} />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${lang}";`,
        }}
      />
    </>
  );
}
