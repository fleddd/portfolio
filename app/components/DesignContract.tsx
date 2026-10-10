// Direction contract for the visual world. Rendered as an HTML comment so it
// survives the production build and can be audited in the shipped markup.
const CONTRACT = `
THESIS: A developer's portfolio staged like a studio launch site: uppercase grotesk statements broken by a thin display voice, proof shown as large work plates. Refuses the cyan-glow dev-portfolio template.
OWN-WORLD: Charcoal #0d0d0d/#141414 with #272727 hairlines, brushed-silver gradient for the one solid CTA, #A9A9A9 secondary text, single #4F8CFF signal on icon badges and checks. Geologica caps + Cormorant 300 + Martian Mono numerals. Pill outline buttons, 20px plates, NE-arrow glyph.
STORY: Visitor reads what gets built, sees the process, real formats and shipped work, and opens the project brief.
FIRST VIEWPORT: Spotlit charcoal stage; split nav with centered wordmark; two-voice headline centered at display scale; description and silver pill CTA tucked right of the thin line; rotating scroll badge bottom-center.
FORM: Brief-pinned by the owner (Wen Launch reference) - no roll.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
`;

export function DesignContract() {
  return <div hidden dangerouslySetInnerHTML={{ __html: `<!--${CONTRACT}-->` }} />;
}
