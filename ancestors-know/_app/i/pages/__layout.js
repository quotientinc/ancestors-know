import {
  F as Qo,
  S as zt,
  i as xt,
  s as _t,
  G as Zo,
  e as y,
  t as K,
  k as E,
  H as P,
  c as w,
  a as k,
  h as U,
  d as a,
  m as M,
  I as Y,
  b as r,
  J as Jt,
  K as Qe,
  g as z,
  L as m,
  M as te,
  n as Oe,
  N as Po,
  O as Oo,
  P as Fo,
  Q as Jo,
  x as Ht,
  y as Gt,
  z as qt,
  R as $o,
  r as wt,
  p as kt,
  C as Xt,
  w as Yo,
  T as el,
  f as Qt,
  l as j,
  U as Me,
  V as $t,
  A as Ho,
  W as tl,
  D as Go,
  X as il,
  Y as ol,
  Z as ll,
  _ as rl,
} from "../chunks/index.js";
import { b as X } from "../chunks/paths.js";
const sl = () => {
    const l = Qo("__svelte__");
    return {
      page: { subscribe: l.page.subscribe },
      navigating: { subscribe: l.navigating.subscribe },
      get preloading() {
        return (
          console.error(
            "stores.preloading is deprecated; use stores.navigating instead"
          ),
          { subscribe: l.navigating.subscribe }
        );
      },
      session: l.session,
      updated: l.updated,
    };
  },
  nl = {
    subscribe(l) {
      return sl().page.subscribe(l);
    },
  };
function al(l) {
  let t = !1,
    o = () => {
      t = !1;
    },
    e,
    i,
    n,
    s,
    u,
    b,
    g,
    f,
    h,
    v,
    p,
    d,
    c,
    _,
    x,
    I,
    N,
    T,
    C,
    B,
    L,
    Z,
    A,
    S,
    V,
    Q,
    O,
    G,
    R,
    H,
    D,
    W,
    F,
    q,
    re,
    se,
    ie,
    J,
    fe,
    ue,
    de,
    Ce,
    Fe,
    Te,
    Ne,
    Be,
    Je,
    Ie,
    we,
    De,
    Ze,
    pe,
    lt,
    Re,
    Pe,
    be,
    rt,
    st,
    Ye,
    ge,
    ht,
    nt,
    ee,
    he,
    at,
    gt,
    $,
    ke,
    oe,
    Le,
    He,
    Ge,
    Se,
    ze,
    We,
    ne,
    ce,
    qe,
    ct,
    Xe,
    le,
    Ke,
    xe,
    _e,
    ve,
    mt,
    $e,
    Ae;
  return (
    Zo(l[5]),
    {
      c() {
        (i = y("details")),
          (n = y("summary")),
          (s = y("div")),
          (u = y("a")),
          (b = K("Ancestors ")),
          (g = y("span")),
          (f = K("Know")),
          (h = K(" Who We Are")),
          (p = E()),
          (d = y("div")),
          (c = y("img")),
          (x = E()),
          (I = y("div")),
          (N = P("svg")),
          (T = P("use")),
          (C = E()),
          (B = P("svg")),
          (L = P("use")),
          (Z = E()),
          (A = y("div")),
          (S = y("nav")),
          (V = y("ul")),
          (Q = y("li")),
          (O = y("a")),
          (G = K("From the Curator")),
          (R = E()),
          (H = y("li")),
          (D = y("a")),
          (W = K("Artists")),
          (F = E()),
          (q = y("ul")),
          (re = y("li")),
          (se = y("a")),
          (ie = K("Rodslen Brown")),
          (J = E()),
          (fe = y("li")),
          (ue = y("a")),
          (de = K("Joelle Joyner")),
          (Ce = E()),
          (Fe = y("li")),
          (Te = y("a")),
          (Ne = K("Moira Pernambuco")),
          (Be = E()),
          (Je = y("li")),
          (Ie = y("a")),
          (we = K("Paige Pettibon")),
          (De = E()),
          (Ze = y("li")),
          (pe = y("a")),
          (lt = K("Monica Rickert-Bolter")),
          (Re = E()),
          (Pe = y("li")),
          (be = y("a")),
          (rt = K("Storme Webber")),
          (st = E()),
          (Ye = y("li")),
          (ge = y("a")),
          (ht = K("Gallery")),
          (nt = E()),
          (ee = y("li")),
          (he = y("a")),
          (at = K("Reflections")),
          (gt = E()),
          ($ = y("ul")),
          (ke = y("li")),
          (oe = y("a")),
          (Le = K("Afro-Indigenous Relations in a Reimagined Future")),
          (He = E()),
          (Ge = y("li")),
          (Se = y("a")),
          (ze = K("Art, Gender, and Identity")),
          (We = E()),
          (ne = y("li")),
          (ce = y("a")),
          (qe = K("Black-Native Identity and Futurity")),
          (ct = E()),
          (Xe = y("li")),
          (le = y("a")),
          (Ke = K("Motherhood")),
          (xe = E()),
          (_e = y("li")),
          (ve = y("a")),
          (mt = K("Resources")),
          this.h();
      },
      l(me) {
        i = w(me, "DETAILS", { id: !0, class: !0 });
        var ae = k(i);
        n = w(ae, "SUMMARY", { class: !0, tabindex: !0 });
        var et = k(n);
        s = w(et, "DIV", { class: !0 });
        var At = k(s);
        u = w(At, "A", { href: !0, class: !0, "aria-label": !0 });
        var ft = k(u);
        (b = U(ft, "Ancestors ")), (g = w(ft, "SPAN", { class: !0 }));
        var tt = k(g);
        (f = U(tt, "Know")),
          tt.forEach(a),
          (h = U(ft, " Who We Are")),
          ft.forEach(a),
          At.forEach(a),
          (p = M(et)),
          (d = w(et, "DIV", { class: !0 }));
        var Et = k(d);
        (c = w(Et, "IMG", { src: !0, alt: !0, class: !0 })),
          Et.forEach(a),
          (x = M(et)),
          (I = w(et, "DIV", { class: !0, tabindex: !0 }));
        var ut = k(I);
        N = Y(ut, "svg", { id: !0, "aria-hidden": !0, class: !0 });
        var Mt = k(N);
        (T = Y(Mt, "use", { href: !0, xlink: !0 })),
          k(T).forEach(a),
          Mt.forEach(a),
          (C = M(ut)),
          (B = Y(ut, "svg", { id: !0, "aria-hidden": !0, class: !0 }));
        var it = k(B);
        (L = Y(it, "use", { href: !0, xlink: !0 })),
          k(L).forEach(a),
          it.forEach(a),
          ut.forEach(a),
          et.forEach(a),
          (Z = M(ae)),
          (A = w(ae, "DIV", { id: !0, class: !0 }));
        var dt = k(A);
        S = w(dt, "NAV", { "aria-label": !0, class: !0 });
        var Tt = k(S);
        V = w(Tt, "UL", { class: !0 });
        var Ee = k(V);
        Q = w(Ee, "LI", { class: !0 });
        var Ue = k(Q);
        O = w(Ue, "A", { href: !0, class: !0 });
        var Nt = k(O);
        (G = U(Nt, "From the Curator")),
          Nt.forEach(a),
          Ue.forEach(a),
          (R = M(Ee)),
          (H = w(Ee, "LI", { class: !0 }));
        var pt = k(H);
        D = w(pt, "A", { href: !0, class: !0 });
        var It = k(D);
        (W = U(It, "Artists")),
          It.forEach(a),
          (F = M(pt)),
          (q = w(pt, "UL", { class: !0 }));
        var ye = k(q);
        re = w(ye, "LI", { class: !0 });
        var ot = k(re);
        se = w(ot, "A", { href: !0, class: !0 });
        var St = k(se);
        (ie = U(St, "Rodslen Brown")),
          St.forEach(a),
          ot.forEach(a),
          (J = M(ye)),
          (fe = w(ye, "LI", { class: !0 }));
        var jt = k(fe);
        ue = w(jt, "A", { href: !0, class: !0 });
        var Ct = k(ue);
        (de = U(Ct, "Joelle Joyner")),
          Ct.forEach(a),
          jt.forEach(a),
          (Ce = M(ye)),
          (Fe = w(ye, "LI", { class: !0 }));
        var Bt = k(Fe);
        Te = w(Bt, "A", { href: !0, class: !0 });
        var Ot = k(Te);
        (Ne = U(Ot, "Moira Pernambuco")),
          Ot.forEach(a),
          Bt.forEach(a),
          (Be = M(ye)),
          (Je = w(ye, "LI", { class: !0 }));
        var Ve = k(Je);
        Ie = w(Ve, "A", { href: !0, class: !0 });
        var Dt = k(Ie);
        (we = U(Dt, "Paige Pettibon")),
          Dt.forEach(a),
          Ve.forEach(a),
          (De = M(ye)),
          (Ze = w(ye, "LI", { class: !0 }));
        var vt = k(Ze);
        pe = w(vt, "A", { href: !0, class: !0 });
        var Rt = k(pe);
        (lt = U(Rt, "Monica Rickert-Bolter")),
          Rt.forEach(a),
          vt.forEach(a),
          (Re = M(ye)),
          (Pe = w(ye, "LI", { class: !0 }));
        var Lt = k(Pe);
        be = w(Lt, "A", { href: !0, class: !0 });
        var Wt = k(be);
        (rt = U(Wt, "Storme Webber")),
          Wt.forEach(a),
          Lt.forEach(a),
          ye.forEach(a),
          pt.forEach(a),
          (st = M(Ee)),
          (Ye = w(Ee, "LI", { class: !0 }));
        var yt = k(Ye);
        ge = w(yt, "A", { href: !0, class: !0 });
        var Kt = k(ge);
        (ht = U(Kt, "Gallery")),
          Kt.forEach(a),
          yt.forEach(a),
          (nt = M(Ee)),
          (ee = w(Ee, "LI", { class: !0 }));
        var bt = k(ee);
        he = w(bt, "A", { href: !0, class: !0 });
        var Ut = k(he);
        (at = U(Ut, "Reflections")),
          Ut.forEach(a),
          (gt = M(bt)),
          ($ = w(bt, "UL", { class: !0 }));
        var je = k($);
        ke = w(je, "LI", { class: !0 });
        var Vt = k(ke);
        oe = w(Vt, "A", { href: !0, class: !0 });
        var Zt = k(oe);
        (Le = U(Zt, "Afro-Indigenous Relations in a Reimagined Future")),
          Zt.forEach(a),
          Vt.forEach(a),
          (He = M(je)),
          (Ge = w(je, "LI", { class: !0 }));
        var Pt = k(Ge);
        Se = w(Pt, "A", { href: !0, class: !0 });
        var li = k(Se);
        (ze = U(li, "Art, Gender, and Identity")),
          li.forEach(a),
          Pt.forEach(a),
          (We = M(je)),
          (ne = w(je, "LI", { class: !0 }));
        var ri = k(ne);
        ce = w(ri, "A", { href: !0, class: !0 });
        var si = k(ce);
        (qe = U(si, "Black-Native Identity and Futurity")),
          si.forEach(a),
          ri.forEach(a),
          (ct = M(je)),
          (Xe = w(je, "LI", { class: !0 }));
        var ni = k(Xe);
        le = w(ni, "A", { href: !0, class: !0 });
        var ai = k(le);
        (Ke = U(ai, "Motherhood")),
          ai.forEach(a),
          ni.forEach(a),
          je.forEach(a),
          bt.forEach(a),
          (xe = M(Ee)),
          (_e = w(Ee, "LI", { class: !0 }));
        var gi = k(_e);
        ve = w(gi, "A", { href: !0, class: !0 });
        var ci = k(ve);
        (mt = U(ci, "Resources")),
          ci.forEach(a),
          gi.forEach(a),
          Ee.forEach(a),
          Tt.forEach(a),
          dt.forEach(a),
          ae.forEach(a),
          this.h();
      },
      h() {
        r(g, "class", "svelte-gu3tcc"),
          r(u, "href", X + "/"),
          r(
            u,
            "class",
            (v =
              Jt(
                l[1] < 100 && !l[0] && l[2].url.pathname === "/"
                  ? "hide-menu-logo"
                  : ""
              ) + " svelte-gu3tcc")
          ),
          r(u, "aria-label", "Ancestors Know Who We Are"),
          r(s, "class", "logo svelte-gu3tcc"),
          Qe(c.src, (_ = X + "/images/logo-nmai-si-lockup.svg")) ||
            r(c, "src", _),
          r(c, "alt", "National Museum of the American Indian"),
          r(c, "class", "svelte-gu3tcc"),
          r(d, "class", "default-header--2 svelte-gu3tcc"),
          r(T, "href", X + "/#symbol-menu"),
          r(T, "xlink", "http://www.w3.org/1999/xlink"),
          r(N, "id", "hamburger"),
          r(N, "aria-hidden", "true"),
          r(N, "class", "svelte-gu3tcc"),
          r(L, "href", X + "/#symbol-close"),
          r(L, "xlink", "http://www.w3.org/1999/xlink"),
          r(B, "id", "close"),
          r(B, "aria-hidden", "true"),
          r(B, "class", "svelte-gu3tcc"),
          r(I, "class", "toggle svelte-gu3tcc"),
          r(I, "tabindex", "0"),
          r(n, "class", "level svelte-gu3tcc"),
          r(n, "tabindex", "-1"),
          r(O, "href", X + "/from-the-curator#top"),
          r(O, "class", "svelte-gu3tcc"),
          r(Q, "class", "svelte-gu3tcc"),
          r(D, "href", X + "/#artists"),
          r(D, "class", "svelte-gu3tcc"),
          r(se, "href", X + "/artists/rodslen-brown#top"),
          r(se, "class", "svelte-gu3tcc"),
          r(re, "class", "svelte-gu3tcc"),
          r(ue, "href", X + "/artists/joelle-joyner#top"),
          r(ue, "class", "svelte-gu3tcc"),
          r(fe, "class", "svelte-gu3tcc"),
          r(Te, "href", X + "/artists/moira-pernambuco#top"),
          r(Te, "class", "svelte-gu3tcc"),
          r(Fe, "class", "svelte-gu3tcc"),
          r(Ie, "href", X + "/artists/paige-pettibon#top"),
          r(Ie, "class", "svelte-gu3tcc"),
          r(Je, "class", "svelte-gu3tcc"),
          r(pe, "href", X + "/artists/monica-rickert-bolter#top"),
          r(pe, "class", "svelte-gu3tcc"),
          r(Ze, "class", "svelte-gu3tcc"),
          r(be, "href", X + "/artists/storme-webber#top"),
          r(be, "class", "svelte-gu3tcc"),
          r(Pe, "class", "svelte-gu3tcc"),
          r(q, "class", "svelte-gu3tcc"),
          r(H, "class", "svelte-gu3tcc"),
          r(ge, "href", X + "/#gallery"),
          r(ge, "class", "svelte-gu3tcc"),
          r(Ye, "class", "svelte-gu3tcc"),
          r(he, "href", X + "/#reflections"),
          r(he, "class", "svelte-gu3tcc"),
          r(
            oe,
            "href",
            X +
              "/reflections/afro-indigenous-relations-in-a-reimagined-future#top"
          ),
          r(oe, "class", "svelte-gu3tcc"),
          r(ke, "class", "svelte-gu3tcc"),
          r(Se, "href", X + "/reflections/art-gender-and-identity#top"),
          r(Se, "class", "svelte-gu3tcc"),
          r(Ge, "class", "svelte-gu3tcc"),
          r(
            ce,
            "href",
            X + "/reflections/black-native-identity-and-futurity#top"
          ),
          r(ce, "class", "svelte-gu3tcc"),
          r(ne, "class", "svelte-gu3tcc"),
          r(le, "href", X + "/reflections/motherhood#top"),
          r(le, "class", "svelte-gu3tcc"),
          r(Xe, "class", "svelte-gu3tcc"),
          r($, "class", "svelte-gu3tcc"),
          r(ee, "class", "svelte-gu3tcc"),
          r(ve, "href", X + "/#resources"),
          r(ve, "class", "svelte-gu3tcc"),
          r(_e, "class", "svelte-gu3tcc"),
          r(V, "class", "svelte-gu3tcc"),
          r(S, "aria-label", "Main"),
          r(S, "class", "svelte-gu3tcc"),
          r(A, "id", "nav-wrapper"),
          r(A, "class", "svelte-gu3tcc"),
          r(i, "id", "nav"),
          r(i, "class", "svelte-gu3tcc");
      },
      m(me, ae) {
        z(me, i, ae),
          m(i, n),
          m(n, s),
          m(s, u),
          m(u, b),
          m(u, g),
          m(g, f),
          m(u, h),
          m(n, p),
          m(n, d),
          m(d, c),
          m(n, x),
          m(n, I),
          m(I, N),
          m(N, T),
          m(I, C),
          m(I, B),
          m(B, L),
          m(i, Z),
          m(i, A),
          m(A, S),
          m(S, V),
          m(V, Q),
          m(Q, O),
          m(O, G),
          m(V, R),
          m(V, H),
          m(H, D),
          m(D, W),
          m(H, F),
          m(H, q),
          m(q, re),
          m(re, se),
          m(se, ie),
          m(q, J),
          m(q, fe),
          m(fe, ue),
          m(ue, de),
          m(q, Ce),
          m(q, Fe),
          m(Fe, Te),
          m(Te, Ne),
          m(q, Be),
          m(q, Je),
          m(Je, Ie),
          m(Ie, we),
          m(q, De),
          m(q, Ze),
          m(Ze, pe),
          m(pe, lt),
          m(q, Re),
          m(q, Pe),
          m(Pe, be),
          m(be, rt),
          m(V, st),
          m(V, Ye),
          m(Ye, ge),
          m(ge, ht),
          m(V, nt),
          m(V, ee),
          m(ee, he),
          m(he, at),
          m(ee, gt),
          m(ee, $),
          m($, ke),
          m(ke, oe),
          m(oe, Le),
          m($, He),
          m($, Ge),
          m(Ge, Se),
          m(Se, ze),
          m($, We),
          m($, ne),
          m(ne, ce),
          m(ce, qe),
          m($, ct),
          m($, Xe),
          m(Xe, le),
          m(le, Ke),
          m(V, xe),
          m(V, _e),
          m(_e, ve),
          m(ve, mt),
          (i.open = l[0]),
          $e ||
            ((Ae = [
              te(window, "scroll", () => {
                (t = !0), clearTimeout(e), (e = setTimeout(o, 100)), l[5]();
              }),
              te(u, "click", l[4]),
              te(O, "click", l[3]),
              te(D, "click", l[3]),
              te(se, "click", l[3]),
              te(ue, "click", l[3]),
              te(Te, "click", l[3]),
              te(Ie, "click", l[3]),
              te(pe, "click", l[3]),
              te(be, "click", l[3]),
              te(ge, "click", l[3]),
              te(he, "click", l[3]),
              te(oe, "click", l[3]),
              te(Se, "click", l[3]),
              te(ce, "click", l[3]),
              te(le, "click", l[3]),
              te(ve, "click", l[3]),
              te(i, "toggle", l[6]),
            ]),
            ($e = !0));
      },
      p(me, [ae]) {
        ae & 2 &&
          !t &&
          ((t = !0),
          clearTimeout(e),
          scrollTo(window.pageXOffset, me[1]),
          (e = setTimeout(o, 100))),
          ae & 7 &&
            v !==
              (v =
                Jt(
                  me[1] < 100 && !me[0] && me[2].url.pathname === "/"
                    ? "hide-menu-logo"
                    : ""
                ) + " svelte-gu3tcc") &&
            r(u, "class", v),
          ae & 1 && (i.open = me[0]);
      },
      i: Oe,
      o: Oe,
      d(me) {
        me && a(i), ($e = !1), Po(Ae);
      },
    }
  );
}
function gl(l, t, o) {
  let e;
  Oo(l, nl, (f) => o(2, (e = f)));
  let i,
    { open: n } = t;
  function s() {
    o(0, (n = !n));
  }
  function u() {
    o(0, (n = !1));
  }
  function b() {
    o(1, (i = window.pageYOffset));
  }
  function g() {
    (n = this.open), o(0, n);
  }
  return (
    (l.$$set = (f) => {
      "open" in f && o(0, (n = f.open));
    }),
    [n, i, e, s, u, b, g]
  );
}
class cl extends zt {
  constructor(t) {
    super(), xt(this, t, gl, al, _t, { open: 0 });
  }
}
const { window: oi } = el;
function ml(l) {
  let t = !1,
    o = () => {
      t = !1;
    },
    e,
    i,
    n,
    s,
    u,
    b,
    g,
    f,
    h,
    v,
    p,
    d,
    c,
    _,
    x,
    I,
    N,
    T,
    C,
    B,
    L,
    Z,
    A,
    S,
    V,
    Q,
    O,
    G;
  Zo(l[5]);
  function R(D) {
    l[6](D);
  }
  let H = {};
  return (
    l[1] !== void 0 && (H.open = l[1]),
    (S = new cl({ props: H })),
    Fo.push(() => Jo(S, "open", R)),
    {
      c() {
        (i = y("div")),
          (n = y("img")),
          (u = E()),
          (b = y("a")),
          (g = K("Skip to main content")),
          (f = E()),
          (h = y("div")),
          (v = y("div")),
          (p = y("div")),
          (d = y("a")),
          (c = K(`Ancestors
        `)),
          (_ = y("span")),
          (x = K("Know")),
          (I = K(" Who We Are")),
          (N = E()),
          (T = y("div")),
          (C = P("svg")),
          (B = P("use")),
          (Z = E()),
          (A = y("div")),
          Ht(S.$$.fragment),
          this.h();
      },
      l(D) {
        i = w(D, "DIV", { class: !0 });
        var W = k(i);
        (n = w(W, "IMG", { src: !0, alt: !0, class: !0 })),
          W.forEach(a),
          (u = M(D)),
          (b = w(D, "A", { href: !0, class: !0 }));
        var F = k(b);
        (g = U(F, "Skip to main content")),
          F.forEach(a),
          (f = M(D)),
          (h = w(D, "DIV", { class: !0 }));
        var q = k(h);
        v = w(q, "DIV", { class: !0 });
        var re = k(v);
        p = w(re, "DIV", { class: !0 });
        var se = k(p);
        d = w(se, "A", { href: !0, "aria-label": !0, class: !0 });
        var ie = k(d);
        (c = U(
          ie,
          `Ancestors
        `
        )),
          (_ = w(ie, "SPAN", { class: !0 }));
        var J = k(_);
        (x = U(J, "Know")),
          J.forEach(a),
          (I = U(ie, " Who We Are")),
          ie.forEach(a),
          se.forEach(a),
          (N = M(re)),
          (T = w(re, "DIV", { class: !0, tabindex: !0 }));
        var fe = k(T);
        C = Y(fe, "svg", { id: !0, "aria-hidden": !0, class: !0 });
        var ue = k(C);
        (B = Y(ue, "use", { href: !0, xlink: !0 })),
          k(B).forEach(a),
          ue.forEach(a),
          fe.forEach(a),
          re.forEach(a),
          q.forEach(a),
          (Z = M(D)),
          (A = w(D, "DIV", { class: !0 }));
        var de = k(A);
        Gt(S.$$.fragment, de), de.forEach(a), this.h();
      },
      h() {
        Qe(n.src, (s = X + "/images/logo-nmai-si-lockup.svg")) ||
          r(n, "src", s),
          r(n, "alt", "National Museum of the American Indian"),
          r(n, "class", "svelte-1xximcf"),
          r(i, "class", "default-header svelte-1xximcf"),
          r(b, "href", X + "#title"),
          r(b, "class", "sr-only svelte-1xximcf"),
          r(_, "class", "svelte-1xximcf"),
          r(d, "href", X + "/"),
          r(d, "aria-label", "Ancestors Know Who We Are"),
          r(d, "class", "svelte-1xximcf"),
          r(p, "class", "logo svelte-1xximcf"),
          r(B, "href", X + "/#symbol-menu"),
          r(B, "xlink", "http://www.w3.org/1999/xlink"),
          r(C, "id", "hamburger2"),
          r(C, "aria-hidden", "true"),
          r(C, "class", "svelte-1xximcf"),
          r(T, "class", "toggle svelte-1xximcf"),
          r(T, "tabindex", "0"),
          r(v, "class", "level svelte-1xximcf"),
          r(
            h,
            "class",
            (L =
              Jt(
                l[0] > 120 && !l[2] && !l[1]
                  ? "decoy-sticky-on"
                  : "decoy-sticky-off"
              ) + " svelte-1xximcf")
          ),
          r(A, "class", "header svelte-1xximcf");
      },
      m(D, W) {
        z(D, i, W),
          m(i, n),
          z(D, u, W),
          z(D, b, W),
          m(b, g),
          z(D, f, W),
          z(D, h, W),
          m(h, v),
          m(v, p),
          m(p, d),
          m(d, c),
          m(d, _),
          m(_, x),
          m(d, I),
          m(v, N),
          m(v, T),
          m(T, C),
          m(C, B),
          z(D, Z, W),
          z(D, A, W),
          qt(S, A, null),
          (Q = !0),
          O ||
            ((G = [
              te(oi, "scroll", () => {
                (t = !0), clearTimeout(e), (e = setTimeout(o, 100)), l[5]();
              }),
              te(d, "click", l[4]),
              te(T, "click", l[3]),
              te(T, "keydown", l[3]),
            ]),
            (O = !0));
      },
      p(D, [W]) {
        W & 1 &&
          !t &&
          ((t = !0),
          clearTimeout(e),
          scrollTo(oi.pageXOffset, D[0]),
          (e = setTimeout(o, 100))),
          (!Q ||
            (W & 7 &&
              L !==
                (L =
                  Jt(
                    D[0] > 120 && !D[2] && !D[1]
                      ? "decoy-sticky-on"
                      : "decoy-sticky-off"
                  ) + " svelte-1xximcf"))) &&
            r(h, "class", L);
        const F = {};
        !V && W & 2 && ((V = !0), (F.open = D[1]), $o(() => (V = !1))),
          S.$set(F);
      },
      i(D) {
        Q || (wt(S.$$.fragment, D), (Q = !0));
      },
      o(D) {
        kt(S.$$.fragment, D), (Q = !1);
      },
      d(D) {
        D && a(i),
          D && a(u),
          D && a(b),
          D && a(f),
          D && a(h),
          D && a(Z),
          D && a(A),
          Xt(S),
          (O = !1),
          Po(G);
      },
    }
  );
}
function fl(l, t, o) {
  let e,
    i = !1;
  function n() {
    window.scrollTo(0, 0), o(1, (i = !0));
  }
  function s() {
    window.scrollTo(0, 0), o(1, (i = !1));
  }
  let u = !0;
  Yo(() => {
    o(2, (u = !1));
  });
  function b() {
    o(0, (e = oi.pageYOffset));
  }
  function g(f) {
    (i = f), o(1, i);
  }
  return [e, i, u, n, s, b, g];
}
class ul extends zt {
  constructor(t) {
    super(), xt(this, t, fl, ml, _t, {});
  }
}
function dl(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u,
    b,
    g,
    f,
    h,
    v,
    p,
    d,
    c,
    _,
    x,
    I,
    N,
    T,
    C,
    B,
    L,
    Z,
    A,
    S,
    V,
    Q,
    O,
    G,
    R,
    H,
    D,
    W,
    F,
    q,
    re,
    se,
    ie,
    J,
    fe,
    ue,
    de,
    Ce,
    Fe,
    Te,
    Ne,
    Be,
    Je,
    Ie,
    we,
    De,
    Ze,
    pe,
    lt,
    Re,
    Pe,
    be,
    rt,
    st,
    Ye,
    ge,
    ht,
    nt,
    ee,
    he,
    at,
    gt,
    $,
    ke,
    oe,
    Le,
    He,
    Ge,
    Se,
    ze,
    We,
    ne,
    ce,
    qe,
    ct,
    Xe,
    le,
    Ke,
    xe,
    _e,
    ve,
    mt;
  return {
    c() {
      (t = y("footer")),
        (o = y("div")),
        (e = y("div")),
        (i = y("div")),
        (n = K("Ancestors")),
        (s = E()),
        (u = y("span")),
        (b = K("Know")),
        (g = E()),
        (f = y("div")),
        (h = K("Who We Are")),
        (v = E()),
        (p = y("div")),
        (d = y("p")),
        (c =
          K(`The National Museum of the American Indian thanks the Frye Museum and
        the y\u0259haw\u0313 Indigenous Creatives Collective for their research assistance.`)),
        (_ = E()),
        (x = y("p")),
        (I =
          K(`This project received support from the Smithsonian American Women\u2019s
        History Initiative.`)),
        (N = E()),
        (T = y("div")),
        (C = y("img")),
        (L = E()),
        (Z = y("div")),
        (A = y("div")),
        (S = y("a")),
        (V = y("img")),
        (O = E()),
        (G = y("span")),
        (R = y("img")),
        (D = E()),
        (W = y("div")),
        (F = y("a")),
        (q = y("img")),
        (se = E()),
        (ie = y("a")),
        (J = y("img")),
        (ue = E()),
        (de = y("a")),
        (Ce = y("img")),
        (Te = E()),
        (Ne = y("a")),
        (Be = y("img")),
        (Ie = E()),
        (we = y("div")),
        (De = y("a")),
        (Ze = K("Privacy")),
        (pe = y("span")),
        (lt = K("|")),
        (Re = y("a")),
        (Pe = K("Terms of Use")),
        (be = y("span")),
        (rt = K("|")),
        (st = K("\xA9 2022 Smithsonian Institution")),
        (Ye = E()),
        (ge = y("script")),
        (nt = E()),
        (ee = y("div")),
        (he = y("p")),
        (at = K("Share:")),
        (gt = E()),
        ($ = y("a")),
        (ke = y("span")),
        (oe = P("svg")),
        (Le = P("path")),
        (He = y("span")),
        (Ge = K("Twitter")),
        (Se = E()),
        (ze = y("a")),
        (We = y("span")),
        (ne = P("svg")),
        (ce = P("path")),
        (qe = y("span")),
        (ct = K("Facebook")),
        (Xe = E()),
        (le = y("a")),
        (Ke = y("span")),
        (xe = P("svg")),
        (_e = P("path")),
        (ve = y("span")),
        (mt = K("Email")),
        this.h();
    },
    l($e) {
      t = w($e, "FOOTER", { class: !0 });
      var Ae = k(t);
      o = w(Ae, "DIV", { id: !0, class: !0 });
      var me = k(o);
      e = w(me, "DIV", { id: !0, class: !0 });
      var ae = k(e);
      i = w(ae, "DIV", { class: !0 });
      var et = k(i);
      (n = U(et, "Ancestors")),
        et.forEach(a),
        (s = M(ae)),
        (u = w(ae, "SPAN", { class: !0 }));
      var At = k(u);
      (b = U(At, "Know")),
        At.forEach(a),
        (g = M(ae)),
        (f = w(ae, "DIV", { class: !0 }));
      var ft = k(f);
      (h = U(ft, "Who We Are")),
        ft.forEach(a),
        ae.forEach(a),
        (v = M(me)),
        (p = w(me, "DIV", { class: !0 }));
      var tt = k(p);
      d = w(tt, "P", { class: !0 });
      var Et = k(d);
      (c = U(
        Et,
        `The National Museum of the American Indian thanks the Frye Museum and
        the y\u0259haw\u0313 Indigenous Creatives Collective for their research assistance.`
      )),
        Et.forEach(a),
        (_ = M(tt)),
        (x = w(tt, "P", { class: !0 }));
      var ut = k(x);
      (I = U(
        ut,
        `This project received support from the Smithsonian American Women\u2019s
        History Initiative.`
      )),
        ut.forEach(a),
        (N = M(tt)),
        (T = w(tt, "DIV", { class: !0 }));
      var Mt = k(T);
      (C = w(Mt, "IMG", { src: !0, alt: !0, class: !0 })),
        Mt.forEach(a),
        tt.forEach(a),
        me.forEach(a),
        (L = M(Ae)),
        (Z = w(Ae, "DIV", { id: !0, class: !0 }));
      var it = k(Z);
      A = w(it, "DIV", { class: !0, tabindex: !0 });
      var dt = k(A);
      S = w(dt, "A", { href: !0, tabindex: !0, "aria-label": !0, class: !0 });
      var Tt = k(S);
      (V = w(Tt, "IMG", { src: !0, alt: !0, class: !0 })),
        Tt.forEach(a),
        (O = M(dt)),
        (G = w(dt, "SPAN", { class: !0 }));
      var Ee = k(G);
      (R = w(Ee, "IMG", { src: !0, alt: !0, class: !0 })),
        Ee.forEach(a),
        dt.forEach(a),
        (D = M(it)),
        (W = w(it, "DIV", { class: !0 }));
      var Ue = k(W);
      F = w(Ue, "A", { href: !0, "aria-label": !0, class: !0 });
      var Nt = k(F);
      (q = w(Nt, "IMG", { src: !0, alt: !0, class: !0 })),
        Nt.forEach(a),
        (se = M(Ue)),
        (ie = w(Ue, "A", { href: !0, "aria-label": !0, class: !0 }));
      var pt = k(ie);
      (J = w(pt, "IMG", { src: !0, alt: !0, class: !0 })),
        pt.forEach(a),
        (ue = M(Ue)),
        (de = w(Ue, "A", { href: !0, "aria-label": !0, class: !0 }));
      var It = k(de);
      (Ce = w(It, "IMG", { src: !0, alt: !0, class: !0 })),
        It.forEach(a),
        (Te = M(Ue)),
        (Ne = w(Ue, "A", { href: !0, "aria-label": !0, class: !0 }));
      var ye = k(Ne);
      (Be = w(ye, "IMG", { src: !0, alt: !0, class: !0 })),
        ye.forEach(a),
        Ue.forEach(a),
        (Ie = M(it)),
        (we = w(it, "DIV", { class: !0 }));
      var ot = k(we);
      De = w(ot, "A", { href: !0, class: !0 });
      var St = k(De);
      (Ze = U(St, "Privacy")),
        St.forEach(a),
        (pe = w(ot, "SPAN", { class: !0 }));
      var jt = k(pe);
      (lt = U(jt, "|")),
        jt.forEach(a),
        (Re = w(ot, "A", { href: !0, class: !0 }));
      var Ct = k(Re);
      (Pe = U(Ct, "Terms of Use")),
        Ct.forEach(a),
        (be = w(ot, "SPAN", { class: !0 }));
      var Bt = k(be);
      (rt = U(Bt, "|")),
        Bt.forEach(a),
        (st = U(ot, "\xA9 2022 Smithsonian Institution")),
        ot.forEach(a),
        it.forEach(a),
        (Ye = M(Ae)),
        (ge = w(Ae, "SCRIPT", { src: !0 }));
      var Ot = k(ge);
      Ot.forEach(a),
        (nt = M(Ae)),
        (ee = w(Ae, "DIV", { class: !0, style: !0 }));
      var Ve = k(ee);
      he = w(Ve, "P", { class: !0 });
      var Dt = k(he);
      (at = U(Dt, "Share:")),
        Dt.forEach(a),
        (gt = M(Ve)),
        ($ = w(Ve, "A", { class: !0, target: !0, href: !0, rel: !0 }));
      var vt = k($);
      ke = w(vt, "SPAN", { class: !0, style: !0 });
      var Rt = k(ke);
      oe = Y(Rt, "svg", {
        focusable: !0,
        "aria-hidden": !0,
        xmlns: !0,
        viewBox: !0,
        class: !0,
      });
      var Lt = k(oe);
      (Le = Y(Lt, "path", { fill: !0, d: !0, class: !0 })),
        k(Le).forEach(a),
        Lt.forEach(a),
        Rt.forEach(a),
        (He = w(vt, "SPAN", { class: !0 }));
      var Wt = k(He);
      (Ge = U(Wt, "Twitter")),
        Wt.forEach(a),
        vt.forEach(a),
        (Se = M(Ve)),
        (ze = w(Ve, "A", { class: !0, target: !0, href: !0, rel: !0 }));
      var yt = k(ze);
      We = w(yt, "SPAN", { class: !0, style: !0 });
      var Kt = k(We);
      ne = Y(Kt, "svg", {
        focusable: !0,
        "aria-hidden": !0,
        xmlns: !0,
        viewBox: !0,
        class: !0,
      });
      var bt = k(ne);
      (ce = Y(bt, "path", { fill: !0, d: !0, class: !0 })),
        k(ce).forEach(a),
        bt.forEach(a),
        Kt.forEach(a),
        (qe = w(yt, "SPAN", { class: !0 }));
      var Ut = k(qe);
      (ct = U(Ut, "Facebook")),
        Ut.forEach(a),
        yt.forEach(a),
        (Xe = M(Ve)),
        (le = w(Ve, "A", { class: !0, target: !0, href: !0, rel: !0 }));
      var je = k(le);
      Ke = w(je, "SPAN", { class: !0, style: !0 });
      var Vt = k(Ke);
      xe = Y(Vt, "svg", {
        focusable: !0,
        "aria-hidden": !0,
        xmlns: !0,
        viewBox: !0,
        class: !0,
      });
      var Zt = k(xe);
      (_e = Y(Zt, "path", { fill: !0, d: !0, class: !0 })),
        k(_e).forEach(a),
        Zt.forEach(a),
        Vt.forEach(a),
        (ve = w(je, "SPAN", { class: !0 }));
      var Pt = k(ve);
      (mt = U(Pt, "Email")),
        Pt.forEach(a),
        je.forEach(a),
        Ve.forEach(a),
        Ae.forEach(a),
        this.h();
    },
    h() {
      r(i, "class", "svelte-1u4zws"),
        r(u, "class", "svelte-1u4zws"),
        r(f, "class", "svelte-1u4zws"),
        r(e, "id", "footer-logo"),
        r(e, "class", "svelte-1u4zws"),
        r(d, "class", "svelte-1u4zws"),
        r(x, "class", "svelte-1u4zws"),
        Qe(C.src, (B = X + "/images/logo-because-of-her-story.svg")) ||
          r(C, "src", B),
        r(C, "alt", "Logo Because of her story"),
        r(C, "class", "svelte-1u4zws"),
        r(T, "class", "svelte-1u4zws"),
        r(p, "class", "description svelte-1u4zws"),
        r(o, "id", "ancestors-know"),
        r(o, "class", "svelte-1u4zws"),
        Qe(V.src, (Q = X + "/images/logo-nmai-stacked-horiz-white.svg")) ||
          r(V, "src", Q),
        r(V, "alt", "Logo National Museum of the American Indian"),
        r(V, "class", "svelte-1u4zws"),
        r(S, "href", "https://americanindian.si.edu/"),
        r(S, "tabindex", "-1"),
        r(S, "aria-label", "National Museum of the American Indian"),
        r(S, "class", "svelte-1u4zws"),
        Qe(R.src, (H = X + "/images/logo-si-horiz-white.svg")) ||
          r(R, "src", H),
        r(R, "alt", "Logo Smithsonian"),
        r(R, "class", "svelte-1u4zws"),
        r(G, "class", "svelte-1u4zws"),
        r(A, "class", "logo svelte-1u4zws"),
        r(A, "tabindex", "0"),
        Qe(q.src, (re = X + "/images/icons-twitter.svg")) || r(q, "src", re),
        r(q, "alt", "Twitter"),
        r(q, "class", "svelte-1u4zws"),
        r(F, "href", "https://twitter.com/SmithsonianNMAI"),
        r(F, "aria-label", "Twitter"),
        r(F, "class", "svelte-1u4zws"),
        Qe(J.src, (fe = X + "/images/icons-instagram.svg")) || r(J, "src", fe),
        r(J, "alt", "Instagram"),
        r(J, "class", "svelte-1u4zws"),
        r(ie, "href", "https://www.instagram.com/smithsoniannmai/"),
        r(ie, "aria-label", "Instagram"),
        r(ie, "class", "svelte-1u4zws"),
        Qe(Ce.src, (Fe = X + "/images/icons-facebook.svg")) || r(Ce, "src", Fe),
        r(Ce, "alt", "Facebook"),
        r(Ce, "class", "svelte-1u4zws"),
        r(
          de,
          "href",
          "https://www.facebook.com/NationalMuseumOfTheAmericanIndian/"
        ),
        r(de, "aria-label", "Facebook"),
        r(de, "class", "svelte-1u4zws"),
        Qe(Be.src, (Je = X + "/images/icons-youtube.svg")) || r(Be, "src", Je),
        r(Be, "alt", "Youtube"),
        r(Be, "class", "svelte-1u4zws"),
        r(Ne, "href", "https://www.youtube.com/user/SmithsonianNMAI"),
        r(Ne, "aria-label", "Youtube"),
        r(Ne, "class", "svelte-1u4zws"),
        r(W, "class", "icons svelte-1u4zws"),
        r(De, "href", "https://www.si.edu/privacy/"),
        r(De, "class", "svelte-1u4zws"),
        r(pe, "class", "svelte-1u4zws"),
        r(Re, "href", "https://www.si.edu/termsofuse/"),
        r(Re, "class", "svelte-1u4zws"),
        r(be, "class", "svelte-1u4zws"),
        r(we, "class", "menu svelte-1u4zws"),
        r(Z, "id", "nmai"),
        r(Z, "class", "svelte-1u4zws"),
        (ge.async = !0),
        Qe(ge.src, (ht = "https://static.addtoany.com/menu/page.js")) ||
          r(ge, "src", ht),
        r(he, "class", "footer--sharing-label s-CGbQ-BIh5e2Q svelte-1u4zws"),
        r(Le, "fill", "#FFF"),
        r(
          Le,
          "d",
          "M28 8.557a9.913 9.913 0 01-2.828.775 4.93 4.93 0 002.166-2.725 9.738 9.738 0 01-3.13 1.194 4.92 4.92 0 00-3.593-1.55 4.924 4.924 0 00-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 00-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 01-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 004.6 3.42 9.893 9.893 0 01-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 007.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"
        ),
        r(Le, "class", "svelte-1u4zws"),
        r(oe, "focusable", "false"),
        r(oe, "aria-hidden", "true"),
        r(oe, "xmlns", "http://www.w3.org/2000/svg"),
        r(oe, "viewBox", "0 0 32 32"),
        r(oe, "class", "svelte-1u4zws"),
        r(ke, "class", "a2a_svg a2a_s__default a2a_s_twitter svelte-1u4zws"),
        Qt(ke, "background-color", "#ffffff"),
        r(He, "class", "a2a_label svelte-1u4zws"),
        r($, "class", "a2a_button_twitter s-CGbQ-BIh5e2Q svelte-1u4zws"),
        r($, "target", "_blank"),
        r(
          $,
          "href",
          "https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Famericanindian.si.edu%2F&linkname=Ancestors%20Know%20Who%20We%20Are&linknote=The%20National%20Museum%20of%20the%20American%20Indian%E2%80%99s%20online%20exhibition%20ignites%20a%20conversation%20on%20the%20experiences%20of%20Black-Indigenous%20women%20through%20art.%20%40SmithsonianNMAI%20%23AncestorsKnow%20%23NDNsEverywhere"
        ),
        r($, "rel", "nofollow noopener"),
        r(ce, "fill", "#FFF"),
        r(
          ce,
          "d",
          "M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"
        ),
        r(ce, "class", "svelte-1u4zws"),
        r(ne, "focusable", "false"),
        r(ne, "aria-hidden", "true"),
        r(ne, "xmlns", "http://www.w3.org/2000/svg"),
        r(ne, "viewBox", "0 0 32 32"),
        r(ne, "class", "svelte-1u4zws"),
        r(We, "class", "a2a_svg a2a_s__default a2a_s_facebook svelte-1u4zws"),
        Qt(We, "background-color", "#ffffff"),
        r(qe, "class", "a2a_label svelte-1u4zws"),
        r(ze, "class", "a2a_button_facebook s-CGbQ-BIh5e2Q svelte-1u4zws"),
        r(ze, "target", "_blank"),
        r(
          ze,
          "href",
          "https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Famericanindian.si.edu%2F&linkname=Ancestors%20Know%20Who%20We%20Are&linknote=The%20National%20Museum%20of%20the%20American%20Indian%E2%80%99s%20online%20exhibition%20ignites%20a%20conversation%20on%20the%20experiences%20of%20Black-Indigenous%20women%20through%20art.%20%23AncestorsKnow%20%23NDNsEverywhere"
        ),
        r(ze, "rel", "nofollow noopener"),
        r(_e, "fill", "#FFF"),
        r(
          _e,
          "d",
          "M26 21.25v-9s-9.1 6.35-9.984 6.68C15.144 18.616 6 12.25 6 12.25v9c0 1.25.266 1.5 1.5 1.5h17c1.266 0 1.5-.22 1.5-1.5zm-.015-10.765c0-.91-.265-1.235-1.485-1.235h-17c-1.255 0-1.5.39-1.5 1.3l.015.14s9.035 6.22 10 6.56c1.02-.395 9.985-6.7 9.985-6.7l-.015-.065z"
        ),
        r(_e, "class", "svelte-1u4zws"),
        r(xe, "focusable", "false"),
        r(xe, "aria-hidden", "true"),
        r(xe, "xmlns", "http://www.w3.org/2000/svg"),
        r(xe, "viewBox", "0 0 32 32"),
        r(xe, "class", "svelte-1u4zws"),
        r(Ke, "class", "a2a_svg a2a_s__default a2a_s_email svelte-1u4zws"),
        Qt(Ke, "background-color", "#ffffff"),
        r(ve, "class", "a2a_label svelte-1u4zws"),
        r(le, "class", "a2a_button_email s-CGbQ-BIh5e2Q svelte-1u4zws"),
        r(le, "target", "_blank"),
        r(
          le,
          "href",
          "https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Famericanindian.si.edu%2F&linkname=Ancestors%20Know%20Who%20We%20Are&linknote=Through%20artistic%20expression%20and%20reflection%2C%20the%20online%20exhibition%20Ancestors%20Know%20Who%20We%20Are%20explores%20contemporary%20realities%20in%20the%20interwoven%20histories%20of%20Black%20and%20Indigenous%20peoples.%0A%0Ahttps%3A%2F%2Famericanindian.si.edu%2Fancestors-know%0A"
        ),
        r(le, "rel", "nofollow noopener"),
        r(
          ee,
          "class",
          "a2a_kit a2a_kit_size_32 a2a_default_style footer--sharing-icons s-CGbQ-BIh5e2Q svelte-1u4zws"
        ),
        Qt(ee, "line-height", "32px"),
        r(t, "class", "svelte-1u4zws");
    },
    m($e, Ae) {
      z($e, t, Ae),
        m(t, o),
        m(o, e),
        m(e, i),
        m(i, n),
        m(e, s),
        m(e, u),
        m(u, b),
        m(e, g),
        m(e, f),
        m(f, h),
        m(o, v),
        m(o, p),
        m(p, d),
        m(d, c),
        m(p, _),
        m(p, x),
        m(x, I),
        m(p, N),
        m(p, T),
        m(T, C),
        m(t, L),
        m(t, Z),
        m(Z, A),
        m(A, S),
        m(S, V),
        m(A, O),
        m(A, G),
        m(G, R),
        m(Z, D),
        m(Z, W),
        m(W, F),
        m(F, q),
        m(W, se),
        m(W, ie),
        m(ie, J),
        m(W, ue),
        m(W, de),
        m(de, Ce),
        m(W, Te),
        m(W, Ne),
        m(Ne, Be),
        m(Z, Ie),
        m(Z, we),
        m(we, De),
        m(De, Ze),
        m(we, pe),
        m(pe, lt),
        m(we, Re),
        m(Re, Pe),
        m(we, be),
        m(be, rt),
        m(we, st),
        m(t, Ye),
        m(t, ge),
        m(t, nt),
        m(t, ee),
        m(ee, he),
        m(he, at),
        m(ee, gt),
        m(ee, $),
        m($, ke),
        m(ke, oe),
        m(oe, Le),
        m($, He),
        m(He, Ge),
        m(ee, Se),
        m(ee, ze),
        m(ze, We),
        m(We, ne),
        m(ne, ce),
        m(ze, qe),
        m(qe, ct),
        m(ee, Xe),
        m(ee, le),
        m(le, Ke),
        m(Ke, xe),
        m(xe, _e),
        m(le, ve),
        m(ve, mt);
    },
    p: Oe,
    i: Oe,
    o: Oe,
    d($e) {
      $e && a(t);
    },
  };
}
class pl extends zt {
  constructor(t) {
    super(), xt(this, t, null, dl, _t, {});
  }
}
function bl(l) {
  let t, o, e, i, n, s, u, b, g, f, h, v, p, d, c, _, x, I, N, T, C, B, L;
  return {
    c() {
      (t = P("svg")),
        (o = P("defs")),
        (e = P("symbol")),
        (i = P("path")),
        (n = P("symbol")),
        (s = P("path")),
        (u = P("path")),
        (b = P("path")),
        (g = P("symbol")),
        (f = P("path")),
        (h = P("path")),
        (v = P("symbol")),
        (p = P("path")),
        (d = P("symbol")),
        (c = P("path")),
        (_ = P("symbol")),
        (x = P("path")),
        (I = P("symbol")),
        (N = P("path")),
        (T = P("symbol")),
        (C = P("path")),
        (B = P("symbol")),
        (L = P("path")),
        this.h();
    },
    l(Z) {
      t = Y(Z, "svg", {
        style: !0,
        version: !0,
        xmlns: !0,
        "xmlns:xlink": !0,
        class: !0,
      });
      var A = k(t);
      o = Y(A, "defs", {});
      var S = k(o);
      e = Y(S, "symbol", { id: !0, viewBox: !0 });
      var V = k(e);
      (i = Y(V, "path", { d: !0, fill: !0 })),
        k(i).forEach(a),
        V.forEach(a),
        (n = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var Q = k(n);
      (s = Y(Q, "path", { d: !0 })),
        k(s).forEach(a),
        (u = Y(Q, "path", { d: !0 })),
        k(u).forEach(a),
        (b = Y(Q, "path", { d: !0 })),
        k(b).forEach(a),
        Q.forEach(a),
        (g = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var O = k(g);
      (f = Y(O, "path", { d: !0 })),
        k(f).forEach(a),
        (h = Y(O, "path", { d: !0 })),
        k(h).forEach(a),
        O.forEach(a),
        (v = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var G = k(v);
      (p = Y(G, "path", { d: !0 })),
        k(p).forEach(a),
        G.forEach(a),
        (d = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var R = k(d);
      (c = Y(R, "path", { d: !0 })),
        k(c).forEach(a),
        R.forEach(a),
        (_ = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var H = k(_);
      (x = Y(H, "path", { d: !0 })),
        k(x).forEach(a),
        H.forEach(a),
        (I = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var D = k(I);
      (N = Y(D, "path", { d: !0 })),
        k(N).forEach(a),
        D.forEach(a),
        (T = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var W = k(T);
      (C = Y(W, "path", { d: !0 })),
        k(C).forEach(a),
        W.forEach(a),
        (B = Y(S, "symbol", { id: !0, viewBox: !0 }));
      var F = k(B);
      (L = Y(F, "path", { d: !0 })),
        k(L).forEach(a),
        F.forEach(a),
        S.forEach(a),
        A.forEach(a),
        this.h();
    },
    h() {
      r(
        i,
        "d",
        "M27.5 52.5L40 67.5L57.5 45L80 75H10L27.5 52.5ZM90 80V10C90 4.45 85.5 0 80 0H10C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10V80C0 82.6522 1.05357 85.1957 2.92893 87.0711C4.8043 88.9464 7.34784 90 10 90H80C82.6522 90 85.1957 88.9464 87.0711 87.0711C88.9464 85.1957 90 82.6522 90 80Z"
      ),
        r(i, "fill", "#ADADAE"),
        r(e, "id", "symbol-placeholder"),
        r(e, "viewBox", "0 0 90 90"),
        r(
          s,
          "d",
          "M1.6 5.4h28.8c0.8 0 1.6 0.8 1.6 1.6v0 0c0 0.8-0.8 1.6-1.6 1.6h-28.8c-0.8 0-1.6-0.6-1.6-1.6v0 0c0-0.8 0.8-1.6 1.6-1.6z"
        ),
        r(
          u,
          "d",
          "M1.6 14.4h28.8c0.8 0 1.6 0.8 1.6 1.6v0 0c0 0.8-0.8 1.6-1.6 1.6h-28.8c-0.8 0-1.6-0.8-1.6-1.6v0 0c0-0.8 0.8-1.6 1.6-1.6z"
        ),
        r(
          b,
          "d",
          "M1.6 23.4h28.8c0.8 0 1.6 0.8 1.6 1.6v0 0c0 0.8-0.8 1.6-1.6 1.6h-28.8c-0.8 0-1.6-0.8-1.6-1.6v0 0c0-1 0.8-1.6 1.6-1.6z"
        ),
        r(n, "id", "symbol-menu"),
        r(n, "viewBox", "0 0 32 32"),
        r(
          f,
          "d",
          "M0.6 28.4l27.8-27.8c0.8-0.8 2.2-0.8 3 0v0 0c0.8 0.8 0.8 2.2 0 3l-27.8 27.8c-0.8 0.8-2.2 0.8-3 0v0 0c-0.8-0.8-0.8-2.2 0-3z"
        ),
        r(
          h,
          "d",
          "M3.6 0.6l27.8 27.8c0.8 0.8 0.8 2.2 0 3v0 0c-0.8 0.8-2.2 0.8-3 0l-27.8-27.8c-0.8-0.8-0.8-2.2 0-3v0 0c0.8-0.8 2.2-0.8 3 0z"
        ),
        r(g, "id", "symbol-close"),
        r(g, "viewBox", "-1 0 34 32"),
        r(
          p,
          "d",
          "M31.4 28.6l-6.2-6.2c1.8-2.4 2.8-5.2 2.8-8.4 0-7.8-6.2-14-14-14s-14 6.2-14 14 6.2 14 14 14c3.2 0 6-1 8.4-2.8l6.2 6.2c0.4 0.4 1 0.6 1.4 0.6 0.6 0 1-0.2 1.4-0.6 0.8-0.8 0.8-2 0-2.8v0zM4 14c0-5.6 4.4-10 10-10s10 4.4 10 10-4.4 10-10 10-10-4.4-10-10v0z"
        ),
        r(v, "id", "symbol-search"),
        r(v, "viewBox", "-1 0 34 32"),
        r(
          c,
          "d",
          "M0.2 10.4l14.4 14.4c0.8 0.8 2 0.8 2.6 0l14.4-14.4c0.4-0.4 0.4-1 0.2-1.4l-1.4-1.4c-0.4-0.4-1-0.4-1.4 0l-12.4 12.4c-0.4 0.4-1 0.4-1.4 0l-12.2-12.2c-0.4-0.4-1-0.4-1.4 0l-1.4 1.2c-0.2 0.4-0.2 1 0 1.4z"
        ),
        r(d, "id", "symbol-open"),
        r(d, "viewBox", "0 0 32 32"),
        r(
          x,
          "d",
          "M7.74173 1.75893L6.31016 0.32743L0.637611 5.99907L6.31025 11.6716L7.74173 10.2407L4.50065 6.99966H17.0007V4.99966H4.50065L7.74173 1.75893Z"
        ),
        r(_, "id", "symbol-arrow-left"),
        r(_, "viewBox", "0 0 17 12"),
        r(
          N,
          "d",
          "M21.7524 18.0474C22.4574 19.3597 21.5725 21 20.1644 21H1.83541C0.424618 21 -0.456222 19.3571 0.247396 18.0474L9.412 0.98376C10.1173 -0.329109 11.8839 -0.32673 12.588 0.98376L21.7524 18.0474ZM11 14.5195C10.0297 14.5195 9.24306 15.3642 9.24306 16.4062C9.24306 17.4483 10.0297 18.293 11 18.293C11.9703 18.293 12.757 17.4483 12.757 16.4062C12.757 15.3642 11.9703 14.5195 11 14.5195ZM9.33194 7.73776L9.61527 13.3159C9.62852 13.5769 9.8295 13.7812 10.0729 13.7812H11.9271C12.1705 13.7812 12.3715 13.5769 12.3847 13.3159L12.6681 7.73776C12.6824 7.45582 12.4734 7.21875 12.2104 7.21875H9.78955C9.52662 7.21875 9.31762 7.45582 9.33194 7.73776Z"
        ),
        r(I, "id", "symbol-alert"),
        r(I, "viewBox", "-1 -1 24 24"),
        r(
          C,
          "d",
          "M6.71875 2.25L3.9375 5H0.75C0.3125 5 0 5.34375 0 5.75V10.25C0 10.6875 0.3125 11 0.75 11H3.9375L6.71875 13.7812C7.1875 14.25 8 13.9375 8 13.25V2.78125C8 2.09375 7.1875 1.78125 6.71875 2.25ZM14 0.625C13.6562 0.40625 13.1875 0.5 12.9375 0.84375C12.7188 1.21875 12.8125 1.6875 13.1562 1.90625C15.25 3.25 16.4688 5.5625 16.4688 8.03125C16.4688 10.4688 15.25 12.7812 13.1562 14.125C12.8125 14.3438 12.7188 14.8125 12.9375 15.1875C13.1562 15.5 13.625 15.625 14 15.4062C16.5 13.75 18 11 18 8C18 5.03125 16.5 2.28125 14 0.625ZM15 8C15 6.03125 13.9688 4.21875 12.3125 3.125C11.9688 2.90625 11.5 3 11.2812 3.375C11.0625 3.71875 11.1562 4.1875 11.5 4.40625C12.75 5.1875 13.5 6.5625 13.5 8C13.5 9.46875 12.75 10.8438 11.5 11.625C11.1562 11.8438 11.0625 12.3125 11.2812 12.6562C11.4688 13 11.9375 13.125 12.3125 12.9062C13.9688 11.8125 15 10 15 8ZM10.5625 5.625C10.1875 5.40625 9.75 5.53125 9.53125 5.90625C9.34375 6.28125 9.46875 6.71875 9.84375 6.9375C10.2188 7.15625 10.5 7.5625 10.5 8C10.5 8.46875 10.2188 8.875 9.84375 9.09375C9.46875 9.3125 9.34375 9.75 9.53125 10.125C9.75 10.5 10.1875 10.625 10.5625 10.4062C11.4375 9.9375 12 9 12 8C12 7.03125 11.4375 6.09375 10.5625 5.625Z"
        ),
        r(T, "id", "volume-up"),
        r(T, "viewBox", "0 0 18 16"),
        r(
          L,
          "d",
          "M25.7143 1.71429C25.7143 0.767512 24.9468 0 24 0C23.0532 0 22.2857 0.767512 22.2857 1.71429V27.9373L15.0159 19.4559C14.3997 18.737 13.3175 18.6538 12.5987 19.2699C11.8798 19.8861 11.7966 20.9683 12.4127 21.6871L22.6926 33.6803C22.7229 33.716 22.7547 33.7505 22.7878 33.7836C22.8337 33.8295 22.8822 33.8728 22.933 33.9133C23.2339 34.1525 23.6093 34.2858 24 34.2858C24.0408 34.2858 24.0814 34.2843 24.1218 34.2815C24.577 34.2491 25.0025 34.0361 25.3016 33.6871L35.5873 21.6871C36.2035 20.9683 36.1202 19.8861 35.4014 19.2699C34.6825 18.6538 33.6003 18.737 32.9842 19.4559L25.7143 27.9374V1.71429ZM1.71429 34.2856C2.66106 34.2856 3.42857 35.0532 3.42857 35.9999V39.4285C3.42857 40.7925 3.97041 42.1006 4.93488 43.065C5.89935 44.0295 7.20746 44.5714 8.57143 44.5714H39.4286C40.7925 44.5714 42.1006 44.0295 43.0651 43.065C44.0296 42.1006 44.5714 40.7925 44.5714 39.4285V35.9999C44.5714 35.0532 45.3389 34.2856 46.2857 34.2856C47.2325 34.2856 48 35.0532 48 35.9999V39.4285C48 41.7018 47.0969 43.882 45.4895 45.4894C43.882 47.0969 41.7019 47.9999 39.4286 47.9999H8.57143C6.29814 47.9999 4.11797 47.0969 2.51051 45.4894C0.903059 43.882 0 41.7018 0 39.4285V35.9999C0 35.0532 0.767512 34.2856 1.71429 34.2856Z"
        ),
        r(B, "id", "download-icon"),
        r(B, "viewBox", "0 0 48 48"),
        Qt(t, "display", "none"),
        r(t, "version", "1.1"),
        r(t, "xmlns", "http://www.w3.org/2000/svg"),
        r(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        r(t, "class", "svelte-1rdv4v2");
    },
    m(Z, A) {
      z(Z, t, A),
        m(t, o),
        m(o, e),
        m(e, i),
        m(o, n),
        m(n, s),
        m(n, u),
        m(n, b),
        m(o, g),
        m(g, f),
        m(g, h),
        m(o, v),
        m(v, p),
        m(o, d),
        m(d, c),
        m(o, _),
        m(_, x),
        m(o, I),
        m(I, N),
        m(o, T),
        m(T, C),
        m(o, B),
        m(B, L);
    },
    p: Oe,
    i: Oe,
    o: Oe,
    d(Z) {
      Z && a(t);
    },
  };
}
class hl extends zt {
  constructor(t) {
    super(), xt(this, t, null, bl, _t, {});
  }
}
function mi(l, t, o) {
  const e = l.slice();
  return (e[16] = t[o]), e;
}
function fi(l, t, o) {
  const e = l.slice();
  return (e[16] = t[o]), e;
}
function ui(l, t, o) {
  const e = l.slice();
  return (e[21] = t[o]), e;
}
function di(l, t, o) {
  const e = l.slice();
  return (e[24] = t[o]), e;
}
function pi(l, t, o) {
  const e = l.slice();
  return (e[16] = t[o]), e;
}
function bi(l, t, o) {
  const e = l.slice();
  return (e[38] = t[o]), e;
}
function hi(l, t, o) {
  const e = l.slice();
  return (e[41] = t[o]), e;
}
function vi(l, t, o) {
  const e = l.slice();
  return (e[44] = t[o]), e;
}
function yi(l, t, o) {
  const e = l.slice();
  return (e[16] = t[o]), e;
}
function wi(l, t, o) {
  const e = l.slice();
  return (e[29] = t[o]), e;
}
function ki(l, t, o) {
  const e = l.slice();
  return (e[16] = t[o]), e;
}
function zi(l, t, o) {
  const e = l.slice();
  return (e[29] = t[o]), e;
}
function xi(l, t, o) {
  const e = l.slice();
  return (e[47] = t[o]), e;
}
function _i(l) {
  let t;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(o) {
      (t = w(o, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "description"), r(t, "content", l[2]);
    },
    m(o, e) {
      z(o, t, e);
    },
    p(o, e) {
      e[0] & 4 && r(t, "content", o[2]);
    },
    d(o) {
      o && a(t);
    },
  };
}
function Ai(l) {
  let t;
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(o) {
      (t = w(o, "LINK", { rel: !0, href: !0 })), this.h();
    },
    h() {
      r(t, "rel", "canonical"), r(t, "href", l[8]);
    },
    m(o, e) {
      z(o, t, e);
    },
    p(o, e) {
      e[0] & 256 && r(t, "href", o[8]);
    },
    d(o) {
      o && a(t);
    },
  };
}
function Ei(l) {
  let t, o, e;
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(i) {
      (t = w(i, "LINK", { rel: !0, media: !0, href: !0 })), this.h();
    },
    h() {
      r(t, "rel", "alternate"),
        r(t, "media", (o = l[3].media)),
        r(t, "href", (e = l[3].href));
    },
    m(i, n) {
      z(i, t, n);
    },
    p(i, n) {
      n[0] & 8 && o !== (o = i[3].media) && r(t, "media", o),
        n[0] & 8 && e !== (e = i[3].href) && r(t, "href", e);
    },
    d(i) {
      i && a(t);
    },
  };
}
function Mi(l) {
  let t,
    o = l[4],
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Ti(xi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 16) {
        o = i[4];
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = xi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Ti(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Ti(l) {
  let t, o, e;
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(i) {
      (t = w(i, "LINK", { rel: !0, hreflang: !0, href: !0 })), this.h();
    },
    h() {
      r(t, "rel", "alternate"),
        r(t, "hreflang", (o = l[47].hrefLang)),
        r(t, "href", (e = l[47].href));
    },
    m(i, n) {
      z(i, t, n);
    },
    p(i, n) {
      n[0] & 16 && o !== (o = i[47].hrefLang) && r(t, "hreflang", o),
        n[0] & 16 && e !== (e = i[47].href) && r(t, "href", e);
    },
    d(i) {
      i && a(t);
    },
  };
}
function Ni(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u,
    b = l[5].cardType && Ii(l),
    g = l[5].site && Si(l),
    f = l[5].handle && ji(l),
    h = l[5].title && Ci(l),
    v = l[5].description && Bi(l),
    p = l[5].image && Di(l),
    d = l[5].imageAlt && Ri(l);
  return {
    c() {
      b && b.c(),
        (t = E()),
        g && g.c(),
        (o = E()),
        f && f.c(),
        (e = E()),
        h && h.c(),
        (i = E()),
        v && v.c(),
        (n = E()),
        p && p.c(),
        (s = E()),
        d && d.c(),
        (u = j());
    },
    l(c) {
      b && b.l(c),
        (t = M(c)),
        g && g.l(c),
        (o = M(c)),
        f && f.l(c),
        (e = M(c)),
        h && h.l(c),
        (i = M(c)),
        v && v.l(c),
        (n = M(c)),
        p && p.l(c),
        (s = M(c)),
        d && d.l(c),
        (u = j());
    },
    m(c, _) {
      b && b.m(c, _),
        z(c, t, _),
        g && g.m(c, _),
        z(c, o, _),
        f && f.m(c, _),
        z(c, e, _),
        h && h.m(c, _),
        z(c, i, _),
        v && v.m(c, _),
        z(c, n, _),
        p && p.m(c, _),
        z(c, s, _),
        d && d.m(c, _),
        z(c, u, _);
    },
    p(c, _) {
      c[5].cardType
        ? b
          ? b.p(c, _)
          : ((b = Ii(c)), b.c(), b.m(t.parentNode, t))
        : b && (b.d(1), (b = null)),
        c[5].site
          ? g
            ? g.p(c, _)
            : ((g = Si(c)), g.c(), g.m(o.parentNode, o))
          : g && (g.d(1), (g = null)),
        c[5].handle
          ? f
            ? f.p(c, _)
            : ((f = ji(c)), f.c(), f.m(e.parentNode, e))
          : f && (f.d(1), (f = null)),
        c[5].title
          ? h
            ? h.p(c, _)
            : ((h = Ci(c)), h.c(), h.m(i.parentNode, i))
          : h && (h.d(1), (h = null)),
        c[5].description
          ? v
            ? v.p(c, _)
            : ((v = Bi(c)), v.c(), v.m(n.parentNode, n))
          : v && (v.d(1), (v = null)),
        c[5].image
          ? p
            ? p.p(c, _)
            : ((p = Di(c)), p.c(), p.m(s.parentNode, s))
          : p && (p.d(1), (p = null)),
        c[5].imageAlt
          ? d
            ? d.p(c, _)
            : ((d = Ri(c)), d.c(), d.m(u.parentNode, u))
          : d && (d.d(1), (d = null));
    },
    d(c) {
      b && b.d(c),
        c && a(t),
        g && g.d(c),
        c && a(o),
        f && f.d(c),
        c && a(e),
        h && h.d(c),
        c && a(i),
        v && v.d(c),
        c && a(n),
        p && p.d(c),
        c && a(s),
        d && d.d(c),
        c && a(u);
    },
  };
}
function Ii(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:card"), r(t, "content", (o = l[5].cardType));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].cardType) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Si(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:site"), r(t, "content", (o = l[5].site));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].site) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function ji(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:creator"), r(t, "content", (o = l[5].handle));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].handle) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Ci(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:title"), r(t, "content", (o = l[5].title));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].title) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Bi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:description"),
        r(t, "content", (o = l[5].description));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].description) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Di(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:image"), r(t, "content", (o = l[5].image));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].image) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Ri(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { name: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "name", "twitter:image:alt"), r(t, "content", (o = l[5].imageAlt));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 32 && o !== (o = e[5].imageAlt) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Li(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "fb:app_id"), r(t, "content", (o = l[6].appId));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 64 && o !== (o = e[6].appId) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Wi(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u,
    b,
    g = (l[7].url || l[8]) && Ki(l),
    f = l[7].type && Ui(l),
    h = (l[7].title || l[12]) && yo(l),
    v = (l[7].description || l[2]) && wo(l),
    p = l[7].images && l[7].images.length && ko(l),
    d = l[7].videos && l[7].videos.length && Eo(l),
    c = l[7].locale && Co(l),
    _ = l[7].site_name && Bo(l);
  return {
    c() {
      g && g.c(),
        (t = E()),
        f && f.c(),
        (o = E()),
        h && h.c(),
        (e = E()),
        v && v.c(),
        (i = E()),
        p && p.c(),
        (n = E()),
        d && d.c(),
        (s = E()),
        c && c.c(),
        (u = E()),
        _ && _.c(),
        (b = j());
    },
    l(x) {
      g && g.l(x),
        (t = M(x)),
        f && f.l(x),
        (o = M(x)),
        h && h.l(x),
        (e = M(x)),
        v && v.l(x),
        (i = M(x)),
        p && p.l(x),
        (n = M(x)),
        d && d.l(x),
        (s = M(x)),
        c && c.l(x),
        (u = M(x)),
        _ && _.l(x),
        (b = j());
    },
    m(x, I) {
      g && g.m(x, I),
        z(x, t, I),
        f && f.m(x, I),
        z(x, o, I),
        h && h.m(x, I),
        z(x, e, I),
        v && v.m(x, I),
        z(x, i, I),
        p && p.m(x, I),
        z(x, n, I),
        d && d.m(x, I),
        z(x, s, I),
        c && c.m(x, I),
        z(x, u, I),
        _ && _.m(x, I),
        z(x, b, I);
    },
    p(x, I) {
      x[7].url || x[8]
        ? g
          ? g.p(x, I)
          : ((g = Ki(x)), g.c(), g.m(t.parentNode, t))
        : g && (g.d(1), (g = null)),
        x[7].type
          ? f
            ? f.p(x, I)
            : ((f = Ui(x)), f.c(), f.m(o.parentNode, o))
          : f && (f.d(1), (f = null)),
        x[7].title || x[12]
          ? h
            ? h.p(x, I)
            : ((h = yo(x)), h.c(), h.m(e.parentNode, e))
          : h && (h.d(1), (h = null)),
        x[7].description || x[2]
          ? v
            ? v.p(x, I)
            : ((v = wo(x)), v.c(), v.m(i.parentNode, i))
          : v && (v.d(1), (v = null)),
        x[7].images && x[7].images.length
          ? p
            ? p.p(x, I)
            : ((p = ko(x)), p.c(), p.m(n.parentNode, n))
          : p && (p.d(1), (p = null)),
        x[7].videos && x[7].videos.length
          ? d
            ? d.p(x, I)
            : ((d = Eo(x)), d.c(), d.m(s.parentNode, s))
          : d && (d.d(1), (d = null)),
        x[7].locale
          ? c
            ? c.p(x, I)
            : ((c = Co(x)), c.c(), c.m(u.parentNode, u))
          : c && (c.d(1), (c = null)),
        x[7].site_name
          ? _
            ? _.p(x, I)
            : ((_ = Bo(x)), _.c(), _.m(b.parentNode, b))
          : _ && (_.d(1), (_ = null));
    },
    d(x) {
      g && g.d(x),
        x && a(t),
        f && f.d(x),
        x && a(o),
        h && h.d(x),
        x && a(e),
        v && v.d(x),
        x && a(i),
        p && p.d(x),
        x && a(n),
        d && d.d(x),
        x && a(s),
        c && c.d(x),
        x && a(u),
        _ && _.d(x),
        x && a(b);
    },
  };
}
function Ki(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:url"), r(t, "content", (o = l[7].url || l[8]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 384 && o !== (o = e[7].url || e[8]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Ui(l) {
  let t, o, e, i, n, s, u, b;
  function g(v, p) {
    if (
      (p[0] & 128 && (i = null),
      p[0] & 128 && (n = null),
      p[0] & 128 && (s = null),
      p[0] & 128 && (u = null),
      i == null &&
        (i = !!(v[7].type.toLowerCase() === "profile" && v[7].profile)),
      i)
    )
      return kl;
    if (
      (n == null && (n = !!(v[7].type.toLowerCase() === "book" && v[7].book)),
      n)
    )
      return wl;
    if (
      (s == null &&
        (s = !!(v[7].type.toLowerCase() === "article" && v[7].article)),
      s)
    )
      return yl;
    if (
      (u == null &&
        (u = !!(
          v[7].type.toLowerCase() === "video.movie" ||
          v[7].type.toLowerCase() === "video.episode" ||
          v[7].type.toLowerCase() === "video.tv_show" ||
          (v[7].type.toLowerCase() === "video.other" && v[7].video)
        )),
      u)
    )
      return vl;
  }
  let f = g(l, [-1, -1]),
    h = f && f(l);
  return {
    c() {
      (t = y("meta")), (e = E()), h && h.c(), (b = j()), this.h();
    },
    l(v) {
      (t = w(v, "META", { property: !0, content: !0 })),
        (e = M(v)),
        h && h.l(v),
        (b = j()),
        this.h();
    },
    h() {
      r(t, "property", "og:type"),
        r(t, "content", (o = l[7].type.toLowerCase()));
    },
    m(v, p) {
      z(v, t, p), z(v, e, p), h && h.m(v, p), z(v, b, p);
    },
    p(v, p) {
      p[0] & 128 && o !== (o = v[7].type.toLowerCase()) && r(t, "content", o),
        f === (f = g(v, p)) && h
          ? h.p(v, p)
          : (h && h.d(1), (h = f && f(v)), h && (h.c(), h.m(b.parentNode, b)));
    },
    d(v) {
      v && a(t), v && a(e), h && h.d(v), v && a(b);
    },
  };
}
function vl(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u,
    b = l[7].video.actors && l[7].video.actors.length && Vi(l),
    g = l[7].video.directors && l[7].video.directors.length && Hi(l),
    f = l[7].video.writers && l[7].video.writers.length && qi(l),
    h = l[7].video.duration && Qi(l),
    v = l[7].video.releaseDate && Oi(l),
    p = l[7].video.tags && l[7].video.tags.length && Fi(l),
    d = l[7].video.series && $i(l);
  return {
    c() {
      b && b.c(),
        (t = E()),
        g && g.c(),
        (o = E()),
        f && f.c(),
        (e = E()),
        h && h.c(),
        (i = E()),
        v && v.c(),
        (n = E()),
        p && p.c(),
        (s = E()),
        d && d.c(),
        (u = j());
    },
    l(c) {
      b && b.l(c),
        (t = M(c)),
        g && g.l(c),
        (o = M(c)),
        f && f.l(c),
        (e = M(c)),
        h && h.l(c),
        (i = M(c)),
        v && v.l(c),
        (n = M(c)),
        p && p.l(c),
        (s = M(c)),
        d && d.l(c),
        (u = j());
    },
    m(c, _) {
      b && b.m(c, _),
        z(c, t, _),
        g && g.m(c, _),
        z(c, o, _),
        f && f.m(c, _),
        z(c, e, _),
        h && h.m(c, _),
        z(c, i, _),
        v && v.m(c, _),
        z(c, n, _),
        p && p.m(c, _),
        z(c, s, _),
        d && d.m(c, _),
        z(c, u, _);
    },
    p(c, _) {
      c[7].video.actors && c[7].video.actors.length
        ? b
          ? b.p(c, _)
          : ((b = Vi(c)), b.c(), b.m(t.parentNode, t))
        : b && (b.d(1), (b = null)),
        c[7].video.directors && c[7].video.directors.length
          ? g
            ? g.p(c, _)
            : ((g = Hi(c)), g.c(), g.m(o.parentNode, o))
          : g && (g.d(1), (g = null)),
        c[7].video.writers && c[7].video.writers.length
          ? f
            ? f.p(c, _)
            : ((f = qi(c)), f.c(), f.m(e.parentNode, e))
          : f && (f.d(1), (f = null)),
        c[7].video.duration
          ? h
            ? h.p(c, _)
            : ((h = Qi(c)), h.c(), h.m(i.parentNode, i))
          : h && (h.d(1), (h = null)),
        c[7].video.releaseDate
          ? v
            ? v.p(c, _)
            : ((v = Oi(c)), v.c(), v.m(n.parentNode, n))
          : v && (v.d(1), (v = null)),
        c[7].video.tags && c[7].video.tags.length
          ? p
            ? p.p(c, _)
            : ((p = Fi(c)), p.c(), p.m(s.parentNode, s))
          : p && (p.d(1), (p = null)),
        c[7].video.series
          ? d
            ? d.p(c, _)
            : ((d = $i(c)), d.c(), d.m(u.parentNode, u))
          : d && (d.d(1), (d = null));
    },
    d(c) {
      b && b.d(c),
        c && a(t),
        g && g.d(c),
        c && a(o),
        f && f.d(c),
        c && a(e),
        h && h.d(c),
        c && a(i),
        v && v.d(c),
        c && a(n),
        p && p.d(c),
        c && a(s),
        d && d.d(c),
        c && a(u);
    },
  };
}
function yl(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u = l[7].article.publishedTime && eo(l),
    b = l[7].article.modifiedTime && to(l),
    g = l[7].article.expirationTime && io(l),
    f = l[7].article.authors && l[7].article.authors.length && oo(l),
    h = l[7].article.section && ro(l),
    v = l[7].article.tags && l[7].article.tags.length && so(l);
  return {
    c() {
      u && u.c(),
        (t = E()),
        b && b.c(),
        (o = E()),
        g && g.c(),
        (e = E()),
        f && f.c(),
        (i = E()),
        h && h.c(),
        (n = E()),
        v && v.c(),
        (s = j());
    },
    l(p) {
      u && u.l(p),
        (t = M(p)),
        b && b.l(p),
        (o = M(p)),
        g && g.l(p),
        (e = M(p)),
        f && f.l(p),
        (i = M(p)),
        h && h.l(p),
        (n = M(p)),
        v && v.l(p),
        (s = j());
    },
    m(p, d) {
      u && u.m(p, d),
        z(p, t, d),
        b && b.m(p, d),
        z(p, o, d),
        g && g.m(p, d),
        z(p, e, d),
        f && f.m(p, d),
        z(p, i, d),
        h && h.m(p, d),
        z(p, n, d),
        v && v.m(p, d),
        z(p, s, d);
    },
    p(p, d) {
      p[7].article.publishedTime
        ? u
          ? u.p(p, d)
          : ((u = eo(p)), u.c(), u.m(t.parentNode, t))
        : u && (u.d(1), (u = null)),
        p[7].article.modifiedTime
          ? b
            ? b.p(p, d)
            : ((b = to(p)), b.c(), b.m(o.parentNode, o))
          : b && (b.d(1), (b = null)),
        p[7].article.expirationTime
          ? g
            ? g.p(p, d)
            : ((g = io(p)), g.c(), g.m(e.parentNode, e))
          : g && (g.d(1), (g = null)),
        p[7].article.authors && p[7].article.authors.length
          ? f
            ? f.p(p, d)
            : ((f = oo(p)), f.c(), f.m(i.parentNode, i))
          : f && (f.d(1), (f = null)),
        p[7].article.section
          ? h
            ? h.p(p, d)
            : ((h = ro(p)), h.c(), h.m(n.parentNode, n))
          : h && (h.d(1), (h = null)),
        p[7].article.tags && p[7].article.tags.length
          ? v
            ? v.p(p, d)
            : ((v = so(p)), v.c(), v.m(s.parentNode, s))
          : v && (v.d(1), (v = null));
    },
    d(p) {
      u && u.d(p),
        p && a(t),
        b && b.d(p),
        p && a(o),
        g && g.d(p),
        p && a(e),
        f && f.d(p),
        p && a(i),
        h && h.d(p),
        p && a(n),
        v && v.d(p),
        p && a(s);
    },
  };
}
function wl(l) {
  let t,
    o,
    e,
    i,
    n = l[7].book.authors && l[7].book.authors.length && ao(l),
    s = l[7].book.isbn && co(l),
    u = l[7].book.releaseDate && mo(l),
    b = l[7].book.tags && l[7].book.tags.length && fo(l);
  return {
    c() {
      n && n.c(),
        (t = E()),
        s && s.c(),
        (o = E()),
        u && u.c(),
        (e = E()),
        b && b.c(),
        (i = j());
    },
    l(g) {
      n && n.l(g),
        (t = M(g)),
        s && s.l(g),
        (o = M(g)),
        u && u.l(g),
        (e = M(g)),
        b && b.l(g),
        (i = j());
    },
    m(g, f) {
      n && n.m(g, f),
        z(g, t, f),
        s && s.m(g, f),
        z(g, o, f),
        u && u.m(g, f),
        z(g, e, f),
        b && b.m(g, f),
        z(g, i, f);
    },
    p(g, f) {
      g[7].book.authors && g[7].book.authors.length
        ? n
          ? n.p(g, f)
          : ((n = ao(g)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null)),
        g[7].book.isbn
          ? s
            ? s.p(g, f)
            : ((s = co(g)), s.c(), s.m(o.parentNode, o))
          : s && (s.d(1), (s = null)),
        g[7].book.releaseDate
          ? u
            ? u.p(g, f)
            : ((u = mo(g)), u.c(), u.m(e.parentNode, e))
          : u && (u.d(1), (u = null)),
        g[7].book.tags && g[7].book.tags.length
          ? b
            ? b.p(g, f)
            : ((b = fo(g)), b.c(), b.m(i.parentNode, i))
          : b && (b.d(1), (b = null));
    },
    d(g) {
      n && n.d(g),
        g && a(t),
        s && s.d(g),
        g && a(o),
        u && u.d(g),
        g && a(e),
        b && b.d(g),
        g && a(i);
    },
  };
}
function kl(l) {
  let t,
    o,
    e,
    i,
    n = l[7].profile.firstName && po(l),
    s = l[7].profile.lastName && bo(l),
    u = l[7].profile.username && ho(l),
    b = l[7].profile.gender && vo(l);
  return {
    c() {
      n && n.c(),
        (t = E()),
        s && s.c(),
        (o = E()),
        u && u.c(),
        (e = E()),
        b && b.c(),
        (i = j());
    },
    l(g) {
      n && n.l(g),
        (t = M(g)),
        s && s.l(g),
        (o = M(g)),
        u && u.l(g),
        (e = M(g)),
        b && b.l(g),
        (i = j());
    },
    m(g, f) {
      n && n.m(g, f),
        z(g, t, f),
        s && s.m(g, f),
        z(g, o, f),
        u && u.m(g, f),
        z(g, e, f),
        b && b.m(g, f),
        z(g, i, f);
    },
    p(g, f) {
      g[7].profile.firstName
        ? n
          ? n.p(g, f)
          : ((n = po(g)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null)),
        g[7].profile.lastName
          ? s
            ? s.p(g, f)
            : ((s = bo(g)), s.c(), s.m(o.parentNode, o))
          : s && (s.d(1), (s = null)),
        g[7].profile.username
          ? u
            ? u.p(g, f)
            : ((u = ho(g)), u.c(), u.m(e.parentNode, e))
          : u && (u.d(1), (u = null)),
        g[7].profile.gender
          ? b
            ? b.p(g, f)
            : ((b = vo(g)), b.c(), b.m(i.parentNode, i))
          : b && (b.d(1), (b = null));
    },
    d(g) {
      n && n.d(g),
        g && a(t),
        s && s.d(g),
        g && a(o),
        u && u.d(g),
        g && a(e),
        b && b.d(g),
        g && a(i);
    },
  };
}
function Vi(l) {
  let t,
    o = l[7].video.actors,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Yi(vi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].video.actors;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = vi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Yi(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Zi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:actor"), r(t, "content", (o = l[44].profile));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[44].profile) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Pi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:actor:role"), r(t, "content", (o = l[44].role));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[44].role) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Yi(l) {
  let t,
    o,
    e = l[44].profile && Zi(l),
    i = l[44].role && Pi(l);
  return {
    c() {
      e && e.c(), (t = E()), i && i.c(), (o = j());
    },
    l(n) {
      e && e.l(n), (t = M(n)), i && i.l(n), (o = j());
    },
    m(n, s) {
      e && e.m(n, s), z(n, t, s), i && i.m(n, s), z(n, o, s);
    },
    p(n, s) {
      n[44].profile
        ? e
          ? e.p(n, s)
          : ((e = Zi(n)), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null)),
        n[44].role
          ? i
            ? i.p(n, s)
            : ((i = Pi(n)), i.c(), i.m(o.parentNode, o))
          : i && (i.d(1), (i = null));
    },
    d(n) {
      e && e.d(n), n && a(t), i && i.d(n), n && a(o);
    },
  };
}
function Hi(l) {
  let t,
    o = l[7].video.directors,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Gi(hi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].video.directors;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = hi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Gi(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Gi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:director"), r(t, "content", (o = l[41]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[41]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function qi(l) {
  let t,
    o = l[7].video.writers,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Xi(bi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].video.writers;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = bi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Xi(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Xi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:writer"), r(t, "content", (o = l[38]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[38]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Qi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:duration"),
        r(t, "content", (o = l[7].video.duration.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 &&
        o !== (o = e[7].video.duration.toString()) &&
        r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Oi(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:release_date"),
        r(t, "content", (o = l[7].video.releaseDate));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].video.releaseDate) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Fi(l) {
  let t,
    o = l[7].video.tags,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Ji(pi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].video.tags;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = pi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Ji(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Ji(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:tag"), r(t, "content", (o = l[16]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[16]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function $i(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "video:series"),
        r(t, "content", (o = l[7].video.series));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].video.series) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function eo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "article:published_time"),
        r(t, "content", (o = l[7].article.publishedTime));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 &&
        o !== (o = e[7].article.publishedTime) &&
        r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function to(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "article:modified_time"),
        r(t, "content", (o = l[7].article.modifiedTime));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].article.modifiedTime) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function io(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "article:expiration_time"),
        r(t, "content", (o = l[7].article.expirationTime));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 &&
        o !== (o = e[7].article.expirationTime) &&
        r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function oo(l) {
  let t,
    o = l[7].article.authors,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = lo(wi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].article.authors;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = wi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = lo(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function lo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "article:author"), r(t, "content", (o = l[29]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[29]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function ro(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "article:section"),
        r(t, "content", (o = l[7].article.section));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].article.section) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function so(l) {
  let t,
    o = l[7].article.tags,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = no(yi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].article.tags;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = yi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = no(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function no(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "article:tag"), r(t, "content", (o = l[16]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[16]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function ao(l) {
  let t,
    o = l[7].book.authors,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = go(zi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].book.authors;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = zi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = go(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function go(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "book:author"), r(t, "content", (o = l[29]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[29]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function co(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "book:isbn"), r(t, "content", (o = l[7].book.isbn));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].book.isbn) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function mo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "book:release_date"),
        r(t, "content", (o = l[7].book.releaseDate));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].book.releaseDate) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function fo(l) {
  let t,
    o = l[7].book.tags,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = uo(ki(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].book.tags;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = ki(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = uo(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function uo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "book:tag"), r(t, "content", (o = l[16]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[16]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function po(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "profile:first_name"),
        r(t, "content", (o = l[7].profile.firstName));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].profile.firstName) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function bo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "profile:last_name"),
        r(t, "content", (o = l[7].profile.lastName));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].profile.lastName) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function ho(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "profile:username"),
        r(t, "content", (o = l[7].profile.username));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].profile.username) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function vo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "profile:gender"),
        r(t, "content", (o = l[7].profile.gender));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].profile.gender) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function yo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:title"), r(t, "content", (o = l[7].title || l[12]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 4224 && o !== (o = e[7].title || e[12]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function wo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:description"),
        r(t, "content", (o = l[7].description || l[2]));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 132 && o !== (o = e[7].description || e[2]) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function ko(l) {
  let t,
    o = l[7].images,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Ao(di(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].images;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = di(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Ao(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function zo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:image:alt"), r(t, "content", (o = l[24].alt));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[24].alt) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function xo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:image:width"),
        r(t, "content", (o = l[24].width.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[24].width.toString()) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function _o(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:image:height"),
        r(t, "content", (o = l[24].height.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[24].height.toString()) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Ao(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u = l[24].alt && zo(l),
    b = l[24].width && xo(l),
    g = l[24].height && _o(l);
  return {
    c() {
      (t = y("meta")),
        (e = E()),
        u && u.c(),
        (i = E()),
        b && b.c(),
        (n = E()),
        g && g.c(),
        (s = j()),
        this.h();
    },
    l(f) {
      (t = w(f, "META", { property: !0, content: !0 })),
        (e = M(f)),
        u && u.l(f),
        (i = M(f)),
        b && b.l(f),
        (n = M(f)),
        g && g.l(f),
        (s = j()),
        this.h();
    },
    h() {
      r(t, "property", "og:image"), r(t, "content", (o = l[24].url));
    },
    m(f, h) {
      z(f, t, h),
        z(f, e, h),
        u && u.m(f, h),
        z(f, i, h),
        b && b.m(f, h),
        z(f, n, h),
        g && g.m(f, h),
        z(f, s, h);
    },
    p(f, h) {
      h[0] & 128 && o !== (o = f[24].url) && r(t, "content", o),
        f[24].alt
          ? u
            ? u.p(f, h)
            : ((u = zo(f)), u.c(), u.m(i.parentNode, i))
          : u && (u.d(1), (u = null)),
        f[24].width
          ? b
            ? b.p(f, h)
            : ((b = xo(f)), b.c(), b.m(n.parentNode, n))
          : b && (b.d(1), (b = null)),
        f[24].height
          ? g
            ? g.p(f, h)
            : ((g = _o(f)), g.c(), g.m(s.parentNode, s))
          : g && (g.d(1), (g = null));
    },
    d(f) {
      f && a(t),
        f && a(e),
        u && u.d(f),
        f && a(i),
        b && b.d(f),
        f && a(n),
        g && g.d(f),
        f && a(s);
    },
  };
}
function Eo(l) {
  let t,
    o = l[7].videos,
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = jo(ui(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 128) {
        o = i[7].videos;
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = ui(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = jo(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Mo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:video:alt"), r(t, "content", (o = l[21].alt));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[21].alt) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function To(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:video:width"),
        r(t, "content", (o = l[21].width.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[21].width.toString()) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function No(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:video:height"),
        r(t, "content", (o = l[21].height.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[21].height.toString()) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Io(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:video:secure_url"),
        r(t, "content", (o = l[21].secureUrl.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 &&
        o !== (o = e[21].secureUrl.toString()) &&
        r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function So(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:video:type"),
        r(t, "content", (o = l[21].type.toString()));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[21].type.toString()) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function jo(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u,
    b,
    g = l[21].alt && Mo(l),
    f = l[21].width && To(l),
    h = l[21].height && No(l),
    v = l[21].secureUrl && Io(l),
    p = l[21].type && So(l);
  return {
    c() {
      (t = y("meta")),
        (e = E()),
        g && g.c(),
        (i = E()),
        f && f.c(),
        (n = E()),
        h && h.c(),
        (s = E()),
        v && v.c(),
        (u = E()),
        p && p.c(),
        (b = j()),
        this.h();
    },
    l(d) {
      (t = w(d, "META", { property: !0, content: !0 })),
        (e = M(d)),
        g && g.l(d),
        (i = M(d)),
        f && f.l(d),
        (n = M(d)),
        h && h.l(d),
        (s = M(d)),
        v && v.l(d),
        (u = M(d)),
        p && p.l(d),
        (b = j()),
        this.h();
    },
    h() {
      r(t, "property", "og:video"), r(t, "content", (o = l[21].url));
    },
    m(d, c) {
      z(d, t, c),
        z(d, e, c),
        g && g.m(d, c),
        z(d, i, c),
        f && f.m(d, c),
        z(d, n, c),
        h && h.m(d, c),
        z(d, s, c),
        v && v.m(d, c),
        z(d, u, c),
        p && p.m(d, c),
        z(d, b, c);
    },
    p(d, c) {
      c[0] & 128 && o !== (o = d[21].url) && r(t, "content", o),
        d[21].alt
          ? g
            ? g.p(d, c)
            : ((g = Mo(d)), g.c(), g.m(i.parentNode, i))
          : g && (g.d(1), (g = null)),
        d[21].width
          ? f
            ? f.p(d, c)
            : ((f = To(d)), f.c(), f.m(n.parentNode, n))
          : f && (f.d(1), (f = null)),
        d[21].height
          ? h
            ? h.p(d, c)
            : ((h = No(d)), h.c(), h.m(s.parentNode, s))
          : h && (h.d(1), (h = null)),
        d[21].secureUrl
          ? v
            ? v.p(d, c)
            : ((v = Io(d)), v.c(), v.m(u.parentNode, u))
          : v && (v.d(1), (v = null)),
        d[21].type
          ? p
            ? p.p(d, c)
            : ((p = So(d)), p.c(), p.m(b.parentNode, b))
          : p && (p.d(1), (p = null));
    },
    d(d) {
      d && a(t),
        d && a(e),
        g && g.d(d),
        d && a(i),
        f && f.d(d),
        d && a(n),
        h && h.d(d),
        d && a(s),
        v && v.d(d),
        d && a(u),
        p && p.d(d),
        d && a(b);
    },
  };
}
function Co(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:locale"), r(t, "content", (o = l[7].locale));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].locale) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Bo(l) {
  let t, o;
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(e) {
      (t = w(e, "META", { property: !0, content: !0 })), this.h();
    },
    h() {
      r(t, "property", "og:site_name"), r(t, "content", (o = l[7].site_name));
    },
    m(e, i) {
      z(e, t, i);
    },
    p(e, i) {
      i[0] & 128 && o !== (o = e[7].site_name) && r(t, "content", o);
    },
    d(e) {
      e && a(t);
    },
  };
}
function Do(l) {
  let t,
    o = l[9],
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Ro(fi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 512) {
        o = i[9];
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = fi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Ro(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Ro(l) {
  let t,
    o = [l[16]],
    e = {};
  for (let i = 0; i < o.length; i += 1) e = Go(e, o[i]);
  return {
    c() {
      (t = y("meta")), this.h();
    },
    l(i) {
      (t = w(i, "META", {})), this.h();
    },
    h() {
      $t(t, e);
    },
    m(i, n) {
      z(i, t, n);
    },
    p(i, n) {
      $t(t, (e = Ho(o, [n[0] & 512 && i[16]])));
    },
    d(i) {
      i && a(t);
    },
  };
}
function Lo(l) {
  let t,
    o = l[10],
    e = [];
  for (let i = 0; i < o.length; i += 1) e[i] = Wo(mi(l, o, i));
  return {
    c() {
      for (let i = 0; i < e.length; i += 1) e[i].c();
      t = j();
    },
    l(i) {
      for (let n = 0; n < e.length; n += 1) e[n].l(i);
      t = j();
    },
    m(i, n) {
      for (let s = 0; s < e.length; s += 1) e[s].m(i, n);
      z(i, t, n);
    },
    p(i, n) {
      if (n[0] & 1024) {
        o = i[10];
        let s;
        for (s = 0; s < o.length; s += 1) {
          const u = mi(i, o, s);
          e[s]
            ? e[s].p(u, n)
            : ((e[s] = Wo(u)), e[s].c(), e[s].m(t.parentNode, t));
        }
        for (; s < e.length; s += 1) e[s].d(1);
        e.length = o.length;
      }
    },
    d(i) {
      Me(e, i), i && a(t);
    },
  };
}
function Wo(l) {
  let t,
    o = [l[16]],
    e = {};
  for (let i = 0; i < o.length; i += 1) e = Go(e, o[i]);
  return {
    c() {
      (t = y("link")), this.h();
    },
    l(i) {
      (t = w(i, "LINK", {})), this.h();
    },
    h() {
      $t(t, e);
    },
    m(i, n) {
      z(i, t, n);
    },
    p(i, n) {
      $t(t, (e = Ho(o, [n[0] & 1024 && i[16]])));
    },
    d(i) {
      i && a(t);
    },
  };
}
function zl(l) {
  var Z;
  let t, o, e, i, n, s, u, b, g, f, h, v, p, d;
  document.title = t = l[12];
  let c = l[2] && _i(l),
    _ = l[8] && Ai(l),
    x = l[3] && Ei(l),
    I = l[4] && l[4].length > 0 && Mi(l),
    N = l[5] && Ni(l),
    T = l[6] && Li(l),
    C = l[7] && Wi(l),
    B = l[9] && l[9].length > 0 && Do(l),
    L = ((Z = l[10]) == null ? void 0 : Z.length) && Lo(l);
  return {
    c() {
      (o = y("meta")),
        (i = y("meta")),
        c && c.c(),
        (s = j()),
        _ && _.c(),
        (u = j()),
        x && x.c(),
        (b = j()),
        I && I.c(),
        (g = j()),
        N && N.c(),
        (f = j()),
        T && T.c(),
        (h = j()),
        C && C.c(),
        (v = j()),
        B && B.c(),
        (p = j()),
        L && L.c(),
        (d = j()),
        this.h();
    },
    l(A) {
      const S = tl('[data-svelte="svelte-1v2a5gq"]', document.head);
      (o = w(S, "META", { name: !0, content: !0 })),
        (i = w(S, "META", { name: !0, content: !0 })),
        c && c.l(S),
        (s = j()),
        _ && _.l(S),
        (u = j()),
        x && x.l(S),
        (b = j()),
        I && I.l(S),
        (g = j()),
        N && N.l(S),
        (f = j()),
        T && T.l(S),
        (h = j()),
        C && C.l(S),
        (v = j()),
        B && B.l(S),
        (p = j()),
        L && L.l(S),
        (d = j()),
        S.forEach(a),
        this.h();
    },
    h() {
      r(o, "name", "robots"),
        r(
          o,
          "content",
          (e = `${l[0] ? "noindex" : "index"},${l[1] ? "nofollow" : "follow"}${
            l[11]
          }`)
        ),
        r(i, "name", "googlebot"),
        r(
          i,
          "content",
          (n = `${l[0] ? "noindex" : "index"},${l[1] ? "nofollow" : "follow"}${
            l[11]
          }`)
        );
    },
    m(A, S) {
      m(document.head, o),
        m(document.head, i),
        c && c.m(document.head, null),
        m(document.head, s),
        _ && _.m(document.head, null),
        m(document.head, u),
        x && x.m(document.head, null),
        m(document.head, b),
        I && I.m(document.head, null),
        m(document.head, g),
        N && N.m(document.head, null),
        m(document.head, f),
        T && T.m(document.head, null),
        m(document.head, h),
        C && C.m(document.head, null),
        m(document.head, v),
        B && B.m(document.head, null),
        m(document.head, p),
        L && L.m(document.head, null),
        m(document.head, d);
    },
    p(A, S) {
      var V;
      S[0] & 4096 && t !== (t = A[12]) && (document.title = t),
        S[0] & 2051 &&
          e !==
            (e = `${A[0] ? "noindex" : "index"},${
              A[1] ? "nofollow" : "follow"
            }${A[11]}`) &&
          r(o, "content", e),
        S[0] & 2051 &&
          n !==
            (n = `${A[0] ? "noindex" : "index"},${
              A[1] ? "nofollow" : "follow"
            }${A[11]}`) &&
          r(i, "content", n),
        A[2]
          ? c
            ? c.p(A, S)
            : ((c = _i(A)), c.c(), c.m(s.parentNode, s))
          : c && (c.d(1), (c = null)),
        A[8]
          ? _
            ? _.p(A, S)
            : ((_ = Ai(A)), _.c(), _.m(u.parentNode, u))
          : _ && (_.d(1), (_ = null)),
        A[3]
          ? x
            ? x.p(A, S)
            : ((x = Ei(A)), x.c(), x.m(b.parentNode, b))
          : x && (x.d(1), (x = null)),
        A[4] && A[4].length > 0
          ? I
            ? I.p(A, S)
            : ((I = Mi(A)), I.c(), I.m(g.parentNode, g))
          : I && (I.d(1), (I = null)),
        A[5]
          ? N
            ? N.p(A, S)
            : ((N = Ni(A)), N.c(), N.m(f.parentNode, f))
          : N && (N.d(1), (N = null)),
        A[6]
          ? T
            ? T.p(A, S)
            : ((T = Li(A)), T.c(), T.m(h.parentNode, h))
          : T && (T.d(1), (T = null)),
        A[7]
          ? C
            ? C.p(A, S)
            : ((C = Wi(A)), C.c(), C.m(v.parentNode, v))
          : C && (C.d(1), (C = null)),
        A[9] && A[9].length > 0
          ? B
            ? B.p(A, S)
            : ((B = Do(A)), B.c(), B.m(p.parentNode, p))
          : B && (B.d(1), (B = null)),
        (V = A[10]) != null && V.length
          ? L
            ? L.p(A, S)
            : ((L = Lo(A)), L.c(), L.m(d.parentNode, d))
          : L && (L.d(1), (L = null));
    },
    i: Oe,
    o: Oe,
    d(A) {
      a(o),
        a(i),
        c && c.d(A),
        a(s),
        _ && _.d(A),
        a(u),
        x && x.d(A),
        a(b),
        I && I.d(A),
        a(g),
        N && N.d(A),
        a(f),
        T && T.d(A),
        a(h),
        C && C.d(A),
        a(v),
        B && B.d(A),
        a(p),
        L && L.d(A),
        a(d);
    },
  };
}
function xl(l, t, o) {
  let e,
    { title: i = "" } = t,
    { titleTemplate: n = "" } = t,
    { noindex: s = !1 } = t,
    { nofollow: u = !1 } = t,
    { robotsProps: b = void 0 } = t,
    { description: g = void 0 } = t,
    { mobileAlternate: f = void 0 } = t,
    { languageAlternates: h = void 0 } = t,
    { twitter: v = void 0 } = t,
    { facebook: p = void 0 } = t,
    { openGraph: d = void 0 } = t,
    { canonical: c = void 0 } = t,
    { additionalMetaTags: _ = void 0 } = t,
    { additionalLinkTags: x = void 0 } = t,
    I = "";
  if (b) {
    const {
      nosnippet: N,
      maxSnippet: T,
      maxImagePreview: C,
      maxVideoPreview: B,
      noarchive: L,
      noimageindex: Z,
      notranslate: A,
      unavailableAfter: S,
    } = b;
    I = `${N ? ",nosnippet" : ""}${T ? `,max-snippet:${T}` : ""}${
      C ? `,max-image-preview:${C}` : ""
    }${L ? ",noarchive" : ""}${S ? `,unavailable_after:${S}` : ""}${
      Z ? ",noimageindex" : ""
    }${B ? `,max-video-preview:${B}` : ""}${A ? ",notranslate" : ""}`;
  }
  return (
    (l.$$set = (N) => {
      "title" in N && o(13, (i = N.title)),
        "titleTemplate" in N && o(14, (n = N.titleTemplate)),
        "noindex" in N && o(0, (s = N.noindex)),
        "nofollow" in N && o(1, (u = N.nofollow)),
        "robotsProps" in N && o(15, (b = N.robotsProps)),
        "description" in N && o(2, (g = N.description)),
        "mobileAlternate" in N && o(3, (f = N.mobileAlternate)),
        "languageAlternates" in N && o(4, (h = N.languageAlternates)),
        "twitter" in N && o(5, (v = N.twitter)),
        "facebook" in N && o(6, (p = N.facebook)),
        "openGraph" in N && o(7, (d = N.openGraph)),
        "canonical" in N && o(8, (c = N.canonical)),
        "additionalMetaTags" in N && o(9, (_ = N.additionalMetaTags)),
        "additionalLinkTags" in N && o(10, (x = N.additionalLinkTags));
    }),
    (l.$$.update = () => {
      l.$$.dirty[0] & 24576 && o(12, (e = n ? n.replace(/%s/g, i) : i));
    }),
    [s, u, g, f, h, v, p, d, c, _, x, I, e, i, n, b]
  );
}
class _l extends zt {
  constructor(t) {
    super(),
      xt(
        this,
        t,
        xl,
        zl,
        _t,
        {
          title: 13,
          titleTemplate: 14,
          noindex: 0,
          nofollow: 1,
          robotsProps: 15,
          description: 2,
          mobileAlternate: 3,
          languageAlternates: 4,
          twitter: 5,
          facebook: 6,
          openGraph: 7,
          canonical: 8,
          additionalMetaTags: 9,
          additionalLinkTags: 10,
        },
        null,
        [-1, -1]
      );
  }
}
function Al(l) {
  var t = typeof l;
  return l != null && (t == "object" || t == "function");
}
function El(l) {
  var t = Vl.call(l, Yt),
    o = l[Yt];
  try {
    l[Yt] = void 0;
    var e = !0;
  } catch {}
  var i = Zl.call(l);
  return e && (t ? (l[Yt] = o) : delete l[Yt]), i;
}
function Ml(l) {
  return Hl.call(l);
}
function Tl(l) {
  return l == null
    ? l === void 0
      ? Xl
      : ql
    : Ko && Ko in Object(l)
    ? Pl(l)
    : Gl(l);
}
function Nl(l) {
  return l != null && typeof l == "object";
}
function Il(l) {
  return typeof l == "symbol" || (Ol(l) && Ql(l) == Fl);
}
function Sl(l) {
  if (typeof l == "number") return l;
  if (Jl(l)) return Uo;
  if (ei(l)) {
    var t = typeof l.valueOf == "function" ? l.valueOf() : l;
    l = ei(t) ? t + "" : t;
  }
  if (typeof l != "string") return l === 0 ? l : +l;
  l = l.replace($l, "");
  var o = tr.test(l);
  return o || ir.test(l) ? or(l.slice(2), o ? 2 : 8) : er.test(l) ? Uo : +l;
}
function jl(l, t, o) {
  function e(T) {
    var C = f,
      B = h;
    return (f = h = void 0), (_ = T), (p = l.apply(B, C));
  }
  function i(T) {
    return (_ = T), (d = setTimeout(u, t)), x ? e(T) : p;
  }
  function n(T) {
    var C = T - _,
      B = t - (T - c);
    return I ? sr(B, v - C) : B;
  }
  function s(T) {
    var C = T - c,
      B = T - _;
    return c === void 0 || C >= t || C < 0 || (I && B >= v);
  }
  function u() {
    var T = ii();
    if (s(T)) return b(T);
    d = setTimeout(u, n(T));
  }
  function b(T) {
    return (d = void 0), N && f ? e(T) : ((f = h = void 0), p);
  }
  function g() {
    var T = ii(),
      C = s(T);
    if (((f = arguments), (h = this), (c = T), C)) {
      if (d === void 0) return i(c);
      if (I) return (d = setTimeout(u, t)), e(c);
    }
    return d === void 0 && (d = setTimeout(u, t)), p;
  }
  var f,
    h,
    v,
    p,
    d,
    c,
    _ = 0,
    x = !1,
    I = !1,
    N = !0;
  if (typeof l != "function") throw new TypeError(lr);
  return (
    (t = Vo(t) || 0),
    ei(o) &&
      ((x = !!o.leading),
      (v = (I = "maxWait" in o) ? rr(Vo(o.maxWait) || 0, t) : v),
      (N = "trailing" in o ? !!o.trailing : N)),
    (g.cancel = function () {
      d !== void 0 && clearTimeout(d), (_ = 0), (f = c = h = d = void 0);
    }),
    (g.flush = function () {
      return d === void 0 ? p : b(ii());
    }),
    g
  );
}
function Cl(l, t, o) {
  var e = !0,
    i = !0;
  if (typeof l != "function") throw new TypeError(ar);
  return (
    ei(o) &&
      ((e = "leading" in o ? !!o.leading : e),
      (i = "trailing" in o ? !!o.trailing : i)),
    nr(l, t, { leading: e, maxWait: t, trailing: i })
  );
}
function Bl() {
  var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = {
      threshold: 20,
      maxDisplays: 1,
      eventThrottle: 200,
      onExitIntent: function () {},
    };
  return (function () {
    var o = cr({}, t, l),
      e = new Map(),
      i = 0,
      n = function (b) {
        var g = e.get(b),
          f = g.eventName,
          h = g.callback;
        document.removeEventListener(f, h), e.delete(b);
      },
      s = function (b) {
        return b <= o.threshold && i < o.maxDisplays && (i++, !0);
      },
      u = function () {
        e.forEach(function (b, g, f) {
          return n(g);
        });
      };
    return (
      (function (b, g) {
        document.addEventListener(b, g, !1),
          e.set("document:" + b, { eventName: b, callback: g });
      })(
        "mousemove",
        gr(function (b) {
          s(b.clientY) && (o.onExitIntent(), i >= o.maxDisplays && u());
        }, o.eventThrottle)
      ),
      u
    );
  })();
}
var ei = Al,
  Ft =
    typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  Dl = typeof Ft == "object" && Ft && Ft.Object === Object && Ft,
  Rl = Dl,
  Ll = typeof self == "object" && self && self.Object === Object && self,
  Wl = Rl || Ll || Function("return this")(),
  qo = Wl,
  Kl = function () {
    return qo.Date.now();
  },
  ii = Kl,
  Ul = qo.Symbol,
  ti = Ul,
  Xo = Object.prototype,
  Vl = Xo.hasOwnProperty,
  Zl = Xo.toString,
  Yt = ti ? ti.toStringTag : void 0,
  Pl = El,
  Yl = Object.prototype,
  Hl = Yl.toString,
  Gl = Ml,
  ql = "[object Null]",
  Xl = "[object Undefined]",
  Ko = ti ? ti.toStringTag : void 0,
  Ql = Tl,
  Ol = Nl,
  Fl = "[object Symbol]",
  Jl = Il,
  Uo = NaN,
  $l = /^\s+|\s+$/g,
  er = /^[-+]0x[0-9a-f]+$/i,
  tr = /^0b[01]+$/i,
  ir = /^0o[0-7]+$/i,
  or = parseInt,
  Vo = Sl,
  lr = "Expected a function",
  rr = Math.max,
  sr = Math.min,
  nr = jl,
  ar = "Expected a function",
  gr = Cl,
  cr =
    Object.assign ||
    function (l) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var e in o)
          Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e]);
      }
      return l;
    };
function mr(l) {
  let t,
    o,
    e,
    i,
    n,
    s,
    u,
    b,
    g,
    f,
    h,
    v,
    p,
    d,
    c,
    _,
    x,
    I,
    N,
    T,
    C,
    B,
    L,
    Z,
    A,
    S,
    V,
    Q;
  (t = new _l({
    props: {
      title:
        "Ancestors Know Who We Are | Smithsonian National Museum of the American Indian",
      description:
        "Through artistic expression and reflection, the online exhibition Ancestors Know Who We Are explores contemporary realities in the interwoven histories of Black and Indigenous peoples.",
      canonical: "https://americanindian.si.edu/",
      openGraph: {
        url: "https://americanindian.si.edu/",
        title: "Ancestors Know Who We Are",
        description:
          "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art. #AncestorsKnow #NDNsEverywhere",
        images: [
          {
            url: "https://americanindian.si.edu/ancestors-know/images/bolter-hair-stories.png",
            width: 1e3,
            height: 1e3,
            alt: "Ancestors Know Who We Are",
          },
        ],
        site_name:
          "Ancestors Know Who We Are | Smithsonian National Museum of the American Indian",
      },
      twitter: {
        handle: "@SmithsonianNMAI",
        site: "https://americanindian.si.edu/ancestors-know/",
        cardType: "summary_large_image",
        title: "Ancestors Know Who We Are",
        description:
          "The National Museum of the American Indian's online exhibition ignites a conversation on the experiences of Black-Indigenous women through art. @SmithsonianNMAI #AncestorsKnow #NDNsEverywhere",
        image:
          "https://americanindian.si.edu/ancestors-know/images/bolter-hair-stories.png",
        imageAlt: "Ancestors Know Who We Are",
      },
      facebook: { appId: "30954968553" },
    },
  })),
    (C = new ul({}));
  const O = l[1].default,
    G = il(O, l, l[0], null);
  return (
    (A = new pl({})),
    (V = new hl({})),
    {
      c() {
        Ht(t.$$.fragment),
          (o = E()),
          (e = y("div")),
          (i = y("button")),
          (n = K("\xD7")),
          (s = E()),
          (u = y("div")),
          (b = y("p")),
          (g = K("Your opinion matters!")),
          (f = E()),
          (h = y("p")),
          (v = K("Please share your thoughts in a survey.")),
          (p = E()),
          (d = y("a")),
          (c = K(`Yes, I'd like to help.
      `)),
          (_ = y("span")),
          (x = K("keyboard_arrow_right")),
          (I = E()),
          (N = y("div")),
          (T = y("div")),
          Ht(C.$$.fragment),
          (B = E()),
          (L = y("div")),
          G && G.c(),
          (Z = E()),
          Ht(A.$$.fragment),
          (S = E()),
          Ht(V.$$.fragment),
          this.h();
      },
      l(R) {
        Gt(t.$$.fragment, R),
          (o = M(R)),
          (e = w(R, "DIV", { id: !0, class: !0 }));
        var H = k(e);
        i = w(H, "BUTTON", { class: !0, tabindex: !0 });
        var D = k(i);
        (n = U(D, "\xD7")),
          D.forEach(a),
          (s = M(H)),
          (u = w(H, "DIV", { class: !0 }));
        var W = k(u);
        b = w(W, "P", { class: !0 });
        var F = k(b);
        (g = U(F, "Your opinion matters!")),
          F.forEach(a),
          (f = M(W)),
          (h = w(W, "P", { class: !0 }));
        var q = k(h);
        (v = U(q, "Please share your thoughts in a survey.")),
          q.forEach(a),
          (p = M(W)),
          (d = w(W, "A", { class: !0, href: !0 }));
        var re = k(d);
        (c = U(
          re,
          `Yes, I'd like to help.
      `
        )),
          (_ = w(re, "SPAN", { class: !0 }));
        var se = k(_);
        (x = U(se, "keyboard_arrow_right")),
          se.forEach(a),
          re.forEach(a),
          W.forEach(a),
          H.forEach(a),
          (I = M(R)),
          (N = w(R, "DIV", { id: !0, class: !0 }));
        var ie = k(N);
        T = w(ie, "DIV", { class: !0 });
        var J = k(T);
        Gt(C.$$.fragment, J), (B = M(J)), (L = w(J, "DIV", { class: !0 }));
        var fe = k(L);
        G && G.l(fe),
          fe.forEach(a),
          (Z = M(J)),
          Gt(A.$$.fragment, J),
          (S = M(J)),
          Gt(V.$$.fragment, J),
          J.forEach(a),
          ie.forEach(a),
          this.h();
      },
      h() {
        r(i, "class", "modal-close svelte-62rfki"),
          r(i, "tabindex", "0"),
          r(b, "class", "modal-opinion svelte-62rfki"),
          r(h, "class", "modal-thoughts svelte-62rfki"),
          r(_, "class", "material-icons s-Uap-jPRb-uiE svelte-62rfki"),
          r(d, "class", "modal-help-link svelte-62rfki"),
          r(
            d,
            "href",
            "https://survey.alchemer.com/s3/6857323/Ancestors-Know-Who-We-Are"
          ),
          r(u, "class", "modal-content svelte-62rfki"),
          r(e, "id", "modal-wrapper"),
          r(e, "class", "modal svelte-62rfki"),
          r(L, "class", "container"),
          r(T, "class", "wrap--inner svelte-62rfki"),
          r(N, "id", "top"),
          r(N, "class", "wrap--outer svelte-62rfki");
      },
      m(R, H) {
        qt(t, R, H),
          z(R, o, H),
          z(R, e, H),
          m(e, i),
          m(i, n),
          m(e, s),
          m(e, u),
          m(u, b),
          m(b, g),
          m(u, f),
          m(u, h),
          m(h, v),
          m(u, p),
          m(u, d),
          m(d, c),
          m(d, _),
          m(_, x),
          z(R, I, H),
          z(R, N, H),
          m(N, T),
          qt(C, T, null),
          m(T, B),
          m(T, L),
          G && G.m(L, null),
          m(T, Z),
          qt(A, T, null),
          m(T, S),
          qt(V, T, null),
          (Q = !0);
      },
      p(R, [H]) {
        G &&
          G.p &&
          (!Q || H & 1) &&
          ol(G, O, R, R[0], Q ? rl(O, R[0], H, null) : ll(R[0]), null);
      },
      i(R) {
        Q ||
          (wt(t.$$.fragment, R),
          wt(C.$$.fragment, R),
          wt(G, R),
          wt(A.$$.fragment, R),
          wt(V.$$.fragment, R),
          (Q = !0));
      },
      o(R) {
        kt(t.$$.fragment, R),
          kt(C.$$.fragment, R),
          kt(G, R),
          kt(A.$$.fragment, R),
          kt(V.$$.fragment, R),
          (Q = !1);
      },
      d(R) {
        Xt(t, R),
          R && a(o),
          R && a(e),
          R && a(I),
          R && a(N),
          Xt(C),
          G && G.d(R),
          Xt(A),
          Xt(V);
      },
    }
  );
}
function fr(l, t, o) {
  let { $$slots: e = {}, $$scope: i } = t;
  return (
    Yo(() => {
      let n = document.getElementById("modal-wrapper"),
        s = document.getElementsByClassName("modal-close")[0];
      (s.onclick = function () {
        n.style.display = "none";
      }),
        window.addEventListener("click", function (u) {
          u.target == n && (n.style.display = "none");
        }),
        window.addEventListener("keydown", function (u) {
          u.key === "Escape" && (n.style.display = "none");
        }),
        Bl({
          onExitIntent: () => {
            n.style.display = "block";
          },
        });
    }),
    (l.$$set = (n) => {
      "$$scope" in n && o(0, (i = n.$$scope));
    }),
    [i, e]
  );
}
class pr extends zt {
  constructor(t) {
    super(), xt(this, t, fr, mr, _t, {});
  }
}
export { pr as default };
