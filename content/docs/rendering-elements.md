---
id: rendering-elements
title: Rendering Elements
permalink: docs/rendering-elements.html
redirect_from:
  - "docs/displaying-data.html"
prev: introducing-jsx.html
next: components-and-props.html
---

Elements တွေဟာဆို React apps တွေမှာ အခြေခံအကျဆုံးနဲ့ အသေးငယ်ဆုံး အစိတ်အပိုင်းလေးတွေပဲဖြစ်ပါတယ်။

Screen ပေါ်မှာ သင်မြင်ချင်တဲ့ အရာတွေကို element တစ်ခုနဲ့ဖော်ပြပေးလို့ရပါတယ်။

```js
const element = <h1>Hello, world</h1>;
```

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

>**Note:**
>
>ဒီနေရာမှာ သင့်အနေနဲ့ elements တွေကို လူအများသိ့ကြတဲ့ "components" တွေနဲ့အမြင်မှားနိုင်ပါတယ်။ Components တွေအကြောင်းကို နောက်လာမည့် [next section](/docs/components-and-props.html) တွင်ဖော်ပြသွားမှာဖြစ်ပါတယ်။ တစ်ကယ်တော့ Elements တွေကို ပေါင်းစပ်ပီး components တွေကိုဖန်တီးထားတာဖြစ်ပါတယ်။ ပြီးတော့ သင့်အနေနဲ့ ယခု section ကိုကျော်မဖတ်ဖို့တိုက်တွန်းပါရစေ။

## Rendering an Element into the DOM {#rendering-an-element-into-the-dom}

HTML ဖိုင်တစ်ခုမှာ `<div>` တစ်ခုရှိနေတယ်ဆိုကြပါစို့။

```html
<div id="root"></div>
```

ဒါကို "root" (မူရင်း) DOM node ခေါ်ဆိုပါမည်။ ဘာဖြစ်လို့လဲဆိုတော့ အဲဒီ node ထဲမှာရှိတဲ့ တစ်ခြား node တွေအားလုံးကို React DOM က ကြိူးကိုင်စေခိုင်းတော့မှာမို့ဖြစ်ပါတယ်။

React နည်းပညာတစ်မျိုးတည်း အသုံးပြု့ထားတဲ့ application အများစုမှာတော့ root DOM node ကတစ်ခုပဲရှိတက်ပါတယ်။ အကယ်၍ သင့်အနေနဲ့ရှိနေပြီးသား application ထဲကို React ကိုထည့်သွင်းအသုံးပြု့တာဆိုရင်တော့ root DOM node တွေအများကြီးကို သင်စိတ်ကြိုက် ဖန်တီးနိုင်ပါတယ်။

React element တစ်ခု့ကို root DOM node မှာ ထည့်သွင်းဖော်ပြဖို့ဆိုရင်၊ ဖော်ပြလိုသော element နှင့် root DOM node နှစ်ခုလုံးကို [`ReactDOM.render()`](/docs/react-dom.html#render) မှာ parameter အနေနဲ့ထည့်ပေးရမှာဖြစ်ပါတယ်။

`embed:rendering-elements/render-an-element.js`

[](codepen://rendering-elements/render-an-element)

အထက်ပါ ဥပမာဟာဆိုရင် page မှာ "Hello, world" ဆိုတဲ့စာသားကိုဖော်ပြပေးပါတယ်။

## Updating the Rendered Element {#updating-the-rendered-element}

React elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object). Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to [`ReactDOM.render()`](/docs/react-dom.html#render).

Consider this ticking clock example:

`embed:rendering-elements/update-rendered-element.js`

[](codepen://rendering-elements/update-rendered-element)

It calls [`ReactDOM.render()`](/docs/react-dom.html#render) every second from a [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) callback.

>**Note:**
>
>In practice, most React apps only call [`ReactDOM.render()`](/docs/react-dom.html#render) once. In the next sections we will learn how such code gets encapsulated into [stateful components](/docs/state-and-lifecycle.html).
>
>We recommend that you don't skip topics because they build on each other.

## React Only Updates What's Necessary {#react-only-updates-whats-necessary}

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

You can verify by inspecting the [last example](codepen://rendering-elements/update-rendered-element) with the browser tools:

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.
