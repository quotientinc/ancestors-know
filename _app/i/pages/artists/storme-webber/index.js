import {
  S as Ee,
  i as Ie,
  s as Se,
  k as E,
  e as a,
  t as k,
  x as C,
  W as We,
  d as s,
  m as I,
  c as n,
  a as m,
  h as x,
  y as q,
  b as t,
  K as Mt,
  g as $,
  L as i,
  z as T,
  r as N,
  p as j,
  C as L,
  w as De,
  T as Me,
  n as H,
  H as Jt,
  I as Ot,
  f as Ve,
} from "../../../chunks/index.js";
import { b as R } from "../../../chunks/paths.js";
import { S as G } from "../../../chunks/SlideIn.js";
import { l as Rt, a as ue, b as ce } from "../../../chunks/lg-share.js";
import { A as Be, l as Ae } from "../../../chunks/ArtistsMenu.js";
import { S as Ce } from "../../../chunks/SurveyBanner.js";
const { document: _e } = Me;
function qe(W) {
  let e;
  return {
    c() {
      e = k("Storme Webber");
    },
    l(o) {
      e = x(o, "Storme Webber");
    },
    m(o, l) {
      $(o, e, l);
    },
    d(o) {
      o && s(e);
    },
  };
}
function Te(W) {
  let e, o, l, c, v, g, d, f, u, h, w, z, p, b, S, D;
  return {
    c() {
      (e =
        k(`is a two-spirit poet and interdisciplinary artist descended from Black
				and Alaskan Sugpiaq (Alutiiq) women. She recently founded Voices Rising:
				LGBTQ of Color Arts & Culture in her hometown of Seattle. Webber\u2019s work
				engages with ideas about history, lineage, gender, race, and sexuality
				using text, performance, audio and altar installations, and archival
				photographs. She incorporates experimental blues and jazz and acapella
				vocals to explore liminal identities, survivance, and decolonization.
				Webber\u2019s recent solo exhibition, `)),
        (o = a("em")),
        (l = k("Casino: A Palimpsest")),
        (c = k(`, appeared
				at the Frye Art Museum in Seattle. Her poetry collections include
				`)),
        (v = a("em")),
        (g = k("Diaspora")),
        (d = k(`
				and `)),
        (f = a("em")),
        (u = k("Blues Divine")),
        (h = k(`, and she has been featured in numerous
				anthologies as well as in the documentaries
				`)),
        (w = a("em")),
        (z = k("Venus Boyz, What\u2019s Right with Gays These Days,")),
        (p = k(`
				and `)),
        (b = a("em")),
        (S = k("Living Two Spirit")),
        (D = k("."));
    },
    l(y) {
      (e = x(
        y,
        `is a two-spirit poet and interdisciplinary artist descended from Black
				and Alaskan Sugpiaq (Alutiiq) women. She recently founded Voices Rising:
				LGBTQ of Color Arts & Culture in her hometown of Seattle. Webber\u2019s work
				engages with ideas about history, lineage, gender, race, and sexuality
				using text, performance, audio and altar installations, and archival
				photographs. She incorporates experimental blues and jazz and acapella
				vocals to explore liminal identities, survivance, and decolonization.
				Webber\u2019s recent solo exhibition, `
      )),
        (o = n(y, "EM", {}));
      var _ = m(o);
      (l = x(_, "Casino: A Palimpsest")),
        _.forEach(s),
        (c = x(
          y,
          `, appeared
				at the Frye Art Museum in Seattle. Her poetry collections include
				`
        )),
        (v = n(y, "EM", {}));
      var B = m(v);
      (g = x(B, "Diaspora")),
        B.forEach(s),
        (d = x(
          y,
          `
				and `
        )),
        (f = n(y, "EM", {}));
      var M = m(f);
      (u = x(M, "Blues Divine")),
        M.forEach(s),
        (h = x(
          y,
          `, and she has been featured in numerous
				anthologies as well as in the documentaries
				`
        )),
        (w = n(y, "EM", {}));
      var V = m(w);
      (z = x(V, "Venus Boyz, What\u2019s Right with Gays These Days,")),
        V.forEach(s),
        (p = x(
          y,
          `
				and `
        )),
        (b = n(y, "EM", {}));
      var K = m(b);
      (S = x(K, "Living Two Spirit")), K.forEach(s), (D = x(y, "."));
    },
    m(y, _) {
      $(y, e, _),
        $(y, o, _),
        i(o, l),
        $(y, c, _),
        $(y, v, _),
        i(v, g),
        $(y, d, _),
        $(y, f, _),
        i(f, u),
        $(y, h, _),
        $(y, w, _),
        i(w, z),
        $(y, p, _),
        $(y, b, _),
        i(b, S),
        $(y, D, _);
    },
    p: H,
    d(y) {
      y && s(e),
        y && s(o),
        y && s(c),
        y && s(v),
        y && s(d),
        y && s(f),
        y && s(h),
        y && s(w),
        y && s(p),
        y && s(b),
        y && s(D);
    },
  };
}
function Ne(W) {
  let e, o, l, c, v;
  return {
    c() {
      (e = a("img")),
        (l = E()),
        (c = a("div")),
        (v = k("Photo by Jim Gupta-Carlson")),
        this.h();
    },
    l(g) {
      (e = n(g, "IMG", { src: !0, width: !0, alt: !0, class: !0 })),
        (l = I(g)),
        (c = n(g, "DIV", { class: !0 }));
      var d = m(c);
      (v = x(d, "Photo by Jim Gupta-Carlson")), d.forEach(s), this.h();
    },
    h() {
      Mt(e.src, (o = R + "/images/storme-webber.webp")) || t(e, "src", o),
        t(e, "width", "600px"),
        t(
          e,
          "alt",
          "Black and white multiple-exposure portrait shows several images of a person in suit coat, hat, and tie holding a cigarette"
        ),
        t(e, "class", "svelte-tuhwmi"),
        t(c, "class", "svelte-tuhwmi");
    },
    m(g, d) {
      $(g, e, d), $(g, l, d), $(g, c, d), i(c, v);
    },
    p: H,
    d(g) {
      g && s(e), g && s(l), g && s(c);
    },
  };
}
function je(W) {
  let e, o, l, c, v, g, d, f, u, h;
  return {
    c() {
      (e = a("div")),
        (o = a("a")),
        (l = a("img")),
        (v = E()),
        (g = a("span")),
        (d = k("+")),
        (f = E()),
        (u = a("div")),
        (h =
          k(`Long descrition of the image: A print of the phrase \u201CAncestors
							Know Who We Are.\u201D The words are black on a white background, and
							all of the letters are capitalized. Each word sits on a separate
							line underneath the one before it.`)),
        this.h();
    },
    l(w) {
      e = n(w, "DIV", { class: !0 });
      var z = m(e);
      o = n(z, "A", {
        "data-tweet-text": !0,
        class: !0,
        href: !0,
        "data-src": !0,
        "data-sub-html": !0,
      });
      var p = m(o);
      (l = n(p, "IMG", { src: !0, width: !0, alt: !0, class: !0 })),
        (v = I(p)),
        (g = n(p, "SPAN", { class: !0 }));
      var b = m(g);
      (d = x(b, "+")),
        b.forEach(s),
        (f = I(p)),
        (u = n(p, "DIV", { class: !0 }));
      var S = m(u);
      (h = x(
        S,
        `Long descrition of the image: A print of the phrase \u201CAncestors
							Know Who We Are.\u201D The words are black on a white background, and
							all of the letters are capitalized. Each word sits on a separate
							line underneath the one before it.`
      )),
        S.forEach(s),
        p.forEach(s),
        z.forEach(s),
        this.h();
    },
    h() {
      Mt(l.src, (c = R + "/images/webber-ancestors-know.webp")) ||
        t(l, "src", c),
        t(l, "width", "600"),
        t(
          l,
          "alt",
          "Framed print reads \u201CAncestors Know Who We Are\u201D in black, all-caps centered text, on white, with each word on a separate line"
        ),
        t(l, "class", "svelte-tuhwmi"),
        t(g, "class", "plus-icon svelte-tuhwmi"),
        t(u, "class", "sr-only svelte-tuhwmi"),
        t(o, "data-tweet-text", "Storme Webber, Ancestors Know Who We Are"),
        t(o, "class", "lgallery svelte-tuhwmi"),
        t(o, "href", R + "/images/webber-ancestors-know-2x.webp"),
        t(o, "data-src", R + "/images/webber-ancestors-know-2x.webp"),
        t(
          o,
          "data-sub-html",
          `<div>Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b. 1959), 
						<em>Ancestors Know Who We Are,</em> 2016. Letterpress print.</div>`
        ),
        t(e, "class", "svelte-tuhwmi");
    },
    m(w, z) {
      $(w, e, z),
        i(e, o),
        i(o, l),
        i(o, v),
        i(o, g),
        i(g, d),
        i(o, f),
        i(o, u),
        i(u, h);
    },
    p: H,
    d(w) {
      w && s(e);
    },
  };
}
function Le(W) {
  let e, o, l, c, v, g, d, f;
  return {
    c() {
      (e = a("p")),
        (o = k(`Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b.
						1959),
						`)),
        (l = a("em")),
        (c = k("Ancestors Know Who We Are")),
        (v = k(", 2016. Letterpress print.")),
        (g = E()),
        (d = a("span")),
        (f = k("Photo by Mel Carter")),
        this.h();
    },
    l(u) {
      e = n(u, "P", { class: !0 });
      var h = m(e);
      (o = x(
        h,
        `Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b.
						1959),
						`
      )),
        (l = n(h, "EM", {}));
      var w = m(l);
      (c = x(w, "Ancestors Know Who We Are")),
        w.forEach(s),
        (v = x(h, ", 2016. Letterpress print.")),
        h.forEach(s),
        (g = I(u)),
        (d = n(u, "SPAN", { class: !0 }));
      var z = m(d);
      (f = x(z, "Photo by Mel Carter")), z.forEach(s), this.h();
    },
    h() {
      t(e, "class", "artwork svelte-tuhwmi"), t(d, "class", "svelte-tuhwmi");
    },
    m(u, h) {
      $(u, e, h),
        i(e, o),
        i(e, l),
        i(l, c),
        i(e, v),
        $(u, g, h),
        $(u, d, h),
        i(d, f);
    },
    p: H,
    d(u) {
      u && s(e), u && s(g), u && s(d);
    },
  };
}
function Re(W) {
  let e, o, l, c, v, g, d, f, u, h, w, z;
  return {
    c() {
      (e = a("p")),
        (o = k("The exhibition title, ")),
        (l = a("em")),
        (c = k("Ancestors Know Who We Are")),
        (v = k(`, draws from
						a letterpress print by poet and interdisciplinary artist Storme
						Webber. It was her response to being told she was not Black enough
						or Native enough.`)),
        (g = E()),
        (d = a("strong")),
        (f = k("\u2014ANYA MONTIEL")),
        (u = E()),
        (h = a("div")),
        (w = a("a")),
        (z = k("From the Curator")),
        this.h();
    },
    l(p) {
      e = n(p, "P", { class: !0 });
      var b = m(e);
      (o = x(b, "The exhibition title, ")), (l = n(b, "EM", {}));
      var S = m(l);
      (c = x(S, "Ancestors Know Who We Are")),
        S.forEach(s),
        (v = x(
          b,
          `, draws from
						a letterpress print by poet and interdisciplinary artist Storme
						Webber. It was her response to being told she was not Black enough
						or Native enough.`
        )),
        b.forEach(s),
        (g = I(p)),
        (d = n(p, "STRONG", { class: !0 }));
      var D = m(d);
      (f = x(D, "\u2014ANYA MONTIEL")),
        D.forEach(s),
        (u = I(p)),
        (h = n(p, "DIV", { class: !0 }));
      var y = m(h);
      w = n(y, "A", { href: !0, class: !0 });
      var _ = m(w);
      (z = x(_, "From the Curator")), _.forEach(s), y.forEach(s), this.h();
    },
    h() {
      t(e, "class", "svelte-tuhwmi"),
        t(d, "class", "svelte-tuhwmi"),
        t(w, "href", R + "/from-the-curator#top"),
        t(w, "class", "svelte-tuhwmi"),
        t(h, "class", "essay-link svelte-tuhwmi");
    },
    m(p, b) {
      $(p, e, b),
        i(e, o),
        i(e, l),
        i(l, c),
        i(e, v),
        $(p, g, b),
        $(p, d, b),
        i(d, f),
        $(p, u, b),
        $(p, h, b),
        i(h, w),
        i(w, z);
    },
    p: H,
    d(p) {
      p && s(e), p && s(g), p && s(d), p && s(u), p && s(h);
    },
  };
}
function Ke(W) {
  let e, o, l, c, v, g, d, f, u, h;
  return {
    c() {
      (e = a("div")),
        (o = a("a")),
        (l = a("img")),
        (v = E()),
        (g = a("span")),
        (d = k("+")),
        (f = E()),
        (u = a("div")),
        (h = k(`Long descrition of the image: The black outlines of a group of
							school children are etched onto a heavily smudged white piece of
							paper. Their silhouettes are simple, with similar facial features
							and sparsely detailed clothing. In the forefront, a child reaches
							out its right hand and arm. The children behind stop just below
							the chest and then break at the shoulders as they move back until
							eventually only the heads can be seen.`)),
        this.h();
    },
    l(w) {
      e = n(w, "DIV", { class: !0 });
      var z = m(e);
      o = n(z, "A", {
        "data-tweet-text": !0,
        class: !0,
        href: !0,
        "data-src": !0,
        "data-sub-html": !0,
      });
      var p = m(o);
      (l = n(p, "IMG", { src: !0, width: !0, alt: !0, class: !0 })),
        (v = I(p)),
        (g = n(p, "SPAN", { class: !0 }));
      var b = m(g);
      (d = x(b, "+")),
        b.forEach(s),
        (f = I(p)),
        (u = n(p, "DIV", { class: !0 }));
      var S = m(u);
      (h = x(
        S,
        `Long descrition of the image: The black outlines of a group of
							school children are etched onto a heavily smudged white piece of
							paper. Their silhouettes are simple, with similar facial features
							and sparsely detailed clothing. In the forefront, a child reaches
							out its right hand and arm. The children behind stop just below
							the chest and then break at the shoulders as they move back until
							eventually only the heads can be seen.`
      )),
        S.forEach(s),
        p.forEach(s),
        z.forEach(s),
        this.h();
    },
    h() {
      Mt(l.src, (c = R + "/images/webber-my-beloveds.webp")) || t(l, "src", c),
        t(l, "width", "600"),
        t(
          l,
          "alt",
          "Framed print of a black etching on white paper, showing a small crowd of people facing forward, some with only heads visible"
        ),
        t(l, "class", "svelte-tuhwmi"),
        t(g, "class", "plus-icon svelte-tuhwmi"),
        t(u, "class", "sr-only svelte-tuhwmi"),
        t(o, "data-tweet-text", "Storme Webber, My Beloveds"),
        t(o, "class", "lgallery svelte-tuhwmi"),
        t(o, "href", R + "/images/webber-my-beloveds-2x.webp"),
        t(o, "data-src", R + "/images/webber-my-beloveds-2x.webp"),
        t(
          o,
          "data-sub-html",
          `<div>Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b. 1959),
						<em>My Beloveds</em>, 2016. Drypoint etching.</div>`
        ),
        t(e, "class", "svelte-tuhwmi");
    },
    m(w, z) {
      $(w, e, z),
        i(e, o),
        i(o, l),
        i(o, v),
        i(o, g),
        i(g, d),
        i(o, f),
        i(o, u),
        i(u, h);
    },
    p: H,
    d(w) {
      w && s(e);
    },
  };
}
function Ge(W) {
  let e, o, l, c, v, g, d, f;
  return {
    c() {
      (e = a("p")),
        (o = k(`Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b.
						1959),
						`)),
        (l = a("em")),
        (c = k("My Beloveds")),
        (v = k(", 2016. Drypoint etching.")),
        (g = E()),
        (d = a("span")),
        (f = k("Photo by Mel Carter")),
        this.h();
    },
    l(u) {
      e = n(u, "P", { class: !0 });
      var h = m(e);
      (o = x(
        h,
        `Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b.
						1959),
						`
      )),
        (l = n(h, "EM", {}));
      var w = m(l);
      (c = x(w, "My Beloveds")),
        w.forEach(s),
        (v = x(h, ", 2016. Drypoint etching.")),
        h.forEach(s),
        (g = I(u)),
        (d = n(u, "SPAN", { class: !0 }));
      var z = m(d);
      (f = x(z, "Photo by Mel Carter")), z.forEach(s), this.h();
    },
    h() {
      t(e, "class", "artwork svelte-tuhwmi"), t(d, "class", "svelte-tuhwmi");
    },
    m(u, h) {
      $(u, e, h),
        i(e, o),
        i(e, l),
        i(l, c),
        i(e, v),
        $(u, g, h),
        $(u, d, h),
        i(d, f);
    },
    p: H,
    d(u) {
      u && s(e), u && s(g), u && s(d);
    },
  };
}
function Pe(W) {
  let e, o, l, c, v, g, d, f, u, h;
  return {
    c() {
      (e = a("div")),
        (o = a("a")),
        (l = a("img")),
        (v = E()),
        (g = a("span")),
        (d = k("+")),
        (f = E()),
        (u = a("div")),
        (h = k(`Long descrition of the image: A print of a poem with black
							lettering on a white background. The poem says, \u201CI told a
							story/until it transformed./I sang a song/until the melody
							lifted/rose from a dirge/&/I could feel/the grace notes.\u201D The
							letters are all lowercase, and each verse sits on a separate line
							underneath the one before it.`)),
        this.h();
    },
    l(w) {
      e = n(w, "DIV", { class: !0 });
      var z = m(e);
      o = n(z, "A", {
        "data-tweet-text": !0,
        class: !0,
        href: !0,
        "data-src": !0,
        "data-sub-html": !0,
      });
      var p = m(o);
      (l = n(p, "IMG", { src: !0, width: !0, alt: !0, class: !0 })),
        (v = I(p)),
        (g = n(p, "SPAN", { class: !0 }));
      var b = m(g);
      (d = x(b, "+")),
        b.forEach(s),
        (f = I(p)),
        (u = n(p, "DIV", { class: !0 }));
      var S = m(u);
      (h = x(
        S,
        `Long descrition of the image: A print of a poem with black
							lettering on a white background. The poem says, \u201CI told a
							story/until it transformed./I sang a song/until the melody
							lifted/rose from a dirge/&/I could feel/the grace notes.\u201D The
							letters are all lowercase, and each verse sits on a separate line
							underneath the one before it.`
      )),
        S.forEach(s),
        p.forEach(s),
        z.forEach(s),
        this.h();
    },
    h() {
      Mt(l.src, (c = R + "/images/webber-grace-notes.webp")) || t(l, "src", c),
        t(l, "width", "600"),
        t(
          l,
          "alt",
          "Framed print of an eight-line poem with black, all-lowercase lettering on a white background"
        ),
        t(l, "class", "svelte-tuhwmi"),
        t(g, "class", "plus-icon svelte-tuhwmi"),
        t(u, "class", "sr-only svelte-tuhwmi"),
        t(o, "data-tweet-text", "Storme Webber, Grace Notes"),
        t(o, "class", "lgallery svelte-tuhwmi"),
        t(o, "href", R + "/images/webber-grace-notes-2x.webp"),
        t(o, "data-src", R + "/images/webber-grace-notes-2x.webp"),
        t(
          o,
          "data-sub-html",
          `<div>Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b. 1959), 
						<em>Grace Notes</em>, 2016. Letterpress print.</div>`
        ),
        t(e, "class", "svelte-tuhwmi");
    },
    m(w, z) {
      $(w, e, z),
        i(e, o),
        i(o, l),
        i(o, v),
        i(o, g),
        i(g, d),
        i(o, f),
        i(o, u),
        i(u, h);
    },
    p: H,
    d(w) {
      w && s(e);
    },
  };
}
function He(W) {
  let e, o, l, c, v, g, d, f, u;
  return {
    c() {
      (e = a("div")),
        (o = a("p")),
        (l = k(`Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b.
						1959),
						`)),
        (c = a("em")),
        (v = k("Grace Notes")),
        (g = k(", 2016. Letterpress print.")),
        (d = E()),
        (f = a("span")),
        (u = k("Photo by Mel Carter")),
        this.h();
    },
    l(h) {
      e = n(h, "DIV", { class: !0 });
      var w = m(e);
      o = n(w, "P", { class: !0 });
      var z = m(o);
      (l = x(
        z,
        `Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b.
						1959),
						`
      )),
        (c = n(z, "EM", {}));
      var p = m(c);
      (v = x(p, "Grace Notes")),
        p.forEach(s),
        (g = x(z, ", 2016. Letterpress print.")),
        z.forEach(s),
        (d = I(w)),
        (f = n(w, "SPAN", { class: !0 }));
      var b = m(f);
      (u = x(b, "Photo by Mel Carter")), b.forEach(s), w.forEach(s), this.h();
    },
    h() {
      t(o, "class", "artwork svelte-tuhwmi"),
        t(f, "class", "svelte-tuhwmi"),
        t(e, "class", "svelte-tuhwmi");
    },
    m(h, w) {
      $(h, e, w),
        i(e, o),
        i(o, l),
        i(o, c),
        i(c, v),
        i(o, g),
        i(e, d),
        i(e, f),
        i(f, u);
    },
    p: H,
    d(h) {
      h && s(e);
    },
  };
}
function Ue(W) {
  let e, o, l, c, v, g, d, f, u, h, w, z, p, b, S, D, y, _, B;
  return {
    c() {
      (e = a("div")),
        (o = a("div")),
        (l = Jt("svg")),
        (c = Jt("style")),
        (v = k(`.st0 {
								fill: none;
							}
						`)),
        (g = Jt("polygon")),
        (d = Jt("path")),
        (f = E()),
        (u = a("audio")),
        (h = a("source")),
        (z = E()),
        (p = a("div")),
        (b = a("em")),
        (S = k("I Cover the Waterfront")),
        (D = k(" read by Storme Webber")),
        (y = E()),
        (_ = a("a")),
        (B = k("Transcript")),
        this.h();
    },
    l(M) {
      e = n(M, "DIV", { class: !0 });
      var V = m(e);
      o = n(V, "DIV", { tabindex: !0, class: !0, "aria-label": !0 });
      var K = m(o);
      l = Ot(K, "svg", {
        version: !0,
        id: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        x: !0,
        y: !0,
        viewBox: !0,
        style: !0,
        "xml:space": !0,
        class: !0,
      });
      var P = m(l);
      c = Ot(P, "style", { type: !0 });
      var zt = m(c);
      (v = x(
        zt,
        `.st0 {
								fill: none;
							}
						`
      )),
        zt.forEach(s),
        (g = Ot(P, "polygon", { class: !0, points: !0 })),
        m(g).forEach(s),
        (d = Ot(P, "path", { class: !0, d: !0 })),
        m(d).forEach(s),
        P.forEach(s),
        K.forEach(s),
        (f = I(V)),
        (u = n(V, "AUDIO", { id: !0, class: !0 }));
      var Z = m(u);
      (h = n(Z, "SOURCE", { src: !0, type: !0 })),
        Z.forEach(s),
        (z = I(V)),
        (p = n(V, "DIV", { class: !0 }));
      var ct = m(p);
      b = n(ct, "EM", {});
      var U = m(b);
      (S = x(U, "I Cover the Waterfront")),
        U.forEach(s),
        (D = x(ct, " read by Storme Webber")),
        ct.forEach(s),
        V.forEach(s),
        (y = I(M)),
        (_ = n(M, "A", {
          "sveltekit:reload": !0,
          href: !0,
          id: !0,
          class: !0,
        }));
      var J = m(_);
      (B = x(J, "Transcript")), J.forEach(s), this.h();
    },
    h() {
      t(c, "type", "text/css"),
        t(g, "class", "st0 svelte-tuhwmi"),
        t(g, "points", "81.3,60 52.3,43.3 52.3,76.7 "),
        t(d, "class", "st0 svelte-tuhwmi"),
        t(
          d,
          "d",
          `M9,78.3c-2.2,0-4-1.8-4-4V45.8c0-2.2,1.8-4,4-4s4,1.8,4,4v28.5C13.1,76.5,11.3,78.3,9,78.3z M25.8,85.4V34.6
							c0-2.2-1.8-4-4-4s-4,1.8-4,4v50.9c0,2.2,1.8,4,4,4S25.8,87.7,25.8,85.4z M38.6,111.4V8.6c0-2.2-1.8-4-4-4s-4,1.8-4,4v102.8
							c0,2.2,1.8,4,4,4S38.6,113.7,38.6,111.4z M102.3,105.1V14.9c0-2.2-1.8-4-4-4s-4,1.8-4,4v90.3c0,2.2,1.8,4,4,4
							S102.3,107.4,102.3,105.1z M115,82.6V37.4c0-2.2-1.8-4-4-4s-4,1.8-4,4v45.3c0,2.2,1.8,4,4,4S115,84.9,115,82.6z M49.6,81.4
							c-1.7-1-2.7-2.7-2.7-4.6V43.3c0-1.9,1-3.7,2.7-4.6c0.5-0.3,1.1-0.5,1.7-0.6v-8.7c0-2.2-1.8-4-4-4s-4,1.8-4,4v61.3c0,2.2,1.8,4,4,4
							s4-1.8,4-4V82C50.7,81.9,50.2,81.7,49.6,81.4z M56,80.8v24.4c0,2.2,1.8,4,4,4s4-1.8,4-4v-29L56,80.8z M64,43.8v-29c0-2.2-1.8-4-4-4
							s-4,1.8-4,4v24.4L64,43.8z M76.8,51.2V33.7c0-2.2-1.8-4-4-4s-4,1.8-4,4v12.8L76.8,51.2z M68.7,73.5v12.8c0,2.2,1.8,4,4,4s4-1.8,4-4
							V68.8L68.7,73.5z M85.5,41.7c-2.2,0-4,1.8-4,4v8.1l2.5,1.5c1.7,1,2.7,2.7,2.7,4.6s-1,3.7-2.7,4.6l-2.5,1.5v8.1c0,2.2,1.8,4,4,4
							s4-1.8,4-4V45.8C89.5,43.5,87.7,41.7,85.5,41.7z`
        ),
        t(l, "version", "1.1"),
        t(l, "id", "Layer_1"),
        t(l, "xmlns", "http://www.w3.org/2000/svg"),
        t(l, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        t(l, "x", "0px"),
        t(l, "y", "0px"),
        t(l, "viewBox", "0 0 120 120"),
        Ve(l, "enable-background", "new 0 0 120 120"),
        t(l, "xml:space", "preserve"),
        t(l, "class", "svelte-tuhwmi"),
        t(o, "tabindex", "0"),
        t(o, "class", "audio-icon svelte-tuhwmi"),
        t(o, "aria-label", "play-audio"),
        Mt(
          h.src,
          (w = R + "/audio/Storme_Webber_I_Cover_the_Waterfront_June_22.mp3")
        ) || t(h, "src", w),
        t(h, "type", "audio/mpeg"),
        t(u, "id", "audio-clip"),
        (u.controls = !0),
        t(u, "class", "svelte-tuhwmi"),
        t(p, "class", "svelte-tuhwmi"),
        t(e, "class", "audio-bg svelte-tuhwmi"),
        t(_, "sveltekit:reload", ""),
        t(
          _,
          "href",
          R + "/transcripts/Ancestors-Know-Who-We-Are-Storme-Webber-poem-r-.pdf"
        ),
        t(_, "id", "audio-transcript"),
        t(_, "class", "svelte-tuhwmi");
    },
    m(M, V) {
      $(M, e, V),
        i(e, o),
        i(o, l),
        i(l, c),
        i(c, v),
        i(l, g),
        i(l, d),
        i(e, f),
        i(e, u),
        i(u, h),
        i(e, z),
        i(e, p),
        i(p, b),
        i(b, S),
        i(p, D),
        $(M, y, V),
        $(M, _, V),
        i(_, B);
    },
    p: H,
    d(M) {
      M && s(e), M && s(y), M && s(_);
    },
  };
}
function Ze(W) {
  let e, o, l, c, v;
  return {
    c() {
      (e = a("div")),
        (o = k(
          "Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b. 1959), "
        )),
        (l = a("em")),
        (c = k("I Cover the Waterfront,")),
        (v = k(" 2021. Audio recording.")),
        this.h();
    },
    l(g) {
      e = n(g, "DIV", { class: !0 });
      var d = m(e);
      (o = x(
        d,
        "Storme Webber (Alaskan Sugpiaq [Alutiiq] and Black descent, b. 1959), "
      )),
        (l = n(d, "EM", {}));
      var f = m(l);
      (c = x(f, "I Cover the Waterfront,")),
        f.forEach(s),
        (v = x(d, " 2021. Audio recording.")),
        d.forEach(s),
        this.h();
    },
    h() {
      t(e, "class", "audio-caption svelte-tuhwmi");
    },
    m(g, d) {
      $(g, e, d), i(e, o), i(e, l), i(l, c), i(e, v);
    },
    p: H,
    d(g) {
      g && s(e);
    },
  };
}
function Ye(W) {
  let e, o, l, c, v, g, d, f, u, h, w, z, p;
  return {
    c() {
      (e = a("div")),
        (o =
          k(`Made famous by singer Billie Holiday, \u201CI Cover the Waterfront\u201D is a 1933
				popular jazz standard about existence, longing, and desire. Webber\u2019s
				version reminisces about The Casino, a waterfront
				night-club-turned-diner that served as an oasis for those wandering the
				streets of Seattle. Webber ruminates on notions of community, sanctuary,
				and survival for Black and Indigenous racial outsiders, artists, and
				gender non-conformists. For her multiracial and two-spirit family, The
				Casino was both a source of sustenance and a sanctuary where they could
				fully assert who they were without fear of arrest or violence. While a
				narrative, the poem does not tell a linear story. It skips through time
				like a stone on the surface of water. Sensuous and visceral, it offers
				vignettes that weave in and out of time and place, their loose ends
				lingering, refusing easy answers, \u201Cbecause there is no answer, really,
				just variations on a theme as always.\u201D`)),
        (l = E()),
        (c = a("div")),
        (v = a("strong")),
        (g = k("\u2014FARI NZINGA")),
        (d = E()),
        (f = a("div")),
        (u = a("span")),
        (h = k("More from this author:\xA0")),
        (w = E()),
        (z = a("a")),
        (p = k("Art, Gender, and Identity")),
        this.h();
    },
    l(b) {
      e = n(b, "DIV", { class: !0 });
      var S = m(e);
      (o = x(
        S,
        `Made famous by singer Billie Holiday, \u201CI Cover the Waterfront\u201D is a 1933
				popular jazz standard about existence, longing, and desire. Webber\u2019s
				version reminisces about The Casino, a waterfront
				night-club-turned-diner that served as an oasis for those wandering the
				streets of Seattle. Webber ruminates on notions of community, sanctuary,
				and survival for Black and Indigenous racial outsiders, artists, and
				gender non-conformists. For her multiracial and two-spirit family, The
				Casino was both a source of sustenance and a sanctuary where they could
				fully assert who they were without fear of arrest or violence. While a
				narrative, the poem does not tell a linear story. It skips through time
				like a stone on the surface of water. Sensuous and visceral, it offers
				vignettes that weave in and out of time and place, their loose ends
				lingering, refusing easy answers, \u201Cbecause there is no answer, really,
				just variations on a theme as always.\u201D`
      )),
        S.forEach(s),
        (l = I(b)),
        (c = n(b, "DIV", { class: !0 }));
      var D = m(c);
      v = n(D, "STRONG", { class: !0 });
      var y = m(v);
      (g = x(y, "\u2014FARI NZINGA")),
        y.forEach(s),
        (d = I(D)),
        (f = n(D, "DIV", { class: !0 }));
      var _ = m(f);
      u = n(_, "SPAN", { class: !0 });
      var B = m(u);
      (h = x(B, "More from this author:\xA0")),
        B.forEach(s),
        (w = I(_)),
        (z = n(_, "A", { href: !0, class: !0 }));
      var M = m(z);
      (p = x(M, "Art, Gender, and Identity")),
        M.forEach(s),
        _.forEach(s),
        D.forEach(s),
        this.h();
    },
    h() {
      t(e, "class", "svelte-tuhwmi"),
        t(v, "class", "svelte-tuhwmi"),
        t(u, "class", "svelte-tuhwmi"),
        t(z, "href", R + "/reflections/art-gender-and-identity#top"),
        t(z, "class", "svelte-tuhwmi"),
        t(f, "class", "essay-link svelte-tuhwmi"),
        t(c, "class", "svelte-tuhwmi");
    },
    m(b, S) {
      $(b, e, S),
        i(e, o),
        $(b, l, S),
        $(b, c, S),
        i(c, v),
        i(v, g),
        i(c, d),
        i(c, f),
        i(f, u),
        i(u, h),
        i(f, w),
        i(f, z),
        i(z, p);
    },
    p: H,
    d(b) {
      b && s(e), b && s(l), b && s(c);
    },
  };
}
function Xe(W) {
  let e, o, l, c;
  return {
    c() {
      (e = a("div")),
        (o = k(`Interview with Storme Webber
				`)),
        (l = a("span")),
        (c = k("[26:00 min]")),
        this.h();
    },
    l(v) {
      e = n(v, "DIV", { class: !0 });
      var g = m(e);
      (o = x(
        g,
        `Interview with Storme Webber
				`
      )),
        (l = n(g, "SPAN", { class: !0 }));
      var d = m(l);
      (c = x(d, "[26:00 min]")), d.forEach(s), g.forEach(s), this.h();
    },
    h() {
      t(l, "class", "svelte-tuhwmi"), t(e, "class", "svelte-tuhwmi");
    },
    m(v, g) {
      $(v, e, g), i(e, o), i(e, l), i(l, c);
    },
    p: H,
    d(v) {
      v && s(e);
    },
  };
}
function Qe(W) {
  let e,
    o,
    l,
    c,
    v,
    g,
    d,
    f,
    u,
    h,
    w,
    z,
    p,
    b,
    S,
    D,
    y,
    _,
    B,
    M,
    V,
    K,
    P,
    zt,
    Z,
    ct,
    U,
    J,
    it,
    te,
    $t,
    At,
    st,
    ee,
    O,
    _t,
    ot,
    ie,
    Et,
    lt,
    Kt,
    X,
    It,
    rt,
    se,
    at,
    nt,
    oe,
    mt,
    Gt,
    Q,
    St,
    gt,
    le,
    F,
    ht,
    Y,
    Wt,
    re,
    ae,
    pt,
    he,
    ne,
    dt,
    me,
    ge,
    vt,
    ut,
    de,
    Pt,
    ft,
    Ht,
    wt,
    Ut;
  return (
    (f = new G({
      props: {
        from: "center",
        $$slots: { default: [qe] },
        $$scope: { ctx: W },
      },
    })),
    (w = new G({
      props: {
        from: "center",
        delay: "150ms",
        $$slots: { default: [Te] },
        $$scope: { ctx: W },
      },
    })),
    (b = new G({
      props: { from: "right", $$slots: { default: [Ne] }, $$scope: { ctx: W } },
    })),
    (B = new G({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [je] },
        $$scope: { ctx: W },
      },
    })),
    (P = new G({
      props: {
        from: "center",
        delay: "500ms",
        $$slots: { default: [Le] },
        $$scope: { ctx: W },
      },
    })),
    (Z = new G({
      props: {
        from: "center",
        delay: "700ms",
        $$slots: { default: [Re] },
        $$scope: { ctx: W },
      },
    })),
    (it = new G({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [Ke] },
        $$scope: { ctx: W },
      },
    })),
    (st = new G({
      props: {
        from: "center",
        delay: "500ms",
        $$slots: { default: [Ge] },
        $$scope: { ctx: W },
      },
    })),
    (ot = new G({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [Pe] },
        $$scope: { ctx: W },
      },
    })),
    (lt = new G({
      props: {
        from: "center",
        delay: "500ms",
        $$slots: { default: [He] },
        $$scope: { ctx: W },
      },
    })),
    (rt = new G({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [Ue] },
        $$scope: { ctx: W },
      },
    })),
    (nt = new G({
      props: {
        from: "center",
        delay: "500ms",
        $$slots: { default: [Ze] },
        $$scope: { ctx: W },
      },
    })),
    (mt = new G({
      props: {
        from: "center",
        delay: "700ms",
        $$slots: { default: [Ye] },
        $$scope: { ctx: W },
      },
    })),
    (gt = new G({
      props: {
        from: "bottom",
        delay: "550ms",
        $$slots: { default: [Xe] },
        $$scope: { ctx: W },
      },
    })),
    (ft = new Be({ props: { active: "/artists/storme-webber" } })),
    (wt = new Ce({})),
    {
      c() {
        (e = E()),
          (o = a("div")),
          (l = a("div")),
          (c = a("h2")),
          (v = k("Artists")),
          (g = E()),
          (d = a("h1")),
          C(f.$$.fragment),
          (u = E()),
          (h = a("div")),
          C(w.$$.fragment),
          (z = E()),
          (p = a("div")),
          C(b.$$.fragment),
          (S = E()),
          (D = a("div")),
          (y = a("div")),
          (_ = a("div")),
          C(B.$$.fragment),
          (M = E()),
          (V = a("div")),
          (K = a("div")),
          C(P.$$.fragment),
          (zt = E()),
          C(Z.$$.fragment),
          (ct = E()),
          (U = a("div")),
          (J = a("div")),
          C(it.$$.fragment),
          (te = E()),
          ($t = a("div")),
          (At = a("div")),
          C(st.$$.fragment),
          (ee = E()),
          (O = a("div")),
          (_t = a("div")),
          C(ot.$$.fragment),
          (ie = E()),
          (Et = a("div")),
          C(lt.$$.fragment),
          (Kt = E()),
          (X = a("div")),
          (It = a("div")),
          C(rt.$$.fragment),
          (se = E()),
          (at = a("div")),
          C(nt.$$.fragment),
          (oe = E()),
          C(mt.$$.fragment),
          (Gt = E()),
          (Q = a("div")),
          (St = a("div")),
          C(gt.$$.fragment),
          (le = E()),
          (F = a("div")),
          (ht = a("div")),
          (Y = a("a")),
          (Wt = a("span")),
          (re = k("play_arrow")),
          (ae = E()),
          (pt = a("img")),
          (ne = E()),
          (dt = a("a")),
          (me = k("Transcript")),
          (ge = E()),
          (vt = a("div")),
          (ut = a("a")),
          (de = k("Audio Description")),
          (Pt = E()),
          C(ft.$$.fragment),
          (Ht = E()),
          C(wt.$$.fragment),
          this.h();
      },
      l(r) {
        We('[data-svelte="svelte-1vtno1g"]', _e.head).forEach(s),
          (e = I(r)),
          (o = n(r, "DIV", { id: !0, class: !0 }));
        var bt = m(o);
        l = n(bt, "DIV", { class: !0 });
        var tt = m(l);
        c = n(tt, "H2", { class: !0 });
        var Vt = m(c);
        (v = x(Vt, "Artists")),
          Vt.forEach(s),
          (g = I(tt)),
          (d = n(tt, "H1", { class: !0 }));
        var Bt = m(d);
        q(f.$$.fragment, Bt),
          Bt.forEach(s),
          (u = I(tt)),
          (h = n(tt, "DIV", { class: !0 }));
        var Ct = m(h);
        q(w.$$.fragment, Ct),
          Ct.forEach(s),
          tt.forEach(s),
          (z = I(bt)),
          (p = n(bt, "DIV", { class: !0 }));
        var qt = m(p);
        q(b.$$.fragment, qt),
          qt.forEach(s),
          bt.forEach(s),
          (S = I(r)),
          (D = n(r, "DIV", { id: !0, class: !0 }));
        var et = m(D);
        y = n(et, "DIV", { id: !0, class: !0 });
        var yt = m(y);
        _ = n(yt, "DIV", { class: !0 });
        var Tt = m(_);
        q(B.$$.fragment, Tt),
          Tt.forEach(s),
          (M = I(yt)),
          (V = n(yt, "DIV", { class: !0 }));
        var Nt = m(V);
        K = n(Nt, "DIV", { class: !0 });
        var kt = m(K);
        q(P.$$.fragment, kt),
          (zt = I(kt)),
          q(Z.$$.fragment, kt),
          kt.forEach(s),
          Nt.forEach(s),
          yt.forEach(s),
          (ct = I(et)),
          (U = n(et, "DIV", { id: !0, class: !0 }));
        var xt = m(U);
        J = n(xt, "DIV", { class: !0 });
        var jt = m(J);
        q(it.$$.fragment, jt),
          jt.forEach(s),
          (te = I(xt)),
          ($t = n(xt, "DIV", { class: !0 }));
        var Lt = m($t);
        At = n(Lt, "DIV", { class: !0 });
        var pe = m(At);
        q(st.$$.fragment, pe),
          pe.forEach(s),
          Lt.forEach(s),
          xt.forEach(s),
          (ee = I(et)),
          (O = n(et, "DIV", { id: !0, class: !0 }));
        var Zt = m(O);
        _t = n(Zt, "DIV", { class: !0 });
        var ve = m(_t);
        q(ot.$$.fragment, ve),
          ve.forEach(s),
          (ie = I(Zt)),
          (Et = n(Zt, "DIV", { class: !0 }));
        var fe = m(Et);
        q(lt.$$.fragment, fe),
          fe.forEach(s),
          Zt.forEach(s),
          et.forEach(s),
          (Kt = I(r)),
          (X = n(r, "DIV", { id: !0, class: !0 }));
        var Yt = m(X);
        It = n(Yt, "DIV", { class: !0 });
        var we = m(It);
        q(rt.$$.fragment, we),
          we.forEach(s),
          (se = I(Yt)),
          (at = n(Yt, "DIV", { class: !0 }));
        var Xt = m(at);
        q(nt.$$.fragment, Xt),
          (oe = I(Xt)),
          q(mt.$$.fragment, Xt),
          Xt.forEach(s),
          Yt.forEach(s),
          (Gt = I(r)),
          (Q = n(r, "DIV", { id: !0, class: !0 }));
        var Qt = m(Q);
        St = n(Qt, "DIV", { class: !0 });
        var be = m(St);
        q(gt.$$.fragment, be),
          be.forEach(s),
          (le = I(Qt)),
          (F = n(Qt, "DIV", { class: !0 }));
        var Dt = m(F);
        ht = n(Dt, "DIV", { id: !0, class: !0 });
        var ye = m(ht);
        Y = n(ye, "A", {
          href: !0,
          class: !0,
          "data-src": !0,
          "data-poster": !0,
        });
        var Ft = m(Y);
        Wt = n(Ft, "SPAN", { class: !0 });
        var ke = m(Wt);
        (re = x(ke, "play_arrow")),
          ke.forEach(s),
          (ae = I(Ft)),
          (pt = n(Ft, "IMG", { src: !0, alt: !0, class: !0 })),
          Ft.forEach(s),
          ye.forEach(s),
          (ne = I(Dt)),
          (dt = n(Dt, "A", { "sveltekit:reload": !0, href: !0, class: !0 }));
        var xe = m(dt);
        (me = x(xe, "Transcript")),
          xe.forEach(s),
          (ge = I(Dt)),
          (vt = n(Dt, "DIV", { id: !0, class: !0 }));
        var ze = m(vt);
        ut = n(ze, "A", { href: !0, class: !0, "data-src": !0 });
        var $e = m(ut);
        (de = x($e, "Audio Description")),
          $e.forEach(s),
          ze.forEach(s),
          Dt.forEach(s),
          Qt.forEach(s),
          (Pt = I(r)),
          q(ft.$$.fragment, r),
          (Ht = I(r)),
          q(wt.$$.fragment, r),
          this.h();
      },
      h() {
        (_e.title = "Artist Storme Webber"),
          t(c, "class", "svelte-tuhwmi"),
          t(d, "class", "svelte-tuhwmi"),
          t(h, "class", "svelte-tuhwmi"),
          t(l, "class", "first svelte-tuhwmi"),
          t(p, "class", "second svelte-tuhwmi"),
          t(o, "id", "title"),
          t(o, "class", "dual svelte-tuhwmi"),
          t(_, "class", "first svelte-tuhwmi"),
          t(K, "class", "svelte-tuhwmi"),
          t(V, "class", "second svelte-tuhwmi"),
          t(y, "id", "print"),
          t(y, "class", "dual artwork svelte-tuhwmi"),
          t(J, "class", "first svelte-tuhwmi"),
          t(At, "class", "svelte-tuhwmi"),
          t($t, "class", "second svelte-tuhwmi"),
          t(U, "id", "sketch"),
          t(U, "class", "dual artwork svelte-tuhwmi"),
          t(_t, "class", "first svelte-tuhwmi"),
          t(Et, "class", "second svelte-tuhwmi"),
          t(O, "id", "notes"),
          t(O, "class", "dual artwork svelte-tuhwmi"),
          t(D, "id", "lightbox"),
          t(D, "class", "svelte-tuhwmi"),
          t(It, "class", "first svelte-tuhwmi"),
          t(at, "class", "second svelte-tuhwmi"),
          t(X, "id", "audio"),
          t(X, "class", "dual svelte-tuhwmi"),
          t(St, "class", "first svelte-tuhwmi"),
          t(Wt, "class", "material-icons svelte-tuhwmi"),
          Mt(pt.src, (he = R + "/images/storme-webber-video.webp")) ||
            t(pt, "src", he),
          t(pt, "alt", "Storme Webber video interview"),
          t(pt, "class", "svelte-tuhwmi"),
          t(Y, "href", "https://youtu.be/DN_uSXEMock"),
          t(Y, "class", "lgallery svelte-tuhwmi"),
          t(Y, "data-src", "https://youtu.be/DN_uSXEMock&rel=0"),
          t(Y, "data-poster", "/images/storme-webber-video.webp"),
          t(ht, "id", "lvideo"),
          t(ht, "class", "card svelte-tuhwmi"),
          t(dt, "sveltekit:reload", ""),
          t(
            dt,
            "href",
            R +
              "/transcripts/Ancestors-Know-Who-We-Are-Storme-Webber-interview.pdf"
          ),
          t(dt, "class", "transcript svelte-tuhwmi"),
          t(ut, "href", "https://youtu.be/pokGoXNa3Hk"),
          t(ut, "class", "lgallery transcript svelte-tuhwmi"),
          t(ut, "data-src", "https://youtu.be/pokGoXNa3Hk&rel=0"),
          t(vt, "id", "lvideo2"),
          t(vt, "class", "svelte-tuhwmi"),
          t(F, "class", "second svelte-tuhwmi"),
          t(Q, "id", "video"),
          t(Q, "class", "dual svelte-tuhwmi");
      },
      m(r, A) {
        $(r, e, A),
          $(r, o, A),
          i(o, l),
          i(l, c),
          i(c, v),
          i(l, g),
          i(l, d),
          T(f, d, null),
          i(l, u),
          i(l, h),
          T(w, h, null),
          i(o, z),
          i(o, p),
          T(b, p, null),
          $(r, S, A),
          $(r, D, A),
          i(D, y),
          i(y, _),
          T(B, _, null),
          i(y, M),
          i(y, V),
          i(V, K),
          T(P, K, null),
          i(K, zt),
          T(Z, K, null),
          i(D, ct),
          i(D, U),
          i(U, J),
          T(it, J, null),
          i(U, te),
          i(U, $t),
          i($t, At),
          T(st, At, null),
          i(D, ee),
          i(D, O),
          i(O, _t),
          T(ot, _t, null),
          i(O, ie),
          i(O, Et),
          T(lt, Et, null),
          $(r, Kt, A),
          $(r, X, A),
          i(X, It),
          T(rt, It, null),
          i(X, se),
          i(X, at),
          T(nt, at, null),
          i(at, oe),
          T(mt, at, null),
          $(r, Gt, A),
          $(r, Q, A),
          i(Q, St),
          T(gt, St, null),
          i(Q, le),
          i(Q, F),
          i(F, ht),
          i(ht, Y),
          i(Y, Wt),
          i(Wt, re),
          i(Y, ae),
          i(Y, pt),
          i(F, ne),
          i(F, dt),
          i(dt, me),
          i(F, ge),
          i(F, vt),
          i(vt, ut),
          i(ut, de),
          $(r, Pt, A),
          T(ft, r, A),
          $(r, Ht, A),
          T(wt, r, A),
          (Ut = !0);
      },
      p(r, [A]) {
        const bt = {};
        A & 1 && (bt.$$scope = { dirty: A, ctx: r }), f.$set(bt);
        const tt = {};
        A & 1 && (tt.$$scope = { dirty: A, ctx: r }), w.$set(tt);
        const Vt = {};
        A & 1 && (Vt.$$scope = { dirty: A, ctx: r }), b.$set(Vt);
        const Bt = {};
        A & 1 && (Bt.$$scope = { dirty: A, ctx: r }), B.$set(Bt);
        const Ct = {};
        A & 1 && (Ct.$$scope = { dirty: A, ctx: r }), P.$set(Ct);
        const qt = {};
        A & 1 && (qt.$$scope = { dirty: A, ctx: r }), Z.$set(qt);
        const et = {};
        A & 1 && (et.$$scope = { dirty: A, ctx: r }), it.$set(et);
        const yt = {};
        A & 1 && (yt.$$scope = { dirty: A, ctx: r }), st.$set(yt);
        const Tt = {};
        A & 1 && (Tt.$$scope = { dirty: A, ctx: r }), ot.$set(Tt);
        const Nt = {};
        A & 1 && (Nt.$$scope = { dirty: A, ctx: r }), lt.$set(Nt);
        const kt = {};
        A & 1 && (kt.$$scope = { dirty: A, ctx: r }), rt.$set(kt);
        const xt = {};
        A & 1 && (xt.$$scope = { dirty: A, ctx: r }), nt.$set(xt);
        const jt = {};
        A & 1 && (jt.$$scope = { dirty: A, ctx: r }), mt.$set(jt);
        const Lt = {};
        A & 1 && (Lt.$$scope = { dirty: A, ctx: r }), gt.$set(Lt);
      },
      i(r) {
        Ut ||
          (N(f.$$.fragment, r),
          N(w.$$.fragment, r),
          N(b.$$.fragment, r),
          N(B.$$.fragment, r),
          N(P.$$.fragment, r),
          N(Z.$$.fragment, r),
          N(it.$$.fragment, r),
          N(st.$$.fragment, r),
          N(ot.$$.fragment, r),
          N(lt.$$.fragment, r),
          N(rt.$$.fragment, r),
          N(nt.$$.fragment, r),
          N(mt.$$.fragment, r),
          N(gt.$$.fragment, r),
          N(ft.$$.fragment, r),
          N(wt.$$.fragment, r),
          (Ut = !0));
      },
      o(r) {
        j(f.$$.fragment, r),
          j(w.$$.fragment, r),
          j(b.$$.fragment, r),
          j(B.$$.fragment, r),
          j(P.$$.fragment, r),
          j(Z.$$.fragment, r),
          j(it.$$.fragment, r),
          j(st.$$.fragment, r),
          j(ot.$$.fragment, r),
          j(lt.$$.fragment, r),
          j(rt.$$.fragment, r),
          j(nt.$$.fragment, r),
          j(mt.$$.fragment, r),
          j(gt.$$.fragment, r),
          j(ft.$$.fragment, r),
          j(wt.$$.fragment, r),
          (Ut = !1);
      },
      d(r) {
        r && s(e),
          r && s(o),
          L(f),
          L(w),
          L(b),
          r && s(S),
          r && s(D),
          L(B),
          L(P),
          L(Z),
          L(it),
          L(st),
          L(ot),
          L(lt),
          r && s(Kt),
          r && s(X),
          L(rt),
          L(nt),
          L(mt),
          r && s(Gt),
          r && s(Q),
          L(gt),
          r && s(Pt),
          L(ft, r),
          r && s(Ht),
          L(wt, r);
      },
    }
  );
}
function Fe(W) {
  return (
    De(() => {
      Rt(document.getElementById("print"), {
        plugins: [ue, ce],
        licenseKey: "0000-0000-000-0000",
        speed: 500,
        selector: ".lgallery",
        download: !1,
        pinterest: !1,
        mobileSettings: { showCloseIcon: !0 },
      }),
        Rt(document.getElementById("notes"), {
          plugins: [ue, ce],
          licenseKey: "0000-0000-000-0000",
          speed: 500,
          selector: ".lgallery",
          download: !1,
          pinterest: !1,
          mobileSettings: { showCloseIcon: !0 },
        }),
        Rt(document.getElementById("sketch"), {
          plugins: [ue, ce],
          licenseKey: "0000-0000-000-0000",
          speed: 500,
          selector: ".lgallery",
          download: !1,
          pinterest: !1,
          mobileSettings: { showCloseIcon: !0 },
        }),
        Rt(document.getElementById("lvideo"), {
          plugins: [Ae],
          licenseKey: "0000-0000-000-0000",
          speed: 500,
          selector: ".lgallery",
          download: !1,
          pinterest: !1,
          mobileSettings: { showCloseIcon: !0 },
        }),
        Rt(document.getElementById("lvideo2"), {
          plugins: [Ae],
          licenseKey: "0000-0000-000-0000",
          speed: 500,
          selector: ".lgallery",
          download: !1,
          pinterest: !1,
          mobileSettings: { showCloseIcon: !0 },
        }),
        (() => {
          const e = document.getElementById("audio-clip"),
            o = document.querySelector(".audio-icon");
          let l = !1;
          o.addEventListener("click", () => {
            l === !1
              ? ((o.style.color = "var(--purple10)"), e.play(), (l = !0))
              : (e.pause(), (l = !1), (o.style.color = "var(--grey100)"));
          }),
            o.addEventListener(
              "keydown",
              (c) => {
                switch (((o.style.color = "var(--grey100)"), c.key)) {
                  case "Enter":
                    l === !1
                      ? ((o.style.color = "var(--purple10)"),
                        e.play(),
                        (l = !0))
                      : (e.pause(),
                        (l = !1),
                        (o.style.color = "var(--grey100)"));
                    break;
                }
              },
              !0
            ),
            (e.onended = () => {
              o.style.color = "var(--grey100)";
            });
        })();
    }),
    []
  );
}
class oi extends Ee {
  constructor(e) {
    super(), Ie(this, e, Fe, Qe, Se, {});
  }
}
export { oi as default };
