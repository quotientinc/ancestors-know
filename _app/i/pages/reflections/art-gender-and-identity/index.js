import {
  S as Me,
  i as je,
  s as Re,
  e as g,
  c,
  a as d,
  d as o,
  b as r,
  f as dt,
  g as b,
  X as _e,
  k,
  m as x,
  K as zt,
  L as s,
  M as L,
  a0 as Ie,
  Y as $e,
  Z as Be,
  _ as Ee,
  r as P,
  p as W,
  N as Pe,
  a1 as Ne,
  P as We,
  t as A,
  x as U,
  W as Ve,
  h as q,
  y as K,
  z as T,
  C as Z,
  n as Rt,
} from "../../../chunks/index.js";
import { b as kt } from "../../../chunks/paths.js";
import { S as Y } from "../../../chunks/SlideIn.js";
import { R as He } from "../../../chunks/Reflections.js";
import { S as Ge } from "../../../chunks/SurveyBanner.js";
const Ue = (n) => ({}),
  Se = (n) => ({}),
  Ke = (n) => ({}),
  Ce = (n) => ({});
function De(n) {
  let t;
  return {
    c() {
      (t = g("div")), this.h();
    },
    l(e) {
      (t = c(e, "DIV", { class: !0, style: !0 })), d(t).forEach(o), this.h();
    },
    h() {
      r(t, "class", "overlay svelte-1frzg7s"), dt(t, "opacity", n[7]);
    },
    m(e, a) {
      b(e, t, a);
    },
    p(e, a) {
      a & 128 && dt(t, "opacity", e[7]);
    },
    d(e) {
      e && o(t);
    },
  };
}
function Te(n) {
  let t,
    e,
    a,
    h,
    l,
    f,
    z,
    j,
    $,
    p,
    E,
    m,
    S,
    _,
    C,
    D,
    V,
    I,
    O,
    X,
    B = n[1] && De(n);
  const F = n[21].before,
    M = _e(F, n, n[20], Ce),
    R = n[21].after,
    N = _e(R, n, n[20], Se);
  return {
    c() {
      (t = g("div")),
        (e = g("img")),
        (h = k()),
        (l = g("img")),
        (j = k()),
        B && B.c(),
        ($ = k()),
        (p = g("div")),
        M && M.c(),
        (E = k()),
        (m = g("div")),
        N && N.c(),
        (S = k()),
        (_ = g("div")),
        (C = g("div")),
        (D = k()),
        (V = g("div")),
        this.h();
    },
    l(w) {
      t = c(w, "DIV", { class: !0, style: !0 });
      var y = d(t);
      (e = c(y, "IMG", { src: !0, alt: !0, style: !0, class: !0 })),
        (h = x(y)),
        (l = c(y, "IMG", { src: !0, alt: !0, style: !0, class: !0 })),
        (j = x(y)),
        B && B.l(y),
        ($ = x(y)),
        (p = c(y, "DIV", { class: !0, style: !0 }));
      var v = d(p);
      M && M.l(v),
        v.forEach(o),
        (E = x(y)),
        (m = c(y, "DIV", { class: !0, style: !0 }));
      var G = d(m);
      N && N.l(G),
        G.forEach(o),
        (S = x(y)),
        (_ = c(y, "DIV", { class: !0, style: !0 }));
      var H = d(_);
      (C = c(H, "DIV", { class: !0, tabindex: !0 })),
        d(C).forEach(o),
        (D = x(H)),
        (V = c(H, "DIV", { class: !0, tabindex: !0 })),
        d(V).forEach(o),
        H.forEach(o),
        y.forEach(o),
        this.h();
    },
    h() {
      zt(e.src, (a = `${kt}${n[3]}`)) || r(e, "src", a),
        r(
          e,
          "alt",
          "Photograph of White Buffalo (Cheyenne) one year after his arrival at the Carlisle Indian School"
        ),
        r(e, "style", n[6]),
        r(e, "class", "svelte-1frzg7s"),
        zt(l.src, (f = `${kt}${n[2]}`)) || r(l, "src", f),
        r(
          l,
          "alt",
          "Photograph of White Buffalo (Cheyenne) upon his arrival at the Carlisle Indian School"
        ),
        r(
          l,
          "style",
          (z = n[6] + "clip:rect(0, " + n[8] + "px, " + n[4] + "px, 0);")
        ),
        r(l, "class", "svelte-1frzg7s"),
        r(p, "class", "before-label svelte-1frzg7s"),
        dt(p, "opacity", n[7]),
        r(m, "class", "after-label svelte-1frzg7s"),
        dt(m, "opacity", n[7]),
        r(C, "class", "arrow-left svelte-1frzg7s"),
        r(C, "tabindex", "0"),
        r(V, "class", "arrow-right svelte-1frzg7s"),
        r(V, "tabindex", "0"),
        r(_, "class", "handle svelte-1frzg7s"),
        dt(_, "left", "calc(" + n[0] * 100 + "% - 20px)"),
        r(t, "class", "container svelte-1frzg7s"),
        r(t, "style", n[6]);
    },
    m(w, y) {
      b(w, t, y),
        s(t, e),
        n[24](e),
        s(t, h),
        s(t, l),
        s(t, j),
        B && B.m(t, null),
        s(t, $),
        s(t, p),
        M && M.m(p, null),
        s(t, E),
        s(t, m),
        N && N.m(m, null),
        s(t, S),
        s(t, _),
        s(_, C),
        s(_, D),
        s(_, V),
        (I = !0),
        O ||
          ((X = [
            L(window, "touchmove", n[10]),
            L(window, "touchend", n[12]),
            L(window, "mousemove", n[10]),
            L(window, "mouseup", n[12]),
            L(window, "resize", n[9]),
            L(e, "mousedown", Ie(n[23])),
            L(e, "load", n[9]),
            L(l, "mousedown", Ie(n[22])),
            L(C, "keydown", n[13]),
            L(V, "keydown", n[14]),
            L(t, "touchstart", n[11]),
            L(t, "mousedown", n[11]),
          ]),
          (O = !0));
    },
    p(w, [y]) {
      (!I || (y & 8 && !zt(e.src, (a = `${kt}${w[3]}`)))) && r(e, "src", a),
        (!I || y & 64) && r(e, "style", w[6]),
        (!I || (y & 4 && !zt(l.src, (f = `${kt}${w[2]}`)))) && r(l, "src", f),
        (!I ||
          (y & 336 &&
            z !==
              (z =
                w[6] + "clip:rect(0, " + w[8] + "px, " + w[4] + "px, 0);"))) &&
          r(l, "style", z),
        w[1]
          ? B
            ? B.p(w, y)
            : ((B = De(w)), B.c(), B.m(t, $))
          : B && (B.d(1), (B = null)),
        M &&
          M.p &&
          (!I || y & 1048576) &&
          $e(M, F, w, w[20], I ? Ee(F, w[20], y, Ke) : Be(w[20]), Ce),
        (!I || y & 128) && dt(p, "opacity", w[7]),
        N &&
          N.p &&
          (!I || y & 1048576) &&
          $e(N, R, w, w[20], I ? Ee(R, w[20], y, Ue) : Be(w[20]), Se),
        (!I || y & 128) && dt(m, "opacity", w[7]),
        (!I || y & 1) && dt(_, "left", "calc(" + w[0] * 100 + "% - 20px)"),
        (!I || y & 64) && r(t, "style", w[6]);
    },
    i(w) {
      I || (P(M, w), P(N, w), (I = !0));
    },
    o(w) {
      W(M, w), W(N, w), (I = !1);
    },
    d(w) {
      w && o(t),
        n[24](null),
        B && B.d(),
        M && M.d(w),
        N && N.d(w),
        (O = !1),
        Pe(X);
    },
  };
}
function Ze(n, t, e) {
  let a,
    h,
    l,
    f,
    z,
    { $$slots: j = {}, $$scope: $ } = t,
    p = null,
    E = !1,
    m,
    {
      hideOnSlide: S = !0,
      contain: _ = !1,
      overlay: C = !0,
      offset: D = 0.5,
      before: V = "",
      after: I = "",
    } = t;
  function O(v) {
    e(17, (p = (v.type === "load" ? v.target : m).getBoundingClientRect()));
  }
  function X(v) {
    if (E && p) {
      let G = (v.touches ? v.touches[0].pageX : v.pageX) - p.left;
      (G = G < 0 ? 0 : G > a ? a : G), e(0, (D = G / a));
    }
  }
  function B(v) {
    e(18, (E = !0)), X(v);
  }
  function F() {
    e(18, (E = !1));
  }
  function M() {
    e(18, (E = !0)), e(0, (D = 0.1)), e(18, (E = !1));
  }
  function R() {
    e(18, (E = !0)), e(0, (D = 0.9)), e(18, (E = !1));
  }
  function N(v) {
    Ne.call(this, n, v);
  }
  function w(v) {
    Ne.call(this, n, v);
  }
  function y(v) {
    We[v ? "unshift" : "push"](() => {
      (m = v), e(5, m);
    });
  }
  return (
    (n.$$set = (v) => {
      "hideOnSlide" in v && e(15, (S = v.hideOnSlide)),
        "contain" in v && e(16, (_ = v.contain)),
        "overlay" in v && e(1, (C = v.overlay)),
        "offset" in v && e(0, (D = v.offset)),
        "before" in v && e(2, (V = v.before)),
        "after" in v && e(3, (I = v.after)),
        "$$scope" in v && e(20, ($ = v.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 131072 && e(19, (a = p && p.width)),
        n.$$.dirty & 131072 && e(4, (h = p && p.height)),
        n.$$.dirty & 524289 && e(8, (l = a * D)),
        n.$$.dirty & 294912 && e(7, (f = S && E ? 0 : 1)),
        n.$$.dirty & 589840 &&
          e(
            6,
            (z = _ ? "width:100%;height:100%;" : `width:${a}px;height:${h}px;`)
          );
    }),
    [D, C, V, I, h, m, z, f, l, O, X, B, F, M, R, S, _, p, E, a, $, j, N, w, y]
  );
}
class Le extends Me {
  constructor(t) {
    super(),
      je(this, t, Ze, Te, Re, {
        hideOnSlide: 15,
        contain: 16,
        overlay: 1,
        offset: 0,
        before: 2,
        after: 3,
      });
  }
}
function Ye(n) {
  let t;
  return {
    c() {
      t = A("Art, Gender, and Identity");
    },
    l(e) {
      t = q(e, "Art, Gender, and Identity");
    },
    m(e, a) {
      b(e, t, a);
    },
    d(e) {
      e && o(t);
    },
  };
}
function Oe(n) {
  let t;
  return {
    c() {
      t = A("FARI NZINGA");
    },
    l(e) {
      t = q(e, "FARI NZINGA");
    },
    m(e, a) {
      b(e, t, a);
    },
    d(e) {
      e && o(t);
    },
  };
}
function Xe(n) {
  let t, e;
  return {
    c() {
      (t = g("p")),
        (e =
          A(`In the United States, we often discuss Black and Native peoples as
			separate groups and peripheral to white people. Indeed, as scholar Jack D.
			Forbes (Powhatan and Lenape descent) wrote, \u201CSeeing white people as the
			hub or focus has led to the serious neglect of extremely significant
			social phenomena, including the interactions of [Indigenous] Americans and
			Africans directly with each other.\u201D This narrow framing ignores shared
			histories, erases blended families, keeps relatives isolated and alienated
			from one another, and falls into the trap of centering the white
			experience that Forbes warns against. By claiming a Black-Native identity,
			the artists in this exhibition channel and remix cultural and aesthetic
			traditions, opening up space for creativity, conversation, and connection.`)),
        this.h();
    },
    l(a) {
      t = c(a, "P", { class: !0 });
      var h = d(t);
      (e = q(
        h,
        `In the United States, we often discuss Black and Native peoples as
			separate groups and peripheral to white people. Indeed, as scholar Jack D.
			Forbes (Powhatan and Lenape descent) wrote, \u201CSeeing white people as the
			hub or focus has led to the serious neglect of extremely significant
			social phenomena, including the interactions of [Indigenous] Americans and
			Africans directly with each other.\u201D This narrow framing ignores shared
			histories, erases blended families, keeps relatives isolated and alienated
			from one another, and falls into the trap of centering the white
			experience that Forbes warns against. By claiming a Black-Native identity,
			the artists in this exhibition channel and remix cultural and aesthetic
			traditions, opening up space for creativity, conversation, and connection.`
      )),
        h.forEach(o),
        this.h();
    },
    h() {
      r(t, "class", "svelte-11tnqbu");
    },
    m(a, h) {
      b(a, t, h), s(t, e);
    },
    p: Rt,
    d(a) {
      a && o(t);
    },
  };
}
function Fe(n) {
  let t, e, a, h, l, f, z, j;
  return {
    c() {
      (t = g("p")),
        (e = A("In ")),
        (a = g("em")),
        (h = A("Ancestors Know Who We Are")),
        (l = A(`, we see how Native feminist art and
			theory engages with Black feminist art and theory. For example, as a
			Black-Native artist and citizen of the Prairie Band Potawatomi, Monica
			Rickert-Bolter expands the concept of Indigeneity by marrying Potawatomi
			and Akan (Ghanaian) textile designs, motifs, and symbols in her digital
			work `)),
        (f = g("em")),
        (z = A("Hair Stories")),
        (j = A(`. Moreover, the subject of the work\u2014the artist\u2019s
			relationship to her hair\u2014is one that is loaded with cultural, racial, and
			gendered meanings for both Native Americans and African Americans. Hair
			plays a significant role in the cultures of both peoples. It\u2019s not only a
			form of individual self-expression but also a signifier of group identity
			and, for some Native people, a source of spiritual connection.`)),
        this.h();
    },
    l($) {
      t = c($, "P", { class: !0 });
      var p = d(t);
      (e = q(p, "In ")), (a = c(p, "EM", {}));
      var E = d(a);
      (h = q(E, "Ancestors Know Who We Are")),
        E.forEach(o),
        (l = q(
          p,
          `, we see how Native feminist art and
			theory engages with Black feminist art and theory. For example, as a
			Black-Native artist and citizen of the Prairie Band Potawatomi, Monica
			Rickert-Bolter expands the concept of Indigeneity by marrying Potawatomi
			and Akan (Ghanaian) textile designs, motifs, and symbols in her digital
			work `
        )),
        (f = c(p, "EM", {}));
      var m = d(f);
      (z = q(m, "Hair Stories")),
        m.forEach(o),
        (j = q(
          p,
          `. Moreover, the subject of the work\u2014the artist\u2019s
			relationship to her hair\u2014is one that is loaded with cultural, racial, and
			gendered meanings for both Native Americans and African Americans. Hair
			plays a significant role in the cultures of both peoples. It\u2019s not only a
			form of individual self-expression but also a signifier of group identity
			and, for some Native people, a source of spiritual connection.`
        )),
        p.forEach(o),
        this.h();
    },
    h() {
      r(t, "class", "svelte-11tnqbu");
    },
    m($, p) {
      b($, t, p), s(t, e), s(t, a), s(a, h), s(t, l), s(t, f), s(f, z), s(t, j);
    },
    p: Rt,
    d($) {
      $ && o(t);
    },
  };
}
function Qe(n) {
  let t;
  return {
    c() {
      t =
        A(`Historically, schools, businesses, and state and local governments have
			used hair to police and control both Indigenous and Black peoples. During
			the 19th century, Indian boarding schools cut students\u2019 hair short in an
			attempt to remove their tribal identities and assimilate them into white
			society. Attempts to control African Americans by restricting displays of
			hair began even earlier with the passing of tignon laws in Louisiana in
			the 1700s, which required Creole women of color to cover their hair.`);
    },
    l(e) {
      t = q(
        e,
        `Historically, schools, businesses, and state and local governments have
			used hair to police and control both Indigenous and Black peoples. During
			the 19th century, Indian boarding schools cut students\u2019 hair short in an
			attempt to remove their tribal identities and assimilate them into white
			society. Attempts to control African Americans by restricting displays of
			hair began even earlier with the passing of tignon laws in Louisiana in
			the 1700s, which required Creole women of color to cover their hair.`
      );
    },
    m(e, a) {
      b(e, t, a);
    },
    d(e) {
      e && o(t);
    },
  };
}
function Je(n) {
  let t;
  return {
    c() {
      t =
        A(`The policing of Native and Black hair continues today by schools and
			private businesses. At present, only eight US states have passed the
			Create a Respectful and Open Workplace for Natural Hair (CROWN) Act, first
			introduced in 2019, which protects people of color in the workplace and at
			school from racial discrimination based on hairstyles. In addition, there
			are cases of violence centered around hair. Recently in Oklahoma, students
			pinned down a Cheyenne and Arapaho fifth grader and cut off his long hair.`);
    },
    l(e) {
      t = q(
        e,
        `The policing of Native and Black hair continues today by schools and
			private businesses. At present, only eight US states have passed the
			Create a Respectful and Open Workplace for Natural Hair (CROWN) Act, first
			introduced in 2019, which protects people of color in the workplace and at
			school from racial discrimination based on hairstyles. In addition, there
			are cases of violence centered around hair. Recently in Oklahoma, students
			pinned down a Cheyenne and Arapaho fifth grader and cut off his long hair.`
      );
    },
    m(e, a) {
      b(e, t, a);
    },
    d(e) {
      e && o(t);
    },
  };
}
function ti(n) {
  let t, e, a, h;
  return {
    c() {
      (t = A("Artist Moira Pernambuco\u2019s series ")),
        (e = g("em")),
        (a = A("Black Boy Beautiful, Black Boy Vulnerable")),
        (h =
          A(` also envisions a joining of Native feminist theory and Black feminist theory.
			Black-Native feminist artists recognize that \u201Cpatriarchy knows no gender,\u201D
			as feminist theorist and cultural critic bell hooks has famously stated. In
			other words, issues of gender oppression are not solely limited to women, genderqueer,
			and nonbinary people. Pernambuco\u2019s photographs of two Black youths offer commentary
			on how Black men are treated and their futures limited by the judicial and
			prison systems. The black-and-white images are sparse and their settings nondescript,
			though they seem to reference institutions such as prisons and jails\u2014sites
			of extreme gendered and sexual violence, oppression, and exploitation. This
			series offers a visual convergence of Native feminist theory and Black feminist
			theory in the struggle for abolition, which demands an end to surveillance,
			policing, and systems of punishment and instead advocates for massive investments
			in the communities most harmed by these forms of violence.`));
    },
    l(l) {
      (t = q(l, "Artist Moira Pernambuco\u2019s series ")),
        (e = c(l, "EM", {}));
      var f = d(e);
      (a = q(f, "Black Boy Beautiful, Black Boy Vulnerable")),
        f.forEach(o),
        (h = q(
          l,
          ` also envisions a joining of Native feminist theory and Black feminist theory.
			Black-Native feminist artists recognize that \u201Cpatriarchy knows no gender,\u201D
			as feminist theorist and cultural critic bell hooks has famously stated. In
			other words, issues of gender oppression are not solely limited to women, genderqueer,
			and nonbinary people. Pernambuco\u2019s photographs of two Black youths offer commentary
			on how Black men are treated and their futures limited by the judicial and
			prison systems. The black-and-white images are sparse and their settings nondescript,
			though they seem to reference institutions such as prisons and jails\u2014sites
			of extreme gendered and sexual violence, oppression, and exploitation. This
			series offers a visual convergence of Native feminist theory and Black feminist
			theory in the struggle for abolition, which demands an end to surveillance,
			policing, and systems of punishment and instead advocates for massive investments
			in the communities most harmed by these forms of violence.`
        ));
    },
    m(l, f) {
      b(l, t, f), b(l, e, f), s(e, a), b(l, h, f);
    },
    p: Rt,
    d(l) {
      l && o(t), l && o(e), l && o(h);
    },
  };
}
function ei(n) {
  let t;
  return {
    c() {
      t =
        A(`Ancestors know who we are is a meaningful affirmation of kinship and
			belonging for those of us whose lineages are hard to trace in the written
			records, for those of us who no longer speak our mother tongues or know
			the names of our ancestors, because ancestors know who we are.`);
    },
    l(e) {
      t = q(
        e,
        `Ancestors know who we are is a meaningful affirmation of kinship and
			belonging for those of us whose lineages are hard to trace in the written
			records, for those of us who no longer speak our mother tongues or know
			the names of our ancestors, because ancestors know who we are.`
      );
    },
    m(e, a) {
      b(e, t, a);
    },
    d(e) {
      e && o(t);
    },
  };
}
function ii(n) {
  let t, e, a, h, l, f, z, j, $, p, E;
  return {
    c() {
      (t = g("p")),
        (e = A("Ancestors know.")),
        (a = k()),
        (h = g("p")),
        (l =
          A(`Ancestors know who we are is a rallying cry for unity, for collective
			thought and action.`)),
        (f = k()),
        (z = g("p")),
        (j = A("Ancestors know.")),
        ($ = k()),
        (p = g("p")),
        (E =
          A(`Ancestors know that the time is always now, and they are watching to see
			what we do with all that we\u2019ve inherited.`)),
        this.h();
    },
    l(m) {
      t = c(m, "P", { class: !0 });
      var S = d(t);
      (e = q(S, "Ancestors know.")),
        S.forEach(o),
        (a = x(m)),
        (h = c(m, "P", { class: !0 }));
      var _ = d(h);
      (l = q(
        _,
        `Ancestors know who we are is a rallying cry for unity, for collective
			thought and action.`
      )),
        _.forEach(o),
        (f = x(m)),
        (z = c(m, "P", { class: !0 }));
      var C = d(z);
      (j = q(C, "Ancestors know.")),
        C.forEach(o),
        ($ = x(m)),
        (p = c(m, "P", { class: !0 }));
      var D = d(p);
      (E = q(
        D,
        `Ancestors know that the time is always now, and they are watching to see
			what we do with all that we\u2019ve inherited.`
      )),
        D.forEach(o),
        this.h();
    },
    h() {
      r(t, "class", "svelte-11tnqbu"),
        r(h, "class", "svelte-11tnqbu"),
        r(z, "class", "svelte-11tnqbu"),
        r(p, "class", "svelte-11tnqbu");
    },
    m(m, S) {
      b(m, t, S),
        s(t, e),
        b(m, a, S),
        b(m, h, S),
        s(h, l),
        b(m, f, S),
        b(m, z, S),
        s(z, j),
        b(m, $, S),
        b(m, p, S),
        s(p, E);
    },
    p: Rt,
    d(m) {
      m && o(t),
        m && o(a),
        m && o(h),
        m && o(f),
        m && o(z),
        m && o($),
        m && o(p);
    },
  };
}
function oi(n) {
  let t, e, a, h, l;
  return {
    c() {
      (t = g("img")),
        (a = k()),
        (h = g("div")),
        (l = A("Photo by Aja Grant")),
        this.h();
    },
    l(f) {
      (t = c(f, "IMG", { src: !0, alt: !0, class: !0 })),
        (a = x(f)),
        (h = c(f, "DIV", { class: !0 }));
      var z = d(h);
      (l = q(z, "Photo by Aja Grant")), z.forEach(o), this.h();
    },
    h() {
      zt(t.src, (e = kt + "/images/fari-nzinga.webp")) || r(t, "src", e),
        r(t, "alt", "portrait of Fari Nzinga"),
        r(t, "class", "svelte-11tnqbu"),
        r(h, "class", "reflect-credit svelte-11tnqbu");
    },
    m(f, z) {
      b(f, t, z), b(f, a, z), b(f, h, z), s(h, l);
    },
    p: Rt,
    d(f) {
      f && o(t), f && o(a), f && o(h);
    },
  };
}
function ni(n) {
  let t,
    e,
    a,
    h,
    l,
    f,
    z,
    j,
    $,
    p,
    E,
    m,
    S,
    _,
    C,
    D,
    V,
    I,
    O,
    X,
    B,
    F,
    M,
    R,
    N,
    w,
    y,
    v,
    G,
    H,
    ot,
    ft,
    pe,
    Jt,
    xt,
    te,
    ee,
    At,
    ie,
    Pt,
    Q,
    qt,
    nt,
    oe,
    _t,
    st,
    Wt,
    J,
    rt,
    ut,
    be,
    ne,
    It,
    se,
    re,
    at,
    ae,
    Et,
    le,
    ge,
    Vt,
    tt,
    $t,
    lt,
    ce,
    gt,
    Ht,
    et,
    ct,
    me,
    pt,
    Bt,
    de,
    fe,
    Gt,
    mt,
    bt,
    Ut,
    ht,
    Kt;
  return (
    (z = new Y({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [Ye] },
        $$scope: { ctx: n },
      },
    })),
    (p = new Y({
      props: {
        from: "center",
        delay: "400ms",
        $$slots: { default: [Oe] },
        $$scope: { ctx: n },
      },
    })),
    (m = new Y({
      props: {
        from: "center",
        delay: "600ms",
        $$slots: { default: [Xe] },
        $$scope: { ctx: n },
      },
    })),
    (D = new Le({
      props: {
        before: "/images/AKWWA_18.webp",
        after: "/images/AKWWA_19.webp",
        contain: !1,
      },
    })),
    (N = new Y({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [Fe] },
        $$scope: { ctx: n },
      },
    })),
    (v = new Y({
      props: {
        from: "center",
        delay: "400ms",
        $$slots: { default: [Qe] },
        $$scope: { ctx: n },
      },
    })),
    (nt = new Y({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [Je] },
        $$scope: { ctx: n },
      },
    })),
    (st = new Y({
      props: {
        from: "center",
        delay: "400ms",
        $$slots: { default: [ti] },
        $$scope: { ctx: n },
      },
    })),
    (lt = new Y({
      props: {
        from: "center",
        delay: "200ms",
        $$slots: { default: [ei] },
        $$scope: { ctx: n },
      },
    })),
    (gt = new Y({
      props: {
        from: "center",
        delay: "400ms",
        $$slots: { default: [ii] },
        $$scope: { ctx: n },
      },
    })),
    (ct = new Y({
      props: {
        from: "center",
        delay: "500ms",
        $$slots: { default: [oi] },
        $$scope: { ctx: n },
      },
    })),
    (bt = new He({
      props: { active: "/reflections/art-gender-and-identity" },
    })),
    (ht = new Ge({})),
    {
      c() {
        (t = k()),
          (e = g("div")),
          (a = A("REFLECTIONS")),
          (h = k()),
          (l = g("div")),
          (f = g("h1")),
          U(z.$$.fragment),
          (j = k()),
          ($ = g("h2")),
          U(p.$$.fragment),
          (E = k()),
          U(m.$$.fragment),
          (S = k()),
          (_ = g("div")),
          (C = g("div")),
          U(D.$$.fragment),
          (V = k()),
          (I = g("div")),
          (O = A("Archives and Special Collections, Dickinson College")),
          (X = k()),
          (B = g("p")),
          (F =
            A(`Before-and-after photographs of White Buffalo (Cheyenne) upon his arrival at
		the Carlisle Indian School and one year later. Cutting students\u2019 hair and
		forcing them to abandon their tribal clothing were two ways the federal
		government controlled Indigenous identity and forced young Native people to
		assimilate into white society.`)),
          (M = k()),
          (R = g("div")),
          U(N.$$.fragment),
          (w = k()),
          (y = g("p")),
          U(v.$$.fragment),
          (G = k()),
          (H = g("div")),
          (ot = g("div")),
          (ft = g("img")),
          (Jt = k()),
          (xt = g("div")),
          (te = A(
            "Smithsonian National Museum of African American History and Culture"
          )),
          (ee = k()),
          (At = g("p")),
          (ie =
            A(`Sarah Ann Crowley wearing a white tignon, 1884. Crowley was born into
		slavery around 1820 in Maryland and then sold to other slaveowners in
		Louisiana and Georgia. After emancipation, she moved north to Massachusetts.`)),
          (Pt = k()),
          (Q = g("div")),
          (qt = g("p")),
          U(nt.$$.fragment),
          (oe = k()),
          (_t = g("p")),
          U(st.$$.fragment),
          (Wt = k()),
          (J = g("div")),
          (rt = g("div")),
          (ut = g("img")),
          (ne = k()),
          (It = g("div")),
          (se = A("Yale Center for British Art, Paul Mellon Collection")),
          (re = k()),
          (at = g("p")),
          (ae = A("Agostino Brunias (ca. 1730\u20131796), ")),
          (Et = g("em")),
          (le = A(
            "A West Indian Flower Girl and Two Other Free Women of Color"
          )),
          (ge =
            A(`, ca. 1769. An 18th-century painting depicting Creole women and women of
		African descent with their hair wrapped in fabric coverings called tignons.`)),
          (Vt = k()),
          (tt = g("div")),
          ($t = g("p")),
          U(lt.$$.fragment),
          (ce = k()),
          U(gt.$$.fragment),
          (Ht = k()),
          (et = g("div")),
          U(ct.$$.fragment),
          (me = k()),
          (pt = g("p")),
          (Bt = g("span")),
          (de = A("FARI NZINGA")),
          (fe = A(` is the teacher-scholar in residence at the bell hooks
		Institute at Berea College in Kentucky. She graduated with a BA from Oberlin
		College in 2005 and went on to earn both her MA and PhD in cultural anthropology
		from Duke University. Nzinga uses object-based learning to engage in conversations
		about contemporary culture and politics and to hone observation and critical
		analysis. Her research on Black cultural production, visual and expressive culture,
		and sexual politics relies on hooks\u2019s analysis of power and forms of domination.
		Hooks\u2019s emphasis on love, care, and the construction of homeplaces are values
		that animate Nzinga\u2019s pedagogy, research, and curation.`)),
          (Gt = k()),
          (mt = g("div")),
          U(bt.$$.fragment),
          (Ut = k()),
          U(ht.$$.fragment),
          this.h();
      },
      l(i) {
        Ve('[data-svelte="svelte-uomkck"]', document.head).forEach(o),
          (t = x(i)),
          (e = c(i, "DIV", { class: !0, id: !0 }));
        var Nt = d(e);
        (a = q(Nt, "REFLECTIONS")),
          Nt.forEach(o),
          (h = x(i)),
          (l = c(i, "DIV", { class: !0 }));
        var it = d(l);
        f = c(it, "H1", { class: !0 });
        var St = d(f);
        K(z.$$.fragment, St),
          St.forEach(o),
          (j = x(it)),
          ($ = c(it, "H2", { class: !0 }));
        var Ct = d($);
        K(p.$$.fragment, Ct),
          Ct.forEach(o),
          (E = x(it)),
          K(m.$$.fragment, it),
          it.forEach(o),
          (S = x(i)),
          (_ = c(i, "DIV", { class: !0 }));
        var vt = d(_);
        C = c(vt, "DIV", { class: !0 });
        var wt = d(C);
        K(D.$$.fragment, wt), (V = x(wt)), (I = c(wt, "DIV", { class: !0 }));
        var Dt = d(I);
        (O = q(Dt, "Archives and Special Collections, Dickinson College")),
          Dt.forEach(o),
          wt.forEach(o),
          (X = x(vt)),
          (B = c(vt, "P", { class: !0 }));
        var Mt = d(B);
        (F = q(
          Mt,
          `Before-and-after photographs of White Buffalo (Cheyenne) upon his arrival at
		the Carlisle Indian School and one year later. Cutting students\u2019 hair and
		forcing them to abandon their tribal clothing were two ways the federal
		government controlled Indigenous identity and forced young Native people to
		assimilate into white society.`
        )),
          Mt.forEach(o),
          vt.forEach(o),
          (M = x(i)),
          (R = c(i, "DIV", { class: !0 }));
        var yt = d(R);
        K(N.$$.fragment, yt), (w = x(yt)), (y = c(yt, "P", { class: !0 }));
        var jt = d(y);
        K(v.$$.fragment, jt),
          jt.forEach(o),
          yt.forEach(o),
          (G = x(i)),
          (H = c(i, "DIV", { class: !0 }));
        var Tt = d(H);
        ot = c(Tt, "DIV", { class: !0 });
        var Zt = d(ot);
        (ft = c(Zt, "IMG", { src: !0, alt: !0, class: !0 })),
          (Jt = x(Zt)),
          (xt = c(Zt, "DIV", { class: !0 }));
        var he = d(xt);
        (te = q(
          he,
          "Smithsonian National Museum of African American History and Culture"
        )),
          he.forEach(o),
          Zt.forEach(o),
          (ee = x(Tt)),
          (At = c(Tt, "P", { class: !0 }));
        var ve = d(At);
        (ie = q(
          ve,
          `Sarah Ann Crowley wearing a white tignon, 1884. Crowley was born into
		slavery around 1820 in Maryland and then sold to other slaveowners in
		Louisiana and Georgia. After emancipation, she moved north to Massachusetts.`
        )),
          ve.forEach(o),
          Tt.forEach(o),
          (Pt = x(i)),
          (Q = c(i, "DIV", { class: !0 }));
        var Lt = d(Q);
        qt = c(Lt, "P", { class: !0 });
        var we = d(qt);
        K(nt.$$.fragment, we),
          we.forEach(o),
          (oe = x(Lt)),
          (_t = c(Lt, "P", { class: !0 }));
        var ye = d(_t);
        K(st.$$.fragment, ye),
          ye.forEach(o),
          Lt.forEach(o),
          (Wt = x(i)),
          (J = c(i, "DIV", { class: !0 }));
        var Yt = d(J);
        rt = c(Yt, "DIV", { class: !0 });
        var Ot = d(rt);
        (ut = c(Ot, "IMG", { src: !0, alt: !0, class: !0 })),
          (ne = x(Ot)),
          (It = c(Ot, "DIV", { class: !0 }));
        var ze = d(It);
        (se = q(ze, "Yale Center for British Art, Paul Mellon Collection")),
          ze.forEach(o),
          Ot.forEach(o),
          (re = x(Yt)),
          (at = c(Yt, "P", { class: !0 }));
        var Xt = d(at);
        (ae = q(Xt, "Agostino Brunias (ca. 1730\u20131796), ")),
          (Et = c(Xt, "EM", {}));
        var ke = d(Et);
        (le = q(
          ke,
          "A West Indian Flower Girl and Two Other Free Women of Color"
        )),
          ke.forEach(o),
          (ge = q(
            Xt,
            `, ca. 1769. An 18th-century painting depicting Creole women and women of
		African descent with their hair wrapped in fabric coverings called tignons.`
          )),
          Xt.forEach(o),
          Yt.forEach(o),
          (Vt = x(i)),
          (tt = c(i, "DIV", { class: !0 }));
        var Ft = d(tt);
        $t = c(Ft, "P", { class: !0 });
        var xe = d($t);
        K(lt.$$.fragment, xe),
          xe.forEach(o),
          (ce = x(Ft)),
          K(gt.$$.fragment, Ft),
          Ft.forEach(o),
          (Ht = x(i)),
          (et = c(i, "DIV", { class: !0 }));
        var Qt = d(et);
        K(ct.$$.fragment, Qt), (me = x(Qt)), (pt = c(Qt, "P", { class: !0 }));
        var ue = d(pt);
        Bt = c(ue, "SPAN", { class: !0 });
        var Ae = d(Bt);
        (de = q(Ae, "FARI NZINGA")),
          Ae.forEach(o),
          (fe = q(
            ue,
            ` is the teacher-scholar in residence at the bell hooks
		Institute at Berea College in Kentucky. She graduated with a BA from Oberlin
		College in 2005 and went on to earn both her MA and PhD in cultural anthropology
		from Duke University. Nzinga uses object-based learning to engage in conversations
		about contemporary culture and politics and to hone observation and critical
		analysis. Her research on Black cultural production, visual and expressive culture,
		and sexual politics relies on hooks\u2019s analysis of power and forms of domination.
		Hooks\u2019s emphasis on love, care, and the construction of homeplaces are values
		that animate Nzinga\u2019s pedagogy, research, and curation.`
          )),
          ue.forEach(o),
          Qt.forEach(o),
          (Gt = x(i)),
          (mt = c(i, "DIV", { id: !0, class: !0 }));
        var qe = d(mt);
        K(bt.$$.fragment, qe),
          qe.forEach(o),
          (Ut = x(i)),
          K(ht.$$.fragment, i),
          this.h();
      },
      h() {
        (document.title = "Essay Art Gender and Identity"),
          r(e, "class", "reflect-heading svelte-11tnqbu"),
          r(e, "id", "title"),
          r(f, "class", "svelte-11tnqbu"),
          r($, "class", "svelte-11tnqbu"),
          r(l, "class", "reflect-title svelte-11tnqbu"),
          r(I, "class", "reflect-credit svelte-11tnqbu"),
          r(C, "class", "svelte-11tnqbu"),
          r(B, "class", "reflect-img-caption svelte-11tnqbu"),
          r(_, "class", "reflect-img svelte-11tnqbu"),
          r(y, "class", "svelte-11tnqbu"),
          r(R, "class", "reflect-text svelte-11tnqbu"),
          zt(ft.src, (pe = kt + "/images/AKWWA_20_a.webp")) || r(ft, "src", pe),
          r(
            ft,
            "alt",
            "Sepia-tone of a woman wearing a white wrapped head covering and a dark dress"
          ),
          r(ft, "class", "svelte-11tnqbu"),
          r(xt, "class", "reflect-credit svelte-11tnqbu"),
          r(ot, "class", "svelte-11tnqbu"),
          r(At, "class", "reflect-img-caption svelte-11tnqbu"),
          r(H, "class", "reflect-img svelte-11tnqbu"),
          r(qt, "class", "svelte-11tnqbu"),
          r(_t, "class", "svelte-11tnqbu"),
          r(Q, "class", "reflect-text svelte-11tnqbu"),
          zt(ut.src, (be = kt + "/images/AKWWA_21.webp")) || r(ut, "src", be),
          r(
            ut,
            "alt",
            "Color painting of three women in long dresses and head coverings, standing together outdoors on a street ringed by buildings"
          ),
          r(ut, "class", "svelte-11tnqbu"),
          r(It, "class", "reflect-credit svelte-11tnqbu"),
          r(rt, "class", "svelte-11tnqbu"),
          r(at, "class", "reflect-img-caption svelte-11tnqbu"),
          r(J, "class", "reflect-img svelte-11tnqbu"),
          r($t, "class", "svelte-11tnqbu"),
          r(tt, "class", "reflect-text svelte-11tnqbu"),
          r(Bt, "class", "svelte-11tnqbu"),
          r(pt, "class", "reflect-img-caption svelte-11tnqbu"),
          r(et, "class", "reflect-author-img svelte-11tnqbu"),
          r(mt, "id", "reflections-nav"),
          r(mt, "class", "svelte-11tnqbu");
      },
      m(i, u) {
        b(i, t, u),
          b(i, e, u),
          s(e, a),
          b(i, h, u),
          b(i, l, u),
          s(l, f),
          T(z, f, null),
          s(l, j),
          s(l, $),
          T(p, $, null),
          s(l, E),
          T(m, l, null),
          b(i, S, u),
          b(i, _, u),
          s(_, C),
          T(D, C, null),
          s(C, V),
          s(C, I),
          s(I, O),
          s(_, X),
          s(_, B),
          s(B, F),
          b(i, M, u),
          b(i, R, u),
          T(N, R, null),
          s(R, w),
          s(R, y),
          T(v, y, null),
          b(i, G, u),
          b(i, H, u),
          s(H, ot),
          s(ot, ft),
          s(ot, Jt),
          s(ot, xt),
          s(xt, te),
          s(H, ee),
          s(H, At),
          s(At, ie),
          b(i, Pt, u),
          b(i, Q, u),
          s(Q, qt),
          T(nt, qt, null),
          s(Q, oe),
          s(Q, _t),
          T(st, _t, null),
          b(i, Wt, u),
          b(i, J, u),
          s(J, rt),
          s(rt, ut),
          s(rt, ne),
          s(rt, It),
          s(It, se),
          s(J, re),
          s(J, at),
          s(at, ae),
          s(at, Et),
          s(Et, le),
          s(at, ge),
          b(i, Vt, u),
          b(i, tt, u),
          s(tt, $t),
          T(lt, $t, null),
          s(tt, ce),
          T(gt, tt, null),
          b(i, Ht, u),
          b(i, et, u),
          T(ct, et, null),
          s(et, me),
          s(et, pt),
          s(pt, Bt),
          s(Bt, de),
          s(pt, fe),
          b(i, Gt, u),
          b(i, mt, u),
          T(bt, mt, null),
          b(i, Ut, u),
          T(ht, i, u),
          (Kt = !0);
      },
      p(i, [u]) {
        const Nt = {};
        u & 1 && (Nt.$$scope = { dirty: u, ctx: i }), z.$set(Nt);
        const it = {};
        u & 1 && (it.$$scope = { dirty: u, ctx: i }), p.$set(it);
        const St = {};
        u & 1 && (St.$$scope = { dirty: u, ctx: i }), m.$set(St);
        const Ct = {};
        u & 1 && (Ct.$$scope = { dirty: u, ctx: i }), N.$set(Ct);
        const vt = {};
        u & 1 && (vt.$$scope = { dirty: u, ctx: i }), v.$set(vt);
        const wt = {};
        u & 1 && (wt.$$scope = { dirty: u, ctx: i }), nt.$set(wt);
        const Dt = {};
        u & 1 && (Dt.$$scope = { dirty: u, ctx: i }), st.$set(Dt);
        const Mt = {};
        u & 1 && (Mt.$$scope = { dirty: u, ctx: i }), lt.$set(Mt);
        const yt = {};
        u & 1 && (yt.$$scope = { dirty: u, ctx: i }), gt.$set(yt);
        const jt = {};
        u & 1 && (jt.$$scope = { dirty: u, ctx: i }), ct.$set(jt);
      },
      i(i) {
        Kt ||
          (P(z.$$.fragment, i),
          P(p.$$.fragment, i),
          P(m.$$.fragment, i),
          P(D.$$.fragment, i),
          P(N.$$.fragment, i),
          P(v.$$.fragment, i),
          P(nt.$$.fragment, i),
          P(st.$$.fragment, i),
          P(lt.$$.fragment, i),
          P(gt.$$.fragment, i),
          P(ct.$$.fragment, i),
          P(bt.$$.fragment, i),
          P(ht.$$.fragment, i),
          (Kt = !0));
      },
      o(i) {
        W(z.$$.fragment, i),
          W(p.$$.fragment, i),
          W(m.$$.fragment, i),
          W(D.$$.fragment, i),
          W(N.$$.fragment, i),
          W(v.$$.fragment, i),
          W(nt.$$.fragment, i),
          W(st.$$.fragment, i),
          W(lt.$$.fragment, i),
          W(gt.$$.fragment, i),
          W(ct.$$.fragment, i),
          W(bt.$$.fragment, i),
          W(ht.$$.fragment, i),
          (Kt = !1);
      },
      d(i) {
        i && o(t),
          i && o(e),
          i && o(h),
          i && o(l),
          Z(z),
          Z(p),
          Z(m),
          i && o(S),
          i && o(_),
          Z(D),
          i && o(M),
          i && o(R),
          Z(N),
          Z(v),
          i && o(G),
          i && o(H),
          i && o(Pt),
          i && o(Q),
          Z(nt),
          Z(st),
          i && o(Wt),
          i && o(J),
          i && o(Vt),
          i && o(tt),
          Z(lt),
          Z(gt),
          i && o(Ht),
          i && o(et),
          Z(ct),
          i && o(Gt),
          i && o(mt),
          Z(bt),
          i && o(Ut),
          Z(ht, i);
      },
    }
  );
}
class ci extends Me {
  constructor(t) {
    super(), je(this, t, null, ni, Re, {});
  }
}
export { ci as default };

// Before-After Image slider
class BeforeAfter {
  constructor(enteryObject) {
    const beforeAfterContainer = document.querySelector(enteryObject.id);
    const before = beforeAfterContainer.querySelector(".bal-before");
    const beforeText = beforeAfterContainer.querySelector(
      ".bal-beforePosition"
    );
    const afterText = beforeAfterContainer.querySelector(".bal-afterPosition");
    const handle = beforeAfterContainer.querySelector(".bal-handle");
    var widthChange = 0;

    beforeAfterContainer
      .querySelector(".bal-before-inset")
      .setAttribute(
        "style",
        "width: " + beforeAfterContainer.offsetWidth + "px;"
      );
    window.onresize = function () {
      beforeAfterContainer
        .querySelector(".bal-before-inset")
        .setAttribute(
          "style",
          "width: " + beforeAfterContainer.offsetWidth + "px;"
        );
    };
    before.setAttribute("style", "width: 50%;");
    handle.setAttribute("style", "left: 50%;");

    //touch screen event listener
    beforeAfterContainer.addEventListener("touchstart", (e) => {
      beforeAfterContainer.addEventListener("touchmove", (e2) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        let currentPoint = e2.changedTouches[0].clientX;

        let startOfDiv = beforeAfterContainer.offsetLeft;

        let modifiedCurrentPoint = currentPoint - startOfDiv;

        if (
          modifiedCurrentPoint > 10 &&
          modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10
        ) {
          let newWidth = (modifiedCurrentPoint * 100) / containerWidth;

          before.setAttribute("style", "width:" + newWidth + "%;");
          afterText.setAttribute("style", "z-index: 1;");
          handle.setAttribute("style", "left:" + newWidth + "%;");
        }
      });
    });

    //mouse move event listener
    beforeAfterContainer.addEventListener("mousemove", (e) => {
      let containerWidth = beforeAfterContainer.offsetWidth;
      widthChange = e.offsetX;
      let newWidth = (widthChange * 100) / containerWidth;

      if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
        before.setAttribute("style", "width:" + newWidth + "%;");
        afterText.setAttribute("style", "z-index:" + "1;");
        handle.setAttribute("style", "left:" + newWidth + "%;");
      }
    });
  }
}
