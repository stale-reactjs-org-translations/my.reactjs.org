---
id: hello-world
title: Hello World
permalink: docs/hello-world.html
prev: cdn-links.html
next: introducing-jsx.html
---

React ရဲ့ အသေးငယ်ဆုံး ဥပမာဟာဆိုရင် အောက်ပါအတိုင်းဖြစ်ပါတယ်။

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

၎င်းဥပမာဟာဆိုရင် "Hello, world!" ဆိုတဲ့စာသားလေးကို heading အနေနဲ့ ဖော်ပြပေးပါတယ်။

[](codepen://hello-world)

Online editor တွင်စမ်းသပ်နိုင်ရန် အထက်ပါ link ကို နှိပ်ပါ။ မိမိကိုယ်တိုင် အပြောင်းအလဲများလုပ်နိုင်ပြီး ဘယ်လို output မျိူးပြန်ပြပေးတယ်ဆိုတာ လွပ်လွပ်လပ်လပ်စမ်းသပ်နိုင်ပါတယ်။ ဆက်လက်ဖော်ပြမည့် အသုံးပြုနည်းလမ်းညွန်မှာလည်း ယခုကဲ့သို့ ပြင်ဆင်စမ်းသပ်နိုင်သော ဥပမာများကို ဖော်ပြပေးသွားမှာ ဖြစ်ပါတယ်။ 


## အသုံးပြုနည်းလမ်းညွန်ကို ဘယ်လိုဖတ်ရမှာလဲ {#how-to-read-this-guide}

ယခုလမ်းညွန် မှာဆိုရင်တော့ React apps တွေမှာ အခြေခံကျတဲ့ elements တွေနဲ့ components တွေကိုဘယ်လိုတည်ဆောက်ကြမယ်ဆိုတာဖော်ပြပေးသွားမှာဖြစ်ပါတယ်။ သင့်အနေနဲ့ ဤအခြေခံကျတဲ့ အကြောင်းအရာတွေကျွမ်းကျင်သွားပြီဆိုရင် ပိုမိုရှုပ်ထွေးတဲ့ apps တွေကို reusable ဖြစ်တဲ့ အသေးငယ်ဆုံးအစိတ်အပိုင်းလေးတွေကနေ စတင်တည်ဆောက်နိုင်မှာဖြစ်ပါတယ်။

>Tip
>
>This guide is designed for people who prefer **learning concepts step by step**. If you prefer to learn by doing, check out our [practical tutorial](/tutorial/tutorial.html). You might find this guide and the tutorial complementary to each other.

This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you're reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.

Every chapter in this guide builds on the knowledge introduced in earlier chapters. **You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar.** For example, [“Introducing JSX”](/docs/introducing-jsx.html) is the next chapter after this one.

## Knowledge Level Assumptions {#knowledge-level-assumptions}

React is a JavaScript library, and so we'll assume you have a basic understanding of the JavaScript language. **If you don't feel very confident, we recommend [going through a JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) to check your knowledge level** and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won't have to feel like you're learning both React and JavaScript at the same time.

>Note
>
>This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven't worked with JavaScript in the last few years, [these three points](https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c) should get you most of the way.


## Let's Get Started! {#lets-get-started}

Keep scrolling down, and you'll find the link to the [next chapter of this guide](/docs/introducing-jsx.html) right before the website footer.


