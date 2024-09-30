import {
  S as Gr,
  i as Ur,
  s as qr,
  k as m,
  e as r,
  t as d,
  x as _,
  W as Cr,
  d as a,
  m as h,
  c as i,
  a as l,
  h as b,
  y as A,
  b as e,
  K as H,
  g as w,
  L as t,
  z as I,
  r as E,
  p as D,
  C as B,
  w as Yr,
  T as Zr,
  n as me,
} from "../chunks/index.js";
import { b as u } from "../chunks/paths.js";
import { S as M } from "../chunks/SlideIn.js";
import { R as Or } from "../chunks/Reflections.js";
import { l as Xr, a as Fr, b as Qr } from "../chunks/lg-share.js";
import { l as ei } from "../chunks/lg-thumbnail.js";

/* START Fancy box gallery */
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "pages/index.css";

Fancybox.bind('[data-fancybox="gallery"]', {
  //
});

/* END Fancy box gallery */

const { document: Kr } = Zr;
function ti(p) {
  let s;
  return {
    c() {
      s = d("Ancestors");
    },
    l(o) {
      s = b(o, "Ancestors");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function si(p) {
  let s, o;
  return {
    c() {
      (s = r("span")), (o = d("Know")), this.h();
    },
    l(n) {
      s = i(n, "SPAN", { "aria-hidden": !0, class: !0 });
      var c = l(s);
      (o = b(c, "Know")), c.forEach(a), this.h();
    },
    h() {
      e(s, "aria-hidden", "true"), e(s, "class", "svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function ai(p) {
  let s;
  return {
    c() {
      s = d("Who We Are");
    },
    l(o) {
      s = b(o, "Who We Are");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function ri(p) {
  let s, o, n;
  return {
    c() {
      (s = r("div")), (o = r("img")), this.h();
    },
    l(c) {
      s = i(c, "DIV", { class: !0 });
      var v = l(s);
      (o = i(v, "IMG", { src: !0, alt: !0, class: !0 })),
        v.forEach(a),
        this.h();
    },
    h() {
      H(o.src, (n = u + "/images/bolter-hair-stories.webp")) || e(o, "src", n),
        e(
          o,
          "alt",
          "Digital painting sets silhouettes of female heads with varying hairstyles in concentric rings of purple, green, and gold"
        ),
        e(o, "class", "svelte-9jebsy"),
        e(s, "class", "mobile svelte-9jebsy");
    },
    m(c, v) {
      w(c, s, v), t(s, o);
    },
    p: me,
    d(c) {
      c && a(s);
    },
  };
}
function ii(p) {
  let s, o;
  return {
    c() {
      (s = r("div")), (o = d("Rodslen Brown")), this.h();
    },
    l(n) {
      s = i(n, "DIV", { class: !0 });
      var c = l(s);
      (o = b(c, "Rodslen Brown")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "artist svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function oi(p) {
  let s, o;
  return {
    c() {
      (s = r("div")), (o = d("Joelle Joyner")), this.h();
    },
    l(n) {
      s = i(n, "DIV", { class: !0 });
      var c = l(s);
      (o = b(c, "Joelle Joyner")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "artist svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function li(p) {
  let s, o;
  return {
    c() {
      (s = r("div")), (o = d("Moira Pernambuco")), this.h();
    },
    l(n) {
      s = i(n, "DIV", { class: !0 });
      var c = l(s);
      (o = b(c, "Moira Pernambuco")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "artist svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function ni(p) {
  let s, o;
  return {
    c() {
      (s = r("div")), (o = d("Paige Pettibon")), this.h();
    },
    l(n) {
      s = i(n, "DIV", { class: !0 });
      var c = l(s);
      (o = b(c, "Paige Pettibon")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "artist svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function gi(p) {
  let s, o;
  return {
    c() {
      (s = r("div")), (o = d("Monica Rickert-Bolter")), this.h();
    },
    l(n) {
      s = i(n, "DIV", { class: !0 });
      var c = l(s);
      (o = b(c, "Monica Rickert-Bolter")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "artist svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function ci(p) {
  let s, o;
  return {
    c() {
      (s = r("div")), (o = d("Storme Webber")), this.h();
    },
    l(n) {
      s = i(n, "DIV", { class: !0 });
      var c = l(s);
      (o = b(c, "Storme Webber")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "artist svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function di(p) {
  let s, o, n;
  return {
    c() {
      (s = r("div")), (o = r("img")), this.h();
    },
    l(c) {
      s = i(c, "DIV", { class: !0 });
      var v = l(s);
      (o = i(v, "IMG", { src: !0, alt: !0, class: !0 })),
        v.forEach(a),
        this.h();
    },
    h() {
      H(o.src, (n = u + "/images/bolter-hair-stories.webp")) || e(o, "src", n),
        e(
          o,
          "alt",
          "Digital painting sets silhouettes of female heads with varying hairstyles in concentric rings of purple, green, and gold"
        ),
        e(o, "class", "svelte-9jebsy"),
        e(s, "class", "desktop svelte-9jebsy");
    },
    m(c, v) {
      w(c, s, v), t(s, o);
    },
    p: me,
    d(c) {
      c && a(s);
    },
  };
}
function bi(p) {
  let s, o, n, c, v, T, J, V, re;
  return {
    c() {
      (s = r("div")),
        (o = r("div")),
        (n =
          d(`Black-Indigenous women artists address race, gender, multiracial identity,
      and intergenerational knowledge`)),
        (c = m()),
        (v = r("div")),
        (T = r("a")),
        (J = d("From the Curator ")),
        (V = r("span")),
        (re = d("keyboard_arrow_right")),
        this.h();
    },
    l(j) {
      s = i(j, "DIV", { id: !0, class: !0 });
      var $ = l(s);
      o = i($, "DIV", { class: !0 });
      var S = l(o);
      (n = b(
        S,
        `Black-Indigenous women artists address race, gender, multiracial identity,
      and intergenerational knowledge`
      )),
        S.forEach(a),
        (c = h($)),
        (v = i($, "DIV", { class: !0 }));
      var K = l(v);
      T = i(K, "A", { href: !0, class: !0 });
      var W = l(T);
      (J = b(W, "From the Curator ")), (V = i(W, "SPAN", { class: !0 }));
      var C = l(V);
      (re = b(C, "keyboard_arrow_right")),
        C.forEach(a),
        W.forEach(a),
        K.forEach(a),
        $.forEach(a),
        this.h();
    },
    h() {
      e(o, "class", "svelte-9jebsy"),
        e(V, "class", "material-icons svelte-9jebsy"),
        e(T, "href", u + "/from-the-curator#top"),
        e(T, "class", "svelte-9jebsy"),
        e(v, "class", "svelte-9jebsy"),
        e(s, "id", "tagline"),
        e(s, "class", "svelte-9jebsy");
    },
    m(j, $) {
      w(j, s, $),
        t(s, o),
        t(o, n),
        t(s, c),
        t(s, v),
        t(v, T),
        t(T, J),
        t(T, V),
        t(V, re);
    },
    p: me,
    d(j) {
      j && a(s);
    },
  };
}
function mi(p) {
  let s, o, n, c, v, T, J, V, re, j, $, S, K, W, C, he, Y, ge, L;
  return {
    c() {
      (s = r("div")),
        (o = r("h2")),
        (n = d("Artists")),
        (c = m()),
        (v = r("p")),
        (T = r("em")),
        (J = d("Ancestors Know Who We Are")),
        (V = d(` ignites a conversation on the experiences
      of Black-Indigenous women through art. Joelle Joyner's and Paige Pettibon's
      paintings honor ancestors who continue to inspire and guide. Moira Pernambuco's
      photographs are a counter-narrative to negative portrayals of Black boys and
      men. Monica Rickert-Bolter's digital artwork is a reflection on the relationship
      between hair and cultural identity. Storme Webber's prints and spoken-word
      performance pay tribute to her multiracial family and childhood. Basketry by
      Rodslen Brown (1960\u20132020), a Freedman descendant and citizen of the Cherokee
      Nation, embraces her activism and both her heritages.`)),
        (re = m()),
        (j = r("p")),
        ($ = r("em")),
        (S = d("Ancestors Know Who We Are")),
        (K = d(` continues a conversation launched more
      than a decade ago in the groundbreaking book and traveling exhibition
      `)),
        (W = r("em")),
        (C = d("IndiVisible: African-Native American Lives in the Americas.")),
        (he = d(`
      Through artistic expression and reflection,
      `)),
        (Y = r("em")),
        (ge = d("Ancestors Know Who We Are")),
        (L = d(` explores contemporary realities in the interwoven
      histories of Black and Indigenous peoples.`)),
        this.h();
    },
    l(R) {
      s = i(R, "DIV", { id: !0, class: !0 });
      var ie = l(s);
      o = i(ie, "H2", { class: !0 });
      var ue = l(o);
      (n = b(ue, "Artists")),
        ue.forEach(a),
        (c = h(ie)),
        (v = i(ie, "P", { class: !0 }));
      var G = l(v);
      T = i(G, "EM", {});
      var oe = l(T);
      (J = b(oe, "Ancestors Know Who We Are")),
        oe.forEach(a),
        (V = b(
          G,
          ` ignites a conversation on the experiences
      of Black-Indigenous women through art. Joelle Joyner's and Paige Pettibon's
      paintings honor ancestors who continue to inspire and guide. Moira Pernambuco's
      photographs are a counter-narrative to negative portrayals of Black boys and
      men. Monica Rickert-Bolter's digital artwork is a reflection on the relationship
      between hair and cultural identity. Storme Webber's prints and spoken-word
      performance pay tribute to her multiracial family and childhood. Basketry by
      Rodslen Brown (1960\u20132020), a Freedman descendant and citizen of the Cherokee
      Nation, embraces her activism and both her heritages.`
        )),
        G.forEach(a),
        (re = h(ie)),
        (j = i(ie, "P", { class: !0 }));
      var Z = l(j);
      $ = i(Z, "EM", {});
      var O = l($);
      (S = b(O, "Ancestors Know Who We Are")),
        O.forEach(a),
        (K = b(
          Z,
          ` continues a conversation launched more
      than a decade ago in the groundbreaking book and traveling exhibition
      `
        )),
        (W = i(Z, "EM", {}));
      var te = l(W);
      (C = b(
        te,
        "IndiVisible: African-Native American Lives in the Americas."
      )),
        te.forEach(a),
        (he = b(
          Z,
          `
      Through artistic expression and reflection,
      `
        )),
        (Y = i(Z, "EM", {}));
      var F = l(Y);
      (ge = b(F, "Ancestors Know Who We Are")),
        F.forEach(a),
        (L = b(
          Z,
          ` explores contemporary realities in the interwoven
      histories of Black and Indigenous peoples.`
        )),
        Z.forEach(a),
        ie.forEach(a),
        this.h();
    },
    h() {
      e(o, "class", "svelte-9jebsy"),
        e(v, "class", "svelte-9jebsy"),
        e(j, "class", "svelte-9jebsy"),
        e(s, "id", "artists"),
        e(s, "class", "svelte-9jebsy");
    },
    m(R, ie) {
      w(R, s, ie),
        t(s, o),
        t(o, n),
        t(s, c),
        t(s, v),
        t(v, T),
        t(T, J),
        t(v, V),
        t(s, re),
        t(s, j),
        t(j, $),
        t($, S),
        t(j, K),
        t(j, W),
        t(W, C),
        t(j, he),
        t(j, Y),
        t(Y, ge),
        t(j, L);
    },
    p: me,
    d(R) {
      R && a(s);
    },
  };
}
function hi(p) {
  let s;
  return {
    c() {
      s = d("Rodslen Brown");
    },
    l(o) {
      s = b(o, "Rodslen Brown");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function ui(p) {
  let s;
  return {
    c() {
      s = d("Joelle Joyner");
    },
    l(o) {
      s = b(o, "Joelle Joyner");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function fi(p) {
  let s;
  return {
    c() {
      s = d("Moira Pernambuco");
    },
    l(o) {
      s = b(o, "Moira Pernambuco");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function pi(p) {
  let s;
  return {
    c() {
      s = d("Paige Pettibon");
    },
    l(o) {
      s = b(o, "Paige Pettibon");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function vi(p) {
  let s;
  return {
    c() {
      s = d("Monica Rickert-Bolter");
    },
    l(o) {
      s = b(o, "Monica Rickert-Bolter");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function yi(p) {
  let s;
  return {
    c() {
      s = d("Storme Webber");
    },
    l(o) {
      s = b(o, "Storme Webber");
    },
    m(o, n) {
      w(o, s, n);
    },
    d(o) {
      o && a(s);
    },
  };
}
function wi(p) {
  let s,
    o,
    n,
    c,
    v,
    T,
    J,
    V,
    re,
    j,
    $,
    S,
    K,
    W,
    C,
    he,
    Y,
    ge,
    L,
    R,
    ie,
    ue,
    G,
    oe,
    Z,
    O,
    te,
    F,
    De,
    tt,
    fe,
    Q,
    st,
    le,
    ce,
    ne,
    pe,
    Ae,
    Ie,
    Be,
    Ze,
    ee,
    X,
    Te,
    y,
    Ve,
    P,
    Se,
    at;
  return (
    (v = new M({
      props: { from: "left", $$slots: { default: [hi] }, $$scope: { ctx: p } },
    })),
    (K = new M({
      props: { from: "left", $$slots: { default: [ui] }, $$scope: { ctx: p } },
    })),
    (oe = new M({
      props: { from: "left", $$slots: { default: [fi] }, $$scope: { ctx: p } },
    })),
    (Q = new M({
      props: { from: "left", $$slots: { default: [pi] }, $$scope: { ctx: p } },
    })),
    (pe = new M({
      props: { from: "left", $$slots: { default: [vi] }, $$scope: { ctx: p } },
    })),
    (y = new M({
      props: { from: "left", $$slots: { default: [yi] }, $$scope: { ctx: p } },
    })),
    {
      c() {
        (s = r("div")),
          (o = r("div")),
          (n = r("a")),
          (c = r("div")),
          _(v.$$.fragment),
          (T = m()),
          (J = r("img")),
          (re = m()),
          (j = r("div")),
          ($ = r("a")),
          (S = r("div")),
          _(K.$$.fragment),
          (W = m()),
          (C = r("img")),
          (Y = m()),
          (ge = r("div")),
          (L = r("a")),
          (R = r("img")),
          (ue = m()),
          (G = r("div")),
          _(oe.$$.fragment),
          (Z = m()),
          (O = r("div")),
          (te = r("a")),
          (F = r("img")),
          (tt = m()),
          (fe = r("div")),
          _(Q.$$.fragment),
          (st = m()),
          (le = r("div")),
          (ce = r("a")),
          (ne = r("div")),
          _(pe.$$.fragment),
          (Ae = m()),
          (Ie = r("img")),
          (Ze = m()),
          (ee = r("div")),
          (X = r("a")),
          (Te = r("div")),
          _(y.$$.fragment),
          (Ve = m()),
          (P = r("img")),
          this.h();
      },
      l(k) {
        s = i(k, "DIV", { id: !0, class: !0 });
        var x = l(s);
        o = i(x, "DIV", { class: !0 });
        var Le = l(o);
        n = i(Le, "A", { href: !0, class: !0 });
        var de = l(n);
        c = i(de, "DIV", { class: !0 });
        var Ne = l(c);
        A(v.$$.fragment, Ne),
          Ne.forEach(a),
          (T = h(de)),
          (J = i(de, "IMG", { src: !0, alt: !0, class: !0 })),
          de.forEach(a),
          Le.forEach(a),
          (re = h(x)),
          (j = i(x, "DIV", { class: !0 }));
        var He = l(j);
        $ = i(He, "A", { href: !0, class: !0 });
        var be = l($);
        S = i(be, "DIV", { class: !0 });
        var U = l(S);
        A(K.$$.fragment, U),
          U.forEach(a),
          (W = h(be)),
          (C = i(be, "IMG", { src: !0, alt: !0, class: !0 })),
          be.forEach(a),
          He.forEach(a),
          (Y = h(x)),
          (ge = i(x, "DIV", { class: !0 }));
        var We = l(ge);
        L = i(We, "A", { href: !0, class: !0 });
        var rt = l(L);
        (R = i(rt, "IMG", { src: !0, alt: !0, class: !0 })),
          (ue = h(rt)),
          (G = i(rt, "DIV", { class: !0 }));
        var Je = l(G);
        A(oe.$$.fragment, Je),
          Je.forEach(a),
          rt.forEach(a),
          We.forEach(a),
          (Z = h(x)),
          (O = i(x, "DIV", { class: !0 }));
        var pt = l(O);
        te = i(pt, "A", { href: !0, class: !0 });
        var Oe = l(te);
        (F = i(Oe, "IMG", { src: !0, alt: !0, class: !0 })),
          (tt = h(Oe)),
          (fe = i(Oe, "DIV", { class: !0 }));
        var Ke = l(fe);
        A(Q.$$.fragment, Ke),
          Ke.forEach(a),
          Oe.forEach(a),
          pt.forEach(a),
          (st = h(x)),
          (le = i(x, "DIV", { class: !0 }));
        var vt = l(le);
        ce = i(vt, "A", { href: !0, class: !0 });
        var Xe = l(ce);
        ne = i(Xe, "DIV", { class: !0 });
        var Ge = l(ne);
        A(pe.$$.fragment, Ge),
          Ge.forEach(a),
          (Ae = h(Xe)),
          (Ie = i(Xe, "IMG", { src: !0, alt: !0, class: !0 })),
          Xe.forEach(a),
          vt.forEach(a),
          (Ze = h(x)),
          (ee = i(x, "DIV", { class: !0 }));
        var se = l(ee);
        X = i(se, "A", { href: !0, class: !0 });
        var Ee = l(X);
        Te = i(Ee, "DIV", { class: !0 });
        var os = l(Te);
        A(y.$$.fragment, os),
          os.forEach(a),
          (Ve = h(Ee)),
          (P = i(Ee, "IMG", { src: !0, alt: !0, class: !0 })),
          Ee.forEach(a),
          se.forEach(a),
          x.forEach(a),
          this.h();
      },
      h() {
        e(c, "class", "even svelte-9jebsy"),
          H(
            J.src,
            (V = u + "/images/rodslen-brown-grayscale-gradient-450x450.webp")
          ) || e(J, "src", V),
          e(J, "alt", "Rodslen Brown"),
          e(J, "class", "svelte-9jebsy"),
          e(n, "href", u + "/artists/rodslen-brown#top"),
          e(n, "class", "svelte-9jebsy"),
          e(o, "class", "svelte-9jebsy"),
          e(S, "class", "even svelte-9jebsy"),
          H(C.src, (he = u + "/images/joelle-joyner.webp")) || e(C, "src", he),
          e(C, "alt", "Joelle Joyner"),
          e(C, "class", "svelte-9jebsy"),
          e($, "href", u + "/artists/joelle-joyner#top"),
          e($, "class", "svelte-9jebsy"),
          e(j, "class", "svelte-9jebsy"),
          H(R.src, (ie = u + "/images/moira-pernambuco-grayscale.webp")) ||
            e(R, "src", ie),
          e(R, "alt", "Moira Pernambuco"),
          e(R, "class", "svelte-9jebsy"),
          e(G, "class", "odd svelte-9jebsy"),
          e(L, "href", u + "/artists/moira-pernambuco#top"),
          e(L, "class", "svelte-9jebsy"),
          e(ge, "class", "svelte-9jebsy"),
          H(F.src, (De = u + "/images/paige-pettibon.webp")) || e(F, "src", De),
          e(F, "alt", "Paige Pettibon"),
          e(F, "class", "svelte-9jebsy"),
          e(fe, "class", "odd svelte-9jebsy"),
          e(te, "href", u + "/artists/paige-pettibon#top"),
          e(te, "class", "svelte-9jebsy"),
          e(O, "class", "svelte-9jebsy"),
          e(ne, "class", "even svelte-9jebsy"),
          H(
            Ie.src,
            (Be = u + "/images/monica-rickert-bolter-grayscale-gradient.webp")
          ) || e(Ie, "src", Be),
          e(Ie, "alt", "Monica Rickert-Bolter"),
          e(Ie, "class", "svelte-9jebsy"),
          e(ce, "href", u + "/artists/monica-rickert-bolter#top"),
          e(ce, "class", "svelte-9jebsy"),
          e(le, "class", "svelte-9jebsy"),
          e(Te, "class", "even svelte-9jebsy"),
          H(P.src, (Se = u + "/images/storme-webber.webp")) || e(P, "src", Se),
          e(P, "alt", "Storm Webber"),
          e(P, "class", "svelte-9jebsy"),
          e(X, "href", u + "/artists/storme-webber#top"),
          e(X, "class", "svelte-9jebsy"),
          e(ee, "class", "svelte-9jebsy"),
          e(s, "id", "artists-menu"),
          e(s, "class", "svelte-9jebsy");
      },
      m(k, x) {
        w(k, s, x),
          t(s, o),
          t(o, n),
          t(n, c),
          I(v, c, null),
          t(n, T),
          t(n, J),
          t(s, re),
          t(s, j),
          t(j, $),
          t($, S),
          I(K, S, null),
          t($, W),
          t($, C),
          t(s, Y),
          t(s, ge),
          t(ge, L),
          t(L, R),
          t(L, ue),
          t(L, G),
          I(oe, G, null),
          t(s, Z),
          t(s, O),
          t(O, te),
          t(te, F),
          t(te, tt),
          t(te, fe),
          I(Q, fe, null),
          t(s, st),
          t(s, le),
          t(le, ce),
          t(ce, ne),
          I(pe, ne, null),
          t(ce, Ae),
          t(ce, Ie),
          t(s, Ze),
          t(s, ee),
          t(ee, X),
          t(X, Te),
          I(y, Te, null),
          t(X, Ve),
          t(X, P),
          (at = !0);
      },
      p(k, x) {
        const Le = {};
        x & 1 && (Le.$$scope = { dirty: x, ctx: k }), v.$set(Le);
        const de = {};
        x & 1 && (de.$$scope = { dirty: x, ctx: k }), K.$set(de);
        const Ne = {};
        x & 1 && (Ne.$$scope = { dirty: x, ctx: k }), oe.$set(Ne);
        const He = {};
        x & 1 && (He.$$scope = { dirty: x, ctx: k }), Q.$set(He);
        const be = {};
        x & 1 && (be.$$scope = { dirty: x, ctx: k }), pe.$set(be);
        const U = {};
        x & 1 && (U.$$scope = { dirty: x, ctx: k }), y.$set(U);
      },
      i(k) {
        at ||
          (E(v.$$.fragment, k),
          E(K.$$.fragment, k),
          E(oe.$$.fragment, k),
          E(Q.$$.fragment, k),
          E(pe.$$.fragment, k),
          E(y.$$.fragment, k),
          (at = !0));
      },
      o(k) {
        D(v.$$.fragment, k),
          D(K.$$.fragment, k),
          D(oe.$$.fragment, k),
          D(Q.$$.fragment, k),
          D(pe.$$.fragment, k),
          D(y.$$.fragment, k),
          (at = !1);
      },
      d(k) {
        k && a(s), B(v), B(K), B(oe), B(Q), B(pe), B(y);
      },
    }
  );
}
function ji(p) {
  let s, o;
  return {
    c() {
      (s = r("h2")), (o = d("Gallery")), this.h();
    },
    l(n) {
      s = i(n, "H2", { class: !0 });
      var c = l(s);
      (o = b(c, "Gallery")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function ki(p) {
  let s, o;
  return {
    c() {
      (s = r("h2")), (o = d("Reflections")), this.h();
    },
    l(n) {
      s = i(n, "H2", { class: !0 });
      var c = l(s);
      (o = b(c, "Reflections")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function xi(p) {
  let s, o;
  return {
    c() {
      (s = r("h2")), (o = d("Resources")), this.h();
    },
    l(n) {
      s = i(n, "H2", { class: !0 });
      var c = l(s);
      (o = b(c, "Resources")), c.forEach(a), this.h();
    },
    h() {
      e(s, "class", "svelte-9jebsy");
    },
    m(n, c) {
      w(n, s, c), t(s, o);
    },
    p: me,
    d(n) {
      n && a(s);
    },
  };
}
function zi(p) {
  let s,
    o,
    n,
    c,
    v,
    T,
    J,
    V,
    re,
    j,
    $,
    S,
    K,
    W,
    C,
    he,
    Y,
    ge,
    L,
    R,
    ie,
    ue,
    G,
    oe,
    Z,
    O,
    te,
    F,
    De,
    tt,
    fe,
    Q,
    st,
    le,
    ce,
    ne,
    pe,
    Ae,
    Ie,
    Be,
    Ze,
    ee,
    X,
    Te,
    y,
    Ve,
    P,
    Se,
    at,
    k,
    x,
    Le,
    de,
    Ne,
    He,
    be,
    U,
    We,
    rt,
    Je,
    pt,
    Oe,
    Ke,
    vt,
    Xe,
    Ge,
    se,
    Ee,
    os,
    yt,
    Vs,
    Ss,
    wt,
    Ws,
    Rs,
    jt,
    ve,
    it,
    Ga,
    kt,
    Ps,
    Ls,
    xt,
    Ns,
    Hs,
    zt,
    ye,
    ot,
    Ua,
    $t,
    Js,
    Ks,
    _t,
    Gs,
    Us,
    At,
    we,
    lt,
    qa,
    It,
    qs,
    Cs,
    Et,
    Ys,
    Zs,
    Dt,
    je,
    nt,
    Ca,
    Bt,
    Os,
    Xs,
    Mt,
    Fs,
    Qs,
    Tt,
    ke,
    gt,
    Ya,
    Vt,
    ea,
    ta,
    St,
    sa,
    aa,
    Wt,
    xe,
    ct,
    Za,
    Rt,
    ra,
    ia,
    Pt,
    oa,
    la,
    Lt,
    ze,
    dt,
    Oa,
    Nt,
    na,
    ga,
    Ht,
    ca,
    da,
    Jt,
    $e,
    bt,
    Xa,
    Kt,
    ba,
    ma,
    Gt,
    ha,
    ua,
    Ut,
    _e,
    mt,
    Fa,
    qt,
    fa,
    pa,
    Ct,
    va,
    Es,
    Re,
    Fe,
    ya,
    ht,
    Ds,
    Pe,
    Qe,
    wa,
    N,
    Yt,
    ja,
    ka,
    Zt,
    Ue,
    Ot,
    xa,
    za,
    $a,
    Xt,
    _a,
    Aa,
    Ft,
    qe,
    Qt,
    Ia,
    Ea,
    Da,
    es,
    Ba,
    Ma,
    ts,
    Ce,
    ss,
    Ta,
    Va,
    Sa,
    as,
    Wa,
    Ra,
    rs,
    Ye,
    is,
    Pa,
    La,
    Bs;
  return (
    (V = new M({
      props: {
        from: "top",
        "aria-hidden": "true",
        $$slots: { default: [ti] },
        $$scope: { ctx: p },
      },
    })),
    (j = new M({
      props: {
        from: "top",
        delay: "300ms",
        $$slots: { default: [si] },
        $$scope: { ctx: p },
      },
    })),
    (S = new M({
      props: {
        from: "top",
        delay: "1000ms",
        "aria-hidden": "true",
        $$slots: { default: [ai] },
        $$scope: { ctx: p },
      },
    })),
    (W = new M({
      props: {
        from: "center",
        $$slots: { default: [ri] },
        $$scope: { ctx: p },
      },
    })),
    (Y = new M({
      props: {
        from: "left",
        delay: "1200ms",
        $$slots: { default: [ii] },
        $$scope: { ctx: p },
      },
    })),
    (R = new M({
      props: {
        from: "left",
        delay: "1400ms",
        $$slots: { default: [oi] },
        $$scope: { ctx: p },
      },
    })),
    (G = new M({
      props: {
        from: "left",
        delay: "1600ms",
        $$slots: { default: [li] },
        $$scope: { ctx: p },
      },
    })),
    (O = new M({
      props: {
        from: "left",
        delay: "1800ms",
        $$slots: { default: [ni] },
        $$scope: { ctx: p },
      },
    })),
    (De = new M({
      props: {
        from: "left",
        delay: "2000ms",
        $$slots: { default: [gi] },
        $$scope: { ctx: p },
      },
    })),
    (Q = new M({
      props: {
        from: "left",
        delay: "2201ms",
        $$slots: { default: [ci] },
        $$scope: { ctx: p },
      },
    })),
    (le = new M({
      props: {
        from: "center",
        $$slots: { default: [di] },
        $$scope: { ctx: p },
      },
    })),
    (ne = new M({
      props: {
        from: "center",
        $$slots: { default: [bi] },
        $$scope: { ctx: p },
      },
    })),
    (Ae = new M({
      props: {
        from: "center",
        $$slots: { default: [mi] },
        $$scope: { ctx: p },
      },
    })),
    (Be = new M({
      props: {
        from: "center",
        $$slots: { default: [wi] },
        $$scope: { ctx: p },
      },
    })),
    (X = new M({
      props: {
        from: "center",
        $$slots: { default: [ji] },
        $$scope: { ctx: p },
      },
    })),
    (Fe = new M({
      props: {
        from: "center",
        $$slots: { default: [ki] },
        $$scope: { ctx: p },
      },
    })),
    (ht = new Or({})),
    (Qe = new M({
      props: {
        from: "center",
        $$slots: { default: [xi] },
        $$scope: { ctx: p },
      },
    })),
    {
      c() {
        (s = m()),
          (o = r("div")),
          (n = r("div")),
          (c = r("h1")),
          (v = r("div")),
          (T = d("Ancestors Know Who We Are")),
          (J = m()),
          _(V.$$.fragment),
          (re = m()),
          _(j.$$.fragment),
          ($ = m()),
          _(S.$$.fragment),
          (K = m()),
          _(W.$$.fragment),
          (C = m()),
          (he = r("div")),
          _(Y.$$.fragment),
          (ge = m()),
          (L = r("div")),
          _(R.$$.fragment),
          (ie = m()),
          (ue = r("div")),
          _(G.$$.fragment),
          (oe = m()),
          (Z = r("div")),
          _(O.$$.fragment),
          (te = m()),
          (F = r("div")),
          _(De.$$.fragment),
          (tt = m()),
          (fe = r("div")),
          _(Q.$$.fragment),
          (st = m()),
          _(le.$$.fragment),
          (ce = m()),
          _(ne.$$.fragment),
          (pe = m()),
          _(Ae.$$.fragment),
          (Ie = m()),
          _(Be.$$.fragment),
          (Ze = m()),
          (ee = r("div")),
          _(X.$$.fragment),
          (Te = m()),
          (y = r("div")),
          (Ve = r("div")),
          (P = r("a")),
          (Se = r("img")),
          (k = r("b")),
          (x = d("Rodslen Brown")),
          (Le = m()),
          (de = r("div")),
          (Ne =
            d(`Long descrition of the image: A contemporary blue-and-brown basket
          purse woven from dyed and undyed plant material. It has a wide, flat
          bottom, and the sides taper as they go up. The opening is made from a
          braided band, and two woven leather loops attached to the inside
          corners serve as the handles. Thin strands form a scalloped trim
          beneath the band and two series of loops across the purse's front.
          These same strands also create a crisscross stitch along the seams.
          Undyed and blue-dyed plant reeds form the warp and weft of the purse's
          body. Narrow blue reeds create a rectangle across the front. It's
          divided by a weft of wider undyed reeds that alternate with blue ones.
          As the design moves down the front of the purse, the blue rectangle
          transitions into a warp of natural-colored reeds divided by a weft of
          blue reeds. This same pattern is repeated on the sides of the purse.`)),
          (He = m()),
          (be = r("div")),
          (U = r("a")),
          (We = r("img")),
          (Je = r("b")),
          (pt = d("Storme Webber")),
          (Oe = m()),
          (Ke = r("div")),
          (vt =
            d(`Long descrition of the image: A print of the phrase \u201CAncestors Know
          Who We Are.\u201D The words are black on a white background, and all of the
          letters are capitalized. Each word sits on a separate line underneath
          the one before it.`)),
          (Xe = m()),
          (Ge = r("div")),
          (se = r("a")),
          (Ee = r("img")),
          (yt = r("b")),
          (Vs = d("Moira Pernambuco")),
          (Ss = m()),
          (wt = r("div")),
          (Ws =
            d(`Long descrition of the image: A young black man, wearing only a white
          pair of shorts, lays quietly with his eyes closed on a bed dressed in
          a white sheet. His knees are bent at a 90-degree angle and his arms
          are crossed and resting on his forehead in a relaxed posture. The bed
          is set against a bare white-brick wall and a black ladder stands to
          the left partially out of frame.`)),
          (Rs = m()),
          (jt = r("div")),
          (ve = r("a")),
          (it = r("img")),
          (kt = r("b")),
          (Ps = d("Joelle Joyner")),
          (Ls = m()),
          (xt = r("div")),
          (Ns =
            d(`Long descrition of the image: A young Latina woman gazes forward, her
          hand gently resting under her chin. A softly blurred yellow marigold
          sits in her hair just above her right ear. She wears gold hoop
          earrings, a gold necklace with a jewel pendant, and a red sleeveless
          top. The right side of her body is drenched in sunlight. Her long,
          dark hair, red lips, and brightly colored clothing and adornments
          contrast with the blurred blue sky and green trees behind her.`)),
          (Hs = m()),
          (zt = r("div")),
          (ye = r("a")),
          (ot = r("img")),
          ($t = r("b")),
          (Js = d("Paige Pettibon")),
          (Ks = m()),
          (_t = r("div")),
          (Gs = d(`Long descrition of the image: A hyper-realistic painting of a
          black-and-white photo of a Native American mother and an African
          American father sitting with their baby. The parents' gaze is directed
          to the right. The mother, who wears a small pendant necklace, a dark
          dress and shoes, and thick white socks, sits in a chair with the
          yawning baby wrapped in a white blanket on her lap. The father wears a
          white t-shirt, dark trousers and shoes, and a watch on his right
          wrist. He is sitting on the arm of the chair with his left arm around
          his wife and his right resting across his lap. The chair sits on a
          hardwood floor in the corner of a room. The right wall behind the
          chair is bare; on the left wall hangs three small paintings. The top
          painting is of Mary holding baby Jesus and the two bottom paintings
          are of a silhouetted figure kneeling in prayer.`)),
          (Us = m()),
          (At = r("div")),
          (we = r("a")),
          (lt = r("img")),
          (It = r("b")),
          (qs = d("Moira Pernambuco")),
          (Cs = m()),
          (Et = r("div")),
          (Ys =
            d(`Long descrition of the image: A young black man with an athletic build
          stands in front of a draping of blotchy dark-and-light brown fabric.
          He poses shirtless, with his hands behind his back, and gazes
          pensively off camera as if deep in thought. His black-and-brown
          natural curls hang down his neck and against his cheeks, and he sports
          a neatly shorn mustache and goatee.`)),
          (Zs = m()),
          (Dt = r("div")),
          (je = r("a")),
          (nt = r("img")),
          (Bt = r("b")),
          (Os = d("Monica Rickert-Bolter")),
          (Xs = m()),
          (Mt = r("div")),
          (Fs =
            d(`Long descrition of the image: A pair of softly blurred rings, the
          outer bright purple and the inner yellow, surround four colorful
          concentric circles. Inside the yellow ring are pale-green abstract
          turtle shell designs. Each circle is surrounded by a ring of
          contrasting color. Extending from the top and bottom of the outermost
          ring are seven yellow flute-like pipes shaded in orange. The
          concentric circles shrink in size as they move toward the center.
          Inside each circle are different abstract turtle shell designs, and
          inside each ring are a series of red, black, and white triangles.
          Evenly spaced atop the rings are the silhouettes of five female heads
          with hairstyles at different stages of life. The first circle is green
          and yellow surrounded by a purple ring; the silhouettes have straight,
          flowing neck-length hair. The second circle is purple and yellow
          surrounded by a blue ring; the silhouettes have long, curly
          shoulder-length hair. The third circle is purple and yellow surrounded
          by a green ring; the silhouettes have a tight ponytail at the top of
          the head and a smaller ponytail at the base of the neck. The smallest
          circle at the very center is blue surrounded by a bright orange ring;
          the silhouettes have little to no hair.`)),
          (Qs = m()),
          (Tt = r("div")),
          (ke = r("a")),
          (gt = r("img")),
          (Vt = r("b")),
          (ea = d("Storme Webber")),
          (ta = m()),
          (St = r("div")),
          (sa =
            d(`Long descrition of the image: A print of a poem with black lettering
          on a white background. The poem says, \u201CI told a story/until it
          transformed./I sang a song/until the melody lifted/rose from a
          dirge/&/I could feel/the grace notes.\u201D The letters are all lowercase,
          and each verse sits on a separate line underneath the one before it.`)),
          (aa = m()),
          (Wt = r("div")),
          (xe = r("a")),
          (ct = r("img")),
          (Rt = r("b")),
          (ra = d("Monica Rickert-Bolter")),
          (ia = m()),
          (Pt = r("div")),
          (oa =
            d(`Long descrition of the image: Four purple female silhouettes are set
          against a red-and-purple background dappled with sprays of yellow. The
          bottom two figures have short, bouncy hair and the two top figures
          have long, voluminous hair. Each figure is shaded in yellow and
          surrounded by a blurred effect that creates an aura. The women appear
          to be floating or flying. Waves of blue, turquoise, yellow, purple,
          and red radiate from their fingers to support and uplift the figure
          above them.`)),
          (la = m()),
          (Lt = r("div")),
          (ze = r("a")),
          (dt = r("img")),
          (Nt = r("b")),
          (na = d("Joelle Joyner")),
          (ga = m()),
          (Ht = r("div")),
          (ca =
            d(`Long descrition of the image: An elder woman is framed from the chest
          up, a halo of soft yellow surrounding her short, gray hair. She gazes
          to the right and wears a gentle smile. Her lavender top contrasts with
          the vibrant blue, black, pink, and purple background. Both she and the
          spots of white that form the stars of the celestial backdrop are
          surrounded by a blurred effect, as if to indicate movement at great
          speed.`)),
          (da = m()),
          (Jt = r("div")),
          ($e = r("a")),
          (bt = r("img")),
          (Kt = r("b")),
          (ba = d("Storme Webber")),
          (ma = m()),
          (Gt = r("div")),
          (ha =
            d(`Long descrition of the image: The black outlines of a group of
          schoolchildren are etched onto a heavily smudged white piece of paper.
          Their silhouettes are simple, with similar facial features and
          sparsely detailed clothing. In the forefront, a child reaches out its
          right hand and arm. The children behind stop just below the chest and
          then break at the shoulders as they move back until eventually only
          the heads can be seen.`)),
          (ua = m()),
          (Ut = r("div")),
          (_e = r("a")),
          (mt = r("img")),
          (qt = r("b")),
          (fa = d("Paige Pettibon")),
          (pa = m()),
          (Ct = r("div")),
          (va =
            d(`Long descrition of the image: A portrait of a young boy of mixed
          Native American and African American heritage. He is framed from the
          neck up and set against a dark brown backdrop. His brown hair is
          parted down the middle and two braids fall past each shoulder. He's
          wearing a light blue collared shirt with white buttons. His brown eyes
          gaze upward and his lips are upturned in a gentle smile.`)),
          (Es = m()),
          (Re = r("div")),
          _(Fe.$$.fragment),
          (ya = m()),
          _(ht.$$.fragment),
          (Ds = m()),
          (Pe = r("div")),
          _(Qe.$$.fragment),
          (wa = m()),
          (N = r("div")),
          (Yt = r("h3")),
          (ja = d("BOOK")),
          (ka = m()),
          (Zt = r("div")),
          (Ue = r("a")),
          (Ot = r("span")),
          (xa = d("warning external link")),
          (za = d(`
        IndiVisible: African-Native American Lives in the Americas`)),
          ($a = m()),
          (Xt = r("h3")),
          (_a = d("ARTICLE")),
          (Aa = m()),
          (Ft = r("div")),
          (qe = r("a")),
          (Qt = r("span")),
          (Ia = d("warning external link")),
          (Ea = d(`Together We Lift the
        Sky: y\u0259haw\u0313 and Black-Indigenous Artists Advance Social Justice`)),
          (Da = m()),
          (es = r("h3")),
          (Ba = d("VIDEO")),
          (Ma = m()),
          (ts = r("div")),
          (Ce = r("a")),
          (ss = r("span")),
          (Ta = d("warning external link")),
          (Va = d(`Black-Indigenous
        Youth Advancing Social Justice`)),
          (Sa = m()),
          (as = r("h3")),
          (Wa = d("AUDIO STORY")),
          (Ra = m()),
          (rs = r("div")),
          (Ye = r("a")),
          (is = r("span")),
          (Pa = d("warning external link")),
          (La = d(`Some Cherokee Freedmen
        are Citizens While Others are Left Out`)),
          this.h();
      },
      l(g) {
        Cr('[data-svelte="svelte-1bedtg4"]', Kr.head).forEach(a),
          (s = h(g)),
          (o = i(g, "DIV", { id: !0, class: !0 }));
        var ut = l(o);
        n = i(ut, "DIV", { class: !0 });
        var q = l(n);
        c = i(q, "H1", { class: !0 });
        var Me = l(c);
        v = i(Me, "DIV", { class: !0 });
        var ls = l(v);
        (T = b(ls, "Ancestors Know Who We Are")),
          ls.forEach(a),
          (J = h(Me)),
          A(V.$$.fragment, Me),
          (re = h(Me)),
          A(j.$$.fragment, Me),
          ($ = h(Me)),
          A(S.$$.fragment, Me),
          Me.forEach(a),
          (K = h(q)),
          A(W.$$.fragment, q),
          (C = h(q)),
          (he = i(q, "DIV", { class: !0 }));
        var ns = l(he);
        A(Y.$$.fragment, ns),
          ns.forEach(a),
          (ge = h(q)),
          (L = i(q, "DIV", { class: !0 }));
        var gs = l(L);
        A(R.$$.fragment, gs),
          gs.forEach(a),
          (ie = h(q)),
          (ue = i(q, "DIV", { class: !0 }));
        var cs = l(ue);
        A(G.$$.fragment, cs),
          cs.forEach(a),
          (oe = h(q)),
          (Z = i(q, "DIV", { class: !0 }));
        var ds = l(Z);
        A(O.$$.fragment, ds),
          ds.forEach(a),
          (te = h(q)),
          (F = i(q, "DIV", { class: !0 }));
        var bs = l(F);
        A(De.$$.fragment, bs),
          bs.forEach(a),
          (tt = h(q)),
          (fe = i(q, "DIV", { class: !0 }));
        var ms = l(fe);
        A(Q.$$.fragment, ms),
          ms.forEach(a),
          q.forEach(a),
          (st = h(ut)),
          A(le.$$.fragment, ut),
          ut.forEach(a),
          (ce = h(g)),
          A(ne.$$.fragment, g),
          (pe = h(g)),
          A(Ae.$$.fragment, g),
          (Ie = h(g)),
          A(Be.$$.fragment, g),
          (Ze = h(g)),
          (ee = i(g, "DIV", { id: !0, class: !0 }));
        var ft = l(ee);
        A(X.$$.fragment, ft), (Te = h(ft)), (y = i(ft, "DIV", { class: !0 }));
        var z = l(y);
        Ve = i(z, "DIV", { class: !0 });
        var hs = l(Ve);
        P = i(hs, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var et = l(P);
        (Se = i(et, "IMG", { src: !0, alt: !0, class: !0 })),
          (k = i(et, "B", { class: !0 }));
        var us = l(k);
        (x = b(us, "Rodslen Brown")),
          us.forEach(a),
          (Le = h(et)),
          (de = i(et, "DIV", { class: !0 }));
        var fs = l(de);
        (Ne = b(
          fs,
          `Long descrition of the image: A contemporary blue-and-brown basket
          purse woven from dyed and undyed plant material. It has a wide, flat
          bottom, and the sides taper as they go up. The opening is made from a
          braided band, and two woven leather loops attached to the inside
          corners serve as the handles. Thin strands form a scalloped trim
          beneath the band and two series of loops across the purse's front.
          These same strands also create a crisscross stitch along the seams.
          Undyed and blue-dyed plant reeds form the warp and weft of the purse's
          body. Narrow blue reeds create a rectangle across the front. It's
          divided by a weft of wider undyed reeds that alternate with blue ones.
          As the design moves down the front of the purse, the blue rectangle
          transitions into a warp of natural-colored reeds divided by a weft of
          blue reeds. This same pattern is repeated on the sides of the purse.`
        )),
          fs.forEach(a),
          et.forEach(a),
          hs.forEach(a),
          (He = h(z)),
          (be = i(z, "DIV", { class: !0 }));
        var ps = l(be);
        U = i(ps, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var vs = l(U);
        (We = i(vs, "IMG", { src: !0, alt: !0, class: !0 })),
          (Je = i(vs, "B", { class: !0 }));
        var Qa = l(Je);
        (pt = b(Qa, "Storme Webber")),
          Qa.forEach(a),
          (Oe = h(vs)),
          (Ke = i(vs, "DIV", { class: !0 }));
        var er = l(Ke);
        (vt = b(
          er,
          `Long descrition of the image: A print of the phrase \u201CAncestors Know
          Who We Are.\u201D The words are black on a white background, and all of the
          letters are capitalized. Each word sits on a separate line underneath
          the one before it.`
        )),
          er.forEach(a),
          vs.forEach(a),
          ps.forEach(a),
          (Xe = h(z)),
          (Ge = i(z, "DIV", { class: !0 }));
        var tr = l(Ge);
        se = i(tr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var ys = l(se);
        (Ee = i(ys, "IMG", { src: !0, alt: !0, class: !0 })),
          (yt = i(ys, "B", { class: !0 }));
        var sr = l(yt);
        (Vs = b(sr, "Moira Pernambuco")),
          sr.forEach(a),
          (Ss = h(ys)),
          (wt = i(ys, "DIV", { class: !0 }));
        var ar = l(wt);
        (Ws = b(
          ar,
          `Long descrition of the image: A young black man, wearing only a white
          pair of shorts, lays quietly with his eyes closed on a bed dressed in
          a white sheet. His knees are bent at a 90-degree angle and his arms
          are crossed and resting on his forehead in a relaxed posture. The bed
          is set against a bare white-brick wall and a black ladder stands to
          the left partially out of frame.`
        )),
          ar.forEach(a),
          ys.forEach(a),
          tr.forEach(a),
          (Rs = h(z)),
          (jt = i(z, "DIV", { class: !0 }));
        var rr = l(jt);
        ve = i(rr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var ws = l(ve);
        (it = i(ws, "IMG", { src: !0, alt: !0, class: !0 })),
          (kt = i(ws, "B", { class: !0 }));
        var ir = l(kt);
        (Ps = b(ir, "Joelle Joyner")),
          ir.forEach(a),
          (Ls = h(ws)),
          (xt = i(ws, "DIV", { class: !0 }));
        var or = l(xt);
        (Ns = b(
          or,
          `Long descrition of the image: A young Latina woman gazes forward, her
          hand gently resting under her chin. A softly blurred yellow marigold
          sits in her hair just above her right ear. She wears gold hoop
          earrings, a gold necklace with a jewel pendant, and a red sleeveless
          top. The right side of her body is drenched in sunlight. Her long,
          dark hair, red lips, and brightly colored clothing and adornments
          contrast with the blurred blue sky and green trees behind her.`
        )),
          or.forEach(a),
          ws.forEach(a),
          rr.forEach(a),
          (Hs = h(z)),
          (zt = i(z, "DIV", { class: !0 }));
        var lr = l(zt);
        ye = i(lr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var js = l(ye);
        (ot = i(js, "IMG", { src: !0, alt: !0, class: !0 })),
          ($t = i(js, "B", { class: !0 }));
        var nr = l($t);
        (Js = b(nr, "Paige Pettibon")),
          nr.forEach(a),
          (Ks = h(js)),
          (_t = i(js, "DIV", { class: !0 }));
        var gr = l(_t);
        (Gs = b(
          gr,
          `Long descrition of the image: A hyper-realistic painting of a
          black-and-white photo of a Native American mother and an African
          American father sitting with their baby. The parents' gaze is directed
          to the right. The mother, who wears a small pendant necklace, a dark
          dress and shoes, and thick white socks, sits in a chair with the
          yawning baby wrapped in a white blanket on her lap. The father wears a
          white t-shirt, dark trousers and shoes, and a watch on his right
          wrist. He is sitting on the arm of the chair with his left arm around
          his wife and his right resting across his lap. The chair sits on a
          hardwood floor in the corner of a room. The right wall behind the
          chair is bare; on the left wall hangs three small paintings. The top
          painting is of Mary holding baby Jesus and the two bottom paintings
          are of a silhouetted figure kneeling in prayer.`
        )),
          gr.forEach(a),
          js.forEach(a),
          lr.forEach(a),
          (Us = h(z)),
          (At = i(z, "DIV", { class: !0 }));
        var cr = l(At);
        we = i(cr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var ks = l(we);
        (lt = i(ks, "IMG", { src: !0, alt: !0, class: !0 })),
          (It = i(ks, "B", { class: !0 }));
        var dr = l(It);
        (qs = b(dr, "Moira Pernambuco")),
          dr.forEach(a),
          (Cs = h(ks)),
          (Et = i(ks, "DIV", { class: !0 }));
        var br = l(Et);
        (Ys = b(
          br,
          `Long descrition of the image: A young black man with an athletic build
          stands in front of a draping of blotchy dark-and-light brown fabric.
          He poses shirtless, with his hands behind his back, and gazes
          pensively off camera as if deep in thought. His black-and-brown
          natural curls hang down his neck and against his cheeks, and he sports
          a neatly shorn mustache and goatee.`
        )),
          br.forEach(a),
          ks.forEach(a),
          cr.forEach(a),
          (Zs = h(z)),
          (Dt = i(z, "DIV", { class: !0 }));
        var mr = l(Dt);
        je = i(mr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var xs = l(je);
        (nt = i(xs, "IMG", { src: !0, alt: !0, class: !0 })),
          (Bt = i(xs, "B", { class: !0 }));
        var hr = l(Bt);
        (Os = b(hr, "Monica Rickert-Bolter")),
          hr.forEach(a),
          (Xs = h(xs)),
          (Mt = i(xs, "DIV", { class: !0 }));
        var ur = l(Mt);
        (Fs = b(
          ur,
          `Long descrition of the image: A pair of softly blurred rings, the
          outer bright purple and the inner yellow, surround four colorful
          concentric circles. Inside the yellow ring are pale-green abstract
          turtle shell designs. Each circle is surrounded by a ring of
          contrasting color. Extending from the top and bottom of the outermost
          ring are seven yellow flute-like pipes shaded in orange. The
          concentric circles shrink in size as they move toward the center.
          Inside each circle are different abstract turtle shell designs, and
          inside each ring are a series of red, black, and white triangles.
          Evenly spaced atop the rings are the silhouettes of five female heads
          with hairstyles at different stages of life. The first circle is green
          and yellow surrounded by a purple ring; the silhouettes have straight,
          flowing neck-length hair. The second circle is purple and yellow
          surrounded by a blue ring; the silhouettes have long, curly
          shoulder-length hair. The third circle is purple and yellow surrounded
          by a green ring; the silhouettes have a tight ponytail at the top of
          the head and a smaller ponytail at the base of the neck. The smallest
          circle at the very center is blue surrounded by a bright orange ring;
          the silhouettes have little to no hair.`
        )),
          ur.forEach(a),
          xs.forEach(a),
          mr.forEach(a),
          (Qs = h(z)),
          (Tt = i(z, "DIV", { class: !0 }));
        var fr = l(Tt);
        ke = i(fr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var zs = l(ke);
        (gt = i(zs, "IMG", { src: !0, alt: !0, class: !0 })),
          (Vt = i(zs, "B", { class: !0 }));
        var pr = l(Vt);
        (ea = b(pr, "Storme Webber")),
          pr.forEach(a),
          (ta = h(zs)),
          (St = i(zs, "DIV", { class: !0 }));
        var vr = l(St);
        (sa = b(
          vr,
          `Long descrition of the image: A print of a poem with black lettering
          on a white background. The poem says, \u201CI told a story/until it
          transformed./I sang a song/until the melody lifted/rose from a
          dirge/&/I could feel/the grace notes.\u201D The letters are all lowercase,
          and each verse sits on a separate line underneath the one before it.`
        )),
          vr.forEach(a),
          zs.forEach(a),
          fr.forEach(a),
          (aa = h(z)),
          (Wt = i(z, "DIV", { class: !0 }));
        var yr = l(Wt);
        xe = i(yr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var $s = l(xe);
        (ct = i($s, "IMG", { src: !0, alt: !0, class: !0 })),
          (Rt = i($s, "B", { class: !0 }));
        var wr = l(Rt);
        (ra = b(wr, "Monica Rickert-Bolter")),
          wr.forEach(a),
          (ia = h($s)),
          (Pt = i($s, "DIV", { class: !0 }));
        var jr = l(Pt);
        (oa = b(
          jr,
          `Long descrition of the image: Four purple female silhouettes are set
          against a red-and-purple background dappled with sprays of yellow. The
          bottom two figures have short, bouncy hair and the two top figures
          have long, voluminous hair. Each figure is shaded in yellow and
          surrounded by a blurred effect that creates an aura. The women appear
          to be floating or flying. Waves of blue, turquoise, yellow, purple,
          and red radiate from their fingers to support and uplift the figure
          above them.`
        )),
          jr.forEach(a),
          $s.forEach(a),
          yr.forEach(a),
          (la = h(z)),
          (Lt = i(z, "DIV", { class: !0 }));
        var kr = l(Lt);
        ze = i(kr, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var _s = l(ze);
        (dt = i(_s, "IMG", { src: !0, alt: !0, class: !0 })),
          (Nt = i(_s, "B", { class: !0 }));
        var xr = l(Nt);
        (na = b(xr, "Joelle Joyner")),
          xr.forEach(a),
          (ga = h(_s)),
          (Ht = i(_s, "DIV", { class: !0 }));
        var zr = l(Ht);
        (ca = b(
          zr,
          `Long descrition of the image: An elder woman is framed from the chest
          up, a halo of soft yellow surrounding her short, gray hair. She gazes
          to the right and wears a gentle smile. Her lavender top contrasts with
          the vibrant blue, black, pink, and purple background. Both she and the
          spots of white that form the stars of the celestial backdrop are
          surrounded by a blurred effect, as if to indicate movement at great
          speed.`
        )),
          zr.forEach(a),
          _s.forEach(a),
          kr.forEach(a),
          (da = h(z)),
          (Jt = i(z, "DIV", { class: !0 }));
        var $r = l(Jt);
        $e = i($r, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var As = l($e);
        (bt = i(As, "IMG", { src: !0, alt: !0, class: !0 })),
          (Kt = i(As, "B", { class: !0 }));
        var _r = l(Kt);
        (ba = b(_r, "Storme Webber")),
          _r.forEach(a),
          (ma = h(As)),
          (Gt = i(As, "DIV", { class: !0 }));
        var Ar = l(Gt);
        (ha = b(
          Ar,
          `Long descrition of the image: The black outlines of a group of
          schoolchildren are etched onto a heavily smudged white piece of paper.
          Their silhouettes are simple, with similar facial features and
          sparsely detailed clothing. In the forefront, a child reaches out its
          right hand and arm. The children behind stop just below the chest and
          then break at the shoulders as they move back until eventually only
          the heads can be seen.`
        )),
          Ar.forEach(a),
          As.forEach(a),
          $r.forEach(a),
          (ua = h(z)),
          (Ut = i(z, "DIV", { class: !0 }));
        var Ir = l(Ut);
        _e = i(Ir, "A", {
          "data-tweet-text": !0,
          class: !0,
          href: !0,
          "data-src": !0,
          "data-sub-html": !0,
        });
        var Is = l(_e);
        (mt = i(Is, "IMG", { src: !0, alt: !0, class: !0 })),
          (qt = i(Is, "B", { class: !0 }));
        var Er = l(qt);
        (fa = b(Er, "Paige Pettibon")),
          Er.forEach(a),
          (pa = h(Is)),
          (Ct = i(Is, "DIV", { class: !0 }));
        var Dr = l(Ct);
        (va = b(
          Dr,
          `Long descrition of the image: A portrait of a young boy of mixed
          Native American and African American heritage. He is framed from the
          neck up and set against a dark brown backdrop. His brown hair is
          parted down the middle and two braids fall past each shoulder. He's
          wearing a light blue collared shirt with white buttons. His brown eyes
          gaze upward and his lips are upturned in a gentle smile.`
        )),
          Dr.forEach(a),
          Is.forEach(a),
          Ir.forEach(a),
          z.forEach(a),
          ft.forEach(a),
          (Es = h(g)),
          (Re = i(g, "DIV", { id: !0, class: !0 }));
        var Ms = l(Re);
        A(Fe.$$.fragment, Ms),
          (ya = h(Ms)),
          A(ht.$$.fragment, Ms),
          Ms.forEach(a),
          (Ds = h(g)),
          (Pe = i(g, "DIV", { id: !0, class: !0 }));
        var Ts = l(Pe);
        A(Qe.$$.fragment, Ts), (wa = h(Ts)), (N = i(Ts, "DIV", { class: !0 }));
        var ae = l(N);
        Yt = i(ae, "H3", { class: !0 });
        var Br = l(Yt);
        (ja = b(Br, "BOOK")),
          Br.forEach(a),
          (ka = h(ae)),
          (Zt = i(ae, "DIV", { class: !0 }));
        var Mr = l(Zt);
        Ue = i(Mr, "A", { href: !0, target: !0, class: !0 });
        var Na = l(Ue);
        Ot = i(Na, "SPAN", { class: !0 });
        var Tr = l(Ot);
        (xa = b(Tr, "warning external link")),
          Tr.forEach(a),
          (za = b(
            Na,
            `
        IndiVisible: African-Native American Lives in the Americas`
          )),
          Na.forEach(a),
          Mr.forEach(a),
          ($a = h(ae)),
          (Xt = i(ae, "H3", { class: !0 }));
        var Vr = l(Xt);
        (_a = b(Vr, "ARTICLE")),
          Vr.forEach(a),
          (Aa = h(ae)),
          (Ft = i(ae, "DIV", { class: !0 }));
        var Sr = l(Ft);
        qe = i(Sr, "A", { href: !0, target: !0, class: !0 });
        var Ha = l(qe);
        Qt = i(Ha, "SPAN", { class: !0 });
        var Wr = l(Qt);
        (Ia = b(Wr, "warning external link")),
          Wr.forEach(a),
          (Ea = b(
            Ha,
            `Together We Lift the
        Sky: y\u0259haw\u0313 and Black-Indigenous Artists Advance Social Justice`
          )),
          Ha.forEach(a),
          Sr.forEach(a),
          (Da = h(ae)),
          (es = i(ae, "H3", { class: !0 }));
        var Rr = l(es);
        (Ba = b(Rr, "VIDEO")),
          Rr.forEach(a),
          (Ma = h(ae)),
          (ts = i(ae, "DIV", { class: !0 }));
        var Pr = l(ts);
        Ce = i(Pr, "A", { href: !0, target: !0, class: !0 });
        var Ja = l(Ce);
        ss = i(Ja, "SPAN", { class: !0 });
        var Lr = l(ss);
        (Ta = b(Lr, "warning external link")),
          Lr.forEach(a),
          (Va = b(
            Ja,
            `Black-Indigenous
        Youth Advancing Social Justice`
          )),
          Ja.forEach(a),
          Pr.forEach(a),
          (Sa = h(ae)),
          (as = i(ae, "H3", { class: !0 }));
        var Nr = l(as);
        (Wa = b(Nr, "AUDIO STORY")),
          Nr.forEach(a),
          (Ra = h(ae)),
          (rs = i(ae, "DIV", { class: !0 }));
        var Hr = l(rs);
        Ye = i(Hr, "A", { href: !0, target: !0, class: !0 });
        var Ka = l(Ye);
        is = i(Ka, "SPAN", { class: !0 });
        var Jr = l(is);
        (Pa = b(Jr, "warning external link")),
          Jr.forEach(a),
          (La = b(
            Ka,
            `Some Cherokee Freedmen
        are Citizens While Others are Left Out`
          )),
          Ka.forEach(a),
          Hr.forEach(a),
          ae.forEach(a),
          Ts.forEach(a),
          this.h();
      },
      h() {
        (Kr.title = "Ancestors Know Who We Are"),
          e(v, "class", "sr-only svelte-9jebsy"),
          e(c, "class", "svelte-9jebsy"),
          e(he, "class", "artist-odd svelte-9jebsy"),
          e(L, "class", "artist-even svelte-9jebsy"),
          e(ue, "class", "artist-odd svelte-9jebsy"),
          e(Z, "class", "artist-even svelte-9jebsy"),
          e(F, "class", "artist-odd svelte-9jebsy"),
          e(fe, "class", "artist-even svelte-9jebsy"),
          e(n, "class", "text svelte-9jebsy"),
          e(o, "id", "title"),
          e(o, "class", "svelte-9jebsy"),
          H(Se.src, (at = u + "/images/brown-lace-moxie-crop.webp")) ||
            e(Se, "src", at),
          e(
            Se,
            "alt",
            "Blue and brown woven basket purse with flat base, open tapered top, and curved handles, photographed on a black background"
          ),
          e(Se, "class", "svelte-9jebsy"),
          e(k, "class", "svelte-9jebsy"),
          e(de, "class", "sr-only svelte-9jebsy"),
          e(
            P,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(P, "class", "lgallery svelte-9jebsy"),
          e(P, "href", u + "/images/brown-lace-moxie-001-2x.webp"),
          e(P, "data-src", u + "/images/brown-lace-moxie-001-2x.webp"),
          e(
            P,
            "data-sub-html",
            "<p>Rodslen Brown, <em>Lace Moxie's Purse</em></p>"
          ),
          e(Ve, "class", "card svelte-9jebsy"),
          H(We.src, (rt = u + "/images/webber-ancestors-know-crop.webp")) ||
            e(We, "src", rt),
          e(
            We,
            "alt",
            "Framed print reads \u201CAncestors Know Who We Are\u201D in black, all-caps centered text, on white, with each word on a separate line "
          ),
          e(We, "class", "svelte-9jebsy"),
          e(Je, "class", "svelte-9jebsy"),
          e(Ke, "class", "sr-only svelte-9jebsy"),
          e(
            U,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(U, "class", "lgallery svelte-9jebsy"),
          e(U, "href", u + "/images/webber-ancestors-know-2x.webp"),
          e(U, "data-src", u + "/images/webber-ancestors-know-2x.webp"),
          e(
            U,
            "data-sub-html",
            "<p>Storme Webber, <em>Ancestors Know Who We Are</em></p>"
          ),
          e(be, "class", "card svelte-9jebsy"),
          H(Ee.src, (os = u + "/images/pernambuco-troy-crop.webp")) ||
            e(Ee, "src", os),
          e(
            Ee,
            "alt",
            "Black and white photograph of a young man wearing white shorts, lying on a bed with arms crossed and resting on his forehead"
          ),
          e(Ee, "class", "svelte-9jebsy"),
          e(yt, "class", "svelte-9jebsy"),
          e(wt, "class", "sr-only svelte-9jebsy"),
          e(
            se,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(se, "class", "lgallery svelte-9jebsy"),
          e(se, "href", u + "/images/pernambuco-troy-2x.webp"),
          e(se, "data-src", u + "/images/pernambuco-troy-2x.webp"),
          e(se, "data-sub-html", "<p>Moira Pernambuco, <em>Troy</em></p>"),
          e(Ge, "class", "card gallery--pernambuco-adjustment svelte-9jebsy"),
          H(it.src, (Ga = u + "/images/joyner-marigold-crop.webp")) ||
            e(it, "src", Ga),
          e(
            it,
            "alt",
            "Digital painting of a young woman in red with a large yellow marigold in long dark hair, backed by blue sky and green trees"
          ),
          e(it, "class", "svelte-9jebsy"),
          e(kt, "class", "svelte-9jebsy"),
          e(xt, "class", "sr-only svelte-9jebsy"),
          e(
            ve,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(ve, "class", "lgallery svelte-9jebsy"),
          e(ve, "href", u + "/images/joyner-marigold-2x.webp"),
          e(ve, "data-src", u + "/images/joyner-marigold-2x.webp"),
          e(ve, "data-sub-html", "<p>Joelle Joyner, <em>Marigold</em></p>"),
          e(jt, "class", "card svelte-9jebsy"),
          H(
            ot.src,
            (Ua = u + "/images/pettibon-rhoda-richard-baby-richard-crop.webp")
          ) || e(ot, "src", Ua),
          e(
            ot,
            "alt",
            "Hyper-realistic black and white painting of a Native American mother and an African American father sitting with their baby"
          ),
          e(ot, "class", "svelte-9jebsy"),
          e($t, "class", "svelte-9jebsy"),
          e(_t, "class", "sr-only svelte-9jebsy"),
          e(
            ye,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(ye, "class", "lgallery svelte-9jebsy"),
          e(
            ye,
            "href",
            u + "/images/pettibon-rhoda-richard-baby-richard-2x.webp"
          ),
          e(
            ye,
            "data-src",
            u + "/images/pettibon-rhoda-richard-baby-richard-2x.webp"
          ),
          e(
            ye,
            "data-sub-html",
            "<p>Paige Pettibon, <em> Rhoda, Richard, and Baby Richard</em></p>"
          ),
          e(zt, "class", "card svelte-9jebsy"),
          H(lt.src, (qa = u + "/images/pernambuco-daniel-crop.webp")) ||
            e(lt, "src", qa),
          e(
            lt,
            "alt",
            "Color photograph of a man with athletic build and curly brown chin-length hair, standing shirtless in front of a brown drape"
          ),
          e(lt, "class", "svelte-9jebsy"),
          e(It, "class", "svelte-9jebsy"),
          e(Et, "class", "sr-only svelte-9jebsy"),
          e(
            we,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(we, "class", "lgallery svelte-9jebsy"),
          e(we, "href", u + "/images/pernambuco-daniel-2x.webp"),
          e(we, "data-src", u + "/images/pernambuco-daniel-2x.webp"),
          e(we, "data-sub-html", "<p>Moira Pernambuco, <em> Daniel</em></p>"),
          e(At, "class", "card gallery--pernambuco-adjustment svelte-9jebsy"),
          H(nt.src, (Ca = u + "/images/bolter-hair-stories-crop.webp")) ||
            e(nt, "src", Ca),
          e(
            nt,
            "alt",
            "Digital painting sets silhouettes of female heads with varying hairstyles in concentric rings of purple, green, and gold"
          ),
          e(nt, "class", "svelte-9jebsy"),
          e(Bt, "class", "svelte-9jebsy"),
          e(Mt, "class", "sr-only svelte-9jebsy"),
          e(
            je,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(je, "class", "lgallery svelte-9jebsy"),
          e(je, "href", u + "/images/bolter-hair-stories-2x.webp"),
          e(je, "data-src", u + "/images/bolter-hair-stories-2x.webp"),
          e(
            je,
            "data-sub-html",
            "<p>Monica Rickert-Bolter, <em>Hair Stories</em></p>"
          ),
          e(Dt, "class", "card svelte-9jebsy"),
          H(gt.src, (Ya = u + "/images/webber-grace-notes-crop.webp")) ||
            e(gt, "src", Ya),
          e(
            gt,
            "alt",
            "Framed print of an eight-line poem with black, all-lowercase lettering on a white background"
          ),
          e(gt, "class", "svelte-9jebsy"),
          e(Vt, "class", "svelte-9jebsy"),
          e(St, "class", "sr-only svelte-9jebsy"),
          e(
            ke,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(ke, "class", "lgallery svelte-9jebsy"),
          e(ke, "href", u + "/images/webber-grace-notes-2x.webp"),
          e(ke, "data-src", u + "/images/webber-grace-notes-2x.webp"),
          e(ke, "data-sub-html", "<p>Storme Webber, <em>Grace Notes</em></p>"),
          e(Tt, "class", "card svelte-9jebsy"),
          H(ct.src, (Za = u + "/images/bolter-mothers-uplifting-crop.webp")) ||
            e(ct, "src", Za),
          e(
            ct,
            "alt",
            "Pastel drawing of four female silhouettes, purple with yellow auras, touching black, teal, purple and yellow swirling shapes"
          ),
          e(ct, "class", "svelte-9jebsy"),
          e(Rt, "class", "svelte-9jebsy"),
          e(Pt, "class", "sr-only svelte-9jebsy"),
          e(
            xe,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(xe, "class", "lgallery svelte-9jebsy"),
          e(xe, "href", u + "/images/bolter-mothers-uplifting-2x.webp"),
          e(xe, "data-src", u + "/images/bolter-mothers-uplifting-2x.webp"),
          e(
            xe,
            "data-sub-html",
            "<p>Monica Rickert-Bolter, <em>Mothers Uplifting</em></p>"
          ),
          e(Wt, "class", "card svelte-9jebsy"),
          H(dt.src, (Oa = u + "/images/joyner-iris-crop.webp")) ||
            e(dt, "src", Oa),
          e(
            dt,
            "alt",
            "Digital painting of an elder woman in lavender, her head ringed by a yellow halo, on a starry black and purple background"
          ),
          e(dt, "class", "svelte-9jebsy"),
          e(Nt, "class", "svelte-9jebsy"),
          e(Ht, "class", "sr-only svelte-9jebsy"),
          e(
            ze,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(ze, "class", "lgallery svelte-9jebsy"),
          e(ze, "href", u + "/images/joyner-iris-2x.webp"),
          e(ze, "data-src", u + "/images/joyner-iris-2x.webp"),
          e(ze, "data-sub-html", "<p>Joelle Joyner, <em>Iris</em></p>"),
          e(Lt, "class", "card svelte-9jebsy"),
          H(bt.src, (Xa = u + "/images/webber-my-beloveds-crop.webp")) ||
            e(bt, "src", Xa),
          e(
            bt,
            "alt",
            "Framed print of a black etching on white paper, showing a small crowd of people facing forward, some with only heads visible"
          ),
          e(bt, "class", "svelte-9jebsy"),
          e(Kt, "class", "svelte-9jebsy"),
          e(Gt, "class", "sr-only svelte-9jebsy"),
          e(
            $e,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e($e, "class", "lgallery svelte-9jebsy"),
          e($e, "href", u + "/images/webber-my-beloveds-2x.webp"),
          e($e, "data-src", u + "/images/webber-my-beloveds-2x.webp"),
          e($e, "data-sub-html", "<p>Storme Webber, <em>My Beloveds</em></p>"),
          e(Jt, "class", "card svelte-9jebsy"),
          H(mt.src, (Fa = u + "/images/pettibon-soren-lake-crop.webp")) ||
            e(mt, "src", Fa),
          e(
            mt,
            "alt",
            "Painting of a boy of Native American and African American heritage, wearing a blue collared shirt and hair in two long braids"
          ),
          e(mt, "class", "svelte-9jebsy"),
          e(qt, "class", "svelte-9jebsy"),
          e(Ct, "class", "sr-only svelte-9jebsy"),
          e(
            _e,
            "data-tweet-text",
            "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art."
          ),
          e(_e, "class", "lgallery svelte-9jebsy"),
          e(_e, "href", u + "/images/pettibon-soren-lake-2x.webp"),
          e(_e, "data-src", u + "/images/pettibon-soren-lake-2x.webp"),
          e(_e, "data-sub-html", "<p>Paige Pettibon, <em>Soren Lake</em></p>"),
          e(Ut, "class", "card svelte-9jebsy"),
          e(y, "class", "svelte-9jebsy"),
          e(ee, "id", "gallery"),
          e(ee, "class", "svelte-9jebsy"),
          e(Re, "id", "reflections"),
          e(Re, "class", "svelte-9jebsy"),
          e(Yt, "class", "svelte-9jebsy"),
          e(Ot, "class", "sr-only svelte-9jebsy"),
          e(
            Ue,
            "href",
            "https://americanindian.si.edu/shop/publications/books-and-products#2170"
          ),
          e(Ue, "target", "_blank"),
          e(Ue, "class", "svelte-9jebsy"),
          e(Zt, "class", "svelte-9jebsy"),
          e(Xt, "class", "svelte-9jebsy"),
          e(Qt, "class", "sr-only svelte-9jebsy"),
          e(
            qe,
            "href",
            "https://www.americanindianmagazine.org/story/together-we-lift-the-sky?fbclid=IwAR0YUH7BKVVxOpFjBDukETpUSybn1K_IzqJWUwGE-Smz8LkBa3I1zOrLDGo"
          ),
          e(qe, "target", "_blank"),
          e(qe, "class", "svelte-9jebsy"),
          e(Ft, "class", "svelte-9jebsy"),
          e(es, "class", "svelte-9jebsy"),
          e(ss, "class", "sr-only svelte-9jebsy"),
          e(Ce, "href", "https://youtu.be/gWFsPhJoJWg"),
          e(Ce, "target", "_blank"),
          e(Ce, "class", "svelte-9jebsy"),
          e(ts, "class", "svelte-9jebsy"),
          e(as, "class", "svelte-9jebsy"),
          e(is, "class", "sr-only svelte-9jebsy"),
          e(
            Ye,
            "href",
            "https://www.kosu.org/local-news/2016-08-10/some-cherokee-freedmen-are-citizens-while-others-are-left-out"
          ),
          e(Ye, "target", "_blank"),
          e(Ye, "class", "svelte-9jebsy"),
          e(rs, "class", "svelte-9jebsy"),
          e(N, "class", "svelte-9jebsy"),
          e(Pe, "id", "resources"),
          e(Pe, "class", "svelte-9jebsy");
      },
      m(g, f) {
        w(g, s, f),
          w(g, o, f),
          t(o, n),
          t(n, c),
          t(c, v),
          t(v, T),
          t(c, J),
          I(V, c, null),
          t(c, re),
          I(j, c, null),
          t(c, $),
          I(S, c, null),
          t(n, K),
          I(W, n, null),
          t(n, C),
          t(n, he),
          I(Y, he, null),
          t(n, ge),
          t(n, L),
          I(R, L, null),
          t(n, ie),
          t(n, ue),
          I(G, ue, null),
          t(n, oe),
          t(n, Z),
          I(O, Z, null),
          t(n, te),
          t(n, F),
          I(De, F, null),
          t(n, tt),
          t(n, fe),
          I(Q, fe, null),
          t(o, st),
          I(le, o, null),
          w(g, ce, f),
          I(ne, g, f),
          w(g, pe, f),
          I(Ae, g, f),
          w(g, Ie, f),
          I(Be, g, f),
          w(g, Ze, f),
          w(g, ee, f),
          I(X, ee, null),
          t(ee, Te),
          t(ee, y),
          t(y, Ve),
          t(Ve, P),
          t(P, Se),
          t(P, k),
          t(k, x),
          t(P, Le),
          t(P, de),
          t(de, Ne),
          t(y, He),
          t(y, be),
          t(be, U),
          t(U, We),
          t(U, Je),
          t(Je, pt),
          t(U, Oe),
          t(U, Ke),
          t(Ke, vt),
          t(y, Xe),
          t(y, Ge),
          t(Ge, se),
          t(se, Ee),
          t(se, yt),
          t(yt, Vs),
          t(se, Ss),
          t(se, wt),
          t(wt, Ws),
          t(y, Rs),
          t(y, jt),
          t(jt, ve),
          t(ve, it),
          t(ve, kt),
          t(kt, Ps),
          t(ve, Ls),
          t(ve, xt),
          t(xt, Ns),
          t(y, Hs),
          t(y, zt),
          t(zt, ye),
          t(ye, ot),
          t(ye, $t),
          t($t, Js),
          t(ye, Ks),
          t(ye, _t),
          t(_t, Gs),
          t(y, Us),
          t(y, At),
          t(At, we),
          t(we, lt),
          t(we, It),
          t(It, qs),
          t(we, Cs),
          t(we, Et),
          t(Et, Ys),
          t(y, Zs),
          t(y, Dt),
          t(Dt, je),
          t(je, nt),
          t(je, Bt),
          t(Bt, Os),
          t(je, Xs),
          t(je, Mt),
          t(Mt, Fs),
          t(y, Qs),
          t(y, Tt),
          t(Tt, ke),
          t(ke, gt),
          t(ke, Vt),
          t(Vt, ea),
          t(ke, ta),
          t(ke, St),
          t(St, sa),
          t(y, aa),
          t(y, Wt),
          t(Wt, xe),
          t(xe, ct),
          t(xe, Rt),
          t(Rt, ra),
          t(xe, ia),
          t(xe, Pt),
          t(Pt, oa),
          t(y, la),
          t(y, Lt),
          t(Lt, ze),
          t(ze, dt),
          t(ze, Nt),
          t(Nt, na),
          t(ze, ga),
          t(ze, Ht),
          t(Ht, ca),
          t(y, da),
          t(y, Jt),
          t(Jt, $e),
          t($e, bt),
          t($e, Kt),
          t(Kt, ba),
          t($e, ma),
          t($e, Gt),
          t(Gt, ha),
          t(y, ua),
          t(y, Ut),
          t(Ut, _e),
          t(_e, mt),
          t(_e, qt),
          t(qt, fa),
          t(_e, pa),
          t(_e, Ct),
          t(Ct, va),
          w(g, Es, f),
          w(g, Re, f),
          I(Fe, Re, null),
          t(Re, ya),
          I(ht, Re, null),
          w(g, Ds, f),
          w(g, Pe, f),
          I(Qe, Pe, null),
          t(Pe, wa),
          t(Pe, N),
          t(N, Yt),
          t(Yt, ja),
          t(N, ka),
          t(N, Zt),
          t(Zt, Ue),
          t(Ue, Ot),
          t(Ot, xa),
          t(Ue, za),
          t(N, $a),
          t(N, Xt),
          t(Xt, _a),
          t(N, Aa),
          t(N, Ft),
          t(Ft, qe),
          t(qe, Qt),
          t(Qt, Ia),
          t(qe, Ea),
          t(N, Da),
          t(N, es),
          t(es, Ba),
          t(N, Ma),
          t(N, ts),
          t(ts, Ce),
          t(Ce, ss),
          t(ss, Ta),
          t(Ce, Va),
          t(N, Sa),
          t(N, as),
          t(as, Wa),
          t(N, Ra),
          t(N, rs),
          t(rs, Ye),
          t(Ye, is),
          t(is, Pa),
          t(Ye, La),
          (Bs = !0);
      },
      p(g, [f]) {
        const ut = {};
        f & 1 && (ut.$$scope = { dirty: f, ctx: g }), V.$set(ut);
        const q = {};
        f & 1 && (q.$$scope = { dirty: f, ctx: g }), j.$set(q);
        const Me = {};
        f & 1 && (Me.$$scope = { dirty: f, ctx: g }), S.$set(Me);
        const ls = {};
        f & 1 && (ls.$$scope = { dirty: f, ctx: g }), W.$set(ls);
        const ns = {};
        f & 1 && (ns.$$scope = { dirty: f, ctx: g }), Y.$set(ns);
        const gs = {};
        f & 1 && (gs.$$scope = { dirty: f, ctx: g }), R.$set(gs);
        const cs = {};
        f & 1 && (cs.$$scope = { dirty: f, ctx: g }), G.$set(cs);
        const ds = {};
        f & 1 && (ds.$$scope = { dirty: f, ctx: g }), O.$set(ds);
        const bs = {};
        f & 1 && (bs.$$scope = { dirty: f, ctx: g }), De.$set(bs);
        const ms = {};
        f & 1 && (ms.$$scope = { dirty: f, ctx: g }), Q.$set(ms);
        const ft = {};
        f & 1 && (ft.$$scope = { dirty: f, ctx: g }), le.$set(ft);
        const z = {};
        f & 1 && (z.$$scope = { dirty: f, ctx: g }), ne.$set(z);
        const hs = {};
        f & 1 && (hs.$$scope = { dirty: f, ctx: g }), Ae.$set(hs);
        const et = {};
        f & 1 && (et.$$scope = { dirty: f, ctx: g }), Be.$set(et);
        const us = {};
        f & 1 && (us.$$scope = { dirty: f, ctx: g }), X.$set(us);
        const fs = {};
        f & 1 && (fs.$$scope = { dirty: f, ctx: g }), Fe.$set(fs);
        const ps = {};
        f & 1 && (ps.$$scope = { dirty: f, ctx: g }), Qe.$set(ps);
      },
      i(g) {
        Bs ||
          (E(V.$$.fragment, g),
          E(j.$$.fragment, g),
          E(S.$$.fragment, g),
          E(W.$$.fragment, g),
          E(Y.$$.fragment, g),
          E(R.$$.fragment, g),
          E(G.$$.fragment, g),
          E(O.$$.fragment, g),
          E(De.$$.fragment, g),
          E(Q.$$.fragment, g),
          E(le.$$.fragment, g),
          E(ne.$$.fragment, g),
          E(Ae.$$.fragment, g),
          E(Be.$$.fragment, g),
          E(X.$$.fragment, g),
          E(Fe.$$.fragment, g),
          E(ht.$$.fragment, g),
          E(Qe.$$.fragment, g),
          (Bs = !0));
      },
      o(g) {
        D(V.$$.fragment, g),
          D(j.$$.fragment, g),
          D(S.$$.fragment, g),
          D(W.$$.fragment, g),
          D(Y.$$.fragment, g),
          D(R.$$.fragment, g),
          D(G.$$.fragment, g),
          D(O.$$.fragment, g),
          D(De.$$.fragment, g),
          D(Q.$$.fragment, g),
          D(le.$$.fragment, g),
          D(ne.$$.fragment, g),
          D(Ae.$$.fragment, g),
          D(Be.$$.fragment, g),
          D(X.$$.fragment, g),
          D(Fe.$$.fragment, g),
          D(ht.$$.fragment, g),
          D(Qe.$$.fragment, g),
          (Bs = !1);
      },
      d(g) {
        g && a(s),
          g && a(o),
          B(V),
          B(j),
          B(S),
          B(W),
          B(Y),
          B(R),
          B(G),
          B(O),
          B(De),
          B(Q),
          B(le),
          g && a(ce),
          B(ne, g),
          g && a(pe),
          B(Ae, g),
          g && a(Ie),
          B(Be, g),
          g && a(Ze),
          g && a(ee),
          B(X),
          g && a(Es),
          g && a(Re),
          B(Fe),
          B(ht),
          g && a(Ds),
          g && a(Pe),
          B(Qe);
      },
    }
  );
}
function $i(p) {
  return (
    Yr(() => {
      Xr(document.getElementById("gallery"), {
        plugins: [Fr, ei, Qr],
        licenseKey: "0000-0000-000-0000",
        addClass: "lg-custom-icons",
        speed: 500,
        selector: ".lgallery",
        download: !1,
        pinterest: !1,
        mobileSettings: { showCloseIcon: !0 },
      }),
        document.getElementById("gallery");
    }),
    []
  );
}
class Mi extends Gr {
  constructor(s) {
    super(), Ur(this, s, $i, zi, qr, {});
  }
}
export { Mi as default };
