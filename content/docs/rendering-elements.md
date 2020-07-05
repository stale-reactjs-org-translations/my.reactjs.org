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

Browser DOM element များနှင့်မတူသည်မှာ React element များသည် plain object များဖြစ်ပြီးဖန်တီးရန် လွယ်ကူပါတယ်။ React DOM သည် React element များနှင့်ကိုက်ညီမှန်ကန်စေရန် DOM ကို စနစ်တကျ update လုပ်ပေးပါတယ်။

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

React elements တွေဟာဆိုရင် [immutable](https://en.wikipedia.org/wiki/Immutable_object) ဖြစ်ကြပါတယ်။ ဆိုလိုတာကတော့ သင့်အနေနဲ့ element တစ်ခုကို ဖန်တီးပြီးတိုင်းမှာ သူ့ရဲ့ attributes တွေနဲ့ children node တွေကိုပြောင်းလဲ့လို့မရပါဘူး။

လောလောဆယ် ကျွန်တော်တို့သိ့ထားသလောက်နဲ့ဆိုရင် UI ကို update လုပ်ဖို့ဆိုရင် new element တွေကို တည်ဆောက်ပြီး [`ReactDOM.render()`](/docs/react-dom.html#render) နဲ့ပြန်ပြီး render လုပ်တဲ့နည်းပဲရှိပါတယ်။

အောက်ပါ ticking clock ဥပမာကိုလေ့လာကြည့်ပါ:

`embed:rendering-elements/update-rendered-element.js`

[](codepen://rendering-elements/update-rendered-element)

၎င်း ဥပမာဟာဆိုရင် [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) ရဲ့ callback ကနေတစ်ဆင့် [`ReactDOM.render()`](/docs/react-dom.html#render) ကို UI update လုပ်ရန် စက္ကန့်တိုင်းမှာခေါ်နေရတာပဲဖြစ်ပါတယ်။

>**Note:**
>
>တစ်ကယ်တမ်း React apps တွေရေးတဲ့ အခါမှာတော့ [`ReactDOM.render()`](/docs/react-dom.html#render) ကိုတစ်ခါပဲခေါ် ပြီး အသုံးပြု့ကြပါတယ်။  နောက်လာမည့် sections တွေမှာတော့ ယခုကဲသို့သော code တွေကို ဘယ်လို [stateful components](/docs/state-and-lifecycle.html) တွေဖြစ်အောင်ဖန်တီးသွာမည့်ဆိုတာတွေ့ရှိရမှာဖြစ်ပါတယ်။
>
>သင့်အနေနဲ့ topics တွေကို ကျော်ပြီးမဖတ်ဖို့ အကြံပြု့ပါတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ topics တွေက တစ်ခုကိုတစ်ခု အခြေခံ့ထားကြလို့ဖြစ်ပါတယ်။

## React ဟာဆိုရင်လိုအပ်တဲ့နေရာကိုပဲ update လုပ်ပါတယ် {#react-only-updates-whats-necessary}

React DOM ဟာဆိုရင် element တစ်ခု့ကို update လုပ်တဲ့နေရာမှာ element ရဲ့ အရင်ရှိပြီးသား attributes တွေနဲ့ children elements တွေကို နှိုင်းယှဉ်မှု့တွေလုပ်ပြီး လိုအပ်တဲ့နေရာကိုပဲကွက်ပြီး update လုပ်ပေးပါတယ်။

သင့်အနေနဲ့ ဒါကို [ယခင်ဥပမာ](codepen://rendering-elements/update-rendered-element) မှာ browser tools တွင် inspect ထောက်ပြီးစစ်ဆေးနိုင်ပါတယ်။

![DOM inspector showing granular updates](../images/docs/granular-dom-updates.gif)

စက္ကန့်တိုင်းမှာ UI tree အကုန်လုံးပါတဲ့ element အသစ်ကိုဖန်တီးနေတယ်ဆိုပေမဲ့၊ အပြောင်အလဲရှိတဲ့ text node တစ်ခုတည်းကိုသာ React DOM ကနေရွေးခြယ်ပြီး update လုပ်ပေးပါတယ်။

ကျွန်တော်တို့အတွေ့အကြုံးအရဆိုရင် အချိန်အလိုက် UI ကို ဘယ်လို update လုပ်မယ်ဆိုတာထက်စာရင် ဘယ်အချိန်မျိုးမှာ UI ကဘယ်လိုဖြစ်နေရမယ်ဆိုတာမျိူးက bugs တော်တော်များများကို လျော့ချပေးပါလိမ့်မယ်။
