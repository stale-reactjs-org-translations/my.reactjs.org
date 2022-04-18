---
id: hello-world
title: Hello World
permalink: docs/hello-world.html
prev: cdn-links.html
next: introducing-jsx.html
---

React ရဲ့ အသေးငယ်ဆုံး ဥပမာဟာဆိုရင် အောက်ပါအတိုင်းဖြစ်ပါတယ်။

```jsx
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<h1>Hello, world!</h1>);
```

၎င်းဥပမာဟာဆိုရင် "Hello, world!" ဆိုတဲ့စာသားလေးကို heading အနေနဲ့ ဖော်ပြပေးပါတယ်။

**[Try it on CodePen](https://codepen.io/gaearon/pen/rrpgNB?editors=1010)**

Online editor တွင်စမ်းသပ်နိုင်ရန် အထက်ပါ link ကို နှိပ်ပါ။ မိမိကိုယ်တိုင် အပြောင်းအလဲများလုပ်နိုင်ပြီး ဘယ်လို output မျိူးပြန်ပြပေးတယ်ဆိုတာ လွပ်လွပ်လပ်လပ်စမ်းသပ်နိုင်ပါတယ်။ ဆက်လက်ဖော်ပြမည့် အသုံးပြုနည်းလမ်းညွန်မှာလည်း ယခုကဲ့သို့ ပြင်ဆင်စမ်းသပ်နိုင်သော ဥပမာများကို ဖော်ပြပေးသွားမှာ ဖြစ်ပါတယ်။ 


## အသုံးပြုနည်းလမ်းညွန်ကို ဘယ်လိုဖတ်ရမှာလဲ {#how-to-read-this-guide}

ယခုလမ်းညွန် မှာဆိုရင်တော့ React apps တွေမှာ အခြေခံကျတဲ့ elements တွေနဲ့ components တွေကိုဘယ်လိုတည်ဆောက်ကြမယ်ဆိုတာဖော်ပြပေးသွားမှာဖြစ်ပါတယ်။ သင့်အနေနဲ့ ဤအခြေခံကျတဲ့ အကြောင်းအရာတွေကျွမ်းကျင်သွားပြီဆိုရင် ပိုမိုရှုပ်ထွေးတဲ့ apps တွေကို reusable ဖြစ်တဲ့ အသေးငယ်ဆုံးအစိတ်အပိုင်းလေးတွေကနေ စတင်တည်ဆောက်နိုင်မှာဖြစ်ပါတယ်။

>အကြံပြုချက်
>
>ယခုလမ်းညွန်ဟာဆိုရင်ဖြင့် အခြေခံမှတစ်ဆင့် သိ့သင့်သိထိုက်တာတွေကို တစ်ဆင့်ချင်းလေ့လာလိုသူများအတွက် ရည်ရွယ်ပါတယ်။ အကယ်၍သင့်အနေနဲ့ လက်တွေ့လုပ်ဆောင်ရင်းလေ့လာရတာကို နှစ်သက်တယ်ဆိုရင်ဖြင့် [practical tutorial](/tutorial/tutorial.html) ကိုဖတ်ရှုလေ့လာသင့်ပါတယ်။ သင့်အနေ့နဲ့ ယခုလမ်းညွန်နဲ့ tutorial ဟာဆက်စပ်နေတယ်ဆိုတာကိုတွေ့မြင်ရပါလိမ့်မည်။

ယခု chapter ဟာဆိုရင် React မှာသိ့သင့်သိ့ထိုက်တဲ့ အချက်တွေကိုဖော်ပြပေးမယ့် ပထမဆုံး chapter ဖြစ်ပါတယ်။ Chapters အားလုံးကို သိလိုတယ်ဆိုရင်တော့ ညာဘက် navigation sidebar မှာကြည့်ရှုနိုင်ပါတယ်။ သင့်အနေနဲ့ mobile အသုံးပြု့ပြီးဖတ်ရှုနေတယ်ဆိုရင်တော့ ညာဖက်အောက်ဖက်မှာ ရှိတဲ့ button လေးကိုနှိပ်ပြီး ကြည့်ရှုနိုင်မှာ ဖြစ်ပါတယ်။

Chapters အသီးသီးဟာဆိုရင် ဖတ်ရှုပြီးသော အရင် chapter ပေါ်မှာမူတည်ပြီး နောက် chapter ကိုတည်ဆောက်ပေးထားတာဖြစ်ပါတယ်။ **ဒါကြောင့်သင့်အနေနဲ့ “Main Concepts” လိုခေါ်တဲ့ ယခု လမ်းညွန်ကို ညာဖက် sidebar မှာတစ်ဆင့်ချင်းဖတ်သွားသင့်ပါတယ်။** ဥပမာ [“Introducing JSX”](/docs/introducing-jsx.html) ဟာဆိုရင် နောက်ဆက်ပြီးလာမည့် chapter ဖြစ်ပါတယ်။

## ယခုလမ်းညွန်အတွက် သင့်ရဲ့ Knowledge Level ယူဆချက် {#knowledge-level-assumptions}

React ဟာဆိုရင် JavaScript library တစ်ခုဖြစ်ပါတယ်။ဒါကြောင့်သင့်အနေနဲ့ JavaScript language နဲ့ပတ်သက်ပြီး အခြေခံရှိမယ်လို့ယူဆပါတယ်။ အကယ်၍သင့်အနေနဲ့ ကိုယ်တိုင်ယုံကြည်မှု့ မသေခြာရင် [going through a JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) ကိုသွားရောက်ပြီးမိမိကိုယ်ကိုယ် စစ်ဆေးနိုင်ပါတယ်။ အဒီကိုသွားရောက်လေ့လာတာဟာဆိုရင် အချိန်အားဖြင့် ၃၀ မိနစ်နဲ့ ၁နာရီကြားမှာကြာနိုင်တယ်ဆိုပေမဲ့ ရလဒ်တစ်ခုအနေနဲ့ကတော့ ကိုယ်တိုင် React and JavaScript ကို တစ်ပြိုင်နက် လေ့လာနေရတယ်ဆိုတဲ့စိတ်မျိုးခံစားရမှာ မဟုတ်တော့ပါဘူး။

>မှတ်သားရန်
>
<<<<<<< HEAD
>ယခုလမ်းညွန်ဟာဆိုရင် အသစ်ဖြစ်တဲ့ JavaScript syntax တွေကို ဥပမာအများစုမှာသုံးထားတာဖြစ်ပါတယ်။ သင့်အနေနဲ့ လွန်ခဲ့တဲ့နှစ်အနည်ငယ်ကစလို့ JavaScript ကိုအကျွမ်းတဝင်မရှိဘူးဆိုရင်  [ဤအချက်သုံးချက်](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c) ကိုစလေ့လာခြင်းဟာနည်းလမ်းမှန်ကန်စေမှာပါ။
=======
>This guide occasionally uses some newer JavaScript syntax in the examples. If you haven't worked with JavaScript in the last few years, [these three points](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c) should get you most of the way.
>>>>>>> 07dbd86ca421c262157af673a2584a40fd3b2450


## ကဲစပြီးလေ့လာကြပါဆို့! {#lets-get-started}

အောက်ဖက်ကို ဆက်ပြီး scroll ဆွဲသွားလိုက်ပါ။ website အောက်ခြေမရောက်ခင်မှာ [နောက်လာမည့် chapter](/docs/introducing-jsx.html) ရဲ့ link ကိုတွေ့မြင်ရမှာဖြစ်ပါတယ်။


