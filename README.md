# Atelier Premiere

# FRUZZI / ENDORFINE BY FRUZZI

## PREMIUM LUXURY CHOCOLATE WEBSITE — MAIN WEBSITE PROJECT

Build a complete, production-quality website for **FRUZZI / Endorfine by FRUZZI**, a premium chocolate and confectionery brand based in **Karaganda, Kazakhstan**.

This is a serious commercial client presentation.

The final website must look like it was created by a **top-tier international luxury branding and digital experience agency**.

It must NOT look like:

* a student project
* a generic AI-generated website
* a bakery template
* a Shopify template
* a restaurant website
* a SaaS website
* an over-designed animation demo

The website should feel like a sophisticated luxury chocolate atelier with strong editorial art direction.

IMPORTANT:

This project is the **MAIN WEBSITE**.

Do NOT implement the complex 240-frame scroll animation in this project yet.

Instead, create a perfectly designed hero placeholder with the exact structure, dimensions, typography, colors, content positioning, and transition space required for the separate cinematic hero component to be inserted later.

The main website and the separate hero project MUST use the exact same design system.

---

# 1. BRAND

Brand:

FRUZZI

Sub-brand:

ENDROFINE BY FRUZZI

Publicly associated chocolate designer:

Valeria Paganuzzi

Location:

Karaganda, Kazakhstan

Instagram:

https://www.instagram.com/fruzzikz/

WhatsApp:

https://wa.me/77015285601

Use the provided brand information and uploaded assets as the source of truth.

Do not invent factual information.

Never invent:

* awards
* certifications
* years of operation
* international branches
* number of customers
* reviews
* testimonials
* prices
* delivery countries
* celebrity clients
* partnerships
* achievements

If information is unavailable, create editable content structures instead of fake claims.

---

# 2. CORE WEBSITE OBJECTIVE

The website should achieve four things:

1. Establish FRUZZI as a sophisticated premium chocolate atelier.
2. Create strong emotional desire through photography and storytelling.
3. Clearly communicate what FRUZZI creates and offers.
4. Convert visitors into enquiries.

The user journey should feel like:

DISCOVER
→
FEEL
→
EXPLORE
→
TRUST
→
ENQUIRE

Primary conversion actions:

* Explore Collection
* Enquire
* WhatsApp
* Masterclass enquiry
* Bespoke creation enquiry

---

# 3. DESIGN PHILOSOPHY

The visual language should combine:

LUXURY CHOCOLATE
+
EDITORIAL FASHION
+
CONTEMPORARY ART
+
PREMIUM FOOD PHOTOGRAPHY
+
CINEMATIC STORYTELLING

The website should feel:

* elegant
* sensual
* tactile
* artistic
* warm
* sophisticated
* confident
* restrained
* premium

Use whitespace aggressively.

Do not fill every area with content.

Luxury comes from composition and restraint.

---

# 4. EXACT DESIGN SYSTEM

This design system MUST also be used by the separate hero project.

## Colors

Primary background:

Deep Espresso / almost-black cocoa

Approximate:

#17110F

Secondary:

Dark Cocoa

#2A1C18

Warm Ivory:

#F5EFE6

Cream:

#EDE3D5

Soft Beige:

#D8C8B7

Muted Berry:

#7E3E4D

Caramel:

#A8794F

Optional champagne accent:

#C9B18A

Do not use bright gold.

Do not use neon.

Do not use pure saturated purple, blue, green, or red.

The dominant visual relationship must be:

DARK COCOA
+
WARM IVORY
+
NATURAL CHOCOLATE TONES

---

# 5. TYPOGRAPHY

Use:

## Display / Editorial

Cormorant Garamond

or another refined editorial serif with similar characteristics.

## UI / Body

Inter

or Manrope.

Typography hierarchy:

Large editorial serif:

70–110px desktop

42–64px tablet

38–52px mobile

Body:

16–19px

Navigation:

12–14px

Uppercase micro-labels:

10–12px with letter spacing.

Do not use huge typography everywhere.

Create visual hierarchy.

---

# 6. SPACING SYSTEM

Use generous spacing.

Desktop:

section padding approximately:

120–180px

Tablet:

80–120px

Mobile:

70–100px

Use fluid spacing with clamp() where appropriate.

Do not create cramped sections.

---

# 7. GLOBAL VISUAL LANGUAGE

Every section should feel related.

Use:

* thin separators
* subtle lines
* editorial labels
* asymmetric layouts
* large imagery
* negative space
* serif/sans contrast
* restrained motion
* subtle hover states

Avoid:

* excessive rounded cards
* heavy shadows
* glassmorphism
* gradients everywhere
* floating blobs
* excessive borders
* cartoonish icons

Cards should generally feel editorial rather than SaaS-like.

---

# 8. NAVBAR

Create a premium sticky navigation.

Desktop:

LEFT:

FRUZZI

CENTER:

COLLECTIONS
ATELIER
MASTERCLASSES
JOURNAL
CONTACT

RIGHT:

EN | RU

Instagram icon/link

ENQUIRE

The navbar should initially be transparent over the hero.

After scrolling:

transition into a dark cocoa / ivory navigation background depending on section.

Use:

backdrop blur

subtle border

smooth transition.

Do not make the navbar oversized.

---

# 9. LANGUAGE SWITCHER — CRITICAL

The website must support:

ENGLISH
RUSSIAN

Display at the top of the website:

EN | RU

It must remain accessible on mobile.

Do NOT hide it only inside the mobile menu.

Create a real centralized translation system.

Use:

src/i18n/

with something similar to:

en.ts
ru.ts

All user-facing text must come from the translation system.

This includes:

* navigation
* hero
* buttons
* sections
* forms
* validation
* footer
* CTAs
* success messages

Language selection must persist after refresh using localStorage.

Default:

EN

---

# 10. HERO PLACEHOLDER — VERY IMPORTANT

Do NOT build the final 240-frame animation here.

Instead build the complete visual structure for the final hero.

The hero must be:

100vh minimum.

Desktop:

full viewport.

Mobile:

approximately 90–100vh.

The hero background should be dark and cinematic.

Create a placeholder area that will later be replaced by:

CinematicScrollHero

The final component will occupy the entire visual hero.

Do NOT redesign the hero when replacing the placeholder.

---

# 11. HERO CONTENT

Use exactly this visual structure.

Top:

small label:

KARAGANDA · KAZAKHSTAN

Main:

FRUZZI

Secondary:

ENDORFINE BY FRUZZI

Main English:

Chocolate, Designed to Be Remembered.

Russian:

Шоколад, который невозможно забыть.

Supporting English:

Handcrafted chocolate creations and confectionery experiences from Karaganda, Kazakhstan.

Russian equivalent:

Авторские шоколадные изделия и кондитерские творения из Караганды, Казахстан.

Primary CTA:

EXPLORE THE COLLECTION

Secondary:

DISCOVER THE ATELIER

Bottom:

SCROLL TO DISCOVER

The text must be positioned in a way that will remain compatible with the future 240-frame animation.

---

# 12. HERO TEXT STYLE

Use:

large serif headline

small uppercase labels

minimal CTA

No excessive text.

The hero should remain visually dominant.

Text animation:

opacity
+
translateY
+
subtle blur-to-sharp

No bounce.

No rotation.

No flashy animation.

---

# 13. THE ART OF CHOCOLATE

Immediately after the hero.

Large editorial statement.

Label:

THE ART OF CHOCOLATE

Headline:

Not simply sweets.
A sensory experience.

Russian:

Не просто сладости.
Настоящее чувственное впечатление.

Create:

large serif typography

small supporting paragraph

large whitespace.

---

# 14. COLLECTIONS

Create an editorial collection section.

Title:

THE COLLECTION

Categories should be editable.

Possible categories:

Chocolate Creations
Confectionery
Gift Collections
Signature Pieces
Bespoke Creations

Do not invent exact products if unavailable.

Use actual uploaded imagery whenever available.

Create asymmetric image compositions.

Do NOT use a basic 3-column ecommerce card grid.

---

# 15. COLLECTION INTERACTIONS

On hover:

image subtly scales

arrow moves

title shifts slightly

description appears or changes opacity.

Keep the animation extremely subtle.

Duration:

approximately 400–700ms.

Use premium easing.

---

# 16. CINEMATIC CHOCOLATE TEXTURE SECTION

Create a full-width visual section.

Use close-up imagery of:

* chocolate
* nuts
* decorations
* pralines
* textures
* handmade details

Headline:

EVERY DETAIL MATTERS.

Russian:

КАЖДАЯ ДЕТАЛЬ ИМЕЕТ ЗНАЧЕНИЕ.

Use subtle parallax.

Do not overanimate.

---

# 17. ATELIER

Create an editorial section:

INSIDE THE ATELIER

Introduce:

Valeria Paganuzzi

ENDROFINE BY FRUZZI

CHOCOLATE DESIGNER

Do not invent biography.

Use available brand imagery.

Layout:

Large image

*

editorial text

*

small metadata.

Make it feel like a luxury fashion profile.

---

# 18. CRAFTSMANSHIP

Create a storytelling sequence:

01 INGREDIENTS
02 TEMPERING
03 MOULDING
04 DECORATION
05 FINAL CREATION

Main:

MADE BY HAND.
FINISHED LIKE ART.

Russian:

СОЗДАНО ВРУЧНУЮ.
ЗАВЕРШЕНО КАК ИСКУССТВО.

Use vertical editorial progression.

---

# 19. MASTERCLASSES

Create:

MASTERCLASSES

Headline:

Learn the craft behind the creation.

Russian:

Узнайте секреты создания шоколада.

Do not invent prices, dates, certificates or student numbers.

CTA:

ENQUIRE ABOUT A MASTERCLASS

Create an enquiry form.

Fields:

Name
Email
Phone / WhatsApp
Preferred Date
Message

All translated.

---

# 20. BESPOKE CREATIONS

Create a premium section for custom enquiries.

Headline:

MADE FOR MOMENTS THAT MATTER.

Russian:

СОЗДАНО ДЛЯ ОСОБЕННЫХ МОМЕНТОВ.

Possible editable enquiry categories:

Corporate gifting
Private celebrations
Weddings
Events
Custom chocolate creations

Present them as enquiry options.

Do not claim all services are definitely available.

CTA:

CREATE SOMETHING BESPOKE

---

# 21. INTERACTIVE 3D CHOCOLATE SECTION

Create ONE premium interactive chocolate object.

Use React Three Fiber / Three.js if appropriate.

The object should feel like:

a premium chocolate sculpture / praline.

Material:

realistic chocolate

Lighting:

soft studio lighting

Interaction:

subtle pointer movement

slow rotation

very subtle response to scroll.

Do NOT create a gaming-style 3D scene.

Lazy-load the 3D section.

If WebGL is too heavy:

create a sophisticated 2.5D alternative.

Performance is more important than using Three.js.

---

# 22. GIFTING SECTION

Create:

GIFTING

Headline:

Give More Than Chocolate.

Russian:

Подарите больше, чем шоколад.

Create a premium gift-box interaction.

Potential interaction:

closed gift box
→
user interaction
→
box opens
→
chocolates reveal.

Keep it elegant.

If ecommerce isn't configured:

CTA:

ENQUIRE FOR GIFTING

Do not invent pricing.

---

# 23. JOURNAL

Create editorial magazine-style content.

Title:

JOURNAL

Categories:

Behind the Scenes
Craft
New Creations
Masterclasses
Seasonal Stories

Use 3–4 editorial stories.

No fake claims.

Make titles editable.

---

# 24. INSTAGRAM

Create:

FROM THE ATELIER

Use available FRUZZI imagery.

Create an editorial Instagram gallery.

CTA:

FOLLOW @FRUZZIKZ

Official:

https://www.instagram.com/fruzzikz/

Do not fake an Instagram API.

Use manually managed imagery.

---

# 25. CONTACT

Create a full-width dark section.

Headline:

LET'S CREATE SOMETHING EXTRAORDINARY.

Russian:

СОЗДАДИМ ЧТО-ТО ОСОБЕННОЕ.

Supporting:

For orders, gifting, collaborations, custom creations and masterclasses.

Buttons:

WHATSAPP
SEND AN ENQUIRY
INSTAGRAM

WhatsApp:

https://wa.me/77015285601

Instagram:

https://www.instagram.com/fruzzikz/

---

# 26. FLOATING WHATSAPP

Add a small floating WhatsApp button.

Desktop:

bottom-right.

Mobile:

compact bottom CTA.

Never cover important content.

---

# 27. FOOTER

Minimal.

FRUZZI

ENDROFINE BY FRUZZI

KARAGANDA · KAZAKHSTAN

Collections
Atelier
Masterclasses
Journal
Contact

EN | RU

Instagram
WhatsApp

Privacy Policy
Terms

---

# 28. CUSTOM CURSOR

Desktop only.

Small circular cursor.

Hovering an image:

cursor expands subtly.

Hovering a button:

small interaction.

Disable on touch.

Respect reduced motion.

---

# 29. MOTION DESIGN

Use Framer Motion.

Animations should be:

slow
smooth
editorial
intentional.

Use:

fade
translate
clip-path reveal
image scale
parallax

Avoid:

bounce
spin
elastic
oversized movement.

The hero will contain the biggest animation.

Everything else should be quieter.

---

# 30. RESPONSIVE DESIGN

Explicitly design for:

1440×900
1280×800
1024×768
768×1024
430×932
390×844
375×812

Mobile must be intentionally designed.

No horizontal scrolling.

No broken layouts.

No hover-only functionality.

Touch targets at least approximately 44px.

---

# 31. PERFORMANCE

Use:

lazy loading
responsive images
WebP/AVIF where appropriate
code splitting
lazy-loaded 3D
Framer Motion efficiently
GPU-friendly transforms.

Do not load heavy content before it is needed.

---

# 32. ACCESSIBILITY

Use:

semantic HTML
keyboard navigation
focus states
ARIA labels
image alt text
good contrast
reduced motion.

---

# 33. SEO

Title:

FRUZZI — Endorfine by FRUZZI | Chocolate Atelier

Description:

Discover handcrafted chocolate creations, confectionery experiences, gifting and masterclasses by Endorfine by FRUZZI in Karaganda, Kazakhstan.

Implement:

favicon
Open Graph
canonical URL
proper heading hierarchy
alt text
basic structured data.

---

# 34. CODE ARCHITECTURE

Use:

React
TypeScript
Tailwind CSS
Framer Motion

Recommended structure:

src/
components/
Navbar
LanguageSwitcher
MobileMenu
HeroPlaceholder
SectionHeading
Collections
Atelier
Craftsmanship
Masterclasses
EnquiryForm
BespokeCreations
Chocolate3D
Gifting
Journal
InstagramGallery
Contact
FloatingWhatsApp
Footer
CustomCursor

src/
i18n/
en.ts
ru.ts

Keep everything modular.

---

# 35. FUTURE HERO INTEGRATION — CRITICAL

The separate hero project will later provide:

CinematicScrollHero

Do NOT tightly couple the rest of the website to the placeholder.

Create the hero area so it can later be replaced by a component with approximately this interface:

```text
<CinematicScrollHero
  language={language}
  onExploreCollection={...}
  onDiscoverAtelier={...}
/>
```

Do not require the main website to know how the hero animation works.

The future hero must visually fit into this exact layout.

---

# 36. FINAL QUALITY

Before completing:

Check:

* desktop
* tablet
* mobile
* language switching
* navigation
* forms
* links
* responsive layout
* accessibility
* SEO
* performance
* console errors
* broken images
* horizontal overflow.

The final website must look like:

A premium chocolate atelier.

Not:

an AI template.

Not:

a student portfolio.

Not:

a generic ecommerce site.

The final visual language must be sophisticated enough for a serious client presentation.

IMPORTANT:

Do not build the 240-frame hero animation in this project.

Build everything else and leave a production-ready hero slot for the separate cinematic hero component.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/10758545-6997-4cd0-a6a9-03238f315599).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
